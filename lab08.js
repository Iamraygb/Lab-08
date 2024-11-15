let Firstname= "Ray";
let Lastname= "Sama";
let age= 18;
console.log(Firstname, Lastname, age);
//string, number, undefined, boolean;
let building= "Skyscrapper"
let temperature= 34;
let camera;
console.log(building, temperature, camera, temperature !=34)

let RollNo=15
let message;
if(RollNo>10){
 message= "The RollNo is greater than 10"
}
console.log(message);

//Boolean True
let isMember= true
let r;
if(isMember==true){
    r= "Member discount applied";
    console.log(r)
}

let startValue=50
if( startValue<0){
    console.log("value is negative");
}
if(startValue>0){
    console.log("value is positive");
}
if(startValue=0){
    console.log("value is at 0");
}

let a= 12
let b= "13"
console.log(a==b, a!=b, a>b, a<b, a===b);

//first name , last name hello
console.log("Hello", Firstname, Lastname, "you are", age );

//positive and less than 100;
let num=50
if(num>0&& num<100){
    console.log("The number is within range");
}

let hasCar=true
let hasLicense=true
let hasInsurance=true
if(hasLicense==true && hasInsurance==true && hasCar==true){
    console.log("You can legally drive");
}
//even and odd numbers
let num1=21
if(num1%2==0){
    console.log("The number is even");}
else{
    console.log("The number is odd");
}

//score grade
let score=85
if(score>=90){
    console.log("Grade A")
}
else if(score>80 && score<90){
 console.log("Grade B");
}
else{
    console.log( "Grade C");
}