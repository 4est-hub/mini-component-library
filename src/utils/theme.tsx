import { createContext, useContext, ReactNode } from "react";


// create theme interface
export interface ThemeProps {
  colors: {
    primary: string,
    secondary: string,
    alert: string
  },
  spacing: (factor: number) => string
};

// create theme context
const ThemeContext = createContext<ThemeProps | undefined>(undefined);


// create ThemeProviderProps interfae
interface ThemeProviderProps {
  children: ReactNode; // ReactNode allows any valid React child
  theme: ThemeProps;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
