### JSX Exercise

JSX stands for JavaScript XML. It’s a syntax used in React that lets you write HTML-like code inside JavaScript.

🔹 Simple Definition

JSX allows you to describe UI structure (like HTML) directly within JavaScript code.

👉 Instead of writing complex JavaScript to create elements, JSX makes it simple and readable.

🔹 How JSX Works

JSX is not understood directly by browsers.
It is converted into JavaScript using tools like Babel.

🔹 Rules of JSX
Only one parent element must wrap everything
Use className instead of class
Write JavaScript inside {}

🔹 Why Use JSX?
✔️ Easy to read and write
✔️ Looks like HTML
✔️ Helps build UI faster
✔️ Reduces complex code
🔹 Key Idea

👉 JSX = HTML + JavaScript together

#### Step 1: Create a New Component

1. Create a new file called `WelcomeMessage.jsx`.
2. Inside this file, write a functional component called `WelcomeMessage`.
3. The component should return a `<div>` that contains:
   - A `<h1>` element that displays the message: `"Hello, World!"`
   - A `<p>` element that displays the message: `"Welcome to learning JSX!"`

#### Step 2: Render the Component in App.jsx

1. Open the `App.jsx` file.
2. Import the `WelcomeMessage` component at the top of the file:
3. Inside the `App` component's return statement, render the

#### Step 3: Run the Application

1. Run the app in your development environment.
2. You should see the `"Hello, World!"` message along with `"Welcome to learning JSX!"` displayed in your browser.
