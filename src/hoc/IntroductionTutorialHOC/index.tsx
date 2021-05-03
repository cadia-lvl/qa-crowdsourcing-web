import React, { useState } from "react";
import { IProps, IRoutineStep, RoutineKeys } from "./interface";
import RoutinesChecklist from "./RoutinesChecklist";
import routines from "./routines";

export const IntroductionTutorialHOC = ({ children }: IProps) => {
	const [routineKey, setRoutineKey] = useState<RoutineKeys | undefined>(
		undefined
	);

	const [subRoutineList, setSubRoutineList] = useState<IRoutineStep[]>(
		[]
	);

	if (false) return <React.Fragment>{children}</React.Fragment>;
	return (
		<div>
			{subRoutineList.length === 0 ? (
				<RoutinesChecklist
					todos={routines.map((item) => ({
						...item,
						completed: false,
					}))}
				/>
			) : null}
		</div>
	);
};
