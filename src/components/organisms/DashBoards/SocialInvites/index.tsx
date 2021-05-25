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
import { NavLink } from "react-router-dom";

const SocialInvites = () => {
	const auth = useSelector((state: StoreState) => state.auth);
	const dispatch = useDispatch();

	const url = `https://spurningar.is/bjoda/${auth._id}`;
	const ICON_SIZE = 32;
	useEffect(() => {
		dispatch(fetchInvites());
	}, []);
	return (
		<Hoc.RestrictedPage userTypes={["guest", "loading"]}>
			<Styled.Outer className="border">
				<Styled.TopLine>
					<h1 className="italic">Bjóða vinum</h1>
					<Styled.Icons>
						<FacebookShareButton url={url}>
							<FacebookIcon size={ICON_SIZE} round={true} />
						</FacebookShareButton>
						<EmailShareButton url={url}>
							<EmailIcon size={ICON_SIZE} round={true} />
						</EmailShareButton>
						<LinkedinShareButton url={url}>
							<LinkedinIcon size={ICON_SIZE} round={true} />
						</LinkedinShareButton>
						<TwitterShareButton url={url}>
							<TwitterIcon size={ICON_SIZE} round={true} />
						</TwitterShareButton>
					</Styled.Icons>
				</Styled.TopLine>
				{auth.invites.length === 0 ? (
					<Atoms.Alerts.Ribbon
						label="Það hefur enginn skráð sig með þínum hlekk"
						type="warning"
					/>
				) : null}
				<p>
					Þú getur afritað hlekkinn hér fyrir neðan með því að smella á hann. Þegar
					vinur eða vandamaður opnar spurningar.is með þínum hlekk og skráir sig sem
					nýjan notanda þá sérð þú hans táknmynd hér. Þegar þú hefur boðið 10 vinum þá
					getur þú unnið vinninga sem{" "}
					<NavLink to="/vinningar">
						<Styled.Link>áhrifavaldur</Styled.Link>
					</NavLink>
					.
				</p>
				<Styled.CopyWrap>
					<Atoms.Clipboard.CopyString value={url} />
				</Styled.CopyWrap>
				<Styled.UserGrid>
					{auth.invites.map((item) => (
						<Atoms.Cards.InvitedUser {...item} key={item._id} />
					))}
				</Styled.UserGrid>
			</Styled.Outer>
		</Hoc.RestrictedPage>
	);
};

export default SocialInvites;
