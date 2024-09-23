'use server'

import { db } from '@/lib/db'
import { auth } from '@clerk/nextjs/server'
import { revalidatePath } from 'next/cache';
import { toast } from 'react-toastify';

async function deleteTransaction(transactionId: string): Promise<{
	message?: string;
	error?: string;
}> {
	const { userId } = auth()

	if (!userId) {
		return { error: 'You must be logged in to get your balance' }
	}

	try {
		await db.transaction.delete({
			where: { id: transactionId, userId }
		})
		revalidatePath('/')
		return { message: 'Transaction deleted' }

	} catch (error) {
		return { error: 'Balance Database error' }
	}
}

export default deleteTransaction