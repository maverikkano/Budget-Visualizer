import { useState } from 'react';
import './App.css';
import PriorityRow from './components/PriorityRow';
import { BucketDataListProvider } from './Context';


function App() {

  // States begin

  const [priorityKey, setPriorityKey] = useState(1);
  const [priorityRowList, setPriorityRowList] = useState([]);

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

  // Handlers end
  
  return (
    
    <BucketDataListProvider>

      <div className="App">

        <div className="container" style={{ "marginTop": "4rem" }}>

          <h1>Budget Visualizer</h1>

          <button className='btn btn-primary' id="createPriorityBtn" onClick={handleCreatePriorityRow}>Create Priority</button>
          
          <div className="priorityContainer">
            {priorityRowList}
          </div>

        </div>
      </div>
    </BucketDataListProvider>
  );
}

export default App;
