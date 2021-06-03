import { SocialMedia } from "../../../../declerations";
import { SOCIAL } from "../../../../static";

export const getImageFromSocialType = (type: SocialMedia) => {
	switch (type) {
		case SocialMedia.Instagram:
			return SOCIAL.INSTAGRAM;
		case SocialMedia.Twitter:
			return SOCIAL.TWITTER;
		case SocialMedia.Website:
			return SOCIAL.WEBSITE;
		case SocialMedia.LinkedIn:
			return SOCIAL.LINKEDIN;
	}
};
