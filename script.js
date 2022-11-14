let myuser=document.querySelector('#user')
let myform=document.querySelector('.search-form')

myuser.onclick =() =>{
    myform.classList.toggle('active')
}

let mypopup =document.querySelector('#sumbmit')
let mythanku =document.querySelector('.popup')

mypopup.onclick =() =>{
    myform.classList.toggle('active')
}