# 📅 Day 2 — DOM Manipulation & Mini Project

## ✅ What I Did
- Learned about **DOM selection and manipulation**, including:
  - `getElementById`
  - `getElementsByClassName`
  - `getElementsByTagName`
  - `querySelector`
  - `querySelectorAll`
  - `innerHTML`, `innerText`, `textContent`
  - `classList.add()`, `remove()`, `toggle()`, `contains()`
  - `setAttribute()`, `getAttribute()`, `removeAttribute()`
  - `style` property for inline CSS changes
  - Event handling with `addEventListener`

- Built a mini-project: **Dark Mode Toggle**
  - Added a button to toggle dark mode.
  - Switched between 🌞 and 🌙 icons using **Font Awesome** and JavaScript.

## 🧠 What Clicked
- The difference between `querySelector` (returns first match) and `querySelectorAll` (returns NodeList of all matches).
- How to manipulate classes using `classList`.
- How `addEventListener` lets us run code on user interaction.

## 🤔 What Was Confusing
- Initially, the icon didn’t update properly.
- Realized I was checking for `dark` class **outside** the event listener.
- Moved icon toggle logic **inside** the `click` function to fix it.

