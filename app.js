// let popPrice=80;
// if(popPrice>=200 && popPrice<=250){
//     console.log("XL");
// }
// else if(popPrice>=100 && popPrice<200){
//     console.log("L");
// }
// else if(popPrice>=50 && popPrice<100){
//     console.log("M");
// }
// else{
//     console.log("S")
// }

// let str= "ab";
// if(str[0]==="a" && (str.length>3)){
// console.log(`${str} is a Good string`);
// }
// else{
//     console.log(`${str} is a bad String`);
// }

//  let firstName=prompt("Enter Your Firstname :");
//  let lastName=prompt("Enter Your lastName :");
//  console.log(`your fullName is : ${firstName} ${lastName}`);
// let fullName ="      yasir fida    ";
// const newfullname =fullName.toUpperCase().trim();
// console.log(newfullname);
// let masg="help!";
// console.log(masg.trim().toUpperCase());
// let name="ApnaCollage";
// console.log(name.indexof("na"));
// console.log(name.replace("Apna","Our"));
// let clg= name.slice(4).replace("l","t").toUpperCase();
// console.log(clg);
// let start =["january", "july","march","august"]
// let final =start.splice(0,2,"july","june");
// console.log(start);
// console.log(final);
// let lang=["c","c++","html","javascript","python","java","c#","sql"]
// console.log(lang.indexOf("javascript"));
// lang.reverse();
// let reverseJavascript=lang.indexOf("javascript");
// console.log(reverseJavascript)

// let tikTak=[["X" ,"null","O"],[" " ,"Y","O"],["O" ," ","X"]];
// console.log(tikTak);
// tikTak[0][1]="0";
// console.log(tikTak)
// let posArray=[1,3,4,5,6,-7,-8,-2,10];
// let ans=posArray.slice(5,posArray.length-1);
// console.log(ans);
// console.log(ans.length);
// let str=prompt("please enter a string");
// if(str.length==0){
//     console.log("the string is empty");
// }
// else{
//     console.log(`the string is not empty`);
// }
// let name=prompt("Enter your name :");
// for(let i; i<name.length; i++){
//     if(name[i]==name.charAt(i).toLowercase())
// }
// let numbers=[5,6,7,8,9,1];
// let item=6;
// let name=prompt("enter your name:");
// console.log(name.trim());
// 'const number =5;
// for(let i=1; i<=10; i++){
//     let product =number *i;
//     console.log(`${number}*${i}=${product}`);
// }'
// const favMovie="whiplash";
// let userGuess =prompt("guess the favrite movie :");
// while((userGuess!=favMovie) && (userGuess!=="quit")){
//     userGuess=prompt("wrong guess ,Please try again!! ");
// }
// if(userGuess==favMovie){
//     console.log("congrats!");
// }

// let student1={
//     name: "yasir",
//     password:"Hussain007@",
// }
// let userName=prompt("Enter your Name:");
// let userPassword=prompt("Enter your Password:");
// while((userName!=student1.name) ||(userPassword!=student1.password)){
//    userName=prompt("You Entered the wrong user Name:");
//    userPassword=prompt("You Entered the wrong user password:");
// }
// if((userName==student1.name) && (userPassword==student1.password)){
// console.log("You are logged In");
// }
// let todo=[];
// let req=prompt("please enter your request ");
// while(true){
//      for(let i=0; i<todo.length; i++){
//        console.log(i,todo[i]);
//    }
//     if(req=="quit"){
//         console.log("quitting app");
//         break;
//     }
  
//     else if(req=="add"){
//         let task=prompt("please enter the task you want to add");
//         todo.push(task);
//         console.log('task added');
//     }
//     else if(req=="delete"){
//         let idx=prompt("please enter the task index ");
//         todo.splice(idx,1);
//         console.log("task deleted!");
//     }
//     else{
//        console.log("wronge req");
//     }
//     req=prompt("please enter your request");
// }
// let array=[1,2,3,4,5,6,7,8];
// let num=prompt("enter a number to delete");
// for(let i=0; i<array.length;  i++){
//     if(array[i]==num){
//         array.splice(i,1);
//     }
// }
// console.log(array);
// let number =12345;

// // for(let i=0; i<number.length; i++){
// //     count++;
    
// // }
// // console.log(count);
// let sum=0;
// for(let i=0; i<number.length; i++){
//     sum=sum+number[i];
// }
// console.log(`The sum of ${number} is : ${sum}..`);
// nested object
// const classInfo={
//     aman:{
//         grade:"A+",
//         city: "Delhi",
//     },
//     yasir:{
//         grade:"0",
//         city: "dubai",
//     },
//     madara:{
//         grade:"B+",
//         city: "chilli",
//     }
// }
//     console.log(classInfo.aman.);
// const cllasInfo=[];
    // let ludoGuess=Math.random();
    // console.log(ludoGuess)
//   ludoGuess=ludoGuess*6;
//    console.log(ludoGuess);
//    let randomNumber=Math.floor(ludoGuess);
//     console.log(randomNumber +1);

// let randomNumber=Math.floor(Math.random()*100 +1);
// console.log(randomNumber);
// let randomNumber=Math.floor(Math.random()*5 +1);
// console.log(randomNumber);
// let todo=[];
// let req=prompt("please enter your request ");
// while(true){
//     if(req=="list"){
//          for(let i=0; i<todo.length; i++){
//        console.log(i,todo[i]);
//     }
//     }
//     if(req=="quit"){
//         console.log("quitting app");
//         break;
//     }
  
//     else if(req=="add"){
//         let task=prompt("please enter the task you want to add");
//         todo.push(task);
//         console.log('task added');
//     }
//     else if(req=="delete"){
//         let idx=prompt("please enter the task index ");
//         todo.splice(idx,1);
//         console.log("task deleted!");
//     }
//     else if(req=="list"){
//         console.log(todo);
//     }
//     else{
//        console.log("wronge req");
//     }
//     req=prompt("please enter your request");
// }

