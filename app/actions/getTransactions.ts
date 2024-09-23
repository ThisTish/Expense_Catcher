'use server'

import {db} from '@/lib/db'
import { Transaction } from '@/types/transaction';
import { auth } from '@clerk/nextjs/server'

async function getTransactions(): Promise<{
	transactions?: Transaction[]
	error?: string;
}> {
	const { userId } = auth()

	if(!userId){
		return { error: 'You must be logged in to get your balance' }
	}

	try{
		const transactions = await db.transaction.findMany({
			where: { userId },
			orderBy: { createdAt: 'desc'}
		})
		

		return {transactions}
	}catch(error){
		return { error: 'Balance Database error'}
	}
}

export default getTransactions