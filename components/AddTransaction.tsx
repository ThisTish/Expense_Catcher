'use client'

import addTransaction from "@/app/actions/addTransaction"
import { toast } from "react-toastify"

const AddTransaction = () => {

	const clientAction = async (formData: FormData) => {
		const { data, error } = await addTransaction(formData)

		if (error) {
			toast.error(error)
		} else {
			console.log(data)
		}
	}
	return (
		<>
			<h3>Add Transaction</h3>
			<form action={clientAction}>
				<div className="formcontrol">
					<label htmlFor="text">Text</label>
					<input type="text" id="text" name="text" placeholder="Enter Transaction..." />
					<label htmlFor="amount">Amount <br /> <span>(negative=expense & positive=income)</span></label>
					<input type="number" id="amount" name="amount" step='0.01' placeholder="Enter Amount..." />

					<button className="btn">Add Transaction</button>
				</div>
			</form>
		</>
	);
}

export default AddTransaction;