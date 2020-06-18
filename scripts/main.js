import {createDoctor, createPet} from './factory.js'
import {createArtists, recordLabels} from './music.js'

// Doctor factory function
const doc1 = createDoctor("Cathy", "Dermatology", "123 Pimple Popper Road" )
console.log (doc1);


//Pet factory function (Invoke the factory function 3 times)
const pet1 = createPet("Charlie", "hound");
console.log(pet1);

const pet2 = createPet("Mira", "basset hound");
console.log(pet2);

const pet3 = createPet("Grover", "Jack Russell");
console.log(pet3);

//...and place each animal in an array stored in a variable named BowWowKennels*/ 
const BowWowKennels = [];
BowWowKennels.push(pet1, pet2, pet3);
console.log(BowWowKennels);

//Music Practice: Invoke the appropriate function for each of the following artists and place the resulting object in the corresponding label array.

//funk artists
const funkArtist1 = createArtists.createFunkArtist("Bruce Atikins", 23);
console.log(funkArtist1);
const funkArtist2 = createArtists.createFunkArtist("Dre Funkz", 25);
console.log(funkArtist2);

//rap artists
const rapArtist1 = createArtists.createRapArtist("Dusta Grimes", 21);
console.log(rapArtist1);
const rapArtist2 = createArtists.createRapArtist("Loyoncé Branis", 27);
console.log(rapArtist2);


//pushing into appropriate array for funk and rap artists
recordLabels.JumpStopRecords.push(funkArtist1, funkArtist2, rapArtist1, rapArtist2)
console.log(recordLabels.JumpStopRecords);

//country artist
const countryArtist1 = createArtists.createCountryArtist("Avilee Dallas", 19);
console.log(countryArtist1);

// bluegrass artist
const bluegrassArtist1 = createArtists.createBluegrassArtist("Bartholomew Danielson", 23);
console.log(bluegrassArtist1);

//pushing into appropriate array for country and bluegrass artists
recordLabels.ChattenRecords.push(countryArtist1, bluegrassArtist1);
console.log(recordLabels.ChattenRecords);

//pop artists
const popArtist1 = createArtists.createPopArtist("Jensen Brown", 20);
console.log(popArtist1);

const popArtist2 = createArtists.createPopArtist("Austin Kinkaid", 22);
console.log(popArtist2);

//pushing into appropriate array for pop artists
recordLabels.PolarRecords.push(popArtist1, popArtist2);
console.log(recordLabels.PolarRecords);



