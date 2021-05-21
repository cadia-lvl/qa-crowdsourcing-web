import React, { useEffect, useState } from "react";
import * as Layout from "../../../layout";
import { IconDecorator } from "../../../hoc";
import introSteps from "./intros";
import { IIntroductionWrap } from "./interface";
/**
 * This is a component that displays in sequences other components
 * that are a part of an introduction process for
 * the user. This includes asking user to play online
 * or through mobile app, signing in og signing up,
 * doing tutorial and so on.
 *
 * This component accepts a list of Component wrapped
 * by an object (interface) which helps this component
 * know which step of the tutorial should be shwon (if any)
 */
const Intro = () => {
	const ICON_COUNT = 4;

	const [intros, setIntros] = useState<IIntroductionWrap[]>([]);

	useEffect(() => {
		setIntros(introSteps);
	}, []);

	const handleUpdate = () => setIntros([...intros]);

	const Found = intros.find((entry) => entry.shouldShow(entry.id));
	if (!Found) return null;
	return (
		<Layout.BlurBackground>
			<IconDecorator iconCount={ICON_COUNT}>
				<Found.Component onComplete={handleUpdate} />
			</IconDecorator>
		</Layout.BlurBackground>
	);
};

export default Intro;
