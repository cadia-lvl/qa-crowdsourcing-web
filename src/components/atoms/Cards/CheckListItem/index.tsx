import React from "react";
import { IProps } from "./interface";
import * as Styles from "./styles";

const CheckListItem = ({
	title,
	description,
	value: isChecked,
	onClick: handleClick,
}: IProps) => {
	return (
		<Styles.Outer onClick={handleClick}>
			<Styles.Check>
				{isChecked ? (
					<i className="fas fa-check" />
				) : (
					<i className="far fa-circle" />
				)}
			</Styles.Check>
			<Styles.Content>
				<Styles.Title>{title}</Styles.Title>
				<Styles.Para>{description}</Styles.Para>
			</Styles.Content>
		</Styles.Outer>
	);
};

export default CheckListItem;
