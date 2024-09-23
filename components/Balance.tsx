import getUserBalance from '@/app/actions/getUserBalance'
import { commaNumbers } from '@/lib/utils';

const Balance = async () => {
	const {balance} = await getUserBalance()

	return (
		<>
			<h2>Your Balance</h2>
			{/* nullish coalescing operator */}
			<h3>${commaNumbers(Number(balance?.toFixed(2) ?? 0))}</h3>
		</>);
}

export default Balance;