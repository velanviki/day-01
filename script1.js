//step01: create an XHR object
//request has to be used in whole program
var request = new XMLHttpRequest();

//step02:craete a connection
request.open('GET','https://restcountries.com/v2/all',true);

//step 03: send a request
request.send();

//step 04: once the data successfully recieved from server (means onload)
request.onload=function(){
//conversion from string to array of JSON objects
var data = JSON.parse(request.response);
//console.log(data);


    let res = data.filter(ele=>ele.population<100000);

    console.log(res);
}