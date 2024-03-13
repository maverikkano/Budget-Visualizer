
export const handleBucketFill = (title, newBalance, bucketList, setBucketList) => {

    const updatedBucketList = bucketList.map(bucket => {
        if (bucket.title === "Emergency Fund") {
            return {...bucket, newBalance: newBalance};
        } else {
            return bucket;
        }
    });

    setBucketList(updatedBucketList);
};