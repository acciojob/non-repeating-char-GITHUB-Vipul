function firstNonRepeatedChar(str) {
 // Write your code here
	let obj={};
	let ans=0;
	for(let i=0;i<str.length;i++)
		{
			let char=str.charCodeAt(i);
			if(obj[char]==undefined)
			{
				obj[char]=1;
			}
			else
			{
				let count=obj[char];
				obj[char]=count+1;
			}
		}

	for(let key in obj)
		{
			if(obj[key]===1)
			{
				ans=key;
			}
		}
	return ans==0?null:String.fromCharCode(ans);

}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
