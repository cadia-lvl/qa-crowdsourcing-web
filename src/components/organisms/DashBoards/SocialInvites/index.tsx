import React from "react";
import { Atoms } from "../../../";
import * as Styled from "./styles";

const SocialInvites = () => {
	// TODO: remove with values from backend
	const GUUID = "5b606ef3-6b0b-429a-9980-5115b98014b3";
	// TODO: possible create invite service
	return (
		<Styled.Outer>
			<Styled.CopyWrap>
				<Atoms.Clipboard.CopyString
					value={`https://spurningar.is/bjoda/${GUUID}`}
				/>
			</Styled.CopyWrap>
		</Styled.Outer>
	);
};

export default SocialInvites;
