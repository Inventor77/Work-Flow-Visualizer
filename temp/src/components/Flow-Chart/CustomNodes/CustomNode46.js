import React, { memo } from "react";

import { Handle } from "react-flow-renderer";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

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
				<img src={data.source} alt="i" />
				<img src={data.source2} alt="i" />
				<SyntaxHighlighter
					className="codeNodeMain"
					wrapLines={true}
					showLineNumbers={true}
					language="javascript"
					style={docco}
				>
					{data.code}
				</SyntaxHighlighter>
			</div>
			<Handle
				type="source"
				position="bottom"
				style={{ background: "#555", width: "100px" }}
			/>
		</>
	);
});
