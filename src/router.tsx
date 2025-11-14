import { createHashRouter } from "react-router-dom";
// import App from "./app";
import MainComponent from "./componentes/MainComponent";

const router = createHashRouter([
    {
        path: '/',
        element: <MainComponent />,
        errorElement: <div>404: Page not found!</div>
    },
]);

export default router;