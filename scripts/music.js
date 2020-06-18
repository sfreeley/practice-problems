// Create an array for each of these record labels
const recordLabels = {
    JumpStopRecords: [],
    ChattenRecords: [],
    PolarRecords: [],
}
     

// Create a factory function for each possible genre (e.g. createBluegrassArtist())
const createArtists = {
//create FUNK artist factory function
createFunkArtist (artistName, age) {
   const funkArtist = {
        artistName,
        age
    }
    return funkArtist;
},

// create COUNTRY artist factory function
createCountryArtist (artistName, age) {
    const countryArtist = {
        artistName,
        age
    }
    return countryArtist;
},

// create RAP artist factory function
createRapArtist (artistName, age) {
    const rapArtist = {
        artistName,
        age
    }
    return rapArtist;
},

// create BLUEGRASS artist factory function 
createBluegrassArtist (artistName, age) {
    const bluegrassArtist = {
        artistName,
        age
    }
    return bluegrassArtist;
  },

createPopArtist (artistName, age) {
    const popArtist = {
        artistName,
        age
    }
    return popArtist;
}
}


export {createArtists, recordLabels}
