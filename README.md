# Simple Todo List Built by React

## Scripts

In the project directory, you can run several scripts that are defined in the `package.json` file. Here are a couple of the key scripts you might find useful:


### `npm start`

Runs the app in the development mode by simply running
```sh
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run format`

This script uses [Prettier](https://prettier.io/), an opinionated code formatter, to automatically format your code for consistency and readability. When you run this script, Prettier will scan the files in the `src/` directory and reformat the code according to its rules. This helps maintain a consistent coding style, especially when working in a team.

To format your code, simply run:
```sh
npm run format
```

### `npm run server`


This script starts up a local JSON server for your application. JSON Server provides a full fake REST API with zero coding in less than 30 seconds (seriously), which is great for prototyping and development. Your db.json file contains the mock data used by JSON Server.

To start the server, run:
```sh
npm run server
```

Please adjust the port number or any specific details according to your actual project setup. The `npm run server` command assumes the default JSON Server port, but this might differ if you have customized it.

