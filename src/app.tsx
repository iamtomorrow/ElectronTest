import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";

const App = React.memo(( props: any ) => {

    return (
        <RouterProvider router={router} />
    )
})

export default App;