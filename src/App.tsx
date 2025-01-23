// For visual and behavior testing. 
// TODO replace with Storybook 

import { ThemeProvider, ThemeProps } from './utils/theme';
import { Scenario } from './components';

// create default theme
export const defaultTheme: ThemeProps = {
  colors: {
    primary: "#007bff",
    secondary: "#6c757d",
    alert: "#000000",
  },
  spacing: (factor) => `${factor * 8}px`,
};

export const darkTheme: ThemeProps = {
  colors: {
    primary: "grey",
    secondary: "darkgrey",
    alert: "black",
  },
  spacing: (factor) => `${factor * 8}px`,
};

const App = (
  <>
    <Scenario onClose={() => alert('You clicked the close button!')}>
      Hello World!
    </Scenario>
  </>
);

function AppContext() {
  return (
    <>
      <ThemeProvider theme={defaultTheme} children={App} />
    </>
  )
};

export default AppContext
