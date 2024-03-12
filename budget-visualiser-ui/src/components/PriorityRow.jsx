import React from "react";
import { useState } from "react";
import { useBucketDataList } from "../Context";
import styles from "./PriorityRow.module.css";
import Bucket from "./Bucket";

function PriorityRow(props) {

    // Literals
    const priorityNo = props.priority;
    const bucketPropsTemplate = {
        title: "",
        bucketSize: 0,
        currentBalance: 0,
        newBalance: 0,
        priority: 0,
        fillColor: "blue"
    };

    // States
    const [bucketList, setBucketList] = useState([]);
    const [bucketKey, setBucketKey] = useState(0);
    const [bucketProps, setBucketProps] = useState(bucketPropsTemplate);  
    
    const {bucketDataList, setBucketDataList} = useBucketDataList();    // Imported from context provider

    // Handlers begin
    const handleBucketFormSubmit = (event) => {
        const { title, bucketSize } = bucketProps;
        bucketProps.priority = priorityNo;
        bucketProps.bucketSize = parseInt(bucketProps.bucketSize);

        let bucketElement = <Bucket init={bucketProps} key={bucketKey} />;
    
        if (title !== "" && bucketSize > 0) {
            setBucketKey((prevKey) => prevKey + 1);
            setBucketList([...bucketList, bucketElement]);
            setBucketDataList([...bucketDataList, [bucketProps]]);
            setBucketProps(bucketPropsTemplate);
        }
    }

    const handleBucketFormChange = (event) => {
        const { name, value } = event.target;
        setBucketProps((prevState) => ({ ...prevState, [name]: value }));
    };


    // handlers end

    return (
        <div className={`${"row"} ${styles.priorityRow}`} id={`priority-${priorityNo}`}>
            <div className="col-sm-3">
                <h4>Priority {props.priority}</h4> <br />
                <form>
                    <input type="text" list="fundList" className='form-control' name="title"
                        value={bucketProps.title} onChange={handleBucketFormChange}
                        placeholder="Title (ex. emergency fund)" autoComplete="off" />
                    <datalist id="fundList">
                        <option value="Emergency Fund" />
                        <option value="Monthly Expenses" />
                        <option value="Debt Payments" />
                        <option value="Healthcare" />
                        <option value="Personal care" />
                        <option value="Savings & Investments" />
                        <option value="Entertainment" />
                        <option value="Charity" />

                    </datalist>
                    <div className={styles.bucketSize}>₹<input type="number"
                        className='form-control d-inline' name="bucketSize" style={{ width: "40%" }} value={bucketProps.bucketSize}
                        placeholder="amount" min={0} onChange={handleBucketFormChange} />
                    </div>

                    <button type="button" className='btn btn-primary my-2' onClick={handleBucketFormSubmit}>Create Bucket</button>
                </form>
            </div>

            {bucketList}

            <hr />
        </div>
    );

}

export default PriorityRow;