const upperSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const lowerSet = 'abcdefghijklmnopqrstuvwxyz';

const numberSet = '1234567890';

const symbolSet = '~!@#$%^&*()_+/'

// now we have to create some inportant selector's
const passBox = document.getElementById('pass-box')

const totalChar = document.getElementById('total-char');

const upperInput = document.getElementById('upper-case');

const lowerInput = document.getElementById('lower-case');

const numberInput = document.getElementById('numbers');

const symbolInput = document.getElementById('symbols');


// to get random data from  all the sets we use arrow function like and we pass Dataset which use to gave data from the dataset's

const getRandomData=(dataSet)=>{
return dataSet[Math.floor(Math.random()*dataSet.length)]
}


// now we run new function which is use to generate random data/generate random password and bydefault password will be empty

const generatePassword=(password= "")=>{
if(upperInput.checked)
{
     password += getRandomData(upperSet)
}
if(lowerInput.checked)
{
     password += getRandomData(lowerSet)
}
if(numberInput.checked)
{
     password += getRandomData(numberSet)
}
if(symbolInput.checked)
{
     password += getRandomData(symbolSet)
}

// this is recursion function
if(password.length<totalChar.value)
{
    return generatePassword(password)
}
passBox.innerHTML = truncateString(password, totalChar.value)
}


document.getElementById('btn').addEventListener("click", function(){
    generatePassword()
})


// this is trim function
function truncateString(str, num){
if(str.length>num)
{
    let subStr = str.substring(0,num)
    return subStr;
}
else
{
    return str
}
}


getRandomData()