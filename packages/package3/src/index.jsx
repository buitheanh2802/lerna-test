import { createRoot } from "react-dom/client";
import App from "./app";

const configurations = () => {
    const elementTarget = document.querySelector('#root');
    if(!elementTarget) return;
    const root = createRoot(elementTarget);
    root.render(<App />)
};

configurations();

