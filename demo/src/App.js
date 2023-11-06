
import './App.css';
import { Book } from './Books';

const App = () => { // Обратите внимание, что { на той же строке, где и return
  return (
    <div>
      <Book name="JS for Beginners" year="2018" price="1000" />
      <Book name="11111" year="22222222" price="3333" />
      <Book name="111" year="2018" price="2" />
    </div>
  );
};

export default App;

