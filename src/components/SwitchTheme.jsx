import Form from 'react-bootstrap/Form';
import { ThemeContext } from '../context/ThemeContextProvider';
import { useContext, useState } from 'react';

function SwitchTheme() {
  const { theme, setTheme } = useContext(ThemeContext)

  const SwitchTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <Form className='pe-3 d-flex pt-3 pb-2'>
      <Form.Label className={theme === 'light' ? "pe-3" : "pe-3 text-white"}>Dark Mode</Form.Label>
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        onClick={SwitchTheme}
      />
    </Form>
  );
}

export default SwitchTheme;