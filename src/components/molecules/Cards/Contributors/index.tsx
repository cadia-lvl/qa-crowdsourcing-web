import { SocialButton } from "../../../atoms";
import * as Styles from "./styles";
import { IProps } from "./interface";

const Contributors = ({ name, paragraph, socials, image }: IProps) => {
	return (
		<Styles.Outer>
			<Styles.ImageWrapper>
				<Styles.Image src={image} />
			</Styles.ImageWrapper>
			<Styles.ContentWrapper>
				<h4>{name}</h4>
				<Styles.Paragraph>{paragraph}</Styles.Paragraph>
				{socials.length > 0 && (
					<Styles.SocialWrapper>
						{socials.map((social) => (
							<a href={social.link}>
								<SocialButton type={social.type} />
							</a>
						))}
					</Styles.SocialWrapper>
				)}
			</Styles.ContentWrapper>
		</Styles.Outer>
	);
};

export default Contributors;
