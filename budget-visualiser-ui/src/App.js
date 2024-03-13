import { useState } from 'react';
import './App.css';
import PriorityRow from './components/PriorityRow';
import { useBucket } from './Context';
import { generateBucketReport, handleBucketFill } from './utils/bucketUtils';
import Bucket from './components/Bucket';

function App() {

  // States begin

  const [priorityKey, setPriorityKey] = useState(1);
  const [priorityRowList, setPriorityRowList] = useState([]);
  const {bucketDataList, setBucketDataList} = useBucket();
  

  // States ends

  // Handlers begin  
  const handlePriorityKeyIncrease = () => {
    setPriorityKey((prevKey) => prevKey + 1);
  };

  const handleCreatePriorityRow = (event) =>{
    handlePriorityKeyIncrease();

    // Append Row element to the list
    setPriorityRowList([...priorityRowList, 
      <PriorityRow priority={priorityKey} key={priorityKey} />])
  };

  const handleSaveInvestmentConfig = () => {

    let corpus = parseInt(prompt("Please enter your saving corpus (₹)"));

    generateBucketReport(bucketDataList, setBucketDataList, corpus);

    // handleBucketFill(bucketDataList, setBucketDataList, setBucketDataList);

  }

  // Handlers end
  
  return (
    

      <div className="App">

        <div className="container" style={{ "marginTop": "4rem" }}>

          <h1>Budget Visualizer</h1>

          <button className='btn btn-dark' id="createPriorityBtn" onClick={handleCreatePriorityRow}>Create Priority</button>
          
          <div className="priorityContainer">
            {priorityRowList}
          </div>

          {bucketDataList.length > 0 &&
          
          <button className='btn btn-dark' onClick={handleSaveInvestmentConfig}
            style={{"float":"inline-end"}}>
            Save my investment configuration</button>}
          

        </div>
      </div>
  );
}

export default App;
