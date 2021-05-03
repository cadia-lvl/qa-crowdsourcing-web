import React from "react";
import { Outer, RoutineOuter, Bottom } from "./styles";
import { PlayButton } from "../../../components";

const RoutinesChecklist = () => {
	return (
		<Outer>
			<h1 className="italic">Velkomin/n á spurningar.is</h1>
			<p>
				Okkur langar að kenna þér að spila leikinn. Smelltu á áfram
				og við sýnum þér hvernig spurningaleikurinn virkar. Í
				seinasta skrefinu sérð þú upplýsingar um hvaða vinninga þú
				getur unnið og hvernig þú getur unnið þér inn möguleika á
				ennþá flottari vinningum.
			</p>
			<RoutineOuter>
				<span>Sámur Leiðarvísir</span>
				<i className="fas fa-check-circle" />
			</RoutineOuter>
			<RoutineOuter>
				<span>Dæmi: spurningar</span>
				<i className="fas fa-check-circle" />
			</RoutineOuter>
			<RoutineOuter>
				<span>Dæmi: svar í efnisgrein</span>
				<i className="far fa-circle" />
			</RoutineOuter>
			<RoutineOuter>
				<span>Dæmi: Leita að svari</span>
				<i className="far fa-circle" />
			</RoutineOuter>
			<RoutineOuter>
				<span>Vinningar sem þú getur unnið</span>
				<i className="far fa-circle" />
			</RoutineOuter>
			<Bottom>
				<span>
					<i className="fas fa-door-open" /> Útskrá
				</span>
				<PlayButton>Áfram</PlayButton>
			</Bottom>
		</Outer>
	);
};

export default RoutinesChecklist;
