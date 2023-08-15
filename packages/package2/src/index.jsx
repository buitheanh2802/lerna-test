import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";


const configurations = () => {
    const element = document.querySelector('#root');
    const root = createRoot(element);
    root.render(<App />)
}

configurations();

export default configurations;