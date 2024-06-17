// Any Type:
var num = 5;
num = "hello";
num = false;
// Unknown Type:
// type checking if number then this and string then this
var num2;
num2 = 4;
num2 = "user";
num2 = false;
if (typeof num2 === "number") {
    console.log(num2 + 2);
}
else if (typeof num2 === "boolean") {
    console.log(num2);
}
// async function fetchData(): Promise<unknown>{
//     const response = await fetch("https://api.example.com/data");
//     const data = await response.json();
//     return data;
// }
// async function processData(){
//     const response = await fetchData();
//     if (typeof response === "object") {
//         console.log("response ->", response);
//     }
// }
