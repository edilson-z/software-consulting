var formdata1 = new FormData();
formdata1.append("type", "Horizontal Strip");
formdata1.append("tags", "sports,fashion");

var formdata2 = new FormData();
formdata2.append("type", "Light Square");
formdata2.append("tags", "sports,fitness");

var formdata3 = new FormData();
formdata3.append("type", "Dark Square");
formdata3.append("tags", "sports,food");

var formdata4 = new FormData();
formdata4.append("type", "Light Square");
formdata4.append("tags", "fashion,fitness");

var formdata5 = new FormData();
formdata5.append("type", "Horizontal Strip");
formdata5.append("tags", "sports,fashion");

var ajax1 = new XMLHttpRequest();
ajax1.addEventListener("load", completeHandler1, false);
ajax1.open("POST", "https://ad.simaneka.com/api/get");
ajax1.setRequestHeader("authorisation", "Yxk8aPopCRHckLljkG7BQezLRXJfCsVj");
ajax1.send(formdata1);

var ajax2 = new XMLHttpRequest();
ajax2.addEventListener("load", completeHandler2, false);
ajax2.open("POST", "https://ad.simaneka.com/api/get");
ajax2.setRequestHeader("authorisation", "Yxk8aPopCRHckLljkG7BQezLRXJfCsVj");
ajax2.send(formdata2);

var ajax3 = new XMLHttpRequest();
ajax3.addEventListener("load", completeHandler3, false);
ajax3.open("POST", "https://ad.simaneka.com/api/get");
ajax3.setRequestHeader("authorisation", "Yxk8aPopCRHckLljkG7BQezLRXJfCsVj");
ajax3.send(formdata3);

var ajax4 = new XMLHttpRequest();
ajax4.addEventListener("load", completeHandler4, false);
ajax4.open("POST", "https://ad.simaneka.com/api/get");
ajax4.setRequestHeader("authorisation", "Yxk8aPopCRHckLljkG7BQezLRXJfCsVj");
ajax4.send(formdata4);

var ajax5 = new XMLHttpRequest();
ajax5.addEventListener("load", completeHandler5, false);
ajax5.open("POST", "https://ad.simaneka.com/api/get");
ajax5.setRequestHeader("authorisation", "Yxk8aPopCRHckLljkG7BQezLRXJfCsVj");
ajax5.send(formdata5);

function completeHandler1(event) {
    var response = JSON.parse(event.target.responseText);
    document.querySelector('.advertIMG1').src = response.link;
    document.querySelector('.advertIMG1').alt = response.alt;
    document.querySelector('.anchorElement1').href = response.href;
}

function completeHandler2(event) {
    var response = JSON.parse(event.target.responseText);
    document.querySelector('.advertIMG2').src = response.link;
    document.querySelector('.advertIMG2').alt = response.alt;
    document.querySelector('.anchorElement2').href = response.href;
}

function completeHandler3(event) {
    var response = JSON.parse(event.target.responseText);
    document.querySelector('.advertIMG3').src = response.link;
    document.querySelector('.advertIMG3').alt = response.alt;
    document.querySelector('.anchorElement3').href = response.href;
}

function completeHandler4(event) {
    var response = JSON.parse(event.target.responseText);
    document.querySelector('.advertIMG4').src = response.link;
    document.querySelector('.advertIMG4').alt = response.alt;
    document.querySelector('.anchorElement4').href = response.href;
}

function completeHandler5(event) {
    var response = JSON.parse(event.target.responseText);
    document.querySelector('.advertIMG5').src = response.link;
    document.querySelector('.advertIMG5').alt = response.alt;
    document.querySelector('.anchorElement5').href = response.href;
}

