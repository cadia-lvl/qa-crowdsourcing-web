import React from "react";
import { Outer, Inner, TestItem } from "./styles";

export const WinningsDashBoard = () => {
	return (
		<Outer>
			<h1 className="italic">Verðlaun</h1>
			<Inner>
				<TestItem />
				<TestItem />
				<TestItem />
				<TestItem />
				<TestItem />
				<TestItem />
				<TestItem />
				<TestItem />
				<TestItem />
				<TestItem />
				<TestItem />
			</Inner>
		</Outer>
	);
};
