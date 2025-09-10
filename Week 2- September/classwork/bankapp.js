const accountOne = {
    accountName: "Miracle Kenzie",
    balance: 5000,
    currency: "USD"
}

const accountTwo = {
    accountName: "Aisha Usman",
    balance: 5000,
    currency: "USD"
}

const accountThree = {
    accountName: "Mayowa Johnson",
    balance: 5000,
    currency: "USD"
}

let depositAmount = 1000;
accountOne.balance += depositAmount;
console.log(`AccountOne Topped up: ${accountOne.balance}`);

let withdrawAmount = 2000;
if (withdrawAmount <= accountTwo.balance) {
    accountTwo.balance -= withdrawAmount;
     console.log(`AccountTwo Withdrawn: ${accountTwo.balance}`);
 
}else{
   
   console.log("Insufficient funds for withdrawal");
}
 
let transferAmount = 2000;
 
if(transferAmount <= accountThree.balance){
    accountThree.balance -= transferAmount;
    accountOne.balance += transferAmount;
    console.log(`AccountThree Withdrawn: ${accountThree.balance}`       )
    console.log(`AccountOne Topped up: ${accountOne.balance}`)
}else{
    console.log("Transfer failed");
}
 
let highestBalance
if(accountOne.balance > accountTwo.balance && accountOne.balance > accountThree.balance ){
    highestBalance = accountOne.balance;
    console.log(`Highest Balance is ${highestBalance}`);
   
}else if(accountTwo.balance > accountOne.balance && accountTwo.balance > accountThree.balance ){
    highestBalance = accountTwo.balance;
    console.log(`Highest Balance is ${highestBalance}`);
}
else if(accountThree.balance > accountOne.balance && accountThree.balance > accountTwo.balance ){
    highestBalance = accountThree.balance;
    console.log(`Highest Balance is ${highestBalance}`);

}else if(accountOne.balance == accountTwo.balance || 
    accountTwo.balance == accountThree.balance ||
    accountOne.balance == accountThree.balance){
        console.log("Two accounts are equal");
}

let Status
if(accountOne.balance > 0){
    Status = "Active"
    console.log(`Account One is ${Status}`)
}else if(accountOne.balance === 0){
    Status = "Inactive"
    console.log(`Account One is ${Status}`)
}else{
    Status = "Dormant"
    console.log(`Account One is ${Status}`)
}

if(accountTwo.balance > 0){
    Status = "Active"
    console.log(`Account Two is ${Status}`)
}else if(accountTwo.balance === 0){
    Status = "Inactive"
    console.log(`Account Two is ${Status}`)
}else{
    Status = "Dormant"
    console.log(`Account Two is ${Status}`)
}

if(accountThree.balance > 0){
    Status = "Active"
    console.log(`Account Three is ${Status}`)
}else if(accountThree.balance === 0){
    Status = "Inactive"
    console.log(`Account Three is ${Status}`)
}else{
    Status = "Dormant"
    console.log(`Account Three is ${Status}`)
}