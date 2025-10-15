# Browser Extension Manager UI

A responsive dashboard interface built with **React** and **Tailwind CSS**.  
The design represents a modern and minimal UI for managing browser extensions — allowing users to toggle, filter, and remove installed extensions.  
This project is a solution to the **Browser Extension Manager UI challenge** on [Frontend Mentor](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp).

## Features

- **Dynamic Data Handling**: Extensions are loaded from a local JSON file and stored in state using React’s Context API.
- **Filtering Logic**: Users can toggle between _All_, _Active_, and _Inactive_ extensions using a simple filter bar.
- **State Persistence**: Extension data and UI theme are persisted with `localStorage`, so user preferences remain after reload.
- **Theme Toggle**: Light and dark mode implemented using Tailwind’s `data-theme` variant (`[data-theme=dark]`), fully synced with `localStorage`.
- **Responsive Grid Layout**: Tailwind’s grid utilities ensure clean alignment and scaling across breakpoints.
- **Modular Components**: Clear React structure with reusable components like `Header`, `FilterBar`, and `ExtensionCard`.

## Key Learnings

- **React Context API**: Learned how to manage and share state globally between components without prop drilling.
- **State Management Basics**: Practiced updating arrays with immutable logic (`map`, `filter`) to toggle and remove items.
- **Persistent State**: Used `localStorage` inside `useEffect` to preserve user settings and extension data.
- **Theme Management in Tailwind 4**: Applied Tailwind’s modern `@custom-variant dark` syntax for theme toggling.
