import React from "react";
import { Atoms } from "../../../";
import * as Styled from "./styles";

const SocialInvites = () => {
	// TODO: remove with values from backend
	const GUUID = "5b606ef3-6b0b-429a-9980-5115b98014b3";
	// TODO: replace with real data
	// const users = [];
	// TODO: possible create invite service
	return (
		<Styled.Outer>
			<h1 className="italic">Bjóða vinum</h1>
			<p>
				Þú getur faritað hlekkinn hér fyrir neðan með því að smella
				á hann. Þegar vinur eða vandamaður opnar spurningar.is með
				þessum hlekk og skráir sig sem nýjan notanda þá sérð þú
				þína vini hér. þegar þú hefur boðið 10 vinum þá getur þú
				unnið vinninga fyrir að vera áhrifavaldur.
			</p>
			<Styled.CopyWrap>
				<Atoms.Clipboard.CopyString
					value={`https://spurningar.is/bjoda/${GUUID}`}
				/>
			</Styled.CopyWrap>
			{/* {
				// TODO: replace dummy data with real data
				users.map((invite) => (
					<Atoms.Cards.InvitedUser
						{...{
							username: "Jon Gudnason",
							level: 4,
							email: "",
							type: "user",
							scoreCard: {
								answerVerifications: 1,
								answers: 1,
								questionVerifications: 1,
								questions: 1,
								articles: 1,
								hiscoreRank: 1,
								invites: 1,
							},
							_id: "",
							hasCompletedTutorial: false,
						}}
					/>
				))
			} */}
		</Styled.Outer>
	);
};

export default SocialInvites;
