import React from "react";
import BucketImg from "../artifacts/Bucket.png";
import styles from "./Bucket.module.css";

function Bucket(props) {

    // Modify bucket
    // Delete bucket

    const formatToINR = (number) => {
        let IndianRupee = new Intl.NumberFormat('hi-IN', {
            Style: 'Currency',
            currency: 'INR'
        });

        return IndianRupee.format(number);
    };

    return (
        <div className="col-sm-3">
            {props.init.fillPercent > 0 &&
                <div className={styles.bucketText}>{props.init.fillPercent}%</div>}
            <div className={styles.bucketContainer}>
                <div className={styles.bucket}>
                    <div className={styles.fill} style={{ "height": `${props.init.fillPercent}%` }}></div>
                    <img src={BucketImg} alt="" className={styles.bucketIcon} />
                </div>
            </div>
            <div className={styles.bucketText}><b>{props.init.title}</b></div>
            <div className={styles.bucketText}>
                Size: &nbsp; ₹{formatToINR(props.init.bucketSize)}
            </div>
        </div>
    );

}

export default Bucket;