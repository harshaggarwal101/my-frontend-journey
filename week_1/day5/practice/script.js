// ✅ Random number Promise (Basic example)
const ans = new Promise((resolve, reject) => {
  const num = Math.floor(Math.random() * 10); // 0 to 9
  if (num < 5) {
    resolve(num);
  } else {
    reject(num);
  }
});

ans.then(() => {
  console.log("5 se chota h");
})
.catch(() => {
  console.log("5 se bada h");
});


// 📦 1. Chain of Promises – Step-by-step loading simulation
function step(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, delay);
  });
}

step("Step 1: Initializing...", 1000)
  .then(() => step("Step 2: Loading resources...", 1500))
  .then(() => step("Step 3: Almost done...", 1000))
  .then(() => step("Step 4: Completed!", 500))
  .catch((err) => console.error("Error in loading sequence:", err));


// 🕒 2. Delayed setTimeout wrapped in a Promise
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runWithDelay() {
  console.log("Waiting for 2 seconds...");
  await wait(2000);
  console.log("2 seconds passed!");
}

runWithDelay();


// 🌐 3. Mock fetch() call using async/await and try...catch
async function getUserData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    if (!response.ok) throw new Error("Failed to fetch user data");
    const data = await response.json();
    console.log("User data:", data);
  } catch (error) {
    console.error("Error fetching user:", error.message);
  }
}

getUserData();
