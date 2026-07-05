# React Draggable UI card application

The application build the following tech stack combination.

- React for UI and interaction design
- Vite for web building
- TypeScript for static typing
- Tailwind for UI styling 
- dnd-kit/core and dnd-kit/sortable for drag-and-drop UI card reordering functionality

## Push to GitHub repository
```
git init
git add .
git commit -m "The Nth commit on date."
git remote rm origin
git branch -M main
git remote add origin git@github.com:robin-artemstein/react-draggable-ui-card-app.git
git push -u origin main
```

## Installation

Install Bun first

https://bun.sh

Then install dependencies:
```
bun install
bun dev
```
## Project structure
```
dashboard-project/
├── postcss.config.js
├── tailwind.config.js
├── index.html
├── package.json
└── src/
    ├── main.tsx
    ├── index.css
    ├── App.tsx
    ├── types.ts
    └── components/
        ├── Navbar.tsx
        ├── DashboardBody.tsx
        └── SortableCard.tsx
```
