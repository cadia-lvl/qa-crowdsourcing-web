import React from "react";

export const ShootingStars = () => {
	const STAR_COUNT = 20;
	return (
		<div className="night">
			{[...new Array(STAR_COUNT)].map((_) => (
				<div className="shooting_star" />
			))}
		</div>
	);
};
