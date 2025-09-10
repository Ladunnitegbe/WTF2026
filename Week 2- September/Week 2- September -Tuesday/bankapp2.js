//Question one: Create 4 accounts as objects
const accountOne = {
    accountId: 100001,
    accountName: "Mary Matthew",
    balance: 5000,
    currency: "USD",
    type: "Savings"
}

const accountTwo = {
    accountId: 100002,
    accountName: "Tunmise Clarke",
    balance: 8000,
    currency: "NGN",
    type: "Savings"
}

const accountThree = {
    accountId: 100003,
    accountName: "John Mark",
    balance: 4000,
    currency: "USD",
    type: "Checkings"
}

const accountFour = {
    accountId: 100004,
    accountName: "Emeka Eze",
    balance: 3500,
    currency: "NGN",
    type: "Checkings"
}

//Question 2: Simulate deposits

let depositAmount = 1500;
let accountToppedUp = accountOne.accountName;
accountOne.balance += depositAmount;
console.log(`${accountToppedUp} Topped up: ${accountOne.balance}`);

depositAmount = 3800
accountToppedUp = accountFour.accountName
accountFour.balance += depositAmount;
console.log(`${accountToppedUp} Topped up: ${accountFour.balance}`);

//Question 3: Simulate withdrawals

let withdrawAmount = 2000;
let accountWithdrawn = accountTwo.accountName
if (withdrawAmount <= accountTwo.balance) {
    accountTwo.balance -= withdrawAmount;
     console.log(`${accountWithdrawn} Withdrawn: ${accountTwo.balance}`);
 
}else{
   
   console.log(`Withdrawal denied for ${accountWithdrawn}: Insufficient Funds`);
}

withdrawAmount = 5000;
accountWithdrawn = accountThree.accountName
if (withdrawAmount <= accountThree.balance) {
    
    accountThree.balance -= withdrawAmount;
    console.log(`${accountWithdrawn} Withdrawn: ${accountThree.balance}`);
 
}else{
   console.log(`Withdrawal denied for ${accountWithdrawn}: Insufficient Funds`);
}

//Question 4: Transfers
let transferAmount = 2000;
let transferOutCurrency = accountThree.currency;
let transferInCurrency = accountOne.currency;
 
if(transferAmount <= accountThree.balance && transferOutCurrency == transferInCurrency){
    accountThree.balance -= transferAmount;
    accountOne.balance += transferAmount;
    console.log(`AccountThree Withdrawn: ${accountThree.balance}`       )
    console.log(`AccountOne Topped up: ${accountOne.balance}`)
}else{
    console.log("Transfer failed, currency mismatch");
}
 

transferAmount = 7000;
transferOutCurrency = accountTwo.currency;
transferInCurrency = accountOne.currency
 
if(transferAmount <= accountTwo.balance && transferOutCurrency == transferInCurrency){
    accountTwo.balance -= transferAmount;
    accountOne.balance += transferAmount;
    console.log(`AccountThree Withdrawn: ${accountTwo.balance}`       )
    console.log(`AccountOne Topped up: ${accountOne.balance}`)
}else{
    console.log("Transfer failed, currency mismatch");
}

//Question 5 : Monthly maintenance

let type = accountOne.type
const interest = 1.02
const fees = 50
let balance = accountOne.balance
if(type == "Savings"){
    balance *= interest

}else if(type == "Checkings"){
    balance -= fees
}

type = accountTwo.type
balance = accountTwo.balance
if(type == "Savings"){
    balance *= interest

}else if(type == "Checkings"){
    balance -= fees
}

type = accountThree.type
balance = accountThree.balance
if(type == "Savings"){
    balance *= interest

}else if(type == "Checkings"){
    balance -= fees
}

type = accountFour.type
balance = accountFour.balance
if(type == "Savings"){
    balance *= interest

}else if(type == "Checkings"){
    balance -= fees
}

//Question 6 : Comparisons
let highestBalance
let lowestBalance

//highest balance
if(accountOne.balance > accountTwo.balance && 
    accountOne.balance > accountThree.balance &&
    accountOne.balance > accountFour.balance){

    highestBalance = accountOne.balance;
    console.log(`Highest Balance is ${highestBalance}`);
   
}else if(accountTwo.balance > accountOne.balance && 
    accountTwo.balance > accountThree.balance &&
    accountTwo.balance > accountFour.balance){
    highestBalance = accountTwo.balance;
    console.log(`Highest Balance is ${highestBalance}`);
}
else if(accountThree.balance > accountOne.balance && 
    accountThree.balance > accountTwo.balance &&
    accountThree.balance > accountFour.balance){
    highestBalance = accountThree.balance;
    console.log(`Highest Balance is ${highestBalance}`);

}else if(accountFour.balance > accountOne.balance && 
    accountFour.balance > accountTwo.balance &&
    accountFour.balance > accountThree.balance){
    highestBalance = accountFour.balance;
    console.log(`Highest Balance is ${highestBalance}`);
}

//lowest balance

if(accountOne.balance < accountTwo.balance && 
    accountOne.balance < accountThree.balance &&
    accountOne.balance < accountFour.balance){

    lowestBalance = accountOne.balance;
    console.log(`Lowest Balance is ${lowestBalance}`);
   
}else if(accountTwo.balance < accountOne.balance && 
    accountTwo.balance < accountThree.balance &&
    accountTwo.balance < accountFour.balance){
    lowestBalance = accountTwo.balance;
    console.log(`Lowest Balance is ${lowestBalance}`);
}
else if(accountThree.balance < accountOne.balance && 
    accountThree.balance < accountTwo.balance &&
    accountThree.balance < accountFour.balance){
    lowestBalance = accountThree.balance;
    console.log(`Lowest Balance is ${lowestBalance}`);

}else if(accountFour.balance < accountOne.balance && 
    accountFour.balance < accountTwo.balance &&
    accountFour.balance < accountThree.balance){
    lowestBalance = accountFour.balance;
    console.log(`Lowest Balance is ${lowestBalance}`);
}

//Question 7: Account Status

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

if(accountFour.balance > 0){
    Status = "Active"
    console.log(`Account Four is ${Status}`)
}else if(accountFour.balance === 0){
    Status = "Inactive"
    console.log(`Account Four is ${Status}`)
}else{
    Status = "Dormant"
    console.log(`Account Four is ${Status}`)
}

//Question 8: Transactions Summary

console.log(`Account One Summary:
      \n Account Name: ${accountOne.accountName}
      \n Account Balance: ${accountOne.balance}
      \n Account Currency: ${accountOne.currency}
      \n Account Type: ${accountOne.type}
      \n Account Status: ${Status}`);

console.log(`Account Two Summary: 
    \n Account Name: ${accountTwo.accountName} 
    \n Account Balance: ${accountTwo.balance} 
    \n Account Currency: ${accountTwo.currency} 
    \n Account Type: ${accountTwo.type} 
    \n Account Status: ${Status}`);

console.log(`Account Three Summary: 
    \n Account Name: ${accountThree.accountName} 
    \n Account Balance: ${accountThree.balance} 
    \n Account Currency: ${accountThree.currency} 
    \n Account Type: ${accountThree.type} 
    \n Account Status: ${Status}`);

console.log(`Account Four Summary: 
    \n Account Name: ${accountFour.accountName} 
    \n Account Balance: ${accountFour.balance} 
    \n Account Currency: ${accountFour.currency} 
    \n Account Type: ${accountFour.type} 
    \n Account Status: ${Status}`);


    // Bonus Challenge
const accountFive = {
    accountId: 200001,
    accountName: "David Stone",
    balance: 5060,
    currency: "EUR",
    type: "Savings"
}

function currencyConverter(){
    let convertAmount = transferAmount;
    const exchangeRate = 1.1;
    transferAmount = convertAmount * exchangeRate;
    return transferAmount;
}

transferAmount = 700;
transferOutCurrency = accountFive.currency;
transferInCurrency = accountOne.currency
 
if(transferAmount <= accountFive.balance && transferOutCurrency == transferInCurrency){
    accountFive.balance -= transferAmount;
    accountOne.balance += transferAmount;
    console.log(`AccountFive Withdrawn: ${accountFive.balance}`)
    console.log(`AccountOne Topped up: ${accountOne.balance}`)
}else{
    currencyConverter(transferAmount);
    accountFive.balance -= transferAmount;
    accountOne.balance += transferAmount;
    console.log(`AccountFive Withdrawn: ${accountFive.balance}`)
    console.log(`AccountOne Topped up: ${accountOne.balance}`)
}
