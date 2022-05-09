//--SELECTİNG THE ELEMENTS--

// ***Single Elements (one element)
//1- document.getElementById()
//**
/*let val;

val = document.getElementById('header');

val = val.id;

document.getElementById('header').style.color = "red";
document.getElementById('header').style.fontSize = "50px";
document.getElementById('header').innerText = 'My ToDo App';
document.getElementById('header').innerHTML = '<b>My ToDo App</b>'; //<b> nin işe yaraması için inner.HTML kullanılır.
console.log(val);  */

//************************************************** 

//2-document.querySelector()

/*document.querySelector("#header").style.backgroundColor = "red";
document.querySelector(".card-header").style.backgroundColor = "yellow";
document.querySelector('div').style.fontSize = "30px";
document.querySelector('li').style.color = "orange"; //ilk li'yi seçer
document.querySelector('li:last-child').style.color = "blue"; // son li'yi seçer
document.querySelector('li:nth-child(3)').style.color = "green"; // 3. li'yi seçer
document.querySelector('li:nth-child(4)').textContent = "task item 4"; //4.li'yi seçer ve text'i değiştirir.
document.querySelector('li').className = 'list-group-item list-group-item-primary '; //li'yi seçer ve class'ını değiştirir.*/


//----------------------------------------------------

//***Multıple Elements (more than one element)

// 1- document.getElementsByClassName()

/* let val;
val = document.getElementsByClassName('list-group-item'); //tüm list-group-item'ları seçer.
//val = document.getElementsByClassName('list-group-item')[0]; //**  ilk list-group-item'ı seçer.
//val = document.getElementsByClassName('list-group-item')[2]; //**  3. list-group-item'ı seçer.
console.log(val);
val[0].style.color = "red"; //**  ilk list-group-item'ı seçer.*/

//************************************************** 

//2-document.getElementsByTagName()
let name =
    document.getElementsByTagName('li'); //tüm li'leri seçer.
console.log(name);

//************************************************** 

//3-document.querySelectorAll()

val = document.querySelectorAll('li'); //tüm li'leri seçer.