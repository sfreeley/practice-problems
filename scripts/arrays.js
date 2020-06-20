
const businesses = [
    {
      purchasingAgent: { nameLast: "Kirlin", nameFirst: "Kristy" },
      phoneWork: "089.129.2290 x9400",
      orders: [7826.96, 8323.11, 5756.28, 6308.42, 5622.28],
      companyName: "Care-media",
      companyIndustry: "Education",
      addressZipCode: "56839",
      addressStateCode: "WI",
      addressFullStreet: "8417 Franklin Court Tunnel",
      addressCity: "Mouthcard"
    },
    {
      purchasingAgent: { nameLast: "Steuber", nameFirst: "Kamron" },
      phoneWork: "(833) 222-7579 x5874",
      orders: [6252.5, 9769.02, 9521.17, 7994.05, 7945.93],
      companyName: "Stanholding",
      companyIndustry: "Hospitality",
      addressZipCode: "09705",
      addressStateCode: "NY",
      addressFullStreet: "2889 Fawn Court Garden",
      addressCity: "Fellsmere"
    },
    {
      purchasingAgent: { nameLast: "Gutkowski", nameFirst: "Kaylee" },
      phoneWork: "235.266.6278",
      orders: [7634.43, 9766.72, 9953.45, 6559.8, 5054.9],
      companyName: "Highnix",
      companyIndustry: "Agriculture",
      addressZipCode: "49376",
      addressStateCode: "ME",
      addressFullStreet: "5734 Maple Avenue Throughway",
      addressCity: "Little Genesee"
    },
    {
      purchasingAgent: { nameLast: "Crona", nameFirst: "Lauren" },
      phoneWork: "1-449-987-3083 x23263",
      orders: [7384.52, 9252.72, 7272.65, 5251.84, 9680.08],
      companyName: "Conit",
      companyIndustry: "Defense",
      addressZipCode: "53326",
      addressStateCode: "IL",
      addressFullStreet: "5755 Hillside Drive Crossroad",
      addressCity: "Norval"
    },
    {
      purchasingAgent: { nameLast: "Krajcik", nameFirst: "Elvera" },
      phoneWork: "1-730-411-8580",
      orders: [6069.05, 8535.38, 5782.7, 7838.91, 7578.36],
      companyName: "Dong-tom",
      companyIndustry: "Energy",
      addressZipCode: "67071",
      addressStateCode: "KS",
      addressFullStreet: "4826 Arch Street Lights",
      addressCity: "Newburyport"
    },
    {
      purchasingAgent: { nameLast: "Kling", nameFirst: "Ellie" },
      phoneWork: "(868) 043-0950",
      orders: [6726.2, 8393.21, 8087.13, 6393.13, 8646.35],
      companyName: "Dan-dox",
      companyIndustry: "Manufacturing",
      addressZipCode: "98842",
      addressStateCode: "WV",
      addressFullStreet: "9767 Cedar Court Corner",
      addressCity: "Prince George"
    },
    {
      purchasingAgent: { nameLast: "Robel", nameFirst: "Otilia" },
      phoneWork: "(298) 305-1942 x53653",
      orders: [8676.05, 7430.69, 9379.81, 8074.29, 5998.75],
      companyName: "J-base",
      companyIndustry: "Health care",
      addressZipCode: "72993",
      addressStateCode: "FL",
      addressFullStreet: "9954 Buckingham Drive Mountains",
      addressCity: "Vesper"
    },
    {
      purchasingAgent: { nameLast: "Gusikowski", nameFirst: "Karolann" },
      phoneWork: "(743) 934-8981 x692",
      orders: [8650.08, 8042.69, 5555.72, 7467.86, 8851.43],
      companyName: "Span-fix",
      companyIndustry: "Construction",
      addressZipCode: "59860",
      addressStateCode: "MT",
      addressFullStreet: "4151 Orange Street Extension",
      addressCity: "Little Rock Air Force Base"
    },
    {
      purchasingAgent: { nameLast: "Hartmann", nameFirst: "Zena" },
      phoneWork: "727.635.6610 x6483",
      orders: [9415.89, 8935.45, 7413.91, 6830.96, 9746.57],
      companyName: "Sanaplane",
      companyIndustry: "Information",
      addressZipCode: "85156",
      addressStateCode: "NY",
      addressFullStreet: "4765 Fairview Avenue Locks",
      addressCity: "Dennisville"
    },
    {
      purchasingAgent: { nameLast: "Torphy", nameFirst: "Celia" },
      phoneWork: "(992) 079-1670 x71569",
      orders: [7431.21, 5911.85, 7954.86, 7141.52, 8416.79],
      companyName: "Ran-taxon",
      companyIndustry: "Manufacturing",
      addressZipCode: "96673",
      addressStateCode: "MD",
      addressFullStreet: "7157 Hudson Street Ford",
      addressCity: "Watrous"
    }
  ];

// forEach()-takes in callback function that does return a value but ONLY WITHIN scope created by the method, not outside it! => will return undefined
/* Lightning Exercise: Add another section sibling to the current one and use 
object dot notation to display each company's city. Use square bracket notation 
display the state code. ??Use dynamic square bracket notation to add the zip code??.*/ 
const outEl = document.querySelector("#output")
outEl.innerHTML = "<h1>Active Businesses</h1>"

businesses.forEach(business => {
  outEl.innerHTML += `
    <h2>${business.companyName}</h2>
    <section>
      ${business.addressFullStreet}
    </section>
    <section>
    ${business.addressCity}, ${business["addressStateCode"]} ${business['addressZipCode']}
    </section>
  `
  outEl.innerHTML += "<hr/>"
});

// filter()-creates new array from existing one(function you pass to filter should return boolean)- if true, current item will be added to new array
// Array to contain all the New York businesses
const newYorkBusinesses = businesses.filter(business => {
    let inNewYork = false
  
    if (business.addressStateCode === "NY") {
        inNewYork = true

    }
  
    return inNewYork
   
  });

  /*Lightning Exercise: Use filter() to create another array named manufacturingBusinesses 
  that will contain all businesses in the manufacturing industry. 
  Display those to the DOM. */

 outEl.innerHTML += "<h1>Manufacturing Businesses</h1>"
  const manufacturingBusinesses = businesses.filter(business => {
      if (business.companyIndustry === "Manufacturing") {
        outEl.innerHTML += `
        <h2>${business.companyName}</h2>
        <section>
        ${business.addressFullStreet}
        </section>
        <section>
        ${business.addressCity}, ${business["addressStateCode"]} ${business['addressZipCode']}
        </section>
        ` 
      }
  });
  outEl.innerHTML += "<hr/>"
  outEl.innerHTML += "<h1>Purchasing Agents</h1>";

/*
    Using map(), you extract the purchasing agent object
    from each business and store it in a new array-- map() is used for transforming items in one array to 
    different structure and storing new items in another array

Lightning Exercise: Instead of just returning the purchasing agent object, 
return a new object that has the full name of the purchasing agent, 
the company name, and the phone number. The data structure is shown below. 
Use that new data structure to display the agent with their company and 
phone number*/
const agents = businesses.map(business => {
    return `<h2>${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}</h2>
    <section>
    ${business.companyName}
    </section>
    <section>
    ${business.phoneWork}
    </section>
  `         
})

outEl.innerHTML += agents.join("")
outEl.innerHTML += "<hr>"

// another way.. map then forEach
// const agents = businesses.map(business => {
//     return {name: business.purchasingAgent,
//             company: business.companyName,
//             phoneNumber: business.phoneWork                                 
//     }
// })

// console.log(agents)

// agents.forEach(agent => {
//     outEl.innerHTML +=
//      `<section>
//     ${agent.name.nameFirst} ${agent.name.nameLast}
//     ${agent.company}
//     ${agent.phoneNumber}
//     </section>
//     `   
// })

// find()- iterates an array and as soon as it finds item you specify, it returns the item
/*Lightning Exercise 1: Refactor your code to search for purchasing agents instead. 
If the search text is found in the first name of any purchasing agent, show that agent.

Lightning Exercise 2: Refactor your code so that if the search text is found in the first name, 
or last name, of any purchasing agent, show that agent. */
// targeting input box 
document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
            // iterating through businesses array and finding the purchasing agent's information by searching either first or last name 
            const foundBusiness = businesses.find(
                business =>
                    business.purchasingAgent.nameFirst.includes(keyPressEvent.target.value) ||
                    business.purchasingAgent.nameLast.includes(keyPressEvent.target.value)
            )

            outEl.innerHTML = `
                <h2>
                ${foundBusiness.purchasingAgent.nameFirst} ${foundBusiness.purchasingAgent.nameLast}
                </h2>
                <section>
                ${foundBusiness.addressFullStreet}

                </section>
                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section>
            `;
         }
        })
   

    /* reduce() - One of the main purposes of the reduce method is to iterate over a collection, 
    do some logic with each item, and have one, single result at the end.*/
    // businesses.forEach(business => {
    //     /* CALCULATE ORDER SUMMARY using forEach() method*/
    //     let totalOrders = 0
    //     business.orders.forEach(order => totalOrders += order)
    
    /* CALCULATE ORDER SUMMARY using reduce() method */
    businesses.forEach(business => {
        let totalOrders = business.orders.reduce(
            (currentTotal, nextValue) => currentTotal += nextValue,
            0
        )
    
    
        outEl.innerHTML += `
            <h2>
                ${business.companyName}
                ($${totalOrders})
            </h2>
            <section>
                ${business.addressFullStreet}
            </section>
            <section>
                ${business.addressCity},
                ${business.addressStateCode}
                ${business.addressZipCode}
            </section>
        `;
        outEl.innerHTML += "<hr/>";
    
    } )


    /* Lightning Exercise 1: Use the reduce method on the following array to 
    determine how much total rain fell last month. */
    const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10]

    const totalRainfall = monthlyRainfall.reduce( (currentTotal, nextValue) => currentTotal += nextValue,
    0)

    console.log(totalRainfall)

    /* Lightning Exercise 2: Use the reduce method on the following array to build a sentence. */
    const words = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]

    const sentence = words.reduce((currentWord, nextWord) => currentWord += " " + nextWord, "" )

    console.log(sentence)

    /*Practice: Big Spenders: produce a report for him that list only the companies 
    that have placed an order for more than nine thousand dollars."*/
    // Array to contain all the big spenders
    const a = businesses.forEach(business => {
        business.orders.filter(order => {
            if (order > 9000) { 
            console.log(business.companyName)
            }
            
    })
})


//Practice: Solar System
const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
let planetEl = document.getElementById("planets")
planets.forEach(planet => 
    {

        planetEl.innerHTML +=
         ` <div>
            ${planet}
           </div>
        `
    } )


/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
planets.map(planet => {
    planetEl.innerHTML += `
    <div>
    ${planet.charAt(0).toUpperCase() + planet.slice(1)}
    </div>
    `
})

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/
planets.filter(planet => {
    if (planet.includes("e")) {
        planetEl.innerHTML +=
        `<div>
            ${planet}
        </div> 
        `
    }
})

/*Practice Challenge: Chaining Methods
Using one single line of JavaScript code, complete the following tasks on the array of integers below.
*/
const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

//Sort the numbers in descending order (10, 9, 8, 7, etc)
//Remove any integers greater than 19
//Multiply each remaining number by 1.5 and then subtract 1
// Then output (either in the DOM or the console) the sum of all the resulting numbers.
const chainingMethods = integers.sort((a, b) => b - a).filter(integer => integer < 19).map(num => (num * 1.5) - 1).reduce((totalValue, nextValue) => totalValue += nextValue, 0)

console.log(chainingMethods);


    