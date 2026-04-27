
# DigiTools

DigiTools is a React-based web application developed as part of **Assignment 06** for the **Programming Hero** course. This project focuses on introducing the core fundamentals of React, including component reusability, state management, and conditional rendering.

### Live - http://quack-dogs.surge.sh/

---

## 🚀 Key Features

* **Dynamic Data Rendering:** Products are dynamically loaded and rendered from a local JSON file rather than being hardcoded.
* **Advanced Cart Functionality:** Clicking "Buy Now" adds products to the cart, instantly updating the total price and the item count on both the cart button and the navbar icon. Users can also remove items, which automatically recalculates the totals.
* **Duplicate Item Prevention:** Utilizes the JavaScript `.find()` method to check if a product is already in the cart. If it is, an attractive **React Toastify** alert notifies the user, preventing duplicates.
* **Conditional UI States:** Displays a user-friendly default message when navigating to the cart tab if the cart is currently empty.
* **Mock Checkout Process:** Features a "Pay Now" button that clears the cart and displays a "Payment Successful" message. (This sets the foundation for integrating a real payment gateway later in the course!)

---

## 🛠️ Technologies Used

| Category | Technology |
| :--- | :--- |
| **Framework** | React.js |
| **Language** | JavaScript (ES6+) |
| **Styling** | Tailwind CSS |
| **UI Components** | DaisyUI |
| **Libraries** | React Toastify |
| **Package Manager** | NPM |

---

## 📖 Learning Outcomes

This project was a deep dive into the **React Fundamental Milestone**. Key takeaways include:
* Understanding the efficiency of writing code within a component-based structure.
* Mastering the use of **Props** for data passing.
* Solving logic challenges through **State Lifting**.
* Implementing **Conditional Rendering** to enhance user experience.

---

## 💻 Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/AforArdi/React-A6-DigiTools.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd React-A6-DigiTools
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Start the development server:**
    ```bash
    npm run dev
    ```

---

## 👤 Author

**Mohammad Ardi**
* Programming Hero Student
* MERN Stack Learner
* [LinkedIn](https://www.linkedin.com/in/mohammad-ardi)

---
*Last updated: 2026-03-30*
