// Use a do...while loop to console.log the numbers from 1 to 1000.

let i = 0

do { 
     i = i + 1;
} while (i < 1000)
console.log(i)

// Create an object (with keys and values) called person with the following data:

let person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female",
}

// Create a function that logs out the keys of the object using Object.keys().

const keyLogger = Object.keys(person)
console.log(keyLogger)

// Create a function that logs out the keys and values of the object using Object.entries().

for (const [key, value] of Object.entries(person)){
    console.log(`${key}: ${value}`)
}


let arrayOfPersons = [
    {
        firstName: "Jane",
        lastName: "Doe",
        birthDate: "Jan 5, 1925",
        gender: "female",
    },
    {
        firstName: "John",
        lastName: "Hammer",
        birthDate: "March 18, 1984",
        gender: "male",
    },
    {
        firstName: "Henry",
        lastName: "Sackville",
        birthDate: "Dec 12, 1996",
        gender: "male",
    },
    {
        firstName: "Christina",
        lastName: "Harper",
        birthDate: "Nov 4, 2005",
        gender: "female",
    }
]


// Create a function that uses a for...of loop and an if statement to console.log the value associated with the key 
    // birthDate of each object if the birth year is an odd number.

const birthdateValue = (array) =>{
    for (i of array){
        let splitBirthday = i.birthDate.split(" ").pop()
        if (splitBirthday % 2 !== 0){
            console.log(splitBirthday)
        }
    }
}
birthdateValue(arrayOfPersons)
//this is for readability in the console


// Use .map() to map over the arrayOfPersons and console.log() their information.

let mappedArray = arrayOfPersons.map(function(value, index){
    console.log(index,value)
    return value
})

// Use .filter() to filter the persons array and console.log only males in the array.

let filteredArray = (array) => {
    array.filter(function(element, index){
        if(element.gender === "male"){
            console.log(element)
        }
    })
}

filteredArray(arrayOfPersons)
// Create a function that returns true if the value of birthDate is before Jan 1, 1990.

const checkAge = (array) =>{
    for (i of array){
        let splitBirthday = i.birthDate.split(" ").pop()
        splitBirthday = parseInt(splitBirthday)
        if (splitBirthday < 1990){
            i[1990] = true
        } else i[1990] = false
    }
}

checkAge(arrayOfPersons)
console.log(arrayOfPersons)

// Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.
let before1990 = (array) => {
  let oldPeople = array.filter(function(element, index){
      splitBirthday = element.birthDate.split(" ").pop()
      splitBirthday = parseInt(splitBirthday)
      if (splitBirthday < 1990){
          console.log(`${element.firstName} ${element.lastName} ${splitBirthday}`)
      }
  })
}

before1990(arrayOfPersons)