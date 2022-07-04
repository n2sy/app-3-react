import './App.css';
import NewDepense from './components/NewDepense';
import DepenseList from './components/DepenseList';
import { useState } from 'react';

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

  const [tabDep, setTabDep] = useState(TabDepenses);

  function addDepenseFromApp(newD) {

    setTabDep((prev) => {
      return [newD, ...prev];
    })
  }

  return (
    <div>
      <NewDepense onAddNewDepense={addDepenseFromApp}></NewDepense>
      <DepenseList listDep={tabDep}></DepenseList>

    </div>
  );
}

export default App;
