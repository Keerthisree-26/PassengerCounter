// document.getElementById("count").innerText=8

// let count=0
// console.log(count)
// console.log(myAge)
// let myAge=22
// let count= 3+9
// console.log(count)
// let firstBatch=5
// let secondBatch=10
// let count=firstBatch+secondBatch
// console.log(count)
// let myAge=7
// humanDogRatio=3
//  myDogAge=myAge*humanDogRatio
//  console.log(myDogAge)
// let count=1
// count +=1
// console.log(count)
// let bonusPoints=50
// bonusPoints +=20

// console.log(bonusPoints)

// function increment(){
//     console.log("button clickd")

// }
// increment()
// function forty(){
//     console.log(42)
// }
// forty()
// forty()
// let lap1=3
// let lap2=3
// let lap3=3
// function sum()
// {
//     console.log(lap1+lap2+lap3)
// }
// sum()
// let lapsCompleted=0
// function lap(){
    
//     lapsCompleted=lapsCompleted+1 
    
// }
// lap()
// lap()
// lap()
// lap()
// console.log(lapsCompleted)

// let count=0


// function increment(){
    
//     count=count+1
//     console.log(count)
// }
// document.getElementById("count").innerText=count

//representing on html   !important
// let countEl=document.getElementById("count")
// console.log(countEl)
// let count=0
// function increment (){
//     count=count+1
//     countEl.innerText=count 
// }
// function save(){
//     console.log(count)
// }
// save()
// let username="keerthi"
// let message="You have three new notifications!"
// console.log(username +", "+message)

// let user ="keerthi"
// let messageToUser="You have logged in !"
// console.log(user+", "+messageToUser)
// let welcomeEl= document.getElementById("welcome").innerText=welcome
// let name="keerthi"
// let greeting="Welcome back ,"
// let myGreeting= greeting
// welcomeEl.innerText=greeting +" "+name
let saveEl=document.getElementById("save-el")
let countEl=document.getElementById("count")
 console.log(countEl)
let count=0
 function increment (){
     count=count+1
    countEl.innerText=count 
 }
function save(){
    let countStr = count + " - "
    saveEL.textContent +=countStr
    countEl.textContent=0
    count=0
}
