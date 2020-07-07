import employeeConverter from "./employeeList.js"
import API from "./data.js"

API.getEmployeeData()
.then(response => {
    employeeConverter(response)
})