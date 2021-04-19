import styled from "styled-components";
import { Colors } from "../../../../../../styles";

interface IBullet {
	type: "good" | "bad";
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
            display: block;
        }
        i.fa-check {
            display: none;
        }
    `
			: ""}
            

	}
    /** Styling if this is check bullet */
    ${(props) =>
		props.type === "good"
			? `
        i {
            color: ${Colors.SUCCESS};
        }
        i.fas {
            display: block;
        }
        i.fa-times {
            display: none;
        }
    `
			: ""}
`;
