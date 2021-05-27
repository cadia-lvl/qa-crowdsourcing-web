import React from "react";
import { useSelector } from "react-redux";
import { LoadingFlexIMG } from "../../..";
import { StoreState } from "../../../../reducers";
import { RewardService } from "../../../../services";
import { Prize as IProps } from "../../../../declerations";
import * as Styles from "./styles";

const PrizeItem = ({ name, imageURL }: IProps) => {
	const user = useSelector((state: StoreState) => state.auth);

	return (
		<Styles.Outer>
			<Styles.ImageWrapper>
				<LoadingFlexIMG src={imageURL ?? ""} />
			</Styles.ImageWrapper>
			<Styles.TextWrapper>{name}</Styles.TextWrapper>
		</Styles.Outer>
	);
};

export default PrizeItem;
