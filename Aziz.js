let btn = document.querySelector('.btn')
let first = document.querySelector('.first')
let second = document.querySelector('.second')
let third = document.querySelector('.third')
let fourth = document.querySelector('.fourth')
let inpName = document.querySelector('.inpf')
let inpAge = document.querySelector('.inps')
a = 0


btn.onclick = () => {
    a++
    //create
    let No = document.createElement('span')
    let Name = document.createElement('span')
    let Age = document.createElement('span')
    let forCh = document.createElement('div')
    let change = document.createElement('button')
    let dadet = document.createElement('button')
    let divf = document.createElement('div')
    let divs = document.createElement('div')
    let divt = document.createElement('div')
    let divb = document.createElement('div')

    //ClassList
    forCh.classList.add('for')
    change.classList.add('changebb')
    dadet.classList.add('changebb')
    divf.classList.add('div')
    divs.classList.add('div')
    divt.classList.add('div')
    divb.classList.add('div')

    //text
    change.innerHTML = 'change'
    dadet.innerHTML = 'delete'
    No.innerHTML = a
    Name.innerHTML = inpName.value
    Age.innerHTML = inpAge.value

    //append
    first.append(divf)
    second.append(divs)
    third.append(divt)
    fourth.append(divb)
    divf.append(No)
    divs.append(Name)
    divt.append(Age)
    divb.append(forCh)
    forCh.append(change)
    forCh.append(dadet)

    //onclick
    dadet.onclick = () => {
    a--
    No.innerHTML = a
    divf.classList.add('active')
    divs.classList.add('active')
    divt.classList.add('active')
    divb.classList.add('active')
    }
    change.onclick = () => {
        //Selector
       let cha = document.querySelector('.cha')
       let ch = document.querySelector('.ch')
       //change
        Name.innerHTML = cha.value
        Age.innerHTML = ch.value
    }
}