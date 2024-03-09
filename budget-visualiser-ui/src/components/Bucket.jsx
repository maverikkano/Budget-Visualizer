import React from "react";
import BucketImg from "../artifacts/Bucket.png";
import styles from "./Bucket.module.css";

function Bucket(props) {

    // Set parameters

    // Modify bucket
    // Delete bucket

    return(
        <div className="col-sm-3">
            <div className={styles.bucketContainer}>
            <div className={styles.bucket} id="bucket-">
                <div className={styles.fill} id="fill-"></div>
                <img src={BucketImg} alt="" className={styles.bucketIcon} id="" />
            </div>
            </div>
            <div className={styles.bucketTitle}>{props.init.title}</div>
        </div>
    );

}

export default Bucket;