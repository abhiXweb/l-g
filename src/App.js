import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Content from "./components/Content";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "/style.css"
import About from "./components/About";
import Contact from "./components/Contact";
const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => (
    <>
        <Header />
        <Outlet />
    </>
)

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Content />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "contact",
                element: <Contact />
            }
        ]
    }
]);

root.render(<RouterProvider router={appRouter} />);