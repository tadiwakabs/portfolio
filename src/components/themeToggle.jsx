import {Sun, Moon} from "lucide-react";
import {useEffect, useState} from "react";
import {cn} from "@/lib/utils.js";

export const ThemeToggle = () => {
    const [isDarkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setDarkMode(false);
            document.documentElement.classList.remove("dark");
        }
    }, [])

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setDarkMode(true);
        }
    }

    return <button onClick={toggleTheme}
                   className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2" +
                        " rounded-full transition-colors duration-300 focus: outline-hidden")}>
        {isDarkMode ? <Sun className="h-6 w-6 text-yellow-50"/> :
        <Moon className="h-6 w-6 text-blue-950"/>}</button>
}
