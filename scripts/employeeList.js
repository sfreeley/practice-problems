import employeeRepresentation from "./employeeComponent.js"

const employeeConverter = (employeesArray) => {
    const employeeArticleElement = document.querySelector(".employee")
    employeesArray.map(employee => {
        employeeArticleElement.innerHTML += employeeRepresentation(employee)
    })
}

export default employeeConverter
