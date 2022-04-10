import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

export const toastMessage = ({ message }) => {
	toast(message, { type: toast.TYPE.ERROR });
};

export const toastMessageWarning = ({ message }) => {
	toast(message, { type: toast.TYPE.WARNING });
};

export const toastMessageSuccess = ({ message }) => {
	toast(message, { type: toast.TYPE.SUCCESS });
};
