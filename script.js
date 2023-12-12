function firstNonRepeatedChar(str) {
 // Write your code here
	let ans=0;
	for(let i=0;i<str.length;i++)
		{
			let num=str.charCodeAt(i);
			ans^=num;
		}
	return ans==0?null:String.fromCharCode(ans);

}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
