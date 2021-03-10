import React, { useState } from "react";
import { IProps } from "../formInterface";
import { FormBuilder } from "../FormBuilder";
import { FormBoxContainer } from "./styles";
import { WhiteFlexCard } from "../../../";

export const FormBox = <T extends {}, K = {}>(props: IProps<T, K>) => {
	return (
		<WhiteFlexCard>
			<FormBoxContainer>
				<FormBuilder {...props} />
			</FormBoxContainer>
		</WhiteFlexCard>
	);
};
