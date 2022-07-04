import './App.css';
import NewDepense from './components/NewDepense';
import { useState } from 'react';
import Depenses from './components/Depenses';

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

  function FilterDepenseList(selectedYear) {
    setTabDep(() => {
      let tabFiltred = TabDepenses.filter((d) => d.date_d.getFullYear().toString() == selectedYear);
      return tabFiltred;
    })
  }

  return (
    <div>
      <NewDepense onAddNewDepense={addDepenseFromApp}></NewDepense>
      <Depenses filterDep={FilterDepenseList} listDep={tabDep}></Depenses>

    </div>
  );
}

export default App;
