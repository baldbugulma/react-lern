
import './App.css';
import { Book } from './Books';
import { Preloader } from './Preloader'

const App = (props) => {
  return props.isLoading ? < Preloader /> : (
    <div>
      <Book name="JS for Beginners" year="2018" price="1000" />
      <Book name="11111" year="22222222" price="3333" />
      <Book name="111" year="2018" price="2" />
    </div>
  );
};



export default App;

