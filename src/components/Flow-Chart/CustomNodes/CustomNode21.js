import React, { memo } from "react";

import { Handle } from "react-flow-renderer";

export default memo(({ data }) => {
	return (
		<>
			<Handle
				type="target"
				position="top"
				style={{
					background: "transparent",
					width: "100%",
					height: "20px",
					top: "-10px",
					border: "none",
				}}
				onConnect={(params) => console.log("handle onConnect", params)}
			/>
			<div
				className="code output"
				style={{
					marginTop: "0",
					background: `${data.background}`,
					borderRadius: `${data.radius}px`,
				}}
			>
				<strong style={{ fontSize: "16px", textTransform: "capitalize" }}>
					{data.label}
				</strong>
			</div>
			<Handle
				type="source"
				position="bottom"
				style={{ background: "#555", width: "100px" }}
			/>
		</>
	);
});
