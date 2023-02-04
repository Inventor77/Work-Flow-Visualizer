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
			className={`${toggle
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
						if (elemen.textField && elemen.textArea && elemen.Image) {
							classname = "custom";
							designname = "rectangleWithImageText";
							nodeType = "customNode";
						}
						if (elemen.textField && elemen.Image && Object.keys(elemen).length === 5) {
							classname = "image";
							designname = "rectangleWithImage";
							nodeType = "selectorNode";
						}
						if (elemen.textArea && elemen.Image && Object.keys(elemen).length === 5) {
							classname = "custom-2";
							designname = "rectangleWithImageArea";
							nodeType = "nodeWithImageText";
						}

						if (elemen.textArea && Object.keys(elemen).length === 4
						) {
							classname = "image";
							designname = "text";
							nodeType = "default";
						}

						if (elemen.Image && Object.keys(elemen).length === 4) {
							classname = "only-image";
							designname = "onlyImage";
							nodeType = "nodeWithImageOnly";
						}

						if (elemen.textField && elemen.textArea && Object.keys(elemen).length === 5) {
							classname = "image";
							designname = "nodeTextAndArea";
							nodeType = "nodeWithTextAndArea";
						}
						if (elemen.textField && Object.keys(elemen).length === 4) {
							classname = "dndnode output";
							designname = "text";
							nodeType = "default";
						}
						if (elemen.textField && elemen.textField2 && Object.keys(elemen).length === 5) {
							classname = "textfield2";
							designname = "text2";
							nodeType = "mainCustomNode";
						}
						if (elemen.textField && elemen.textField2 && elemen.textField3 && Object.keys(elemen).length === 6) {
							classname = "textfield3";
							designname = "text3";
							nodeType = "nodeWith3Text";
						}
						if (elemen.textArea && elemen.textArea2 && Object.keys(elemen).length === 5) {
							classname = "textarea2";
							designname = "textarea2";
							nodeType = "nodeWith2TextArea";
						}
						if (elemen.textArea && elemen.textArea2 && elemen.textArea3 && Object.keys(elemen).length === 6) {
							classname = "textarea3";
							designname = "textarea3";
							nodeType = "nodeWith3TextArea";
						}

						if (elemen.Image && elemen.Image2 && elemen.Image3 && Object.keys(elemen).length === 6) {
							classname = "image3";
							designname = "image3";
							nodeType = "nodeWith3Image";
						}

						if (elemen.Image && elemen.Image2 && Object.keys(elemen).length === 5) {
							classname = "image3";
							designname = "image2";
							nodeType = "nodeWith2Image";
						}
						if (elemen.textField && elemen.textField2 && elemen.textArea && Object.keys(elemen).length === 6) {
							designname = "field2area1";
							nodeType = "nodeWith2Field1Area";
						}
						if (elemen.textField && elemen.textField2 && elemen.Image && Object.keys(elemen).length === 6) {
							designname = "field2image1";
							nodeType = "nodeWith2Field1Image";
						}
						if (elemen.textArea && elemen.textArea2 && elemen.textField && Object.keys(elemen).length === 6) {
							classname = "area2field1";
							designname = "area2field1";
							nodeType = "nodeWith2Area1Field";
						}

						if (elemen.textArea && elemen.textArea2 && elemen.Image && Object.keys(elemen).length === 6) {
							classname = "area2image1";
							designname = "area2image1";
							nodeType = "nodeWith2Area1Image";
						}

						if (elemen.Image && elemen.Image2 && elemen.textField && Object.keys(elemen).length === 6) {
							classname = "image2field1";
							designname = "image2field1";
							nodeType = "nodeWith2Image1Field";
						}

						if (elemen.Image && elemen.Image2 && elemen.textArea && Object.keys(elemen).length === 6) {
							classname = "image2field1";
							designname = "image2area1";
							nodeType = "nodeWith2Image1Area";
						}

						if (elemen.code && elemen.code2 && elemen.code3 && Object.keys(elemen).length === 6) {
							classname = "code3";
							designname = "threecode";
							nodeType = "codethree";
						}

						if (elemen.code && elemen.code2 && elemen.textField && Object.keys(elemen).length === 6) {
							classname = "code4";
							designname = "oneTextTwoCode";
							nodeType = "oneTextTwoCode";
						}
						if (
							elemen.code &&
							elemen.code2 &&
							elemen.textArea &&
							Object.keys(elemen).length === 6
						) {
							classname = "code4";
							designname = "oneAreaTwoCode";
							nodeType = "oneAreaTwoCode";
						}

						if (
							elemen.code &&
							elemen.code2 &&
							elemen.Image &&
							Object.keys(elemen).length === 6
						) {
							classname = "code4";
							designname = "oneImageTwoCode";
							nodeType = "oneImageTwoCode";
						}
						if (
							elemen.code &&
							elemen.textField &&
							elemen.textField2 &&
							Object.keys(elemen).length === 6
						) {
							classname = "code5";
							designname = "twoTextOneCode";
							nodeType = "twoTextOneCode";
						}
						if (
							elemen.code &&
							elemen.textArea &&
							elemen.textArea2 &&
							Object.keys(elemen).length === 6
						) {
							classname = "code4";
							designname = "twoAreaOneCode";
							nodeType = "twoAreaOneCode";
						}
						if (
							elemen.code &&
							elemen.Image &&
							elemen.Image2 &&
							Object.keys(elemen).length === 6
						) {
							classname = "code4";
							designname = "twoImageOneCode";
							nodeType = "twoImageOneCode";
						}
						if (
							elemen.code &&
							elemen.textArea &&
							elemen.Image &&
							Object.keys(elemen).length === 6
						) {
							classname = "code6";
							designname = "oneConeAoneI";
							nodeType = "oneConeAoneI";
						}
						if (
							elemen.code &&
							elemen.textField &&
							elemen.Image &&
							Object.keys(elemen).length === 6
						) {
							classname = "code6";
							designname = "oneConeToneI";
							nodeType = "oneConeToneI";
						}

						if (
							elemen.code &&
							elemen.textField &&
							elemen.textArea &&
							Object.keys(elemen).length === 6
						) {
							classname = "code6";
							designname = "oneConeAoneT";
							nodeType = "oneConeAoneT";
						}

						if (elemen.code && Object.keys(elemen).length === 4) {
							classname = "code";
							designname = "onlyCode";
							nodeType = "onlyCode";
						}

						if (
							elemen.code &&
							elemen.textArea &&
							Object.keys(elemen).length === 5
						) {
							classname = "code8";
							designname = "oneCodeoneArea";
							nodeType = "oneCodeoneArea";
						}

						if (
							elemen.code &&
							elemen.Image &&
							Object.keys(elemen).length === 5
						) {
							classname = "code8";
							designname = "oneCodeoneImage";
							nodeType = "oneCodeoneImage";
						}

						if (
							elemen.code &&
							elemen.textField &&
							elemen.textArea &&
							elemen.Image &&
							Object.keys(elemen).length === 7
						) {
							classname = "code10";
							designname = "fourElements";
							nodeType = "fourElements";
						}

						if (
							elemen.textField &&
							elemen.textField2 &&
							elemen.textArea &&
							elemen.textArea2 &&
							Object.keys(elemen).length === 7
						) {
							classname = "code10";
							designname = "twoTexttwoArea";
							nodeType = "twoTexttwoArea";
						}

						if (
							elemen.textField &&
							elemen.textField2 &&
							elemen.Image &&
							elemen.Image2 &&
							Object.keys(elemen).length === 7
						) {
							classname = "code10";
							designname = "twoTexttwoImage";
							nodeType = "twoTexttwoImage";
						}

						if (
							elemen.textField &&
							elemen.textField2 &&
							elemen.code &&
							elemen.code2 &&
							Object.keys(elemen).length === 7
						) {
							classname = "code10";
							designname = "twoTexttwoCode";
							nodeType = "twoTexttwoCode";
						}

						if (
							elemen.textArea &&
							elemen.textArea2 &&
							elemen.code &&
							elemen.code2 &&
							Object.keys(elemen).length === 7
						) {
							classname = "code10";
							designname = "twoAreatwoCode";
							nodeType = "twoAreatwoCode";
						}

						if (
							elemen.textArea &&
							elemen.textArea2 &&
							elemen.Image &&
							elemen.Image2 &&
							Object.keys(elemen).length === 7
						) {
							classname = "code11";
							designname = "twoAreatwoImage";
							nodeType = "twoAreatwoImage";
						}
						if (
							elemen.code &&
							elemen.code2 &&
							elemen.Image &&
							elemen.Image2 &&
							Object.keys(elemen).length === 7
						) {
							classname = "code11";
							designname = "twoImagetwoCode";
							nodeType = "twoImagetwoCode";
						}

						if (
							elemen.textField &&
							elemen.textField2 &&
							elemen.Image &&
							elemen.textArea &&
							Object.keys(elemen).length === 7
						) {
							classname = "code10";
							designname = "twoTextOneAreaOneImage";
							nodeType = "twoTextOneAreaOneImage";
						}

						if (
							elemen.textField &&
							elemen.textField2 &&
							elemen.code &&
							elemen.textArea &&
							Object.keys(elemen).length === 7
						) {
							classname = "code10";
							designname = "twoTextOneAreaOneCode";
							nodeType = "twoTextOneAreaOneCode";
						}

						if (
							elemen.textField &&
							elemen.textField2 &&
							elemen.code &&
							elemen.Image &&
							Object.keys(elemen).length === 7
						) {
							classname = "code10";
							designname = "twoTextOneImageOneCode";
							nodeType = "twoTextOneImageOneCode";
						}

						if (
							elemen.textArea &&
							elemen.textArea2 &&
							elemen.code &&
							elemen.Image &&
							Object.keys(elemen).length === 7
						) {
							classname = "code10";
							designname = "twoTextOneImageOneCode";
							nodeType = "twoTextOneImageOneCode";
						}

						if (
							elemen.textArea &&
							elemen.textArea2 &&
							elemen.code &&
							elemen.textField &&
							Object.keys(elemen).length === 7
						) {
							classname = "code10";
							designname = "twoTextOneAreaOneCode";
							nodeType = "twoTextOneAreaOneCode";
						}

						if (
							elemen.textArea &&
							elemen.textArea2 &&
							elemen.Image &&
							elemen.textField &&
							Object.keys(elemen).length === 7
						) {
							classname = "code10";
							designname = "twoTextOneAreaOneImage";
							nodeType = "twoTextOneAreaOneImage";
						}

						if (
							elemen.textArea &&
							elemen.textField &&
							elemen.Image &&
							elemen.Image2 &&
							Object.keys(elemen).length === 7
						) {
							classname = "code10";
							designname = "twoImageoneTextoneArea";
							nodeType = "twoImageoneTextoneArea";
						}

						if (
							elemen.textArea &&
							elemen.code &&
							elemen.Image &&
							elemen.Image2 &&
							Object.keys(elemen).length === 7
						) {
							classname = "code10";
							designname = "twoImageoneTextoneCode";
							nodeType = "twoImageoneTextoneCode";
						}

						if (
							elemen.textField &&
							elemen.code &&
							elemen.Image &&
							elemen.Image2 &&
							Object.keys(elemen).length === 7
						) {
							classname = "code10";
							designname = "twoImageoneTextoneCode";
							nodeType = "twoImageoneTextoneCode";
						}

						if (
							elemen.textField &&
							elemen.textArea &&
							elemen.code &&
							elemen.code2 &&
							Object.keys(elemen).length === 7
						) {
							classname = "code10";
							designname = "twoCodeoneTextoneArea";
							nodeType = "twoCodeoneTextoneArea";
						}

						if (
							elemen.textField &&
							elemen.Image &&
							elemen.code &&
							elemen.code2 &&
							Object.keys(elemen).length === 7
						) {
							classname = "code10";
							designname = "twoCodeoneTextoneImage";
							nodeType = "twoCodeoneTextoneImage";
						}

						if (
							elemen.textArea &&
							elemen.Image &&
							elemen.code &&
							elemen.code2 &&
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
								{elemen.textField ? <p>{elemen.name}</p> : ""}
								{elemen.textField2 ? <p>2nd Text Field</p> : ""}
								{elemen.textField3 ? <p>3rd Text Field</p> : ""}
								{elemen.Image ? (
									<img src="https://source.unsplash.com/random" alt="jcj" />
								) : (
									""
								)}
								{elemen.Image2 ? (
									<img src="https://source.unsplash.com/random" alt="jcj" />
								) : (
									""
								)}
								{elemen.Image3 ? (
									<img src="https://source.unsplash.com/random" alt="jcj" />
								) : (
									""
								)}
								{elemen.textArea ? (
									<textarea rows="3" placeholder="Text Area"></textarea>
								) : (
									""
								)}
								{elemen.textArea2 ? (
									<textarea rows="3" placeholder="Text Area"></textarea>
								) : (
									""
								)}
								{elemen.textArea3 ? (
									<textarea rows="3" placeholder="Text Area"></textarea>
								) : (
									""
								)}
								{elemen.code ? (
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
								{elemen.code2 ? (
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
								{elemen.code3 ? (
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
