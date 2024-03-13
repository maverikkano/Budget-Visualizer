import React, { createContext, useContext, useState } from 'react';

const BucketContext = createContext();

const BucketProvider = ({ children }) => {
  const [bucketDataList, setBucketDataList] = useState([]);
  
  return (
    <BucketContext.Provider value={{ 
        bucketDataList: bucketDataList, setBucketDataList: setBucketDataList }}>
      {children}
    </BucketContext.Provider>
  );
};

const useBucket = () => {
  return useContext(BucketContext);
};

export { BucketProvider, useBucket };
