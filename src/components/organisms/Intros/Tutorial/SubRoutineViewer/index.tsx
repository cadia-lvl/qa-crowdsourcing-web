import React, { useState, useEffect } from "react";
import { IProps } from "./interface";
import { Atoms, PageDots, PlayButton } from "../../../../";
import { Outer, Content, Bottom, DotsContainer } from "./styles";

const SubRoutineViewer = ({
	items,
	onComplete,
	onCompleteStep,
}: IProps) => {
	const [showButton, setShowButton] = useState(true);
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
		// also set showbutton to true
		setShowButton(true);
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

	const handleHideButton = () => setShowButton(false);
	const handleShowButton = () => setShowButton(true);

	return (
		<Outer>
			<Content>
				{isLoading ? (
					<Atoms.Loaders.Flex size={40} />
				) : !!Component ? (
					<React.Fragment>
						<h1 className="italic">{current.label}</h1>
						{current.description.map((text, i) => (
							<p key={i}>{text}</p>
						))}
						<Component
							onHideButton={handleHideButton}
							onShowButton={handleShowButton}
						/>
					</React.Fragment>
				) : null}
			</Content>
			<Bottom>
				<DotsContainer>
					<PageDots
						current={currentIndex + 1}
						total={items.length}
					/>
				</DotsContainer>
				{showButton ? (
					<PlayButton onClick={handleNextStep}>Áfram</PlayButton>
				) : null}
			</Bottom>
		</Outer>
	);
};

export default SubRoutineViewer;
