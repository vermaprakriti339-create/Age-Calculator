const inpt=document.querySelector("#dob");
const btn=document.querySelector("button");
const reslt=document.querySelector("#age");

btn.addEventListener("click", function(){
     if(inpt.value==""){
        // console.log("please select your birth date")
        reslt.innerText="please select your birth date";
        return;
    }
    
    const today=new Date();
    const MyDate=new Date(inpt.value)
   
    const currentDate=today.getDate();
    const currentMonth=today.getMonth();
    const currentYear=today.getFullYear();

    const BirthDate=MyDate.getDate();
    const BirthMonth=MyDate.getMonth();
    const BirhtYear=MyDate.getFullYear();

    let Age=currentYear-BirhtYear;
    let Month=currentMonth-BirthMonth;
    let Day=currentDate-BirthDate;
    
    // if(currentMonth<BirthMonth||currentMonth===BirthMonth&&currentDate<BirthDate){
    //     Age--;
    // }
      if(MyDate>today){
        reslt.innerText="Invailed Date of Birth"
        return;
    }
    
    if(Day<0){
        Month--;
        const previousDay=new Date(currentYear,currentMonth,0).getDate();
        Day+=previousDay;
    }
      if(Month<0){
        Age--;
        Month+=12;
      }
    reslt.innerText=`  ${Age} Year ${Month} Month ${Day}Day`;

    // if(inpt.value==""){
    //     // console.log("please select your birth date")
    //     reslt.innerText="please selct your birth date";
    // }

    // if(MyDate>today){
    //     reslt.innerText="nvailed Date of Birth"
    //     return;
    // }
   

});