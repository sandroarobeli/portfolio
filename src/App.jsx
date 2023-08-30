import { useEffect } from "react";

// IMPORTANT NOTES: FAVICON, SEO, LIGHTHOUSE etc...
// NEXT: READ ON FONT SIZING AND KEEP FILLING BASIC CONFIG SETTINGS AS THIS GUY GOES ON...

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
// if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//   document.documentElement.classList.add('dark')
// } else {
//   document.documentElement.classList.remove('dark')
// }

// Whenever the user explicitly chooses light mode
// localStorage.theme = 'light'

// Whenever the user explicitly chooses dark mode
// localStorage.theme = 'dark'

const App = () => {
  useEffect(() => {
    console.log("local storage theme 1: " + localStorage.theme);
    if (
      localStorage.theme === "dark" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const changeMode = () => {
    if (!localStorage.theme || localStorage.theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } // RESTORE IF NEEDED
    console.log("local storage theme 2: " + localStorage.theme);

    // document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="relative">
      <div className="absolute top-0 right-0 left-0 bottom-0 bg-repeat w-screen h-screen bg-paper bg-primary dark:bg-black">
        <button
          onClick={changeMode}
          className="px-8 py-4 ml-48 mt-48 rounded-md border-x border-y border-black text-black bg-transparent dark:bg-transparent dark:text-[#F5F5DC] dark:border-[#F5F5DC]"
        >
          MODE
        </button>
        <h1 className="dark:text-[#F5F5DC]">
          Alex Arobelidze default font Montserrat
        </h1>
        <h1 className="dark:text-primary">
          Alex Arobelidze default font Montserrat
        </h1>
        <h1 className="dark:text-primary-hover">
          Alex Arobelidze default font Montserrat
        </h1>
        <h1 className="dark:text-primary-active">
          Alex Arobelidze default font Montserrat
        </h1>
      </div>
    </div>
  );
};
// className="absolute top-0 right-0 left-0 bottom-0 bg-repeat w-screen h-screen bg-paper bg-[#F5F5DC] dark:bg-black"
// bg=[#E0E2DC] 3.
// bg-[#F5F5DC] 1.
// bg-[#FCF5E5] 2.
export default App;
/*
<div className="absolute top-0 bottom-0 left-0 right-0 bg-repeat mix-blend-multiply pointer-events-none">
        <button
          onClick={changeMode}
          className="px-6 py-4 ml-48 mt-48 bg-black text-white dark:bg-white dark:text-black"
        >
          Mode
        </button>
      </div>

*/
