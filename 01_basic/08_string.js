const name="rahul "//string datatype
const repo=40
console.log(name+repo+" is the name of the person")
 
//modern

 console.log(`hwllo my name is ${name } and my repo is ${repo}`)

 console.log(name.length)//to know length of string

 console.log(name.toUpperCase())//to convert string into uppercase

 console.log(name.toLowerCase())//to convert string into lowercase    

    console.log(name.slice(0,3))//to slice string from index 0 to 3 but 3 is excluded

    console.log(name.replace("rahul","suman"))//to replace string value

    console.log(name.concat(" ","suman"))//to concat string

    console.log(name.trim())//to remove extra spaces

    console.log(name.charAt(2))//to know character at specific index

    console.log(name.indexOf("h"))//to know index of specific character

    console.log(name.includes("rah"))//to check string include specific character or not

    console.log(name.split(""))//to convert string into array based on specific character

    console.log(name.split("a"))//to convert string into array based on specific character


    const newString= name.substring(0,4)//to slice string from index 0 to 4 but 4 is excluded
    console.log(newString)