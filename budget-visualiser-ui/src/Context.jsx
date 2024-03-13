import React, { createContext, useContext, useState } from 'react';

const BucketDataListContext = createContext();

const BucketDataListProvider = ({ children }) => {
  const [bucketDataList, setBucketDataList] = useState([]);

  return (
    <BucketDataListContext.Provider value={{ bucketDataList: bucketDataList, setBucketDataList: setBucketDataList }}>
      {children}
    </BucketDataListContext.Provider>
  );
};

const useBucketDataList = () => {
  return useContext(BucketDataListContext);
};

export { BucketDataListProvider, useBucketDataList };
