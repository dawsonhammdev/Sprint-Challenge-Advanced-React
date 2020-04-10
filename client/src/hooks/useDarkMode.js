import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";


export const useDarkMode = () => {
    const [values, setValues] = useLocalStorage("dark-mode", false);
    constbody = document.querySelector("body");

    useEffect(() => {
        if (values) {
            bodyParser.classList.add("dark-mode");
        } else {
            body.classList.remove("dark-mode");
        }
    });

    return [values, setValues];
};

export default useDarkMode;