import React, { useState, useEffect } from "react";
import { IProps } from "./interface";
import { FlexLoader, PageDots, PlayButton } from "../../../components";
import { Outer, Content, Bottom, DotsContainer } from "./styles";

const SubRoutineViewer = ({
	items,
	onComplete,
	onCompleteStep,
}: IProps) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isLoading, setIsLoading] = useState(true);

	// handles clearing loading after timeout
	useEffect(() => {
		const LOAD_TIMEOUT = 750;
		if (isLoading) {
			const t = setTimeout(() => setIsLoading(false), LOAD_TIMEOUT);
			return () => clearTimeout(t);
		}
	}, [isLoading]);

	// handles the process of emitting onComplete event
	useEffect(() => {
		const LOAD_TIMEOUT = 750;
		if (currentIndex >= items.length) {
			const t = setTimeout(onComplete, LOAD_TIMEOUT);
			return () => clearTimeout(t);
		}
	}, [currentIndex, onComplete, items]);

	// safely unpacks the JSX.Element Component
	const current = items[currentIndex];
	const Component = current?.Component;

	// handles incrementing the step
	const handleNextStep = () => {
		onCompleteStep?.(current?.key ?? "unknown key");
		setIsLoading(true);
		setCurrentIndex((val) => val + 1);
	};

	return (
		<Outer>
			<Content>
				{isLoading ? (
					<FlexLoader size={40} />
				) : !!Component ? (
					<Component />
				) : null}
			</Content>
			<Bottom>
				<DotsContainer>
					<PageDots
						current={currentIndex + 1}
						total={items.length}
					/>
				</DotsContainer>
				<PlayButton onClick={handleNextStep}>Áfram</PlayButton>
			</Bottom>
		</Outer>
	);
};

export default SubRoutineViewer;
