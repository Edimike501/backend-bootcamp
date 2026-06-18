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

// Simulating an asynchronous database query that takes 1.5 seconds
const fetchListingFromDatabase = (id) => {
  return new Promise((resolve, reject) => {
    console.log(`[Database] Query initiated for ID: ${id}...`);
    setTimeout(() => {
      const match = listings.find((l) => l.id === id);
      if (match) {
        resolve(match); // Transition State from PENDING to RESOLVED
      } else {
        reject(new Error(`Property with Record ID ${id} was not found.`)); // Transition State t
      }
    }, 3000);
  });
};
// Consuming promises via standard chain composition
fetchListingFromDatabase(6)
  .then((data) => console.log("Promise resolved data:", data))
  .catch((err) => console.error("Promise rejected error:", err.message));
