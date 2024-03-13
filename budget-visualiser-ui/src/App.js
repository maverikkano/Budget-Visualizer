import { useState } from 'react';
import './App.css';
import PriorityRow from './components/PriorityRow';
import { useBucketDataList } from './Context';

function App() {

  // States begin

  const [priorityKey, setPriorityKey] = useState(1);
  const [priorityRowList, setPriorityRowList] = useState([]);
  const {bucketDataList} = useBucketDataList();

  // States ends

  // Handlers begin  
  const handlePriorityKeyIncrease = () => {
    setPriorityKey((prevKey) => prevKey + 1);
  };

  const handleCreatePriorityRow = (event) =>{
    handlePriorityKeyIncrease();

    // Append Row element to the list
    setPriorityRowList([...priorityRowList, <PriorityRow priority={priorityKey} key={priorityKey} />])
  };

  const handleSaveInvestmentConfig = () => {
    alert("save");
  }

  // Handlers end
  
  return (
    

      <div className="App">

        <div className="container" style={{ "marginTop": "4rem" }}>

          <h1>Budget Visualizer</h1>

          <button className='btn btn-primary' id="createPriorityBtn" onClick={handleCreatePriorityRow}>Create Priority</button>
          
          <div className="priorityContainer">
            {priorityRowList}
          </div>

          {bucketDataList.length > 0 &&
          <button className='btn btn-primary' onClick={handleSaveInvestmentConfig}
            style={{"float":"inline-end"}}>
            Save my investment configuration</button>}

        </div>
      </div>
  );
}

export default App;
