import Alert from 'react-bootstrap/Alert';

function Welcome() {
  return (
    <>
      {[
        'primary'
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          Benvenuto/a sul mio nuovissimo sito!
        </Alert>
      ))}
    </>
  );
}

export default Welcome;