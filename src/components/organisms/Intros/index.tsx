import React from "react";
import * as Layout from "../../../layout";
import { IconDecorator } from "../../../hoc";
import intros from "./intros";

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

	const Found = intros.find((entry) => entry.shouldShow(entry.id));
	if (!Found) return null;
	return (
		<Layout.BlurBackground>
			<IconDecorator iconCount={ICON_COUNT}>
				<Found.Component />
			</IconDecorator>
		</Layout.BlurBackground>
	);
};

export default Intro;
