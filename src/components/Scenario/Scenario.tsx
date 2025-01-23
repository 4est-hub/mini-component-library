// This is a minimal component to cover unit tests, with the addition of children for embedded text. 
// Possible enhancement(s): 
//   - "aria-label" prop for better accessibility

import React, { useEffect } from 'react';
import styles from "./Scenario.module.scss";
import { ScenarioProps } from "./props";
import { useTheme } from "../../utils/theme";

function Scenario ({onClose, 'data-testid': testId, children}: ScenarioProps) {
  const theme = useTheme(); 

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && onClose) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <div
      data-testid={testId}
      className={`${styles.scenario} modal`}
      role="dialog"
      style={{
        backgroundColor: theme.colors.primary
      }}
    >
      <header
        role="heading"
      >
      </header>
      <main>
        {children}
      </main>
      <footer>
        <button
          onClick={onClose}
        >
            close
        </button>
      </footer>
    </div>
  )
}

export default React.memo(Scenario);
