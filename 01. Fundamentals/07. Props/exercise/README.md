### Exercise: Using Props in React Components

Props (short for Properties) are used in React to pass data from one component to another, usually from a parent component to a child component.

🔹 Simple Definition

👉 Props = data sent from parent → child component

They help components become dynamic and reusable.

🔹 How Props Work
1. Parent passes data → <Component value="data" />
2. Child receives data → props.value

🔹 Important Rules
1. Props are read-only (you should not modify them in the child)
2. They enable component communication
3. They make components reusable and dynamic

* Why Props Matter
1. Pass dynamic data
2. Build reusable UI components
3. Keep code clean and modular

#### Step 1: Create a `Person` Component

1. Create a new file called `Person.jsx`.
2. Inside this file, create a functional component called `Person`.
3. This component should accept `props` and render:

   - A `<h2>` element that displays the person's name.
   - A `<p>` element that displays the person's age.

4. Use `props.name` and `props.age` to display the dynamic values passed from the parent component.

#### Step 2: Create a `Product` Component

1. Create a new file called `Product.jsx`.
2. Inside this file, create a functional component called `Product`.
3. This component should accept `props` and render:

   - A `<h2>` element that displays the product's name.
   - A `<p>` element that displays the product's price.

4. Use `props.name` and `props.price` to display the values passed from the parent component.

#### Step 3: Pass Props from `App.jsx`

1. In your `App.jsx` file, import the `Person` and `Product` components:

   ```jsx
   import Person from "./Person";
   import Product from "./Product";
   ```

2. Inside the `App` component, pass dynamic data as props to both `Person` and `Product` components:
   - Pass `name` and `age` as props to the `Person` component.
   - Pass `name` and `price` as props to the `Product` component.
