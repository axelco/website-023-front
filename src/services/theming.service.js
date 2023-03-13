

import localStorageService from "./localStorage.service";

// const AUTH_THEMES = ['auto', 'dark', 'light']

class ThemingService{

    // Permet de récupérer le thème du Visiteur depuis le localStorage
    // Ou depuis les préférences navigateur si aucun localStorage
    // Retourne la valeur "dark" ou "light"
    getPreferredTheme(){

        const storedTheme = localStorageService.getTheme();
        if (storedTheme) {
            return storedTheme;
          
        }
      
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      
    }

    setTheme(theme){
        if (theme === "auto" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
            document.documentElement.setAttribute("data-bs-theme", "dark");
            localStorageService.setTheme("dark")
          } else {
            document.documentElement.setAttribute("data-bs-theme", theme);
            localStorageService.setTheme(theme)
        }
    }

    
}

export default new ThemingService();