import React from "react";
import { IProps } from "./interface";
import { BackDrop, Outer, Inner, ButtonContainer } from "./styles";
import { WhiteBoxWithTitle } from "../../../";
import { BaseButton } from "../../../atoms";
/**
 * Modal that takes open state as prop and accepts
 * title
 */
export const ModalWithTitle = ({
	children,
	onClose,
	open,
	title,
	buttons,
}: IProps) => {
	if (!open) return null;
	return (
		<BackDrop onClick={onClose}>
			<Outer onClick={(e) => e.stopPropagation()}>
				<WhiteBoxWithTitle title={title}>
					<Inner>
						{children}
						<ButtonContainer>
							{buttons.map((item) => (
								<BaseButton {...item} key={item.label} />
							))}
						</ButtonContainer>
					</Inner>
				</WhiteBoxWithTitle>
			</Outer>
		</BackDrop>
	);
};
