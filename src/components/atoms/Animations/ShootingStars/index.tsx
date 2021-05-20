import React from "react";

export const ShootingStars = () => {
	const STAR_COUNT = 20;
	return (
		<div className="night">
			{[...new Array(STAR_COUNT)].map((_, i) => (
				<div className="shooting_star" key={i} />
			))}
		</div>
	);
};
