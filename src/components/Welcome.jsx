import Alert from 'react-bootstrap/Alert';
import './Welcome.css'
import { ThemeContext } from '../context/ThemeContextProvider';
import { useContext } from 'react';

function Welcome() {

  const {theme, setTheme} = useContext(ThemeContext)


  return (
    <>
        <Alert theme={theme === 'light' ? 'light' : 'warning'}>
          Benvenuto/a sul mio nuovissimo sito!
        </Alert>
    </>
  );
}

export default Welcome;