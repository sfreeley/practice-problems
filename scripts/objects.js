//Lightning Exercises 
    //to represent a red 2015 Ford Mustang use...
console.log("object"); 
    //storing animal names from a shelter
console.log("array"); 

    //define an object for four family members and put each object in an array named familyMembers.
const familyMembers = [
    {
        name: "Snoopy",
        age: 2,
        spots: true,
        breed: "beagle"
    },

    {
        name: "Milo",
        age: 10,
        spots: true,
        breed: "Jack Russell Terrier"

    },

    {
        name: "Barnaby",
        age: 4,
        spots: true,
        breed: "Dalmation"
    },

    {
        name: "Geraldine",
        age: 7,
        spots: false,
        breed: "Pitbull"
    }

];

//Accessing Values on Objects

const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
};
//using dot notation to access property values
console.log(wardrobe.height);
console.log(wardrobe.manufacturer);
console.log(wardrobe.contents);
console.log(wardrobe.depth);
console.log(wardrobe.width);

//using dot notation to create a new key on an object 
wardrobe.material = "Cedar";
console.log(wardrobe);

//square bracket notation is most often used when the key is stored in a variable
const lassie = {
    age: 7,
    breed: "Collie",
    color: "White and Brown"
};

//From notes: here's what it looks like when using a variable to look up a key on an object
const keyToLookup = "breed";
//keyToLookup is "breed"
const lassiesBreed = lassie[keyToLookup]; 
console.log(lassiesBreed); // -> "Collie"
//Remember expressions get evaluated from right to left (instead of the other way)

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1932,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
};

//using dot notation to output all of the dimension of Empire State Building to console
console.log(empireStateBuilding.height);
console.log(empireStateBuilding.squareFeet);
console.log(empireStateBuilding.eastWestLength);
console.log(empireStateBuilding.northSouthLength);
console.log(empireStateBuilding.stories);

//using square bracket notation to output the remaining five properties to console
const empireStateArchitect = "architect";
console.log(empireStateBuilding[empireStateArchitect]);
const empireStateAddress = "address";
console.log(empireStateBuilding[empireStateAddress]);
const empireStateConstruction = "constructionDate";
console.log(empireStateBuilding[empireStateConstruction]);
const empireStateOwner = "owner";
console.log(empireStateBuilding[empireStateOwner]);
const empireStateCost = "cost";
console.log(empireStateBuilding[empireStateCost]);


const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
};

//Output the names of the part-time instructors
    //finding out the values for "instructors" key
const nssInstructors = nashvilleSoftwareSchool.instructors;
console.log(nssInstructors);

    //finding out the values for the "partTime" key
const nssPartTime = nssInstructors.partTime;
console.log(nssPartTime);


    //looping through the partTime array
for (let i = 0; i < nssPartTime.length; i++) {
    //logging each individual element of the array
    console.log(nssPartTime[i]);
}

    //finding out the values for the "fullTime" key
const nssFullTime = nssInstructors.fullTime;
console.log(nssFullTime);

    //looping through the fullTime array 
for (let i = 0; i < nssFullTime.length; i ++) {
    //logging each individual element of the array
    console.log(nssFullTime[i]);
}

//in function form to list all elements of fullTime array
function listItems(object) {
    const instructorItems = object.instructors;
    for (let i = 0; i < instructorItems.fullTime.length; i++) {
        console.log(instructorItems.fullTime[i])   
    }
}
console.log(listItems(nashvilleSoftwareSchool));

//Output only "Andy"
console.log(nssFullTime[4]);

    //In function form
    function listAndy(object) {
        let findAndy;
        const instructorItems = object.instructors;
        for (let i = 0; i < instructorItems.fullTime.length; i++) {
            if (instructorItems.fullTime.indexOf("Andy") !== -1) {
                findAndy = instructorItems.fullTime.indexOf("Andy");
                findAndy = instructorItems.fullTime[findAndy];
            }
        }
        return findAndy;
    }
    
    console.log(listAndy(nashvilleSoftwareSchool));

//Output only "Zoe"
console.log(nssPartTime[0]);

//Practicing Accessing Property Values
const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
};

//how to access name value in the members array in the beatles object
const beatlesMember = beatles.members;
//how to access Paul McCartney object in members array
console.log(beatlesMember[1]);
//how to access "Paul McCartney" value
console.log(beatlesMember[1].name);
//how to access his birth
console.log(beatlesMember[1].birth);

//how to access the "formed" and "disbanded" values in history key in the beatles object
const beatlesHistory = beatles.history; 
console.log(beatlesHistory.formed);
console.log(beatlesHistory.disbanded);

//how to access values of the album key in the beatles object 
const beatlesAlbums = beatles.albums;
//how to access value "magical mystery tour"
console.log(beatlesAlbums[3]);

//final string interpolation of desired sentence
console.log(`${beatlesMember[1].name} was in the Beatles from ${beatlesHistory.formed} to ${beatlesHistory.disbanded}. He was born in ${beatlesMember[1].birth}. He contributed heavily to the ${beatlesAlbums[3]} Album.`)

