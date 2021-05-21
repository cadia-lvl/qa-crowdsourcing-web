import React from "react";
import { IIntroductionWrap, IntroductionStep } from "../interface";
import * as Styles from "./styles";
import * as Intros from "../styles";
import * as Statics from "../../../../static";

const KEY = "INTRO:DEVICESELECT:USEBROWSER";
const FINISHED_TOKEN = "[OK]";

const DeviceSelect = ({ onComplete }: IntroductionStep) => {
	const handlecomplete = () => {
		localStorage.setItem(KEY, FINISHED_TOKEN);
		onComplete?.();
	};

	return (
		<Intros.IntroBaseOuter className="border">
			<Styles.Outer>
				<h1 className="italic">Hvernig viltu spila?</h1>
				<Styles.PlayStoreBadge
					src={Statics.Images.PLAY_STORE_BADGE}
					onClick={() => window.alert("Link missing")}
				/>
				<Styles.IOSBadge
					src={Statics.Images.IOS_APP_STORE_BADGE}
					onClick={() => window.alert("Link missing")}
				/>
				<Styles.WebButton onClick={handlecomplete}>
					<i className="fas fa-desktop" />
					Spila á vefnum
				</Styles.WebButton>
			</Styles.Outer>
		</Intros.IntroBaseOuter>
	);
};

const Wrapped: IIntroductionWrap = {
	Component: DeviceSelect,
	id: "device-select",
	shouldShow: (id) => !localStorage.getItem(KEY),
};

export default Wrapped;
