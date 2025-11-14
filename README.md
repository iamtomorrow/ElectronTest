# Electron Test

1. Project setup

Follow: https://www.electronforge.io/

```
npm init electron-app@latest electron-test -- --template=webpack-typescript
```

2. React with TypeScript Integration

This installation is needed for creating React components inside our Electron app.

```
npm install --save react react-dom
npm install --save-dev @types/react @types/react-dom
```

3. Create App Entry

For this, create a file in /src called app-entry.tsx, for example, and the following code inside of it:
```
import { createRoot } from 'react-dom/client';
import App from './app';

const root = createRoot(document.querySelector("#root"));
root.render(
    <App />
);
```

4. Enable jsx code

Put this line of code inside your tsconfig.json

```
"jsx": "react-jsx",
```

5. Install react-router-dom
```
react-router-dom
```

6. Install electron
```
npm install electron
```

7. Import app-entry file inside the renderer file
```
import './app-entry';
```

8. Setup React Router

Your MainComponent file must look like this:
```
import React from "react";

const MainComponent = React.memo((props: any) => {

    return (
        <div>Electron Test</div>
    )
});

export default MainComponent;
```

Your router file must look like this:
```
import { createHashRouter } from "react-router-dom";
import MainComponent from "./componentes/MainComponent";

const router = createHashRouter([
    {
        path: '/',
        element: <MainComponent />,
        errorElement: <div>404: Page not found!</div>
    },
]);

export default router;
```

Your app.tsx must look like this:
````
import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";

const App = React.memo(( props: any ) => {

    return (
        <RouterProvider router={router} />
    )
})

export default App;
```

Feel free to create the router and MainComponent files in desired folders. But the app-entry and app files must be in the /src file.


9. Setup Redux

Follow: https://redux-toolkit.js.org/usage/usage-with-typescript

```
npm install @reduxjs/toolkit
```

```
npm install react-redux
```