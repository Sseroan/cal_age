//Year
document.querySelector('.year').innerHTML = new Date().getFullYear();

//Age function
const calAge = function(dob) {
  const yearsElapsed = Date.now() - new Date(dob).getTime();
  const refYearBirth = new Date(yearsElapsed);
  return refYearBirth.getFullYear() - 1970;
};

//Event listener
document.querySelector('form').addEventListener('submit', (e)=>{
  const dob = document.querySelector('#birth').value;
  let age = calAge(dob);
  //Loader Show
  document.querySelector(".loader").style.display = "block";
  //Message Hide
  document.querySelector(".message").style.display = 'none';
      //Message Show Not
  document.querySelector(".message-not").style.display = "none";
  //clear input
  document.querySelector("#birth").value = '';

  setTimeout( function showAge(){
    if(age > 10){
    //Loader Hide
    document.querySelector(".loader").style.display = "none";
    //Message Show
    document.querySelector(".message").style.display = 'block';
    //Message Show Not
    document.querySelector(".message-not").style.display = "none";
    //age
    document.querySelector('.age').textContent = age;
  }else if(age >= 0 && age < 10){
    age = `0${age}`;
        //Loader Hide
    document.querySelector(".loader").style.display = "none";
    //Message Show
    document.querySelector(".message").style.display = 'block';
        //Message Show Not
    document.querySelector(".message-not").style.display = "none";
    //age
    document.querySelector('.age').textContent = age; 
  }else {
    //Loader Hide
    document.querySelector(".loader").style.display = "none";
    //Message Show Not
    document.querySelector(".message-not").style.display = "block";
    //age
    document.querySelector('.age-not').textContent = 'Not Yet'; 
  };

  }, 5000);

  e.preventDefault();
})
