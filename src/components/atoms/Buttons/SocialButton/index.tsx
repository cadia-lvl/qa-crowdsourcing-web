import * as Styles from "./styles";
import { IProps } from "./interface";
import { useMemo } from "react";
import { getImageFromSocialType } from "./utils";

const SocialButton = ({ type }: IProps) => {
	const image = useMemo(() => getImageFromSocialType(type), [type]);

	return <Styles.Image src={image} />;
};

export default SocialButton;
