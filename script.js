const text = "The rain in Spain stays mainly in the plain. In Spain, in April, the rain is a pain.";
 //Task1
 let a=[...text.matchAll('Spain')]
 console.log(a)
//Task2
 let a=[...text.matchAll('rain')]
 let ind=a.map((item,index)=>{
     return item.index
 })
 console.log(ind)
//Task3
 let changes=text.replace('Spain','France')
 console.log(changes)
//Task4
 let changesRain=text.replaceAll('rain','sun')
 console.log(changesRain)
//Task5
 let searching=text.search('plain')
 console.log(searching)

//  tapsiriq 2
const regexPhoneNumber=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/

let phoneNumber=+9996637355
console.log(regexPhoneNumber.test(phoneNumber))

const regexEmailValidation=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
let email='narmin@gmail.com'
console.log(regexEmailValidation.test(email))

const regexPassword=/^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[a-zA-Z]).{8,}$/
let password='Narmin123.!1ls'
console.log(regexPassword.test(password))


const regexAge=/^(1[89]|[2-9]\d)$/gm
let age=19
console.log(regexAge.test(age))
const regexName=/([a-zA-Z0-9_\s]+)/g
let name='Narmin'
console.log(regexName.test(name))