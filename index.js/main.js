
 let data = document.getElementById("data")
 let searchIn = document.getElementById("searchIn")

$(document).ready(()=>{
    searchName("").then(()=>{
        $(".loading").fadeOut(300)
        $("body").css("overflow","visible")
        $(".load").fadeOut(300)

    })
    
})



function search(){
    searchIn.innerHTML =`
    <div class="row  py-5">
        <div class="col-md-6">
            <input onkeyup="searchName('sushi')" class="Search text-white bg-transparent" type="text" placeholder="Search by name">
        </div>
        <div class="col-md-6">
            <input onkeyup="searchLitter(this.value)" length="1" class="Search text-white bg-transparent" type="text" placeholder="Search by first litter">
        </div>
    </div>
`
   data.innerHTML =""
}

searchLitter("")
 async function searchName(term){
    $(".load").fadeIn(300)
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
    response = await response.json();
    displayMeal(response.meals)
    $(".load").fadeOut(300)

}

async function searchLitter(term){
    $(".load").fadeIn(300)
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${term}`)
    response = await response.json();
    displayMeal(response.meals)
    $(".load").fadeOut(300)

}



function navbar(){
    $(".nav-bar").animate({left:0},400)
    $(".i-icon").removeClass("fa-align-justify");
    $(".i-icon").addClass("fa-x");
//animation
$(".form li").eq(0).animate({top:0},400)
$(".form li").eq(1).animate({top:0},500)
$(".form li").eq(2).animate({top:0},600)
$(".form li").eq(3).animate({top:0},700)
$(".form li").eq(4).animate({top:0},800)
}



function nav(){
    $(".nav-bar").animate({left:"-300px"},400)
    //add-icon
            $(".i-icon").addClass("fa-align-justify");
            $(".i-icon").removeClass("fa-x");
    //animation
            $(".form li").animate({top:"200px"},400)
}

nav()

$(".nav-bar i.i-icon").click(()=>{
    if($(".nav-bar").css("left")== "0px"){
       nav()
    }
    else
    {
        navbar()
    }
})



 async function getMeals(term){
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
    response = await response.json();
    displayMeal(response.meals)

}


function displayMeal(arr) {
let cartoona ="";

for(let i = 0 ; i < arr.length ; i++) {
    cartoona += `
     <div class="col-md-3">
            <div onclick="getRecip('${arr[i].idMeal}')" class="eat position-relative overflow-hidden cursor-pointer">
                <img class="w-100 pic2" src="${arr[i].strMealThumb}" alt="">
                <div class="lay-eat d-flex align-items-center position-absolute">
                    <h3>${arr[i].strMeal}</h3>
                </div>
            </div>
        </div>`
}
data.innerHTML = cartoona
}

getMeals("")

 async function getCat(){

    $(".load").fadeIn(300)
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    response = await response.json()
    displayCat(response.categories)
    $(".load").fadeOut(300)

 }

 function displayCat(arr){
    let cartoona ="";

    for(let i = 0 ; i < arr.length ; i++ ){
        cartoona += `
         <div class="col-md-3">
                <div onclick="getRecipes('${arr[i].strCategory}')" class="eat position-relative overflow-hidden cursor-pointer">
                    <img class="w-100 pic2" src="${arr[i].strCategoryThumb}" alt="">
                    <div class="lay-eat text-center position-absolute">
                        <h3>${arr[i].strCategory}</h3>
                        <p>${arr[i].strCategoryDescription}</p>
                    </div>
                </div>
            </div>`
    }
    data.innerHTML = cartoona
 }


async function getArea(){
    $(".load").fadeIn(300)

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    response = await response.json()
    console.log(response.meals);
    displayArea(response.meals)
    $(".load").fadeOut(300)

 }


 function displayArea(arr){
    let cartoona ="";

    for(let i = 0 ; i < arr.length ; i++ ){
        cartoona += `
         <div class="col-md-3">
                <div onclick="getRecipeArea('${arr[i].strArea}')" class="eat cursor-pointer text-center">
                    <i class="fa-solid fa-globe"></i>
                    <h3>${arr[i].strArea}</h3>
                </div>
            </div>`
    }
    data.innerHTML = cartoona
 }



 async function getIngredient(){
    $(".load").fadeIn(300)
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    response = await response.json()
    console.log(response.meals);
    displayIngredient(response.meals)
    $(".load").fadeOut(300)

 }


 function displayIngredient(arr){
    let cartoona ="";

    for(let i = 0 ; i < arr.length ; i++ ){
        cartoona += `
         <div class="col-md-3">
                <div onclick="getRecipeIngred('${arr[i].strIngredient}')" class="eat text-center cursor-pointer">
                    <i class="fa-solid fa-utensils"></i>
                    <h3>${arr[i].strIngredient}</h3>
                    <p>${arr[i].strDescription}</p>
                </div>
            </div>`
    }
    data.innerHTML = cartoona
 }


  async function getRecipes(category){
    $(".load").fadeIn(300)
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    response = await response.json();
    console.log(response);
    displayRecipes(response.meals)
    $(".load").fadeOut(300)

 }

 function displayRecipes(arr){
    let cartoona ="";

for(let i = 0 ; i < arr.length ; i++ ){
    cartoona += `
     <div class="col-md-3">
            <div class="eat position-relative overflow-hidden cursor-pointer">
                <img class="w-100 pic2" src="${arr[i].strMealThumb}" alt="">
                <div class="lay-eat d-flex align-items-center position-absolute">
                    <h3>${arr[i].strMeal}</h3>
                </div>
            </div>
        </div>`
}
data.innerHTML = cartoona
 }


 async function getRecipeArea(area){
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
    response = await response.json();
    console.log(response);
    displayRecipeArea(response.meals)
 }


 function displayRecipeArea(arr){
    let cartoona ="";

    for(let i = 0 ; i < arr.length ; i++ ){
        cartoona += `
         <div class="col-md-3">
                <div class="eat position-relative overflow-hidden cursor-pointer">
                    <img class="w-100 pic2" src="${arr[i].strMealThumb}" alt="">
                    <div class="lay-eat d-flex align-items-center position-absolute">
                        <h3>${arr[i].strMeal}</h3>
                    </div>
                </div>
            </div>`
    }
    data.innerHTML = cartoona
 }
 async function getRecipeIngred(Ingredient){
    $(".load").fadeIn(300)

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${Ingredient}`);
    response = await response.json();
    console.log(response);
    displayRecipeIngred(response.meals)
    $(".load").fadeOut(300)

 }


 function displayRecipeIngred(arr){
    let cartoona ="";

    for(let i = 0 ; i < arr.length ; i++ ){
        cartoona += `
         <div class="col-md-3">
                <div class="eat position-relative overflow-hidden cursor-pointer">
                    <img class="w-100 pic2" src="${arr[i].strMealThumb}" alt="">
                    <div class="lay-eat d-flex align-items-center position-absolute">
                        <h3>${arr[i].strMeal}</h3>
                    </div>
                </div>
            </div>`
    }
    data.innerHTML = cartoona
 }



 async function getRecip(mealID){
    nav()
    $(".load").fadeIn(300)

    let response = await fetch (`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`);
    response = await response.json();
    console.log(response.meals[0]);
    displayRecip(response.meals[0])
    $(".load").fadeOut(300)

 }

 function displayRecip(meal) {

    let cartoona =
    `
     <div class="col-md-4">
            <img class="w-100" src="${meal.strMealThumb}" alt="">
            <h3>${meal.strMeal}</h3>
        </div>
        <div class="col-md-8">
            <h2>instraction</h2>
            <p>${meal.strInstructions}</p>
            <h4><span>area:</span>${meal.strArea}</h4> 
            <h4><span>category:</span>${meal.strCategory}</h4> 
            <h2>Recipes :</h2>
            <ul class="d-flex flex-wrap g-4 ">
                <li class="li-contant m-2 p-1">${meal.strIngredient1}</li>
                <li class="li-contant m-2 p-1">${meal.strIngredient2}</li>
                <li class="li-contant m-2 p-1">${meal.strIngredient3}</li>
                <li class="li-contant m-2 p-1">${meal.strIngredient4}</li>
                <li class="li-contant m-2 p-1">${meal.strIngredient5}</li>
                <li class="li-contant m-2 p-1">${meal.strIngredient6}</li>
            </ul>
            <h2>Tag :</h2>
            <ul class="d-flex flex-wrap g-4 ">
                </li>
                <li class="li-contant m-2 p-1">${meal.strMeasure1}</li>
                <li class="li-contant m-2 p-1">${meal.strMeasure2}</li>
                <li class="li-contant m-2 p-1">${meal.strMeasure3}</li>
                <li class="li-contant m-2 p-1">${meal.strMeasure4}</li>
                <li class="li-contant m-2 p-1">${meal.strMeasure5}</li>
                <li class="li-contant m-2 p-1">${meal.strMeasure6}</li>
            </ul>
            <a href="${meal.strSource}" class=" btn sour">source</a>
            <a href="${meal.strYoutube}" class=" btn you">youtube</a>
        </div>
        `
        data.innerHTML = cartoona
 }




function contactsUs(){
    data.innerHTML=`  <div class="contant d-flex justify-content-center align-items-center min-vh-100 ">
            <div class="container w-50">
                <div class="row  g-3 ">
                    <div class="col-md-6">
                        <input id="name" onkeyup="Validation()" class="search" type="text" placeholder="enter your name">
                        <div class="alert p-0 alert-danger mt-1 w-100 d-none" id="alName"> 
                        characters and numbers not allowed</div>
                    </div>
                    <div class="col-md-6">
                        <input id="email" onkeyup="Validation()" class="search" type="email" placeholder="enter your email">
                        <div class="alert p-0 alert-danger mt-1 w-100 d-none" id="alEmail"> 
                            email not valid</div>
                    </div>
                    <div class="col-md-6">
                        <input id="phone" onkeyup="Validation()" class="search" type="text" placeholder="enter your phone">
                        <div class="alert p-0 alert-danger mt-1 w-100 d-none" id="alPhone"> 
                            enter valid number</div>
                    </div>
                    <div class="col-md-6">
                        <input id="age" onkeyup="Validation()" class="search" type="text" placeholder="enter your age">
                        <div class="alert p-0 alert-danger mt-1 w-100 d-none" id="alAge"> 
                            enter valid age</div>
                    </div>
                    <div class="col-md-6">
                        <input id="pass" onkeyup="Validation()" class="search" type="password" placeholder="enter your password">
                        <div class="alert p-0 alert-danger mt-1 w-100 d-none" id="alPass"> 
                            enter valid password</div>
                    </div>
                    <div class="col-md-6">
                        <input id="repass" onkeyup="Validation()" class="search" type="password" placeholder="repassword">
                        <div class="alert p-0 alert-danger mt-1 w-100 d-none" id="alRepass"> 
                            enter valid repassword</div>
                    </div>
                </div>
                <button id="logBtn" disabled class="btn mt-4 px-2">submit</button>
            </div>
        </div>`
    let logBtn = document.getElementById("logBtn")


    document.getElementById("name").addEventListener("focus",()=>{
        nameV = true
    })
    document.getElementById("email").addEventListener("focus",()=>{
        emailV = true
    })
    document.getElementById("phone").addEventListener("focus",()=>{
        phoneV = true
    })
    
    document.getElementById("age").addEventListener("focus",()=>{
        ageV = true
    })
    document.getElementById("pass").addEventListener("focus",()=>{
        passV = true
    })
    document.getElementById("repass").addEventListener("focus",()=>{
        repassV = true
    })
    

}
 

let nameV = false;
let emailV =false;
let phoneV =false;
let ageV =false;
let passV =false;
let repassV =false;







function Validation(){

    if(nameV){
         if(nameValid()){
        document.getElementById("alName").classList.replace("d-block","d-none")
    }else{
        document.getElementById("alName").classList.replace("d-none","d-block")
    }
    }




   if(phoneV){
    if(phoneValid()){
        document.getElementById("alPhone").classList.replace("d-block","d-none")
    }else{
        document.getElementById("alPhone").classList.replace("d-none","d-block")
    }
   }

    if(emailV){
        if(emailValid()){
        document.getElementById("alEmail").classList.replace("d-block","d-none")
    }else{
        document.getElementById("alEmail").classList.replace("d-none","d-block")
    }
    }

    if(ageV){
        if(ageValid()){
        document.getElementById("alAge").classList.replace("d-block","d-none")
    }else{
        document.getElementById("alAge").classList.replace("d-none","d-block")
    }
    }
    

    if(passV){
       if(passValid()){
        document.getElementById("alPass").classList.replace("d-block","d-none")
    }else{
        document.getElementById("alPass").classList.replace("d-none","d-block")
    } 
    }
    
if(repassV){
    if(repassValid()){
        document.getElementById("alRepass").classList.replace("d-block","d-none")
    }else{
        document.getElementById("alRepass").classList.replace("d-none","d-block")
    }

}

    

  if (nameValid() &&
    emailValid() &&
    phoneValid() &&
    passValid() &&
    repassValid() &&
    ageValid()) {
        logBtn.removeAttribute("disabled")
    }
    else{
        logBtn.setAttribute("disabled",true)
    }
}

function nameValid(){
   return (/^[A-Z]+$/.test(document.getElementById("name").value))
}

function emailValid(){
  return  (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("email").value))
}

function phoneValid(){
   return (/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/.test(document.getElementById("phone").value))
}

function ageValid(){
  return (/ ^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(document.getElementById("age").value))
}

function passValid(){
  return  (/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(document.getElementById("pass").value))
 }

 function repassValid(){
    return document.getElementById("repass").value == document.getElementById("pass").value
 }

