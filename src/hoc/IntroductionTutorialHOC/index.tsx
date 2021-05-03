import React, { useState, useEffect, useMemo } from "react";
import { IProps, IRoutineStep, RoutineKeys } from "./interface";
import RoutinesChecklist from "./RoutinesChecklist";
import SubRoutineViewer from "./SubRoutineViewer";
import routines from "./routines";
import { Outer } from "./styles";

export const IntroductionTutorialHOC = ({ children }: IProps) => {
	const [routineKey, setRoutineKey] = useState<RoutineKeys | undefined>(
		"guide"
	);

	const [subRoutineList, setSubRoutineList] = useState<IRoutineStep[]>(
		[]
	);

	if (false) return <React.Fragment>{children}</React.Fragment>;
	return (
		<Outer>
			{subRoutineList.length > 0 ? (
				<SubRoutineViewer
					items={subRoutineList}
					onComplete={() => setSubRoutineList([])}
				/>
			) : (
				<RoutinesChecklist
					todos={routines.map((item) => ({
						...item,
						completed: item.key === routineKey,
					}))}
				/>
			)}
		</Outer>
	);
};
