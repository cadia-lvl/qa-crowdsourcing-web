import React from "react";
import { Atoms } from "../../../";
import * as Styled from "./styles";

const SocialInvites = () => {
	// remove with values from backend
	const GUUID = "5b606ef3-6b0b-429a-9980-5115b98014b3";
	// possible create invite service
	return (
		<Styled.Outer>
			<Atoms.Clipboard.CopyString
				value={`https://spurningar.is/bjoda/${GUUID}`}
			/>
		</Styled.Outer>
	);
};

export default SocialInvites;
