import React from "react";
import { CheckBoxInputProps } from "../../../../declerations";
import * as Styles from "./styles";

const CheckBoxInput = (props: CheckBoxInputProps) => {
	return (
		<Styles.Outer>
			<input
				{...props}
				type="checkbox"
				defaultChecked={props.value}
				onChange={() => props.onChange(!props.value)}
				value="checked"
			/>
		</Styles.Outer>
	);
};

export default CheckBoxInput;
