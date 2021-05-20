import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Atoms } from "../../../";
import { fetchInvites } from "../../../../actions";
import { StoreState } from "../../../../reducers";
import * as Styled from "./styles";
import * as Hoc from "../../../../hoc";
import {
	EmailShareButton,
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton,
	EmailIcon,
	FacebookIcon,
	LinkedinIcon,
	TwitterIcon,
} from "react-share";

const SocialInvites = () => {
	const auth = useSelector((state: StoreState) => state.auth);
	const dispatch = useDispatch();

	const url = `https://spurningar.is/bjoda/${auth._id}`;

	useEffect(() => {
		dispatch(fetchInvites());
	}, []);
	return (
		<Hoc.RestrictedPage
			userTypes={["guest", "loading"]}
			fallbackUrl="/innskra"
		>
			<Styled.Outer className="border">
				<Styled.TopLine>
					<h1 className="italic">Bjóða vinum</h1>
					<Styled.Icons>
						<FacebookShareButton url={url}>
							<FacebookIcon size={32} round={true} />
						</FacebookShareButton>
						<EmailShareButton url={url}>
							<EmailIcon size={32} round={true} />
						</EmailShareButton>
						<LinkedinShareButton url={url}>
							<LinkedinIcon size={32} round={true} />
						</LinkedinShareButton>
						<TwitterShareButton url={url}>
							<TwitterIcon size={32} round={true} />
						</TwitterShareButton>
					</Styled.Icons>
				</Styled.TopLine>
				<p>
					Þú getur faritað hlekkinn hér fyrir neðan með því að
					smella á hann. Þegar vinur eða vandamaður opnar
					spurningar.is með þessum hlekk og skráir sig sem nýjan
					notanda þá sérð þú þína vini hér. þegar þú hefur boðið
					10 vinum þá getur þú unnið vinninga fyrir að vera
					áhrifavaldur.
				</p>
				<Styled.CopyWrap>
					<Atoms.Clipboard.CopyString value={url} />
				</Styled.CopyWrap>
				<Styled.UserGrid>
					{auth.invites.map((item) => (
						<Atoms.Cards.InvitedUser
							{...item}
							key={item._id}
						/>
					))}
				</Styled.UserGrid>
			</Styled.Outer>
		</Hoc.RestrictedPage>
	);
};

export default SocialInvites;
