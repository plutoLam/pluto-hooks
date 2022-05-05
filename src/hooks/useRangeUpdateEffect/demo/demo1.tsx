import React, { useEffect, useState } from "react";
import useRangeUpdateEffect from "../index";

export default () => {
	const [count, setCount] = useState(0);
	const [effectCount, setEffectCount] = useState(0);
	const [updateEffectCount, setUpdateEffectCount] = useState(0);

	useEffect(() => {
		setEffectCount((c) => c + 1);
	}, [count]);

	useRangeUpdateEffect(() => {
		setUpdateEffectCount((c) => c + 1);
	}, [5, 20], [count]);

	return (
		<div>
			<p>effectCount: {effectCount}</p>
			<p>updateEffectCount: {updateEffectCount}</p>
			<p>
				<button type="button" onClick={() => setCount((c) => c + 1)}>
					reRender
				</button>
			</p>
		</div>
	);
};