import React, { useState, useEffect } from "react";
import { ICON_AGENT } from "../../../../static";
import { UserAvatar } from "../../../atoms";
import { Outer, Inner, BubbleContainer, CloseOpenIcon } from "./styles";
import TutorialBubble from "../TutorialBubble";
import { StoreState } from "../../../../reducers";
import { useSelector } from "react-redux";

export const TutorialGuide = () => {
	const [showBubbles, setShowBubbles] = useState(true);
	const [notificationShake, setNotificationShake] = useState(false);

	const state = useSelector((state: StoreState) => state.tutorial);
	const user = useSelector((state: StoreState) => state.auth);

	const firstItem = state.queue[0];

	const bubbleCount = state.persistant.length + (!!firstItem ? 1 : 0);

	useEffect(() => {
		if (state.persistant.length > 0) setNotificationShake(true);
	}, [state.persistant]);

	useEffect(() => {
		if (!!firstItem) setNotificationShake(true);
	}, [firstItem]);

	useEffect(() => {
		setNotificationShake(false);
	}, [showBubbles]);

	if (["loading", "guest"].includes(user.type)) return null;
	return (
		<Outer
			shake={notificationShake && !showBubbles && bubbleCount > 0}
			onClick={() => (!showBubbles ? setShowBubbles(true) : null)}
		>
			<Inner>
				<BubbleContainer>
					{showBubbles ? (
						<TutorialBubble explain={firstItem} />
					) : null}
					{showBubbles
						? state.persistant.map((item) => (
								<TutorialBubble explain={item} />
						  ))
						: null}
				</BubbleContainer>
				<UserAvatar src={ICON_AGENT} />
				{bubbleCount > 0 ? (
					<CloseOpenIcon
						closed={!showBubbles}
						onClick={() => setShowBubbles((val) => !val)}
					>
						{showBubbles ? (
							<i className="fas fa-chevron-down" />
						) : (
							<span>
								<i className="fas fa-plus" />
								{bubbleCount}
							</span>
						)}
					</CloseOpenIcon>
				) : null}
			</Inner>
		</Outer>
	);
};
