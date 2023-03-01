let percent=prompt("Enter your school percentage");

let num=Number(percent);

if (num<=0 || num>=100  ){
    alert("Wrong Percentage ")
}else if (num>=80){
    alert("Your Grade is A+1 :  "   +
       "Congratulations Are your very good student")
}else if (num>=70){
    alert("Your percentage is A")
} else if (num>=60){
    alert("Your percentage is B")
}  else if (num>=50){
    alert("Your percentage is C :  " + "You should do hard work on your studies")
}  else if (num>=40){
    alert("Your percentage is D:  " + "Not good at all :  " + "Please Focus on studies")
}  else if (num>=30){
    alert("Your percentage is E :  "  + " I am very angry on you ")
}  else{
    alert("Sorry You are fail  :  " + "Sham on You ")
};




