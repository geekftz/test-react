import { useContext } from 'react';
import { ThemeContext } from './context';

function Child() {
  const theme = useContext(ThemeContext);
  return <div className="child">child: {theme}</div>;
}

export default Child;
