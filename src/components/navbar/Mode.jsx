import React, { useEffect, useState } from 'react';
import lightMode from "../../assets/moods-img/light-mode-button.png";
import darkMode from "../../assets/moods-img/dark-mode-button.png";

const Mode = () => {
	// theme mode
	const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark");
	
    // update the theme mode
	useEffect(() => {
		localStorage.setItem("theme", theme);

		if (theme === "light") {
			document.body.classList.remove("dark");
		} else {
			document.body.classList.add("dark");
		}
	}, [theme]);

	const handleMode = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
	}

  return (
    <div className='relative' onClick={handleMode}>
		{/* light mode img */}
		<img src={lightMode} alt="light mode" 
		className={`w-15 cursor-pointer absolute right-0 z-10 transition-all duration-300 ${theme == "dark" ? "opacity-0" : "opacity-100"}`}
		/>
		{/* dark mode img */}
		<img src={darkMode} alt="dark mode" 
		className={`w-15 cursor-pointer transition-all duration-300 ${theme == "light" ? "opacity-0" : "opacity-100"}`}
		/>
    </div>
  )
}

export default Mode
