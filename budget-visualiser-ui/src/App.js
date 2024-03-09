import { useState } from 'react';
import './App.css';
import Bucket from './components/Bucket';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [key, setKey] = useState(0);

  const handleKeyIncrease = () => {
    setKey((prevKey) => prevKey + 1);
  };

  
  const [list, setList] = useState([]);

  const handleSubmit = () => {
    handleKeyIncrease();
    setList([...list, <Bucket init={formData} key={key} />])
  }

  const [formData, setFormData] = useState({
    title: "",
    fill: 0,
    sizeMultiple: 1,
    priority: 1,
    elementId: "bucket-",
    fillColor: "blue"
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };


  /*let bucketInit = {
    "elementId": "id",
    "priority": "",
    "title": "title",
    "size": "size",
    "fillColor": "color"
  };*/

  return (

    <div className="App">

      <div className="container" style={{ "marginTop": "4rem" }}>

        <h1>Budget Visualizer</h1>

        <form>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" className='form-control' name="title" value={formData.title} onChange={handleChange} />
          <button type="button" className='btn btn-primary my-2' onClick={handleSubmit}>Submit</button>
        </form>

        <div class="row">{list}</div>
      </div>
    </div>
  );
}

export default App;
