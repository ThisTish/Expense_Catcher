export function commaNumbers(x: number): string{
	console.log(x)
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}