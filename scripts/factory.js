/*Lightning Exercise 1: Write a factory function that creates an object that represents a doctor. The function should accept three arguments.

Doctor's name
Specialty (Oncologist, pediatrician, etc...)
Address of practice */

const createDoctor = (name, specialty, practiceAddress) => {
    return {
        name,
        specialty,
        practiceAddress
    }
}



/*Lightning Exercise 2: Write a factory function that creates an object that represents a pet. The function should accept two arguments.

Pet name
Pet breed
Invoke the factory function 3 times and place each animal in an array stored in a variable named BowWowKennels*/ 
const createPet = (name, breed) => {
    return {
        name,
        breed
    }
}



export {createDoctor, createPet}