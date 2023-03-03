let firstSubject=prompt("Enter Your Math Marks (Out of 100)");
let firstSubject1=prompt("Enter Your Physics Marks (Out of 100)");
let firstSubject2=prompt("Enter Your Chemistry Marks (Out of 100)");
let firstSubject3=prompt("Enter Your English Marks (Out of 75)");
let firstSubject4=prompt("Enter Your Urdu Marks (Out of 100)");
let firstSubject5=prompt("Enter Your Islamiyat Marks (Out of 75)");

let add=Number(firstSubject);
let add1=Number(firstSubject1);
let add2=Number(firstSubject2);
let add3=Number(firstSubject3);
let add4=Number(firstSubject4);
let add5=Number(firstSubject5);


 let totalNumbers=add+add1+add2+add3+add4+add5;

 const totalMarks =550;

 
 
 let percentage=(totalNumbers/totalMarks)*100;


 if (percentage>=100||percentage<=0 ){
    alert("Your percentage is invalid: Please try again")
 };
 
   if  (percentage>=80&&percentage<100){
 alert("Wow That's Great Percentage I think you will have a Great School Grade!") 
 } 
 else if(percentage>=60&&percentage<80){
    alert("It's average")
 } 
 else if (percentage>=40&&percentage<60){
    alert("It's not Good Please Work on yourself")
 }
else{
    alert("You are Fail ")
};


alert("Your Percentage is : " + percentage  + " % ");






