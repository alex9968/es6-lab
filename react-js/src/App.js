//import React, { } from 'react';
import { Switch } from 'alex-react-library';
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
function App() {
  // const [count, setCount] = useState(0)
  // const [count2, setCount2] = useState(0)


  return (
    <div className="app" css={css`
      background: #fffff1;
      width: 100vw;
      height: 100vh;
      display: grid;
      place-items: center;
      `}>
      <Switch />
    </div>
  );
}

export default App;
