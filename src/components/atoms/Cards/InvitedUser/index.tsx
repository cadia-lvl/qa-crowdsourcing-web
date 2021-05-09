import React from "react";
import * as Styles from "./styles";
import { IProps } from "./interface";
import { Atoms } from "../../../";
import * as Services from "../../../../services";

const InvitedUser = ({ level, username }: IProps) => {
	const iconURL = Services.UserLevelService.mapLevelToIconURL(level);

	return (
		<Styles.Outer>
			<Styles.IconWrap>
				<Atoms.Avatars.User src={iconURL} />
			</Styles.IconWrap>
			{username}
		</Styles.Outer>
	);
};

export default InvitedUser;
