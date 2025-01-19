// For visual and behavior testing. 
// TODO replace with Storybook 

import { Scenario } from './components';

function App() {

  return (
    <>
      <Scenario onClose={() => alert('You clicked the close button!')}>
        Hello World!
      </Scenario>
    </>
  )
}

export default App
