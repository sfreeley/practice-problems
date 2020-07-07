
const API = {
    getEmployeeData () {
        return fetch("http://localhost:8088/employees?_expand=department&_expand=computer")
               .then(response => {return response.json()})
    }
}

export default API