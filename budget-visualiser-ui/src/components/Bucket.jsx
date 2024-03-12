import React from "react";
import BucketImg from "../artifacts/Bucket.png";
import styles from "./Bucket.module.css";

function Bucket(props) {

    // Set parameters

    // Modify bucket
    // Delete bucket

    const formatToINR = (number) => {
        let IndianRupee = new Intl.NumberFormat('hi-IN',  {
            Style: 'Currency',
            currency: 'INR'
         });
        
         return IndianRupee.format(number);
    };

    return (
        <div className="col-sm-3">
            <div className={styles.bucketContainer}>
                <div className={styles.bucket}>
                    {/* <div className={styles.fill} style={{ "height": props.newBalance/props.bucketSize }}></div> */}
                    <div className={styles.fill} style={{ "height": `${(props.init.newBalance/props.init.bucketSize)*100}%` }}></div>
                    <img src={BucketImg} alt="" className={styles.bucketIcon} />
                </div>
            </div>
            <div className={styles.bucketText}><b>{props.init.title}</b></div>
            <div className={styles.bucketText}>
                {'₹'+formatToINR(props.init.bucketSize)}
            </div>
        </div>
    );

}

export default Bucket;