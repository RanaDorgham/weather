

var day= document.getElementById("day")
var month = document.getElementById("month")
var town = document.getElementById("town")
var grade = document.getElementById("grade")
var sky = document.getElementById("sky")
var sky1 = document.getElementById("sky1")
var sky2 = document.getElementById("sky2")
var nextday=document.getElementById('nextday')
var thirdDay1=document.getElementById('thirdDay')
var max= document.getElementById('max')
var max1= document.getElementById('max1')
var min= document.getElementById('min')
var min1= document.getElementById('min1')
var inputs= document.getElementsByTagName('input')
var imgs=document.images
let response
let data 
let city='cairo'
async function weather(){
  
     response= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=d8de0cc665a84879b4d194547241306&q=${city}&days=3`)

     data =  await response.json()
   
     
firstDay()
secondDay()
thirdDay()
  

}

weather()


const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var date = new Date();
// console.log(date.getDate());
// Long month name
const longMonthName = date.toLocaleString('default', { month: 'long' });
// console.log(longMonthName); // Output: June

// Short month name
const shortMonthName = date.toLocaleString('default', { month: 'short' });
// console.log(shortMonthName); // Output: Jun



function firstDay(){
 /// console.log(date);
 //console.log(daysOfWeek[date.getDay()]);
 day.innerHTML=daysOfWeek[date.getDay()]
 month.innerHTML=date.getDate()+' '
 month.innerHTML+=longMonthName
 town.innerHTML= data.location.name
 grade.innerHTML= data.current.temp_c+`<sup>o</sup><h1 class="d-inline fw-bolder">C</h1>`
 imgs[0].setAttribute('src',`${data.current.condition.icon}`)
 sky.innerHTML=data.current.condition.text
 sky.classList.add('text-primary')

}




function secondDay(){
nextday.innerHTML=daysOfWeek[date.getDay()+1]
imgs[1].setAttribute('src',`${data.forecast.forecastday[1].day.condition.icon}`)
max.innerHTML=data.forecast.forecastday[1].day.maxtemp_c+`<sup>o</sup><h1 class="d-inline fw-bolder">C</h1>`
min.innerHTML=data.forecast.forecastday[1].day.mintemp_c+`<sup>o</sup>`
sky1.innerHTML=data.forecast.forecastday[1].day.condition.text
sky1.classList.add('text-primary')

//  console.log(data.forecast.forecastday[1].date);

}

function thirdDay(){
  thirdDay1.innerHTML=daysOfWeek[date.getDay()+2]
  imgs[2].setAttribute('src',`${data.forecast.forecastday[2].day.condition.icon}`)
  max1.innerHTML=data.forecast.forecastday[2].day.maxtemp_c+`<sup>o</sup><h1 class="d-inline fw-bolder">C</h1>`
  min1.innerHTML=data.forecast.forecastday[2].day.mintemp_c+`<sup>o</sup>`
  sky2.innerHTML=data.forecast.forecastday[2].day.condition.text
  sky2.classList.add('text-primary')
  
  //  console.log(data.forecast.forecastday[2].date);
  
  }



 inputs[0].addEventListener('input',function(){
  //console.log(this.value);
  city=this.value
  weather()

 })


// console.log(nextday);

