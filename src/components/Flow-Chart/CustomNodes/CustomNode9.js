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
				className="code"
				style={{
					background: `${data.background}`,
					marginTop: "0",
					borderRadius: `${data.radius}px`,
				}}
			>
				<div className="node_textarea">{data.textarea}</div>
				<div className="node_textarea">{data.textarea2}</div>
				<div className="node_textarea">{data.textarea3}</div>
			</div>
			<Handle
				type="source"
				position="bottom"
				style={{ background: "#555", width: "100px" }}
			/>
		</>
	);
});
