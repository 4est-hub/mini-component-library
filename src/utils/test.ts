// This file provides a utility functions to render components (not provided vitest or jest)

import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';

// User interaction capabilities.
// Props Definitions:
// - ui: The React element to render.
// - options: Optional configuration options for rendering.
const renderWithUser = (ui: ReactElement, options?: RenderOptions) => {
  return {
    user: {
        click: () => {}
    }, 
    ...render(ui, options),
  };
};

export { renderWithUser };
