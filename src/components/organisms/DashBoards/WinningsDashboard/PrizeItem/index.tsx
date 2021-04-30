import React from "react";
import { useSelector } from "react-redux";
import { LoadingFlexIMG } from "../../../..";
import { StoreState } from "../../../../../reducers";
import { RewardService } from "../../../../../services";
import { IProps } from "./interface";
import {
	Outer,
	ImageWrapper,
	AvailabilityLabel,
	NameLabel,
	TextWrapper,
} from "./styles";

const PrizeItem = ({
	label,
	imageURL,
	category,
	individualItem,
}: IProps) => {
	const user = useSelector((state: StoreState) => state.auth);
	const isAvailable = RewardService.hasUnlockedCategory(
		category.name,
		user
	);
	return (
		<Outer
			isAvailable={isAvailable}
			title={label}
			className={isAvailable ? "shine-wrap" : ""}
		>
			<ImageWrapper>
				<LoadingFlexIMG src={imageURL ?? ""} />
			</ImageWrapper>
			{!isAvailable ? (
				<AvailabilityLabel
					className="no-highlight"
					isAvailable={isAvailable}
				>
					<i className="fas fa-lock" />
					Læst
				</AvailabilityLabel>
			) : (
				<AvailabilityLabel
					className="no-highlight"
					isAvailable={isAvailable}
				>
					<i className="fas fa-lock-open" />
					Komin/n í pottinn
				</AvailabilityLabel>
			)}
			<NameLabel className="no-highlight">{label}</NameLabel>
			<TextWrapper className="no-highlight">
				{isAvailable ? (
					individualItem ? (
						<span>
							Þessi vinningur tilheyrir{" "}
							<span className="success bold">
								{category.name_tgf}
							</span>
						</span>
					) : (
						<React.Fragment>
							Þú átt möguleika á að vinna alla þá vinninga
							sem tilheyra{" "}
							<span className="success bold">
								{category.name_tgf}
							</span>
						</React.Fragment>
					)
				) : (
					<React.Fragment>
						Þú getur fengið verðlaun fyrir {category.name_tf}{" "}
						með því að {category.prereqDescription}
					</React.Fragment>
				)}
			</TextWrapper>
		</Outer>
	);
};

export default PrizeItem;
