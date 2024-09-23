import getIncome from "@/app/actions/getIncomeExpense"
import { commaNumbers } from "@/lib/utils"

const IncomeExpense = async () => {
	const {income, expense} = await getIncome()

	return (
		<div className="inc-exp-container">
			<div>
				<h4>Income</h4>
				<p className="money plus">${commaNumbers(Number(income?.toFixed(2)))}</p>
			</div>
			<div>
				<h4>Expense</h4>
				<p className="money minus">${commaNumbers(Number(expense?.toFixed(2)))}</p>
			</div>
			</div>
			);
}

			export default IncomeExpense;