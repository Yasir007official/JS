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

// 
// let userNumber=prompt("Enter a Number:");
// function multiplication(number){
//     for(let i=1; i<=10; i++){
//     let product=number*i;
//     console.log(product);

//      }
//     for(let i=number;i<=n*10; i+=n );
// }
// multiplication(userNumber);
// function printTanle(n){
//     for(let i=n; i<=n*10; i+=n){
//         console.log(i);
//     }
// }
// printTanle(4);
// let num=2;

// function totalSum(num){
//     let sum=0;
// for(let i=1; i<=num; i++){
//    sum=sum+i;
//     }
//    return sum;
// }
// console.log(totalSum(num));

// let array =["yasir","is","a","good","boy"];
// function getFullstring(array){
//     let stringConcat="";
//     for(let i=0; i<array.length; i++){
//         stringConcat=`${stringConcat} ${array[i]}`;
//     }
//     return stringConcat;
// }
// let fullstring=getFullstring(array);
// console.log(fullstring);
// function evenoddDectector(request){
//     if(request==="odd"){
//         return function(n){
//             console.log(!(n%2==0));
//         }
//     }


// }
// function func(a,b){
//     return a+b;
// }
// // function calculator(func){
//    return func
// // }
// const calculator={
//     // add: function(a,b){
//     //     return a+b;
//     // },
//     // sub: function(a,b){
//     //     return a-b;
//     // },
//     // div: function(a,b){
//     //     return a/b;
//     // },
//    add(a,b){
//     return a+b;
//    },
//    sub(a,b){
//     return a-b;
//    }
// }
// let total=calculator.add(1,2);
// let array=[1,2,5,6,7];
// let number=3;
// function largerNumber(number,array){
//     for(let i=0; i<array.length; i++){
//      if(array[i]>number){
//         console.log(array[i]
//         );
//      }
//     }

// }
// let larNumb=largerNumber(number,array);
// DAY 20

// const sube=(n){
//     return n*n*n;
// }
//  const mult=(a,b)=>(a*b)
// console.log("hi there");
// setTimeout(
//     ()=>{
//         console.log("Apna college");
//     },4000);
//     console.log("wellcome to");
// let id=setInterval(()=>{
//     console.log("Hi Yasir Fida");
// },6000);

// clearInterval(id);
// let squ=a=>(a*a);

// let id=setInterval(()=>{
// console.log("Hello World!!");
// },2000);
// setTimeout(()=>{
//     clearInterval(id); 
// },10000);
// setInterval(()=>{
//     clearInterval(id); 
// },10000);
// const students={
//     name:"divishan",
//     age:"18",
//     gender:"male",

// }

// let array=[1,2,34,5,5];
// let print=function print(el){
//     console.log(el);
// }
// array.forEach(print);
// array.forEach((el)=>{
// console.log(el);
// })
// for(const a of array){
//     console.log(a);
// }
// const students=[
//     {
//     name:"divishan",
//     age:"18",
//     gender:"male",
// },
//     {
//     name:"dev",
//     age:"18",
//     gender:"male",
// },
//     {
//     name:"good",
//     age:"18",
//     gender:"male",
// },
// ];
// let info=students.map((student)=>{
//     student.grade="A";
//     return student.age;
// })
// console.log(info);
// let array=[6,4,3,4];
// let total=array.reduce((rel, el)=>
// {
//     console.log(rel);
// return rel+el;
// });
// console.log(total);
// let max=array.reduce((max,el)=>{
// if(el>max){
//     return el;
// }
// else{
//     return max;
// }
// });
// console.log(max);
// let numbs=[2,8,30,40,5];
// // let ans =numbs.every((el)=>el%10==0);
// // console.log(ans);
// const min =numbs.reduce((min,el)=>{
//     if(el>min){
//         return min;
//     }
//  else{
//     return el;
// ),0}
//  console.log(min);

// })
// console.log(min);
// const maximum=numbs.reduce((max,num)=>{
//     if(max>num){
//         return num;
//     }
//     else{
//         return max;
//     }
// });
// console.log(maximum);
// const maximum=numbs.reduce((acc,el)=>{
//  console.log(`acc: ${acc} and el: ${el}`);
//  return acc+el;
// },0);
// console.log(maximum)::["yasir fida is a great s"]
// let array=[1,2,3,4,5,6,4,3,6,6,7];
// console.log(Math.min(...array));
// console.log(...array); 
// function sum(...array){
//     return array.reduce((sum,el)=>sum +el);
// }
// let heading =document.querySelector("h1");
// heading.setAttribute("class","new");
// let links=document.querySelectorAll(".box a");
// links.style.textTransform="none";
// let newPara=document.createElement("p");
// newPara.innerText="hi my name is peter parker!!";
// document.body.append(newPara);
// console.log(newPara);
// /* This code snippet is creating a new paragraph element `<p>` using `document.createElement("p")`.
// It then sets the inner text of the paragraph to "Hey I'm red!" using `para.innerText`. After
// that, it appends this newly created paragraph element to the body of the HTML document using
// `document.querySelector("body").append(para)`. Finally, it adds a CSS class "new" to the
// paragraph element using `para.classList.add("new")`. */
// let para=document.createElement("p");
// para.innerText="Hey I'm red!";
// // document.body.append(para);
// // para.style.color="red";
// document.querySelector("body").append(para);
// para.classList.add("new"); 
// let para=document.createElement("p");
// para.innerHTML="Hey I`m red!!";
// document.querySelector("body").append(para);
// para.classList.add("new");
// let heading3=document.createElement("h3");
// heading3.innerText="i`m a blue h3!";
// document.querySelector('body').append(heading3);
// heading3.classList.add("blue");
// let div =document.createElement("div");
// document.querySelector("body").append(div);
// div.classList.add("div");
// let heading=document.createElement("h1");
// heading.innerHTML("I`m in a div");
// let div=document.createElement("div");
// let h1=document.createElement("h1");
// let para=document.createElement("p");
// h1.innerText="i am in a div";
// para.innerText="Me too!!";
// div.append(h1);
// div.append(para);
// div.classList.add("div");
// document.querySelector("body").prepend(div);

// let btns=document.querySelectorAll("button");
// for(btn of btns){
//     btn.onclick=sayGreet;
//     btn.onmouseenter=function (){
//         console.log('you entered a button');
//     };
// }

// function sayGreet(){
//     console.log("Hello there")
// } 
// let btn=document.querySelector("button");
// btn.addEventListener("click",function(){
//   let h3=document.querySelector("h3");
//   let randomColor=getRandomColor();
//   h3.innerHTML=randomColor;
//   let div=document.querySelector("div");
//   div.style.backgroundColor=randomColor;
// });
// function getRandomColor(){
//     let red=Math.floor(Math.random()*255);
//     let blue=Math.floor(Math.random()*255);
//     let green=Math.floor(Math.random()*255);
//    let color=`(${red},${green},${blue})`;
//    return color;
// }
// let btn=document.querySelector("button");
// btn.addEventListener("keydown",function(){
//     console.log("hello");
// });
// let inp=document.querySelector("input");
// inp.addEventListener("keydown",function(event){
// //   if(event.code=="ArrowUp"){
// //     console.log("Character jumps");
// //   }
// //   else if(event.code=="ArrowDown"){
// //     console.log("Character goes down");
// //   }
// //   else if(event.code=="ArrowLeft"){
// //     console.log("movies left");
// //   }
// //   else if(event.code=="ArrowRight"){
// //     console.log("Character right");
// //   }
//     if(event.code=="KeyA"){
//     console.log("Character jumps");
//     console.log(`The code : ${event.code}`)
//   }
//   else if(event.code=="KeyS"){
//     console.log("Character goes down");
//     console.log(`The code : ${event.code}`)
//   }
//   else if(event.code=="KeyA"){
//     console.log("movies left");
//     console.log(`The code : ${event.code}`)
//   }
//   else if(event.code=="KeyD"){
// //     console.log("Character right");
// //     console.log(`The code : ${event.code}`)
// //   }
// // });
// let form=document.querySelector("form")
// form.addEventListener("submit",function(event){
// event.preventDefault();
// // let user=document.querySelector("#user");
// // let pass=document.querySelector("#pass");
// // let user=this.elements[0];
// // let pass=this.elements[2];
// // console.log(user.value);
// // console.log(pass.value);
// // // console.log(form.elements);

// });
// // let user=document.querySelector("#user");
// // user.addEventListener("change",function(){
// //     console.log("change");
// //     console.log(`the event value: ${this.value}`);
// // })
// let user=document.querySelector("#user");
// user.addEventListener("input",function(){
//     console.log("input change");
//     console.log(`the event value: ${this.value}`);
// })
// let inp=document.querySelector("input");
// let para=document.querySelector("p");
// inp.addEventListener("input",function(){
//     console.log(this.value);
//     para.innerText=this.value;
// })
// let inp=document.querySelector("#input");
// let btn=document.querySelector("button");
// let ul=document.querySelector("ul");
// btn.addEventListener("click" ,function(){
//     let item=document.createElement("li");
//     item.innerText=inp.value;
  
//     let deleBtn=document.createElement("button");
// deleBtn.innerText="delete";
// deleBtn.classList.add("delete");
//     item.appendChild(deleBtn);
//     ul.appendChild(item);
//     inp.value="";
// })
// let inp=document.querySelector("input");
let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");
btn.addEventListener('click',function(){
let item=document.createElement("li");
item.innerText=inp.value;
let deleBtn=document.createElement("button");
deleBtn.innertext="delbtn";
deleBtn.classList.add("btn");
item.appendChild(deleBtn);
ul.appendChild(item);
inp.value="";
})
