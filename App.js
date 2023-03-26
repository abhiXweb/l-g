import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Content from "./components/Content";
import "/style.css"
const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => (
    <>
        <Header />
        <Content />
    </>
)

root.render(<App />);