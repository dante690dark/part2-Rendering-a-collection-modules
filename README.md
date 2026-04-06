# part2-Rendering-a-collection-modules

This section is part of the Full Stack Open￼ course. In Part 2￼, the focus is on building more dynamic React applications.

📚 We learned how to render lists using the map() function, handle user input with HTML forms, use the useEffect hook for data fetching, and apply basic styling with CSS.

⸻

📁 Projects Included

1. Countries

Displays country data and allows users to explore information dynamically.

2. Courseinfo

Renders course information and exercises using reusable components.

3. Phonebook

A CRUD-style app that allows adding, deleting, and filtering contacts.
This project includes a fake backend using db.json.

⸻

🚀 Getting Started

Each project is independent. Navigate into the desired folder:

```
bash

cd countries
# or
cd courseinfo
# or
cd phonebook
```

Install dependencies

```
bash

npm install
```

Run the app with:

```
bash

npm run dev
```

🗄️ Fake Backend (Phonebook Only)

The phonebook project uses a fake REST API powered by JSON Server.

Important
• db.json is only used by the phonebook project
• The backend must be running to add, delete, or update contacts

Run the backend server

```
bash

cd phonebook
npm run server
```

The API will be available at:

```
code

http://localhost:3001
```

📁 Example Structure

```
root/
├── countries/
├── courseinfo/
└── phonebook/
    ├── db.json
    ├── src/
    └── package.json
```

⚠️ API Key Required:

For Countries project fetches weather data from an external API. You must subscribe to the free plan (version 3.0), which has a very limited number of requests.

Setup Example:

Create a .env file inside the countries folder:

```
VITE_SOME_KEY=your_api_key_here
```

and you can export it from the code just like this

```
code

const api_key = import.meta.env.VITE_SOME_KEY
```
