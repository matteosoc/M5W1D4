import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import AllTheBooks from './components/AllTheBooks';

test('renders welcome component', () => {
  render(<App />);

  const welcomeComponent = screen.getByText(/Benvenuto sul mio nuovissimo sito!/i);

  expect(welcomeComponent).toBeInTheDocument();
});

test('numero card corrisponde al numero di libri nel file json', () => {
  render(<App />);

  const bookCards = screen.getAllByTestId("card-image");

  expect(bookCards).toHaveLength(150);
});

test('verifica che il componente CommentArea venga renderizzato correttamente', () => {
  render(<App />);

  const bookCards = screen.getAllByTestId("card-image");
  fireEvent.click(bookCards[0])
  const recensioniText = screen.getByText(/recensioni/i);

  expect(recensioniText).toBeInTheDocument();
});


describe('verifica, magari con più tests, che il filtraggio dei libri tramite navbar si comporti come previsto', () => {

  test('verifica, magari con più tests, che il filtraggio dei libri tramite navbar si comporti come previsto', () => {
    render(<App />);
  
    const filterInput = screen.getByPlaceholderText("Search")
    fireEvent.change(filterInput, {target: {value: 'conan'}})

    const bookCards = screen.getAllByTestId("card-image");
  
    expect(bookCards).toHaveLength(2);
  });

  test('verifica, magari con più tests, che il filtraggio dei libri tramite navbar si comporti come previsto', () => {
    render(<App />);
  
    const filterInput = screen.getByPlaceholderText("Search")
    fireEvent.change(filterInput, {target: {value: 'echo'}})

    const bookCards = screen.getAllByTestId("card-image");
  
    expect(bookCards).toHaveLength(1);
  });

})


test('verifica che, cliccando su un libro, il suo bordo cambi colore', () => {
  render(<App />);

  const bookCards = screen.getAllByTestId("card-image");
  fireEvent.click(bookCards[0])

  const bookBorder = screen.getAllByTestId("red-border");

  expect(bookBorder[0]).toHaveClass('border')
});


test('verifica che, cliccando su di un libro dopo il primo, il libro del primo ritorni', () => {
  render(<App />);

  const bookCards = screen.getAllByTestId("card-image");
  fireEvent.click(bookCards[0])
  const bookBorder = screen.getAllByTestId("red-border");

  fireEvent.click(bookCards[1])

  expect(bookBorder[0]).not.toHaveClass('border')
});

test('verifica che all\' della pagina ,senza aver ancora cliccato su nessun libro, non ci siano istanze del componente SingleComment all\'interno del DOM', () => {
  render(<App />);

  const commentComponent = screen.queryAllByTestId('commentComp')

  expect(commentComponent).toHaveLength(0)
});

test('verifica infine che, cliccando su di un libro con recensione, esse vengano caricate correttamente', async () => {
  render(<App />);

  const bookCards = screen.getAllByTestId("card-image");
  fireEvent.click(bookCards[0])

  const commentComponent = await screen.findAllByTestId('commentComp')

  expect(commentComponent).not.toHaveLength(0)
});