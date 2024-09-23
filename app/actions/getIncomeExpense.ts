'use server'

import {db} from '@/lib/db'
import { auth } from '@clerk/nextjs/server'

async function getIncome(): Promise<{
	income?: number;
	expense?: number
	error?: string;
}> {
	const { userId } = auth()

	if(!userId){
		return { error: 'You must be logged in to get your income' }
	}

	try{
		const transactions = await db.transaction.findMany({
			where: { 
				userId
			}
		})

		const amounts = transactions.map(transaction => transaction.amount)

		const income = amounts.filter(amount => amount > 0).reduce((sum, amount) => sum + amount, 0)
		
		const expense = amounts.filter(amount => amount < 0).reduce((sum, amount) => sum + amount, 0)



		return {income, expense: Math.abs(expense)}
	}catch(error){
		return { error: 'Income Database error'}
	}
}

export default getIncome