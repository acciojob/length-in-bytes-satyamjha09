const byteSize = (str) => {
	
  const encoder = new TextEncoder();
  const encoded = encoder.encode(str);
  return encoded.length
};    
 
//Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
