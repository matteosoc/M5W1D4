import Alert from 'react-bootstrap/Alert';
import './Welcome.css'
import { ThemeContext } from '../context/ThemeContextProvider';
import { useContext } from 'react';
import { useState } from 'react';


function Welcome() {

  const { theme, setTheme } = useContext(ThemeContext)

  const [show, setShow] = useState(true);



  return (
    <>
      <Alert variant="dark" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Benvenuto EPIBOOKS</Alert.Heading>
        <p>
          Clicca sul libro per leggere le recensioni e scriverne una di nuova.
        </p>
      </Alert>
    </>
  );
}

export default Welcome;