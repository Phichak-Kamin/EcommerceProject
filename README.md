# 🛍️ Ecommerce Learning Project

This repository is a **personal learning playground** designed to practice and master front-end development skills. It features a lightweight ecommerce-style application built with **React** and **Vite**.

The goal of this project was not to build a production-ready store, but to experiment with React fundamentals, modern **JavaScript (ES6+)**, and common front-end workflows in a hands-on environment.



https://github.com/user-attachments/assets/6f1dba35-e918-4b50-8969-f2197be3f25b


---

## 🚀 Key Learnings

The core purpose of this project was to bridge the gap between theory and practice. Here are the specific technical skills and concepts I focused on:

### ⚛️ React Mastery
* **Component-Driven Architecture:** Breaking down the UI into small, reusable, and focused functional components.
* **Deep Dive into Hooks:**
    * `useState` & `useEffect`: Managing local state and handling side effects (lifecycle events).
    * `useRef`: Persisting values and referencing DOM elements without re-renders.
    * `useMemo` & `useCallback`: Implementing basic performance optimizations.
    * **Custom Hooks:** Extracting logic (like `useFetch` or `useCart`) to keep components clean and declarative.
* **State Management:** utilizing **React Context API** to manage global state (like the shopping cart) and avoid prop-drilling.

### ⚡ Modern JavaScript (ES6+)
* **Asynchronous Logic:** Handling data fetching using `fetch`/`axios` with `async/await`.
* **Data Manipulation:** Heavily utilizing array methods (`map`, `filter`, `reduce`) to handle product lists and cart calculations.
* **ES6 Syntax:** Practicing destructuring, spread/rest operators, and template literals for cleaner code.
* **Storage:** Implementing `localStorage` to persist cart data across browser sessions.

### 🛠️ Tooling & Workflow
* **Vite:** Experiencing the speed of modern build tools (Fast HMR & Cold-starts).
* **Routing:** Implementing client-side routing for a multi-page feel (Listing → Details → Cart).

---

## 🛠️ Tech Stack

* **Framework:** React (Functional Components + Hooks)
* **Build Tool:** Vite
* **Language:** JavaScript (ES6+)
* **Styling:** CSS / Component-level styling
* **Routing:** React Router
* **Version Control:** Git & GitHub

---

## 🌟 Features (Demo)

* **Product Listing:** Dynamic grid of products with basic filtering.
* **Product Details:** Individual pages for product information.
* **Shopping Cart:** Full cart functionality (Add, Remove, Adjust Quantity, Calculate Total).
* **Persistent State:** Cart items remain saved even after refreshing the page.
* **Responsive Layout:** optimized for different screen sizes.

---

## 💻 How to Run

This project consists of two parts: the **Backend** and the **Frontend**. You will need to run them simultaneously in separate terminal windows to make the application work correctly.

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/Phichak-Kamin/EcommerceProject.git](https://github.com/Phichak-Kamin/EcommerceProject.git)
    cd EcommerceProject
    ```

2.  **Step 1: Start the Backend (Terminal 1)**
    Navigate to the backend folder, install dependencies, and start the server:
    ```bash
    cd ecommerce-backend
    npm install
    npm run dev
    ```
    > *Keep this terminal window open and running.*

3.  **Step 2: Start the Frontend (Terminal 2)**
    Open a **new terminal window**, navigate to the frontend project folder, and start the React app:
    ```bash
    cd ecommerce-project
    npm install
    npm run dev
    ```

4.  **Step 3: Access the Application**
    Once the frontend is running, the terminal will provide a local URL (e.g., `http://localhost:5173`). Copy and paste this link into your browser to use the application.

---

## 🙏 Credits & Inspiration

This project was heavily inspired by the excellent educational content from **SuperSimpleDev**. The tutorials helped solidify my understanding of React 19 concepts and best practices.

* **Tutorial:** [React Tutorial Full Course - Beginner to Pro (React 19, 2025)](https://youtu.be/TtPXvEcE11E?si=6cSMhn8hZzCcH52s)
* **Channel:** [SuperSimpleDev](https://www.youtube.com/@SuperSimpleDev)

---

### 📬 Contact

Built by **Phichak Limlamlertkul** as a learning initiative.
Feel free to open an issue or reach out if you have any suggestions!
