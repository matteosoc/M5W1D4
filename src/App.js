import './App.css';
import MyFooter from './components/MyFooter';
import MyNav from './components/MyNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import books from './data/fantasy.json'
import { useState } from 'react';
import { ThemeContextProvider } from './context/ThemeContextProvider';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NotFound from './components/NotFound';
import BookDetails from './components/BookDetails'


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
    <BrowserRouter>
      <ThemeContextProvider>
        <MyNav setWord={setWord} word={word} keyUpFunction={keyUpFunction} />
        <Routes>
          <Route path='/' element=
          {
            <>
              <Welcome />
              <AllTheBooks filteredBooks={filteredBooks} isLoading={isLoading} />
            </>
          } 
          />
          <Route path="/books/:asin" element={<BookDetails />} />
          <Route path='/404' element={<NotFound />} />
          <Route path='/*' element={<Navigate to="/404" />} />
        </Routes>
        <MyFooter />
      </ThemeContextProvider>
    </BrowserRouter>
  );
}

export default App;
