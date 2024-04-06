export const splitStringToDivs = (inputString) => {
	const result = [];
	const length = inputString.length;
	const chunkSize = 5;
	
	for (let i = 0; i < length; i += chunkSize) {
	  const chunk = inputString.substring(i, i + chunkSize);
	  result.push(<div key={i}>{chunk}</div>);
	}
	
	return result;
}