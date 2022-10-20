

let cont = document.createElement('div');
cont.classList.add("container");  // ---> container element
let divRow = document.createElement('div');
divRow.classList.add("row"); // --> row inside container

var res1 = fetch('https://restcountries.com/v2/all') // calling restcountries Api
.then((response)=>{
 return response.json()  //extracting data from readable body
})
.then((data)=>{
  //actual data
  data.map((ele)=>{
    const classToadd=['col-lg-4','col-sm-12']
    let  divCol = document.createElement('div');  //column inside each row
    classToadd.forEach((ele)=>{
        divCol.classList.add(...classToadd);
    })
  divCol.innerHTML=`
  <div class="card" style="width: 18rem;">  
      <div class="card-header">
        ${ele.name}
      </div>
      <div class="card-body" style="text-align:center">
          <img src=${ele.flag} width="100%" >
          <p>${ele.region}</p>
          <p>${ele.capital}</p>
          <p>${ele.alpha3Code}</p>
          <p>${ele.latlng[0]} ${ele.latlng[1]}</p>
         
          </div>
        
   `
let button=document.createElement('button');
let btnclass = ['btn','btn-primary'];
button.innerText="click for whether";
let a=ele.latlng[0];
let b=ele.latlng[1];
button.onclick=(()=>
{  

   fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${a}&lon=${b}&appid=6341498968e30608a6f2eb396a8b35c5`) //fetching 2nd whether api.
   .then((res)=>{
    return res.json();
   }).then((data)=>{
    alert("Temperature is  " + data.main.temp)
   }).catch((err)=>{
    console.log(err);
   })
  });
btnclass.forEach((ele)=>{
    button.classList.add(...btnclass);
})
let cb= divCol.querySelector('.card-body');
cb.append(button);

   divRow.append(divCol);
   
  }
  )
}).catch((err)=>{
  console.log(err);
})




cont.append(divRow);
document.body.append(cont);




























