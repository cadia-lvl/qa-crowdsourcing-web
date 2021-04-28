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
}: IProps) => {
	if (!open) return null;
	return (
		<BackDrop onClick={onClose}>
			<Outer>
				<WhiteBoxWithTitle title={title}>
					<Inner>
						{children}
						<ButtonContainer>
							<BaseButton
								label="hello"
								type="danger"
								onClick={() => null}
							/>
							<BaseButton
								label="hello"
								type="danger"
								onClick={() => null}
							/>
							<BaseButton
								label="hello"
								type="danger"
								onClick={() => null}
							/>
						</ButtonContainer>
					</Inner>
				</WhiteBoxWithTitle>
			</Outer>
		</BackDrop>
	);
};
