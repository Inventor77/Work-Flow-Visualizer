import React, { memo } from "react";

import { Handle } from "reactflow";

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
				className="code"
				style={{
					marginTop: "0",
					background: `${data.background}`,
					borderRadius: `${data.radius}px`,
				}}
			>
				<strong style={{ fontSize: "16px", textTransform: "capitalize" }}>
					{data.label}
				</strong>
				<strong style={{ fontSize: "14px", textTransform: "capitalize" }}>
					{data.label2}
				</strong>
				<img src={data.source} alt="i" />
			</div>
			<Handle
				type="source"
				position="bottom"
				style={{ background: "#555", width: "100px" }}
			/>
		</>
	);
});
