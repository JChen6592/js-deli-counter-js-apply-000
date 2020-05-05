let customer = 0
function takeANumber(){
  // increment customer by 1 
  customer++ 
  return `Order Number ${customer}`
}

console.log(takeANumber())
console.log(takeANumber())
console.log(takeANumber())


function nowServing(lineOfPeople){
  let headOfLine = 0
  if (lineOfPeople.length > 0) {
    return `Currently serving ${lineOfPeople.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(lineOfPeople){
  let line = "The line is currently:"
  if (lineOfPeople.length > 0) {
    for (let i = 0; i < lineOfPeople.length; i++){
      if (i == lineOfPeople.length - 1){
        line += ` ${i+1}. ${lineOfPeople[i]}`
      } else {
        line += ` ${i+1}. ${lineOfPeople[i]},`
      }
    }
    return line 
  } else {
    return "The line is currently empty."
  }
  // return line
}