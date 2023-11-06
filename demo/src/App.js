
import './App.css';
import { Book } from './Books';
import { Users } from './Users';


const App = () => {
  return (
    <div>
      <Book name="JS for Beginners" year="2018" price="1000" />
      <Book name="11111" year="22222222" price="3333" />
      <Book name="111" year="2018" price="2" />
      <Users name="Константин Игоревич" speciality = "Front-end разработчик" age = '32 года' stage = '2 года'/>
      <Users name="Мария Андреевна" speciality="Web-дизайнер" age="28 лет" stage="3 года" />

      <Users name="Алексей Петрович" speciality="Back-end разработчик" age="35 лет" stage="5 лет" />
    </div>
  );
};

export default App;

