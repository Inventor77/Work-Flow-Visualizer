import React, { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { readData } from "../../../utils/utils";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const Sidebar = () => {
	const [toggle, setToggle] = useState(false);
	const handleToggleSidebar = (value) => {
		setToggle(value);
	};
	const [nodes, setNodes] = useState([]);

	useEffect(() => {
		const readFile = async () => {
			const docs = await readData("custom_nodes");
			let arr = [];
			docs.forEach((cur) => {
				arr = [...arr, cur.data()];
			});
			return arr;
		};
		readFile()
			.then((data) => {
				setNodes(data);
			})
			.catch((err) => console.log(err.message));
	}, []);
	const onDragStart = (event, nodeType, nodeDesign) => {
		event.dataTransfer.setData("application/reactflow", nodeType);
		event.dataTransfer.setData("application/reactflow2", nodeDesign);
		event.dataTransfer.effectAllowed = "move";
	};

	const codeString = `function test( ) {
    String name = "Daya"
  }`;

	return (
		<aside
			className={`${
				toggle
					? "toggle-sidebar project-sidebar node-sidebar"
					: "project-sidebar node-sidebar"
			}`}
		>
			<div>
				<div
					className="toggle-btn"
					onClick={() => handleToggleSidebar(!toggle)}
				>
					{toggle ? <FaAngleDoubleRight /> : <FaAngleDoubleLeft />}
				</div>
				<div className="description">
					You can drag these nodes to the pane on the right.
				</div>
				<div className="sidebar-content">
					<div
						className="dndnode output"
						onDragStart={(event) =>
							onDragStart(event, "nodeWithOnlyText", "text")
						}
						draggable
					>
						Text Node
					</div>
					<div
						className="image"
						onDragStart={(event) =>
							onDragStart(event, "selectorNode", "rectangleWithImage")
						}
						draggable
					>
						<p>Image Node</p>
						<img src="https://source.unsplash.com/random" alt="jcj" />
					</div>
					<div
						className="code"
						onDragStart={(event) =>
							onDragStart(event, "nodeWithCode", "codeNode")
						}
						draggable
					>
						<p style={{ textAlign: "center" }}>Code Node</p>
						<SyntaxHighlighter
							wrapLines={true}
							showLineNumbers={true}
							language="javascript"
							style={docco}
							className="codeNodeMain"
						>
							{codeString}
						</SyntaxHighlighter>
					</div>
					{Object.keys(nodes).map((id) => {
						const elemen = nodes[id];
						var classname = "custom";
						var designname = "rectangleWithImageText";
						var nodeType = "";
						if (
							elemen.textField === "true" &&
							elemen.textArea === "true" &&
							elemen.Image === "true"
						) {
							classname = "custom";
							designname = "rectangleWithImageText";
							nodeType = "customNode";
						}
						if (
							elemen.textField === "true" &&
							elemen.Image === "true" &&
							Object.keys(elemen).length === 5
						) {
							classname = "image";
							designname = "rectangleWithImage";
							nodeType = "selectorNode";
						}
						if (
							elemen.textArea === "true" &&
							elemen.Image === "true" &&
							Object.keys(elemen).length === 5
						) {
							classname = "custom-2";
							designname = "rectangleWithImageArea";
							nodeType = "nodeWithImageText";
						}

						if (
							elemen.textArea === "true" &&
							Object.keys(elemen).length === 4
						) {
							classname = "image";
							designname = "text";
							nodeType = "default";
						}

						if (elemen.Image === "true" && Object.keys(elemen).length === 4) {
							classname = "only-image";
							designname = "onlyImage";
							nodeType = "nodeWithImageOnly";
						}

						if (
							elemen.textField === "true" &&
							elemen.textArea === "true" &&
							Object.keys(elemen).length === 5
						) {
							classname = "image";
							designname = "nodeTextAndArea";
							nodeType = "nodeWithTextAndArea";
						}
						if (
							elemen.textField === "true" &&
							Object.keys(elemen).length === 4
						) {
							classname = "dndnode output";
							designname = "text";
							nodeType = "default";
						}
						if (
							elemen.textField === "true" &&
							elemen.textField2 === "true" &&
							Object.keys(elemen).length === 5
						) {
							classname = "textfield2";
							designname = "text2";
							nodeType = "mainCustomNode";
						}
						if (
							elemen.textField === "true" &&
							elemen.textField2 === "true" &&
							elemen.textField3 === "true" &&
							Object.keys(elemen).length === 6
						) {
							classname = "textfield3";
							designname = "text3";
							nodeType = "nodeWith3Text";
						}
						if (
							elemen.textArea === "true" &&
							elemen.textArea2 === "true" &&
							Object.keys(elemen).length === 5
						) {
							classname = "textarea2";
							designname = "textarea2";
							nodeType = "nodeWith2TextArea";
						}
						if (
							elemen.textArea === "true" &&
							elemen.textArea2 === "true" &&
							elemen.textArea3 === "true" &&
							Object.keys(elemen).length === 6
						) {
							classname = "textarea3";
							designname = "textarea3";
							nodeType = "nodeWith3TextArea";
						}

						if (
							elemen.Image === "true" &&
							elemen.Image2 === "true" &&
							elemen.Image3 === "true" &&
							Object.keys(elemen).length === 6
						) {
							classname = "image3";
							designname = "image3";
							nodeType = "nodeWith3Image";
						}

						if (
							elemen.Image === "true" &&
							elemen.Image2 === "true" &&
							Object.keys(elemen).length === 5
						) {
							classname = "image3";
							designname = "image2";
							nodeType = "nodeWith2Image";
						}
						if (
							elemen.textField === "true" &&
							elemen.textField2 === "true" &&
							elemen.textArea === "true" &&
							Object.keys(elemen).length === 6
						) {
							designname = "field2area1";
							nodeType = "nodeWith2Field1Area";
						}
						if (
							elemen.textField === "true" &&
							elemen.textField2 === "true" &&
							elemen.Image === "true" &&
							Object.keys(elemen).length === 6
						) {
							designname = "field2image1";
							nodeType = "nodeWith2Field1Image";
						}
						if (
							elemen.textArea === "true" &&
							elemen.textArea2 === "true" &&
							elemen.textField === "true" &&
							Object.keys(elemen).length === 6
						) {
							classname = "area2field1";
							designname = "area2field1";
							nodeType = "nodeWith2Area1Field";
						}

						if (
							elemen.textArea === "true" &&
							elemen.textArea2 === "true" &&
							elemen.Image === "true" &&
							Object.keys(elemen).length === 6
						) {
							classname = "area2image1";
							designname = "area2image1";
							nodeType = "nodeWith2Area1Image";
						}

						if (
							elemen.Image === "true" &&
							elemen.Image2 === "true" &&
							elemen.textField === "true" &&
							Object.keys(elemen).length === 6
						) {
							classname = "image2field1";
							designname = "image2field1";
							nodeType = "nodeWith2Image1Field";
						}

						if (
							elemen.Image === "true" &&
							elemen.Image2 === "true" &&
							elemen.textArea === "true" &&
							Object.keys(elemen).length === 6
						) {
							classname = "image2field1";
							designname = "image2area1";
							nodeType = "nodeWith2Image1Area";
						}

						if (
							elemen.code === "true" &&
							elemen.code2 === "true" &&
							elemen.code3 === "true" &&
							Object.keys(elemen).length === 6
						) {
							classname = "code3";
							designname = "threecode";
							nodeType = "codethree";
						}

						if (
							elemen.code === "true" &&
							elemen.code2 === "true" &&
							elemen.textField === "true" &&
							Object.keys(elemen).length === 6
						) {
							classname = "code4";
							designname = "oneTextTwoCode";
							nodeType = "oneTextTwoCode";
						}
						if (
							elemen.code === "true" &&
							elemen.code2 === "true" &&
							elemen.textArea === "true" &&
							Object.keys(elemen).length === 6
						) {
							classname = "code4";
							designname = "oneAreaTwoCode";
							nodeType = "oneAreaTwoCode";
						}

						if (
							elemen.code === "true" &&
							elemen.code2 === "true" &&
							elemen.Image === "true" &&
							Object.keys(elemen).length === 6
						) {
							classname = "code4";
							designname = "oneImageTwoCode";
							nodeType = "oneImageTwoCode";
						}
						if (
							elemen.code === "true" &&
							elemen.textField === "true" &&
							elemen.textField2 === "true" &&
							Object.keys(elemen).length === 6
						) {
							classname = "code5";
							designname = "twoTextOneCode";
							nodeType = "twoTextOneCode";
						}
						if (
							elemen.code === "true" &&
							elemen.textArea === "true" &&
							elemen.textArea2 === "true" &&
							Object.keys(elemen).length === 6
						) {
							classname = "code4";
							designname = "twoAreaOneCode";
							nodeType = "twoAreaOneCode";
						}
						if (
							elemen.code === "true" &&
							elemen.Image === "true" &&
							elemen.Image2 === "true" &&
							Object.keys(elemen).length === 6
						) {
							classname = "code4";
							designname = "twoImageOneCode";
							nodeType = "twoImageOneCode";
						}
						if (
							elemen.code === "true" &&
							elemen.textArea === "true" &&
							elemen.Image === "true" &&
							Object.keys(elemen).length === 6
						) {
							classname = "code6";
							designname = "oneConeAoneI";
							nodeType = "oneConeAoneI";
						}
						if (
							elemen.code === "true" &&
							elemen.textField === "true" &&
							elemen.Image === "true" &&
							Object.keys(elemen).length === 6
						) {
							classname = "code6";
							designname = "oneConeToneI";
							nodeType = "oneConeToneI";
						}

						if (
							elemen.code === "true" &&
							elemen.textField === "true" &&
							elemen.textArea === "true" &&
							Object.keys(elemen).length === 6
						) {
							classname = "code6";
							designname = "oneConeAoneT";
							nodeType = "oneConeAoneT";
						}

						if (elemen.code === "true" && Object.keys(elemen).length === 4) {
							classname = "code";
							designname = "onlyCode";
							nodeType = "onlyCode";
						}

						if (
							elemen.code === "true" &&
							elemen.textArea === "true" &&
							Object.keys(elemen).length === 5
						) {
							classname = "code8";
							designname = "oneCodeoneArea";
							nodeType = "oneCodeoneArea";
						}

						if (
							elemen.code === "true" &&
							elemen.Image === "true" &&
							Object.keys(elemen).length === 5
						) {
							classname = "code8";
							designname = "oneCodeoneImage";
							nodeType = "oneCodeoneImage";
						}

						if (
							elemen.code === "true" &&
							elemen.textField === "true" &&
							elemen.textArea === "true" &&
							elemen.Image === "true" &&
							Object.keys(elemen).length === 7
						) {
							classname = "code10";
							designname = "fourElements";
							nodeType = "fourElements";
						}

						if (
							elemen.textField === "true" &&
							elemen.textField2 === "true" &&
							elemen.textArea === "true" &&
							elemen.textArea2 === "true" &&
							Object.keys(elemen).length === 7
						) {
							classname = "code10";
							designname = "twoTexttwoArea";
							nodeType = "twoTexttwoArea";
						}

						if (
							elemen.textField === "true" &&
							elemen.textField2 === "true" &&
							elemen.Image === "true" &&
							elemen.Image2 === "true" &&
							Object.keys(elemen).length === 7
						) {
							classname = "code10";
							designname = "twoTexttwoImage";
							nodeType = "twoTexttwoImage";
						}

						if (
							elemen.textField === "true" &&
							elemen.textField2 === "true" &&
							elemen.code === "true" &&
							elemen.code2 === "true" &&
							Object.keys(elemen).length === 7
						) {
							classname = "code10";
							designname = "twoTexttwoCode";
							nodeType = "twoTexttwoCode";
						}

						if (
							elemen.textArea === "true" &&
							elemen.textArea2 === "true" &&
							elemen.code === "true" &&
							elemen.code2 === "true" &&
							Object.keys(elemen).length === 7
						) {
							classname = "code10";
							designname = "twoAreatwoCode";
							nodeType = "twoAreatwoCode";
						}

						if (
							elemen.textArea === "true" &&
							elemen.textArea2 === "true" &&
							elemen.Image === "true" &&
							elemen.Image2 === "true" &&
							Object.keys(elemen).length === 7
						) {
							classname = "code11";
							designname = "twoAreatwoImage";
							nodeType = "twoAreatwoImage";
						}
						if (
							elemen.code === "true" &&
							elemen.code2 === "true" &&
							elemen.Image === "true" &&
							elemen.Image2 === "true" &&
							Object.keys(elemen).length === 7
						) {
							classname = "code11";
							designname = "twoImagetwoCode";
							nodeType = "twoImagetwoCode";
						}

						if (
							elemen.textField === "true" &&
							elemen.textField2 === "true" &&
							elemen.Image === "true" &&
							elemen.textArea === "true" &&
							Object.keys(elemen).length === 7
						) {
							classname = "code10";
							designname = "twoTextOneAreaOneImage";
							nodeType = "twoTextOneAreaOneImage";
						}

						if (
							elemen.textField === "true" &&
							elemen.textField2 === "true" &&
							elemen.code === "true" &&
							elemen.textArea === "true" &&
							Object.keys(elemen).length === 7
						) {
							classname = "code10";
							designname = "twoTextOneAreaOneCode";
							nodeType = "twoTextOneAreaOneCode";
						}

						if (
							elemen.textField === "true" &&
							elemen.textField2 === "true" &&
							elemen.code === "true" &&
							elemen.Image === "true" &&
							Object.keys(elemen).length === 7
						) {
							classname = "code10";
							designname = "twoTextOneImageOneCode";
							nodeType = "twoTextOneImageOneCode";
						}

						if (
							elemen.textArea === "true" &&
							elemen.textArea2 === "true" &&
							elemen.code === "true" &&
							elemen.Image === "true" &&
							Object.keys(elemen).length === 7
						) {
							classname = "code10";
							designname = "twoTextOneImageOneCode";
							nodeType = "twoTextOneImageOneCode";
						}

						if (
							elemen.textArea === "true" &&
							elemen.textArea2 === "true" &&
							elemen.code === "true" &&
							elemen.textField === "true" &&
							Object.keys(elemen).length === 7
						) {
							classname = "code10";
							designname = "twoTextOneAreaOneCode";
							nodeType = "twoTextOneAreaOneCode";
						}

						if (
							elemen.textArea === "true" &&
							elemen.textArea2 === "true" &&
							elemen.Image === "true" &&
							elemen.textField === "true" &&
							Object.keys(elemen).length === 7
						) {
							classname = "code10";
							designname = "twoTextOneAreaOneImage";
							nodeType = "twoTextOneAreaOneImage";
						}

						if (
							elemen.textArea === "true" &&
							elemen.textField === "true" &&
							elemen.Image === "true" &&
							elemen.Image2 === "true" &&
							Object.keys(elemen).length === 7
						) {
							classname = "code10";
							designname = "twoImageoneTextoneArea";
							nodeType = "twoImageoneTextoneArea";
						}

						if (
							elemen.textArea === "true" &&
							elemen.code === "true" &&
							elemen.Image === "true" &&
							elemen.Image2 === "true" &&
							Object.keys(elemen).length === 7
						) {
							classname = "code10";
							designname = "twoImageoneTextoneCode";
							nodeType = "twoImageoneTextoneCode";
						}

						if (
							elemen.textField === "true" &&
							elemen.code === "true" &&
							elemen.Image === "true" &&
							elemen.Image2 === "true" &&
							Object.keys(elemen).length === 7
						) {
							classname = "code10";
							designname = "twoImageoneTextoneCode";
							nodeType = "twoImageoneTextoneCode";
						}

						if (
							elemen.textField === "true" &&
							elemen.textArea === "true" &&
							elemen.code === "true" &&
							elemen.code2 === "true" &&
							Object.keys(elemen).length === 7
						) {
							classname = "code10";
							designname = "twoCodeoneTextoneArea";
							nodeType = "twoCodeoneTextoneArea";
						}

						if (
							elemen.textField === "true" &&
							elemen.Image === "true" &&
							elemen.code === "true" &&
							elemen.code2 === "true" &&
							Object.keys(elemen).length === 7
						) {
							classname = "code10";
							designname = "twoCodeoneTextoneImage";
							nodeType = "twoCodeoneTextoneImage";
						}

						if (
							elemen.textArea === "true" &&
							elemen.Image === "true" &&
							elemen.code === "true" &&
							elemen.code2 === "true" &&
							Object.keys(elemen).length === 7
						) {
							classname = "code11";
							designname = "twoCodeoneTextoneImage";
							nodeType = "twoCodeoneTextoneImage";
						}

						// if (Object.keys(elemen).length === 7) {
						//   classname = "none";
						// }

						if (Object.keys(elemen).length === 3) {
							classname = "none";
						}
						return (
							<div
								className={classname}
								onDragStart={(event) =>
									onDragStart(event, `${nodeType}`, `${designname}`)
								}
								draggable
								key={elemen.id}
							>
								{elemen.textField === "true" ? <p>{elemen.name}</p> : ""}
								{elemen.textField2 === "true" ? <p>2nd Text Field</p> : ""}
								{elemen.textField3 === "true" ? <p>3rd Text Field</p> : ""}
								{elemen.Image === "true" ? (
									<img src="https://source.unsplash.com/random" alt="jcj" />
								) : (
									""
								)}
								{elemen.Image2 === "true" ? (
									<img src="https://source.unsplash.com/random" alt="jcj" />
								) : (
									""
								)}
								{elemen.Image3 === "true" ? (
									<img src="https://source.unsplash.com/random" alt="jcj" />
								) : (
									""
								)}
								{elemen.textArea === "true" ? (
									<textarea rows="3" placeholder="Text Area"></textarea>
								) : (
									""
								)}
								{elemen.textArea2 === "true" ? (
									<textarea rows="3" placeholder="Text Area"></textarea>
								) : (
									""
								)}
								{elemen.textArea3 === "true" ? (
									<textarea rows="3" placeholder="Text Area"></textarea>
								) : (
									""
								)}
								{elemen.code === "true" ? (
									<SyntaxHighlighter
										wrapLines={true}
										showLineNumbers={true}
										language="javascript"
										style={docco}
										className="codeNodeMain"
									>
										{codeString}
									</SyntaxHighlighter>
								) : (
									""
								)}
								{elemen.code2 === "true" ? (
									<SyntaxHighlighter
										wrapLines={true}
										showLineNumbers={true}
										language="javascript"
										style={docco}
										className="codeNodeMain"
									>
										{codeString}
									</SyntaxHighlighter>
								) : (
									""
								)}
								{elemen.code3 === "true" ? (
									<SyntaxHighlighter
										wrapLines={true}
										showLineNumbers={true}
										language="javascript"
										style={docco}
										className="codeNodeMain"
									>
										{codeString}
									</SyntaxHighlighter>
								) : (
									""
								)}
							</div>
						);
					})}
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
