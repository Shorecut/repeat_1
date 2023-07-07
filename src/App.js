import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import EmployersList from "./components/EmployersList";
const data = [
  { name: "SALAMAT", surname: "BAIKE", days: 20, salaryPerDay: 80 },
  { name: "Dastan", surname: "aaa", days: 15, salaryPerDay: 40 },
  { name: "Emir", surname: "bbb", days: 22, salaryPerDay: 60 },
  { name: "Sheraman", surname: "ccc", days: 15, salaryPerDay: 55 },
  { name: "Albina", surname: "kkk", days: 18, salaryPerDay: 44 },
  { name: "Azret", surname: "hhh", days: 10, salaryPerDay: 22 },
  { name: "Mirdin", surname: "Agai", days: 20, salaryPerDay: 70 },
  { name: "Bayish", surname: "zzz", days: 16, salaryPerDay: 33 },
  { name: "Adilet", surname: "Gazybekov", days: 11, salaryPerDay: 16 },
];
function App() {
  const [employers, setEmploeyrs] = useState(data);
  function changeDay(name, days) {
    const newArr = employers.map((item) => {
      if (item.name === name) {
        item.days = days;
      }
      return item;
    });
    setEmploeyrs(newArr);
  }

  function changeSalary(name, salary) {
    const newArr = employers.map((item) => {
      if (item.name === name) {
        item.salaryPerDay = salary;
      }
      return item;
    });
    setEmploeyrs(newArr);
  }
  function handleChange(name, key, data) {
    const newArr = employers.map((item) => {
      if (item.name === name) {
        item[key] = data;
      }
      return item;
    });
    setEmploeyrs(newArr);
  }

  function calcTotal() {
    return employers.reduce(
      (acc, item) => acc + item.days * item.salaryPerDay,
      0
    );
  }
  return (
    <div className="App">
      <EmployersList
        employers={employers}
        changeDay={changeDay}
        changeSalary={changeSalary}
        handleChange={handleChange}
        calcTotal={calcTotal}
      />
    </div>
  );
}

export default App;
