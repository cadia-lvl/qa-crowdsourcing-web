import React, { useState } from "react";
import { IProps } from "../formInterface";
import { FormBuilder } from "../FormBuilder";
import { FormBoxContainer } from "./styles";

export const FormBox = <T extends {}, K = {}>(props: IProps<T, K>) => {
	return (
		<FormBoxContainer>
			<FormBuilder {...props} />
		</FormBoxContainer>
	);
};
