import React from "react";
import * as Styles from "./styles";
import { BaseButton, PlayButton, Atoms } from "../../../../";
import { IProps } from "./interface";
import { useDispatch, useSelector } from "react-redux";
import * as Utils from "./utils";
import { completeTutorial } from "../../../../../actions";
import { StoreState } from "../../../../../reducers";

const RoutinesChecklist = ({
	todos,
	onNext,
	completed,
	hideText,
}: IProps) => {
	const { isTutorialCompletedLoading } = useSelector(
		(state: StoreState) => state.auth
	);
	const dispatch = useDispatch();
	const accessor = completed ? "completed" : "notCompleted";
	return (
		<Styles.Outer>
			<h1 className="italic">{Utils.TEXT[accessor].title}</h1>
			{completed || !hideText ? (
				<p>{Utils.TEXT[accessor].paragraph}</p>
			) : null}

			{/* Maps todo items and applies the
		    relevant icon */}
			{todos.map((item) => (
				<Styles.RoutineOuter key={item.key}>
					<span>{item.label}</span>
					{item.completed ? (
						<i className="fas fa-check-circle" />
					) : (
						<i className="far fa-circle" />
					)}
				</Styles.RoutineOuter>
			))}
			<Styles.Bottom>
				{completed ? (
					isTutorialCompletedLoading ? (
						<Atoms.Loaders.Flex size={40} />
					) : (
						<BaseButton
							type="highlight"
							label={Utils.TEXT[accessor].button}
							onClick={() => dispatch(completeTutorial())}
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
			</Styles.Bottom>
		</Styles.Outer>
	);
};

export default RoutinesChecklist;
