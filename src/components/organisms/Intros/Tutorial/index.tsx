import React, { useState, useMemo } from "react";
import { IRoutineStep, RoutineKeys, IntroductionState } from "./interface";
import RoutinesChecklist from "./RoutinesChecklist";
import SubRoutineViewer from "./SubRoutineViewer";
import routines from "./routines";
import { Outer, Inner, TopBanner } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../../../reducers";
import { completeTutorial } from "../../../../actions";
import { IIntroductionWrap, IntroductionStep } from "../interface";
import store from "../../../../store";
import * as Intros from "../styles";

export const Tutorial = (_props: IntroductionStep) => {
	// this is the key of the current routine
	const [routineKey, setRoutineKey] = useState<RoutineKeys | undefined>("guide");

	// list of subroutines (pages in a tutorial)
	const [subRoutineList, setSubRoutineList] = useState<IRoutineStep[]>([]);

	// use dispatch
	const dispatch = useDispatch();

	// destructures REDUX state
	const { _id: userId } = useSelector((state: StoreState) => state.auth);

	// a cache key for the intro tutorial state in local storage
	const CACHE_KEY = `${userId}:INTRODUCTION:TUTORIAL`;

	// handes creating empty state object
	const generateEmptyState = (): IntroductionState => ({
		guide: [],
		questions: [],
		answers: [],
		search: [],
		prizes: [],
	});

	// either retrieves stored state or returns empy state obj
	const getCachedState = (): IntroductionState => {
		try {
			const stringifiedState = localStorage.getItem(CACHE_KEY);
			if (!stringifiedState) throw new Error("Nothing found");
			return JSON.parse(stringifiedState);
		} catch (e) {
			// catch to handle both if nothing is found
			// and the possibility of parsing errors;
			return generateEmptyState();
		}
	};

	// handles adding key to state storage and updates localstorage
	const handleFinishSubroutine = (key: string) => {
		if (!routineKey) throw new Error("Routine key not set");
		const state = getCachedState();
		if (!state[routineKey].includes(key)) state[routineKey].push(key);
		localStorage.setItem(CACHE_KEY, JSON.stringify(state));
	};

	const allCompleted = (routineKey: RoutineKeys, steps: IRoutineStep[]) => {
		const state = getCachedState();
		return steps
			.map((step) => step.key)
			.every((key) => state[routineKey].includes(key));
	};

	// get the next list of subroutines to open
	const nextItem = useMemo(() => {
		if (subRoutineList.length > 0) return undefined;
		const list = routines.find((item) => !allCompleted(item.key, item.steps));
		if (!list) return undefined;
		return list;
	}, [subRoutineList.length]);

	const handleNext = () => {
		if (!!nextItem) {
			setSubRoutineList(nextItem.steps);
			setRoutineKey(nextItem.key);
		}
	};

	const hasCompletedSomething = () => {
		const state = getCachedState();
		return Object.keys(state).some(
			(key) =>
				state[key as RoutineKeys] !== undefined && state[key as RoutineKeys].length > 0
		);
	};

	return (
		<Intros.IntroBaseOuter className="border">
			<Outer>
				<Inner>
					<TopBanner>
						<span onClick={() => dispatch(completeTutorial())}>
							<i className="fas fa-times" />
							Sleppa kennslu
						</span>
					</TopBanner>
					{subRoutineList.length > 0 ? (
						<SubRoutineViewer
							items={subRoutineList}
							onComplete={() => setSubRoutineList([])}
							onCompleteStep={handleFinishSubroutine}
						/>
					) : (
						<RoutinesChecklist
							hideText={hasCompletedSomething()}
							todos={routines.map((item) => ({
								...item,
								completed: allCompleted(item.key, item.steps),
							}))}
							onNext={handleNext}
							completed={!nextItem}
						/>
					)}
				</Inner>
			</Outer>
		</Intros.IntroBaseOuter>
	);
};

const Wrapped: IIntroductionWrap = {
	Component: Tutorial,
	id: "tutorial",
	shouldShow: () => !store.getState().auth.hasCompletedTutorial,
};

export default Wrapped;
