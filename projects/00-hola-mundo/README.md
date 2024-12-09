# What We Learned About React 
This project uses two main components, App and TwitterFollowCard, which helped us practice fundamental React concepts:

# App.jsx

`Lists and Keys`:
We learned how to render a list of items dynamically using map() and how to assign a unique key to each item for efficient updates in React.

`Props`:
This component demonstrates how to pass data (like userName, name, and isFollowing) to child components using props.
TwitterFollowCard.jsx

`State Management`:
We used the useState hook to manage the local state of whether a user is being followed or not. This helps in understanding how React components re-render when state changes.

`Dynamic Classes and Text`:
By using conditional rendering, we dynamically updated the button's text and CSS classes based on the component's state.

`Props and Children`:
We passed props (userName, initialIsFollowing) to the component, while also utilizing the children prop to display the user's name in a flexible and reusable way.

`Event Handling`:
We implemented a button click handler (handleClick) to toggle the following state, demonstrating React's approach to event-driven programming.
This project provided a hands-on understanding of React basics:

`Component Composition`: Structuring the UI with reusable components.
Props and State: Managing data flow between components and handling local state.

`Event Handling`: Implementing interactivity with user-driven actions.
Dynamic Rendering: Updating the UI based on state or props changes.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
