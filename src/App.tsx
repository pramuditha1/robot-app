import './App.css';
import RobotGrid from './components/RobotGrid/RobotGrid';
import { GRID_DATA } from './uitls/Constants';

function App() {
  return (
    <>
      <RobotGrid columns={GRID_DATA.columns} rows={GRID_DATA.rows}/>
    </>
  );
}

export default App;
