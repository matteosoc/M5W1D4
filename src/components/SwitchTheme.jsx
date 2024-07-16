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
    <Form>
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="Dark Mode"
        onClick={SwitchTheme}
      />
    </Form>
  );
}

export default SwitchTheme;