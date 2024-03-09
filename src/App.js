import logo from './logo.svg';
import './App.css';
import DateCard from './Components/DateCard';

function App() {
  const Obj = [
  {
    Name: 'Nirma',
    Month: 'Jun',
    Date: 1,
    Year: 2004
  },{
    Name : 'Surfexl',
    Month: 'Nov',
    Date: 10,
    Year: 2204
  },{
    Name: 'Neem',
    Month: 'Aug',
    Date: 1,
    Year: 20044
  },{
    Name: 'Clock',
    Month: 'Oct',
    Date: 123,
    Year: 201204
  }
];
  return (
    <div className='realtive h-[100vh] w-[100vw] flex flex-row justify-center items-center'>
      <DateCard AllValue={Obj}></DateCard>
    </div>
  );
}

export default App;
