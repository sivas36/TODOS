// //Adavance Javascript
// //Synchronous-sequential execution
// //By default is JS is Synchronous
// //we can make it to perform asynchronous also
// //Asynchronous function
// //setTimeout
// //inbuilt asynch function

// console.log("app is downloading...")
// setTimeout(()=>{
//    console.log("This is blocking code....");
// },2000)//eventhough not time is given it is blocking code.


// console.log("app is downloaded...")


// //callStack,eventloop,eventqueue,webApi.

// //callstack:

// //webapi - timing operation can be executed

// //callbackqueue:
//      //it is a place where function that has to executed
//      //call stack is palced here

// //eventloop:
//   //will push the event to the callstack
//   //if callstack is empty

// //call back hell:
// //It is a Kind of nested structure 
// //TO overcome callbackhell scenerio we use promises:
// //Promise:It is an object which hold the result of asynchronous oepration
// //why?
// //Purpose is :It holds asynchronous operation result that can returned
// //synchronously
// //Syntax
// // const p1 = new Promise(()=>{});
// //promise take function as a parameter
// //inside that function we have 
//  //-->resolve
//  //-->reject
// var marks=prompt("Enter the marks");
// var p1 = new Promise((resolve,reject)=>{
//     if(marks >= 35){
//       resolve("you have passed");
//     }else{
//       reject("you have rejected");
//     }
// })
// //Initial --> pending state;
// //then --> resolved  -->when asynchronous operation is successfull
// //catch --> rejected  --->when asynchronous operation is rejected
// p1.then((data)=>{
//   console.log(data); ///display the resolved result
// }).catch((error)=>{
//   console.log(error); //display the rejected result
// })


// function foo(){
//   return new Promise((resolve,reject)=>resolve(2*3));
// }

// var res = foo();

// res.then((data)=> console.log(data)).catch((err)=>console.log(err));
// //it the function is returing the promise it has to be handled by
// //.then and .catch


// //Chanining of promise
// //output of 1 will be served as input to another function
// function mul(num){
//   return new Promise((resolve,reject)=>setTimeout(()=>{
//     resolve(2*num)
//   },3000))
// }
// mul(12).then((data)=>{
//   console.log(data);
//   return mul(data);
// }).then((data1)=>{
//    console.log(data1);
//    return mul(data1)
// }).then((data2)=>{
//   console.log(data2);
// }).catch((err)=>{
//   console.log(err);
// })


// //EXECTUING THE PROMISE AT A TIME
// //promise.all
// //take the array of promises as an input
// //it will wait until all the promises are selected
// //retrun array of results of promises 

// Promise.all([p1,p2,p3]).then((data)=>console.log(data)).catch((err)=>console.log(err));
// //if one promise get rejected rest of the promises are ignored.
// //to overcome this drawback we will be using 
// //promise.allSettled
// //it will show all the promises as such whether it has been resolved or rejected
// //the output will be an array of objects
// Promise.allSettled([p1,p2,p3]).then((data)=>data.forEach((ele)=>{
//     console.log(ele);
// }))

// ///Fetch is an alternative to the XHR
// //fetch takes api url as parameter

// var res = fetch('https://restcountries.com/v2/all')
// .then
// ((response)=>{
//   return response.json();
// }).then((data)=>{
//   console.log(data);
// }).catch((err)=>{
//     console.log(err);
// });
// //it returns promise
// //inside the promise object we have results in readable
// //streams.
// //so we need json() method;

let cont = document.createElement('div');
cont.classList.add("container");
let divRow = document.createElement('div');
divRow.classList.add("row");

var res1 = fetch('https://restcountries.com/v2/all')
.then((response)=>{
 return response.json()
}).then((data)=>{
  console.log(data);
  data.map((ele)=>{
    const classToadd=['col-lg-4','col-sm-12']
    let  divCol = document.createElement('div');
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

   fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${a}&lon=${b}&appid=6341498968e30608a6f2eb396a8b35c5`)
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




























