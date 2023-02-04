import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBuffer, FaFolderPlus } from "react-icons/fa";
import Popup from "reactjs-popup";
import { toastMessageWarning } from "../../utils/toast";
import { addData, readData, deleteData } from "../../utils/utils";

const NewNode = () => {
	const [nodeName, setNodeName] = useState("");
	const [nodeDesc, setNodeDesc] = useState("");
	const [nodes, setNodes] = useState([]);
	const [nodeId, setNodeId] = useState([]);

	useEffect(() => {
		read();
	}, []);

	const read = () => {
		readFile()
			.then((data) => {
				setNodes(data[0]);
				setNodeId(data[1]);
			})
			.catch((err) => console.log(err.message));
	};

	const readFile = async () => {
		const docs = await readData("custom_nodes");
		let arr = [],
			id = [];
		docs.forEach((cur) => {
			arr = [...arr, cur.data()];
			id = [...id, cur.id];
		});
		return [arr, id];
	};

	const addNode = async (data) => {
		await addData("custom_nodes", data).then(() => read());
	};

	return (
		<div className="app">
			<main>
				<div className="new-node">
					<header className="top-nav">
						<Popup
							trigger={
								<div className="add-node">
									<FaFolderPlus />
									<span className="tab-text">New Node</span>
								</div>
							}
							modal
							nested
						>
							{(close) => (
								<div className="modal">
									<div className="header"> Create Node </div>
									<div className="content">
										<div className="input-field-container">
											<label>Name of Node:</label>
											<input
												type="text"
												placeholder="Name of the Node"
												value={nodeName}
												onChange={(evt) => setNodeName(evt.target.value)}
											/>
										</div>
										<div className="input-field-container">
											<label>Description of Node:</label>
											<input
												type="text"
												placeholder="Description of the Node"
												value={nodeDesc}
												onChange={(evt) => setNodeDesc(evt.target.value)}
											/>
										</div>
									</div>
									<div className="actions">
										<button className="popup-btn" onClick={close}>
											Cancel
										</button>
										<button
											className="popup-btn"
											onClick={() => {
												if (nodeName === "") {
													toastMessageWarning({
														message: "Please provide name of the node",
													});
													return;
												}
												if (nodeDesc === "") {
													toastMessageWarning({
														message: "Please provide description of the node",
													});
													return;
												}
												var data = {
													id: (
														Math.random() +
														(sessionStorage.length + 1)
													).toString(),
													name: `${nodeName}`,
													Description: `${nodeDesc}`,
												};
												addNode(data);
												close();
											}}
										>
											Create
										</button>
									</div>
								</div>
							)}
						</Popup>
						<div className="tab-container">
							<Link to="/" className="tab">
								<FaBuffer />
								<span className="tab-text"> Projects </span>
							</Link>
							<Link to="/new-node" className="tab active-tab">
								<FaBuffer />
								<span className="tab-text"> Nodes </span>
							</Link>
						</div>
					</header>
					<h1 className="node-main-title"> Nodes </h1>
					<div className="node-main-content">
						<div className="main-content-list">
							<table id="node-table">
								<thead>
									<tr>
										<th>Node Name</th>
										<th>Node Description</th>
										<th>No of Field Present</th>
										<th>Remove Node</th>
									</tr>
								</thead>
								<tbody>
									{Object.keys(nodes).map((id) => {
										const node = JSON.stringify(nodes[id]);
										var noOfFields = 0;
										if (nodes[id].Image) {
											noOfFields++;
										}
										if (nodes[id].textArea) {
											noOfFields++;
										}
										if (nodes[id].textField) {
											noOfFields++;
										}
										if (nodes[id].Image2) {
											noOfFields++;
										}
										if (nodes[id].textArea2) {
											noOfFields++;
										}
										if (nodes[id].textField2) {
											noOfFields++;
										}
										if (nodes[id].Image3) {
											noOfFields++;
										}
										if (nodes[id].textArea3) {
											noOfFields++;
										}
										if (nodes[id].textField3) {
											noOfFields++;
										}
										if (nodes[id].code) {
											noOfFields++;
										}
										if (nodes[id].code2) {
											noOfFields++;
										}
										if (nodes[id].code3) {
											noOfFields++;
										}
										return (
											<tr className="table-nodes" key={id}>
												<td>
													<Link
														to={{
															pathname: "/create-node",
															state: `${node}`,
															id: `${id}`,
															name: `${nodes[id].name}`,
															description: `${nodes[id].Description}`,
														}}
														style={{
															textDecoration: "none",
															color: "black",
														}}
													>
														{nodes[id].name}
													</Link>
												</td>
												<td>{nodes[id].Description}</td>
												<td>{noOfFields}</td>
												<td>
													<button
														onClick={() => {
															deleteData("node", nodeId[id]).then(() => read());
														}}
														className="delete-btn"
													>
														<span className="tab-text">Delete</span>
													</button>
												</td>
											</tr>
										);
									})}
									<tr className="no-click">
										<td>Text Node</td>
										<td>Default Node with Text</td>
										<td>1</td>
										<td>
											<button className="delete-btn no-click">
												<span className="tab-text">Delete</span>
											</button>
										</td>
									</tr>
									<tr className="no-click">
										<td>Image Node</td>
										<td>Default Node with Image and Text</td>
										<td>1</td>
										<td>
											<button className="delete-btn no-click">
												<span className="tab-text">Delete</span>
											</button>
										</td>
									</tr>
									<tr className="no-click">
										<td>Code Node</td>
										<td>Default Node with Code and Text</td>
										<td>1</td>
										<td>
											<button className="delete-btn no-click">
												<span className="tab-text">Delete</span>
											</button>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default NewNode;
