import React from "react";
import { Utils } from "../../";
import { IProps } from "./interface";

export const QuestionReview = <T extends {}>({
	items,
	title,
	first,
	question,
	onComplete,
}: IProps<T>) => {
	return (
		<React.Fragment>
			<Utils.QuestionIs question={question} />
			<Utils.ReviewCheckList<T>
				items={items}
				_key={""}
				title={title}
				first={first}
				onBadAnswer={() => onComplete(false)}
				onComplete={() => onComplete(true)}
			/>
		</React.Fragment>
	);
};
