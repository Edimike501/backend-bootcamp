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

const filterListings = (dataArray, predicateFn) => {
  const result = [];

  for (const item of dataArray) {
    // Run the callback rule! If it evaluates to true, keep the item.
    if (predicateFn(item) === true) {
      result.push(item);
    }
  }

  return result;
};

// Defining dynamic predicate conditions as clean, isolated values
const isLowBudget = (house) => house.price <= 3000000;
const isInVI = (house) => house.location === "VI";

// Executing operations by passing the function values
const cheapProperties = filterListings(listings, isLowBudget);
const highEndProperties = filterListings(listings, isInVI);
// console.log("HOF Cheap Results:", cheapProperties);
// console.log("HOF VI Results:", highEndProperties);

console.log(highEndProperties);
