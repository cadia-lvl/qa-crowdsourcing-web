import React from "react";
import { Outer, RoutineOuter, Bottom } from "./styles";
import { PlayButton } from "../../../components";
import { IProps } from "./interface";

const RoutinesChecklist = ({ todos }: IProps) => (
	<Outer>
		<h1 className="italic">Velkomin/n á spurningar.is</h1>
		<p>
			Okkur langar að kenna þér að spila leikinn. Smelltu á áfram og
			við sýnum þér hvernig spurningaleikurinn virkar. Í seinasta
			skrefinu sérð þú upplýsingar um hvaða vinninga þú getur unnið
			og hvernig þú getur unnið þér inn möguleika á ennþá flottari
			vinningum.
		</p>
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
			<span>
				<i className="fas fa-door-open" /> Útskrá
			</span>
			<PlayButton>Áfram</PlayButton>
		</Bottom>
	</Outer>
);

export default RoutinesChecklist;
