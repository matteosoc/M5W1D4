import './App.css';
import MyFooter from './components/MyFooter';
import MyNav from './components/MyNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import books from './data/fantasy.json'
import { useState } from 'react';
import { ThemeContextProvider } from './context/ThemeContextProvider';


function App() {
  const [word, setWord] = useState('')
  const [filteredBooks, setFilteredBooks] = useState(books)
  const [isLoading, setIsloading] = useState(false);

  const keyUpFunction = (event) => {
    setWord(event.target.value)
    setIsloading(true);

    const filtered = books.filter((book) => {
      return event.target.value.toLowerCase() === '' ? book : book.title.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setFilteredBooks(filtered)

    setIsloading(false);
  }

  return (
    <>
      <ThemeContextProvider>
      <MyNav setWord={setWord} word={word} keyUpFunction={keyUpFunction}/>
      <Welcome />
      <AllTheBooks filteredBooks={filteredBooks} isLoading={isLoading}/>
      <MyFooter />
      </ThemeContextProvider>
    </>
  );
}

export default App;
