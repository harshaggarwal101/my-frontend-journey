# 📅 Day 5 – Week 2: LeetCode JS Practice

This repository contains my solutions to 4 beginner-friendly **LeetCode problems** solved in **JavaScript** as part of my Frontend Development roadmap.

## 📌 Problems & Approaches

### 1️⃣ [Two Sum (#1)](twosum.js)
**Problem:** Given an array of integers and a target value, return the indices of the two numbers that add up to the target.  
**Approach:**  
- Used a `Map` to store numbers and their indices.
- First loop stores each number in the map.
- Second loop checks if the complement exists in the map and returns the indices.  

---

### 2️⃣ [Fizz Buzz (#412)](Fizz_Buzz.js)
**Problem:** Return a list of strings where:
- Multiples of 3 → `"Fizz"`
- Multiples of 5 → `"Buzz"`
- Multiples of both 3 & 5 → `"FizzBuzz"`
- Otherwise → the number as a string.  
**Approach:**  
- Loop from 1 to `n`.
- Check divisibility by `15`, `3`, and `5` in that order.
- Push appropriate strings into the result array.

---

### 3️⃣ [Merge Sorted Array (#88)](Merge_Sorted_Array.js)
**Problem:** Merge two sorted arrays into one sorted array in-place.  
**Approach:**  
- Used three pointers starting from the end of each array (`p1`, `p2`, `p_merge`).
- Compare and fill from the largest values at the back.
- Copy remaining elements of `nums2` if any are left.

---

### 4️⃣ [Valid Parentheses (#20)](valid_parentheses.js)
**Problem:** Check if the given string of parentheses is valid.  
**Approach:**  
- Used a stack to track opening brackets.
- Mapped each closing bracket to its opening pair.
- On encountering a closing bracket, check stack top and pop if it matches.
- String is valid if stack is empty at the end.

---

## 🛠 Tech Used
- **Language:** JavaScript (ES6+)
- **Platform:** LeetCode

---

✅ All problems tested successfully on LeetCode.  
🚀 Pushing towards better problem-solving speed and cleaner code every day.
