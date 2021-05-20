import React, { useState, useEffect } from "react";
import { Outer } from "./styles";
import { IProps } from "./interface";
import { Atoms } from "../../../";

export const LoadingFlexIMG = ({ src }: IProps) => {
	const [isLoading, setIsLoading] = useState(true);
	const [imgSrc, setImgSrc] = useState("");

	useEffect(() => {
		const img = new Image();
		img.src = src;
		img.onload = () => handleHasLoaded(img.src);
	}, [src]);

	const handleHasLoaded = (src: string) => {
		const LOADING_TIMEOUT = 750;
		setTimeout(() => {
			setImgSrc(src);
			setIsLoading(false);
		}, LOADING_TIMEOUT);
	};

	return (
		<Outer imageULR={imgSrc} className={isLoading ? "shine" : ""}>
			{isLoading ? <Atoms.Loaders.Flex size={25} /> : null}
		</Outer>
	);
};
