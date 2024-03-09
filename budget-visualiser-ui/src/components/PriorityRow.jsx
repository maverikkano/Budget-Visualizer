import React from "react";
import { useState } from "react";
import styles from "./PriorityRow.module.css";
import Bucket from "./Bucket";

function PriorityRow(props) {

    // Literals
    const priorityNo = props.priority;

    // States
    const [bucketList, setBucketList] = useState([]);
    const [bucketKey, setBucketKey] = useState(0);
    const [bucketProps, setBucketProps] = useState({
        title: "",
        fill: 0,
        sizeInRupees: 1,
        priority: 1,
        elementId: "bucket-",
        fillColor: "blue"
    });

    // Handlers begin
    const handleBucketFormSubmit = (event) => {
        if(bucketProps.title !=="") {
        handleBucketKeyIncrease();
        setBucketList([...bucketList, <Bucket init={bucketProps} key={bucketKey} />])
        }
    }

    const handleBucketFormChange = (event) => {
        const { name, value } = event.target;
        setBucketProps((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleBucketKeyIncrease = () => {
        setBucketKey((prevKey) => prevKey + 1);
    };

    // handlers end

    return (
        <div className={`${"row"} ${styles.priorityRow}`} id={`priority-${priorityNo}`}>
            <div className="col-sm-3">
                <h4>Priority {props.priority}</h4> <br />
                <form>
                    <input type="text" id={`title-${priorityNo}`} className='form-control' name="title" 
                        value={bucketProps.title} onChange={handleBucketFormChange} 
                        placeholder="Title (ex. emergency fund)" />
                    <button type="button" className='btn btn-primary my-2' onClick={handleBucketFormSubmit}>Submit</button>
                </form>
            </div>

            {bucketList}

            <hr />
        </div>
    );

}

export default PriorityRow;