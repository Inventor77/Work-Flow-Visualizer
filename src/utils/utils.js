import { db } from "../../../src/firebase";
import { toastMessageSuccess } from "./toast";

// --------------- Create ---------------

export const addData = async (name, data) => {
	let returnData = await db.collection(name).add(data);
	return returnData;
};

// --------------- Read ---------------

export const readData = async (name) => {
	let returnData = await db.collection(name).get();
	return returnData;
};

// --------------- Update ---------------

export const updateData = async (name, docId, value) => {
	await db
		.collection(name === "node" ? "custom_nodes" : "issueModule")
		.doc(docId)
		.update(value)
		.then(() =>
			toastMessageSuccess(
				{
					message: `${
						name === "node" ? "Data " : "File "
					} has been updated successfully`,
				},
				(error) => console.log(error)
			)
		);
};

// ------------ Delete --------------

export const deleteData = async (name, docId) => {
	let returnData = await db
		.collection(name === "node" ? "custom_nodes" : "issueModule")
		.doc(docId)
		.delete()
		.then(
			() => {
				toastMessageSuccess({
					message: `${
						name === "node" ? "Data " : "File "
					} has been deleted successfully !`,
				});
			},
			(error) => console.log(error)
		);
	return returnData;
};
