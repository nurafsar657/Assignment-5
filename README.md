Dev Stack Builder
A responsive web app that helps developers explore and build their ideal tech stack — pick technologies across frontend, backend, database, styling, DevOps, and more, then curate them into a personal "stack" you can review, adjust, and clear at any time.

📖 About
Dev Stack Builder lets you browse a curated list of popular development technologies, each shown with its category, difficulty level, rating, and a short description. You can add technologies to your personal stack with one click, see them collected in a sidebar, and remove them individually or all at once — all backed by toast notifications so every action gives clear feedback.

🛠️ Built With
React (with TypeScript)
Vite — build tool and dev server
Tailwind CSS + daisyUI — styling and UI components
React-Toastify — alert/notification system
JSON — local data source for all technology entries
✨ Features
Interactive Stack Builder — browse 12 technologies across 7 categories, add or remove them from your personal stack, with duplicate-add prevention and a "Remove All" option.
Shared Gradient Brand Theme — a single CSS variable (--gradient-brand) powers the brand name, hero heading highlight, and primary buttons, so the whole site's accent color can be re-themed by changing one value.

🔗 Links
Live Site:
Repository: https://github.com/nurafsar657/Assignment-5
🧠 React Concepts 
1. What is JSX, and why is it used in React?
JSX lets us write HTML-like code inside JavaScript.
It makes React code easier to read and write.
React converts JSX into JavaScript behind the scenes.
2. What is the difference between props and state?
Props are data passed from a parent to a child component.
State is data managed inside a component and can change over time.
Example: selectedStacks is a state because it changes when we add or remove technologies.
3. What does the useState hook do, and where did you use it?
useState lets a component store and update data.
When the state changes, React updates the UI.
I used useState for selectedStacks to store the technologies selected by the user.
4. What does the useEffect hook do, and why did you need it to load the JSON data?
useEffect is used to run code after a component renders, often for fetching data.
I didn't use useEffect in my final project.
I used use() with a Promise and Suspense to load the JSON data.
5. Why does every item in a .map() list need a unique key prop?
The key helps React identify each item in a list.
It helps React update the correct item when the list changes.
I used the technology id as the key because it is unique.
6. What is conditional rendering?
Conditional rendering means showing different UI based on a condition.
For example, if selectedStacks.length === 0, I show "No technologies selected yet."
If there are technologies, I show the selected list.
7. How do you pass data from a parent to a child, and how does a child send something back?
A parent sends data to a child using props.
A child can send information back by calling a function passed through props.
In my project, the parent passes functions to the child, and the child calls them when the user clicks a button.