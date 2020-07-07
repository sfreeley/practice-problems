
const employeeRepresentation = (employeeObject) => {
    const employeeHTMLRep = `
        <header class="employee__name">
        <h1>${employeeObject.name}</h1>
        </header>

        <section class="employee__department">
        Works in the ${employeeObject.department.department} department
        </section>

        <section class="employee__computer">
        Currently using a ${employeeObject.computer.type}
        </section>
    `
    return employeeHTMLRep
}

export default employeeRepresentation