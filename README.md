# nextjs-tailwindcss-imdb

## Exceptions
### 1. localStorage
**Problem:** Storing data in the `localStorage` is tricky in **NextJS**. Because as the next js render the page in the server. So when it renders the page in the server it actually has no `window` object. The `localStorage` is a attribute of the `window`. That's why when it will render in the server it will be unable to find the `localStorage` and gives *undefined* error.

**Solve:** In this project you can find the solve in the `utils` folder. What I did is created two function for getting localStorage and setting localStorage. There I implemented a logic to check if we have the window object or not. That stop the code being executed in the server.