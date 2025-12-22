1.What is JSX, and why is it used?
Ans:
JSX is a syntax that looks like HTML but is used in React to write components. It makes it easier to create and visualize the UI. React then converts JSX into JavaScript.

2.What is the difference between State and Props?
Ans:
State: Any data that belongs to a component and can change over time.
Props:  Any data passed from a parent component to a child component. Props are read-only.

3.What is the useState hook, and how does it work?
Ans:
 It is a React hook that  add state to a functional component. We use it to create a variable and a function to update that variable.

4.How can you share state between components in React?
Ans:
We can share state by lifting it up to a common parent component and passing it down as props to child components.

5.How is event handling done in React?
Ans:
React handles events using functions and camelCase syntax. Example:

<button onClick={handleClick}>Click Me</button>