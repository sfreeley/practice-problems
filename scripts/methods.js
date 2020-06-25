const mustang = {
    color: "Midnight Blue",
    year: 1976,
    length: 120,
    width: 62,
    height: 47
}

const allCars = [
    {
        model: "Mustang",
        color: "Midnight Blue",
        year: 1976,
        length: 120,
        width: 62,
        height: 47
    },
    {
        model: "Xterra",
        color: "Forest Green",
        year: 2011,
        length: 144,
        width: 71,
        height: 55
    },
    {
        model: "Thunderbird",
        color: "Red",
        year: 2005,
        length: 115,
        width: 58,
        height: 42
    },
    {
        model: "Suburban",
        color: "Grey",
        year: 2015,
        length: 149,
        width: 73,
        height: 58
    }
]

//get the values of each object
//1. iterate the array of cars with forEach()
//2. Use Object.values() to iterate the values of each car

//targeting the section ID of app in html
const outputElement = document.querySelector("#app")
//iterate the array of cars (car = individual objects)
allCars.forEach(car => {
    for (const value of Object.values(car)) {
        outputElement.innerHTML += `<div> ${value} </div>`
    }
})

//Listing all properties of object at top of page
/*
    Just get a reference to the first object since
    they all have the same properties
*/

const firstCar = allCars[0]

// Iterate the array of cars. Individual objects stored in `car`.
outputElement.innerHTML += "<h1>Car List</h1>"
allCars.forEach(car => {

    // Iterate all of the values of the current car
    for (const value of Object.values(car)) {
      outputElement.innerHTML += `<div>${value}</div>`
    }
})

//iterate the keys in first object
outputElement.innerHTML += "<h1>Properties</h1>"
for (const key of Object.keys(firstCar)) {
    outputElement.innerHTML += `<div>${key}</div>`
}

//Lightning Exercise 1 & 2: 

const dateVisited = "visitDate"
const owed = "amountBilled"
const patient = "patientName"

const doctorBill = {
    officeName: "Grace Associates",
    streetAddress: "123 Diagnose Me Rd",
    doctorName: "Dr. Grace",
    patientName: "Helen",
    visitDate: "5/5/20",
    amountBilled: 250,
    dueDate: "6/7/20"
}

//use square bracket notation to output the value of those three properties to console
console.log(doctorBill[dateVisited])
console.log(doctorBill[owed])
console.log(doctorBill[patient])
//Lightning Exercise 3: Use Object.values() to output all the property values to the console
const doctorBillValues = Object.values(doctorBill);
console.log(doctorBillValues)

// Lightning Exercise: Output all of the key names from your doctor's office bill to the console
const doctorBillKeys = Object.keys(doctorBill)
console.log(doctorBillKeys)

// Lightning Exercise: Output all of the key names from your doctor's office bill to the DOM 
// inside a parent <section> element. Wrap each one in a <span> element.
const doctorSectionElement = document.querySelector("#doctor")

for (const key of doctorBillKeys) {
    doctorSectionElement.innerHTML += `<span>${key}</span>`
}

//List properties and values together
outputElement.innerHTML += "<h1>Car List</h1>"
allCars.forEach(car => {
    outputElement.innerHTML += "<hr/>"

    for (const entry of Object.entries(car)) {
        outputElement.innerHTML += `<div>${entry[0]}: ${entry[1]}</div>`
    }
})

/*Lightning Exercise: Create an object to represent your favorite dinner item 
(e.g. meatloaf, spaghetti, fried fish, gumbo). Each object should have a name property, 
but you can add any other properties that you like, such as size, weight, ethnicity, 
vegetarian boolean. */

const favoriteDinnerItem = {
    name: "sundubu",
    size: "medium",
    weight: "3 oz",
    ethnicity: "Korean",
    vegetarian: false
}

/*Lightning Exercise: Output all of the key/value pairs into the DOM inside an <article>
 element with a class of food.*/
const foodSectionElement = document.querySelector(".food")
 for (const description of Object.entries(favoriteDinnerItem)) {
    foodSectionElement.innerHTML += `<div> ${description[0]}: ${description[1]}</div>`
 }

 //Practice: Car Sales
 const salesByWeek = [
    {
        "vehicle": {
            "year": 2013,
            "model": "Tanex",
            "make": "Tamp-dax",
            "color": "quartz"
        },
        "sales_id": "782a23fd-8b83-4497-b9a1-41fd9b15648e",
        "sales_agent": {
            "mobile": "1-584-162-7444",
            "last_name": "Larkin",
            "first_name": "Tiara",
            "email": "ready@gmail.com"
        },
        "purchase_date": "2017-06-07",
        "gross_profit": 210,
        "credit": {
            "credit_provider": "United Services Automobile Assoc.",
            "account": "491697193540559"
        }
    },
    {
        "vehicle": {
            "year": 2012,
            "model": "Volttanphase",
            "make": "Tinlotis",
            "color": "french fuchsia"
        },
        "sales_id": "c6775819-5d17-40db-94f4-00425db590ee",
        "sales_agent": {
            "mobile": "1-573-820-3780",
            "last_name": "Schulist",
            "first_name": "Vada",
            "email": "davin@outlook.com"
        },
        "purchase_date": "2017-08-06",
        "gross_profit": 1886.61,
        "credit": {
            "credit_provider": "TD Group US Holding",
            "account": "494781657570"
        }
    },
    {
        "vehicle": {
            "year": 2013,
            "model": "Lexi-ton",
            "make": "Ware-com",
            "color": "metallic brown"
        },
        "sales_id": "d10631e7-24ca-414b-ac0f-34b286a30f14",
        "sales_agent": {
            "mobile": "1-356-831-5782",
            "last_name": "Leannon",
            "first_name": "Geovanni",
            "email": "need@hotmail.com"
        },
        "purchase_date": "2017-12-27",
        "gross_profit": 154.91,
        "credit": {
            "credit_provider": "State Street Corporation",
            "account": "546417363501851"
        }
    },
    {
        "vehicle": {
            "year": 2011,
            "model": "Onto-zun",
            "make": "Strongzoom",
            "color": "medium slate blue"
        },
        "sales_id": "586bf9d9-67c2-46c7-a6d1-de8484f6c474",
        "sales_agent": {
            "mobile": "774.020.0247",
            "last_name": "Lang",
            "first_name": "Jovani",
            "email": "spell55@yahoo.com"
        },
        "purchase_date": "2017-03-05",
        "gross_profit": 814.49,
        "credit": {
            "credit_provider": "M&T Bank Corporation",
            "account": "34730046974022"
        }
    },
    {
        "vehicle": {
            "year": 2014,
            "model": "Blue-run",
            "make": "Kon-flex",
            "color": "lumber"
        },
        "sales_id": "a5358cb3-6d47-4adb-a232-d5c5d91e25ec",
        "sales_agent": {
            "mobile": "886.374.3898",
            "last_name": "Feil",
            "first_name": "Kory",
            "email": "ducimus@outlook.com"
        },
        "purchase_date": "2017-02-08",
        "gross_profit": 587.52,
        "credit": {
            "credit_provider": "Atlantic Bank",
            "account": "601149379893233"
        }
    }
]

const carSectionElement = document.querySelector("#carSales")
const carDivElement = document.querySelector("#vehicleDescription")
//Display the first and last name of the sales agent, display all keys and values for the car sold, display the gross profit made on the sale.
salesByWeek.forEach(sales => {
    carSectionElement.innerHTML += `<h2>${sales.sales_agent.first_name} ${sales.sales_agent.last_name}</h2>`
 for (const sale of Object.entries(sales.vehicle)) {
     carSectionElement.innerHTML += `<div>${sale[0]}: ${sale[1]}</div>`  
 }
 
carSectionElement.innerHTML += `<h3>Profit:$${sales.gross_profit}</h3>`
 
})


//Challenge: Sales Search
//target the search input field
const searchInput = document.querySelector("#searchInput")
searchInput.addEventListener("keypress", event => {
    if (event.charCode === 13) {
        const searchTerm = event.target.value
        salesByWeek.forEach(sale => {
            if (event.target.value ===  )

        });
    }
})


business.purchasingAgent.nameFirst.includes(keyPressEvent.target.value)