const listings = [
  {
    id: 1,
    title: "Studio Flat",
    price: 1500000,
    location: "Lekki",
    available: true
  },
  {
    id: 2,
    title: "3 Bed Duplex",
    price: 8000000,
    location: "VI",
    available: false
  },
  { id: 3, title: "Land", price: 3000000, location: "Ajah", available: true },
  {
    id: 3,
    title: "Land 3",
    price: 3000000,
    location: "Ajah 3",
    available: true
  }
];

const numbersArray = [1, 3, 40, 50, 69, 48, 33];
// Looking for number is equals to 3

`
let listing = 1
  is listing equals to 3, No; check te next value

  listing = 3
  is listing equals to 3, Yes; Stop
`;

("1 equals to 3, No, if No , check te next value");
("3 equals to 3, Yes, if Yes, Stop checking for other values");
console.log(numbersArray[2]);

// const singleArray = numbersArray.find((num))

// console.log(listings);

// Filtering out properties below 5Million Naira
const filteredProperties = listings.filter((item) => item.price < 5000000);
// console.log(filteredProperties);

// const publicCatalog = listings.map(
//   (item) => `${item.title} at ${item.location}`
// );
// console.log(publicCatalog);

const individualMatch = listings.find((item) => item.id === 3);
// console.log(individualMatch);
