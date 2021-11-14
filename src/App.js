import logo from './logo.svg';
import './App.css';
import NavBar from './component/navbar';
import BookList from './component/BookList';
import NewBookForm from './component/BookForm';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <BookList/>
     <NewBookForm/>
    </div>
  );
}

export default App;
