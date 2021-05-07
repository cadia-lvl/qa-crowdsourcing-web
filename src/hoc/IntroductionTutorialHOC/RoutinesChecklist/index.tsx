import React from "react";
import { Outer, RoutineOuter, Bottom } from "./styles";
import { BaseButton, PlayButton, Atoms } from "../../../components";
import { IProps } from "./interface";
import { IconDecorator } from "../../../hoc";
import { useDispatch, useSelector } from "react-redux";
import * as Utils from "./utils";
import { completeTutorial } from "../../../actions";
import { StoreState } from "../../../reducers";

const ITEM_COUNT = 4;
const RoutinesChecklist = ({ todos, onNext, completed }: IProps) => {
	const { isTutorialCompletedLoading } = useSelector(
		(state: StoreState) => state.auth
	);
	const dispatch = useDispatch();
	const accessor = completed ? "completed" : "notCompleted";
	return (
		<IconDecorator iconCount={ITEM_COUNT}>
			<Outer>
				<h1 className="italic">{Utils.TEXT[accessor].title}</h1>
				<p>{Utils.TEXT[accessor].paragraph}</p>
				{/* Maps todo items and applies the
		    relevant icon */}
				{todos.map((item) => (
					<RoutineOuter>
						<span>{item.label}</span>
						{item.completed ? (
							<i className="fas fa-check-circle" />
						) : (
							<i className="far fa-circle" />
						)}
					</RoutineOuter>
				))}
				<Bottom>
					{completed ? (
						isTutorialCompletedLoading ? (
							<Atoms.Loaders.Flex size={40} />
						) : (
							<BaseButton
								type="highlight"
								label={Utils.TEXT[accessor].button}
								onClick={() =>
									dispatch(completeTutorial())
								}
							/>
						)
					) : (
						<React.Fragment>
							<span>
								<i className="fas fa-door-open" /> Útskrá
							</span>
							<PlayButton onClick={onNext}>Áfram</PlayButton>
						</React.Fragment>
					)}
				</Bottom>
			</Outer>
		</IconDecorator>
	);
};

export default RoutinesChecklist;
