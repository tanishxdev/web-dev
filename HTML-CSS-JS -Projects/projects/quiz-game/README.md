# Quiz Game — JavaScript Mini Project

A simple **Quiz Game** built using **HTML, CSS, and JavaScript**, focused on **core frontend fundamentals**: layout thinking, DOM manipulation, state management, and user interaction flow.

This project is part of a structured set of mini-projects designed to prepare for **frontend interviews and machine-coding rounds**.

---

## 🔍 Project Purpose

The goal of this project is **not** to build a fancy quiz UI.

The real purpose is to learn:

* How UI changes based on user interaction
* How JavaScript controls dynamic content
* How to manage state in a small frontend app
* How to design stable layouts for dynamic data
* How to think before writing code

---

## 🧠 What This Project Teaches

### Frontend Concepts

* DOM selection and updates
* Event handling (`click` events)
* UI state management (current question, score)
* Conditional rendering (quiz vs result)
* Resetting application state (restart quiz)

### CSS & Layout Concepts

* Dark theme design principles
* Flexbox for horizontal centering
* Why vertical centering breaks dynamic content
* Stable layout strategies for changing text
* Button hover and interaction feedback

---

## 🧩 Project Features (Version 1)

* Displays one question at a time
* Multiple choice options
* Score tracking
* Automatic progression through questions
* Final score display
* Restart quiz without page reload
* Dark theme UI with clean contrast
* Stable layout (no jumping on question change)

---

## 🏗️ Project Structure

```
quiz-game/
│── index.html   # Structure & semantics
│── style.css    # Layout, dark theme, spacing
└── script.js    # Quiz logic, state, DOM updates
```

Each file has a **single responsibility**, following separation of concerns.

---

## 🎯 Design & Architecture Decisions

### 1. Dark Theme by Default

The UI uses a dark theme to:

* Reduce eye strain
* Improve focus on logic
* Match real-world developer tools

The color palette is intentionally muted and reusable across projects.

---

### 2. Horizontal Centering Only (Important)

The quiz container is:

* Horizontally centered using Flexbox
* Vertically aligned naturally (top flow)

This avoids layout jumping when question length changes.

**Key rule applied:**

> Dynamic content should never be vertically centered.

---

### 3. State-Driven UI

All UI changes are controlled by JavaScript state:

* `currentQuestionIndex`
* `score`

The DOM is **re-rendered** based on state changes, not manually manipulated everywhere.

---

### 4. No Page Reloads

Restarting the quiz:

* Resets state
* Reuses the same render logic
* Keeps the app responsive and clean

This mirrors real frontend applications.

---

## ⚙️ How It Works (High-Level Flow)

1. Page loads
2. First question is rendered
3. User selects an option
4. Answer is evaluated
5. State updates (index, score)
6. Next question renders
7. After last question, result screen shows
8. User can restart quiz (state reset)

---

## 🚫 What This Project Intentionally Avoids

* Frameworks (React, Vue, etc.)
* External libraries
* Over-styling or animations
* Backend or APIs

The focus is **fundamentals**, not shortcuts.

---

## 🐞 Common Pitfalls Addressed

* Avoided vertical centering for dynamic content
* Avoided hardcoded heights
* Avoided mixing layout systems
* Avoided logic inside HTML or CSS

These decisions improve stability and maintainability.

---

## 🔮 Future Improvements (Planned Versions)

This project is designed to scale. Future versions may include:

* Answer locking after selection
* Correct / wrong answer feedback
* Next button enabled only after selection
* Timer per question
* LocalStorage score persistence
* Keyboard accessibility improvements

Each upgrade builds on the same core architecture.

---

## 🧠 Key Learning Takeaway

> UI is a reflection of state.
> If state is clean, UI becomes predictable.

This project builds the mental foundation required to create **any interactive frontend application**.

---

## 📌 Author Notes

This project is built as part of a **learning-first frontend journey**, focusing on thinking, structure, and flow before code.

It prioritizes:

* Clarity over cleverness
* Stability over shortcuts
* Fundamentals over frameworks
