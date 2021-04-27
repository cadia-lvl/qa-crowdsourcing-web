import styled from "styled-components";
import { Colors } from "../../../../styles";

interface IBullet {
	type: "good" | "bad" | "neutral";
}

export const Outer = styled.div<IBullet>`
	display: flex;
	width: 100%;
	i {
		width: 30px;
	}
	color: #666;
	margin-bottom: 7px;
	/** Styling if this is times bullet */
	${(props) =>
		props.type === "bad"
			? `
        i {
            color: ${Colors.DANGER};
        }

        i.fas {
            display: none;
        }
        i.fa-times {
            display: block;
        }
    `
			: ""}

	/** Styling if this is check bullet */
    ${(props) =>
		props.type === "good"
			? `
        i {
            color: ${Colors.SUCCESS};
        }

        i.fas {
            display: none;
        }
        i.fa-check {
            display: block;
        }
    `
			: ""}

    /** Styling if this is neutral bullet */
    ${(props) =>
		props.type === "neutral"
			? `
        i {
            color: ${Colors.HIGHLIGHT};
        }

        i.fas {
            display: none;
        }
        i.fa-minus {
            display: block;
        }
    `
			: ""}
`;
