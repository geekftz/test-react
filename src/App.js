import './App.css';

import Child from './Child';

import { ThemeContext } from './context';

function App() {
  return (
    <div className="App">
      <ThemeContext.Provider>
        <Child />
      </ThemeContext.Provider>
      <Child />
    </div>
  );
}

export default App;
