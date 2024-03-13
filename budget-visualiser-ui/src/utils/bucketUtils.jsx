export const generateBucketReport = (bucketDataList, setBucketDataList, corpus) => {
    let corpusLeft = corpus;

    let updatedBucketDataList = bucketDataList.map(bucketData => {
        const { bucketSize } = bucketData;
        let fill, currentBalance;

        if (corpusLeft >= bucketSize) {
            fill = 100;
            currentBalance = bucketSize;    // leaving surplus
            corpusLeft -= currentBalance;
        } else {
            fill = ((bucketSize - corpusLeft) / bucketSize) * 100;
            currentBalance = corpusLeft;    // leftover corpus
            corpusLeft -= bucketSize;
        }

        return {
            ...bucketData,
            currentBalance: currentBalance,
            fillPercent: fill
        };
    });

    setBucketDataList((prevState) => updatedBucketDataList);
}

export const handleBucketFill = (bucketDataList, setBucketDataList) => {

    let updatedBucketDataList = updateBucketDataList(bucketDataList, "Emergency Fund", 50);
    setBucketDataList(updatedBucketDataList);

};

const updateBucketDataList = (bucketDataList, title, fillPercent) => {

    return bucketDataList.map(bucket => {
        if (bucket.title === title) {
            return { ...bucket, fillPercent: fillPercent };
        } else {
            return bucket;
        }
    });

}