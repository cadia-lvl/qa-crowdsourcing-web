import React from "react";
import { UserAvatar } from "../../..";
import { ICON_LVL_3 } from "../../../../static";
import { Colors } from "../../../../styles";
import { Outer, Tag } from "./styles";

export const UserStatsAvatar = () => {
	return (
		<Outer>
			<UserAvatar src={ICON_LVL_3} color={Colors.DANGER} />
			<Tag id="tag-user-username">
				<span>Njallskarp123</span>
			</Tag>

			<Tag id="tag-user-level">
				<span>Lvl 3</span>
			</Tag>
		</Outer>
	);
};
