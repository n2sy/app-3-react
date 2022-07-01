import './App.css';
import NewDepense from './components/NewDepense';
import DepenseList from './components/DepenseList';

const TabDepenses = [
  {
    id: 1,
    title: 'Food',
    amount: 20,
    date_d: new Date(2021, 6, 23),
  },
  {
    id: 2,
    title: 'Insurance Car',
    amount: 4000,
    date_d: new Date(2022, 3, 21),
  },
  {
    id: 3,
    title: 'Smartphone',
    amount: 200,
    date_d: new Date(2020, 2, 28),
  }
]

function App() {

  return (
    <div>
      <NewDepense></NewDepense>
      <DepenseList listDep={TabDepenses}></DepenseList>

    </div>
  );
}

export default App;
