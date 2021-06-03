import React from "react";

export enum SocialMedia {
	Twitter,
	Instagram,
	LinkedIn,
	Website,
}

export interface Social {
	link: string;
	type: SocialMedia;
}

export interface Contributors {
	name: string;
	paragraph: string;
	image: string;
	socials: Social[];
}
