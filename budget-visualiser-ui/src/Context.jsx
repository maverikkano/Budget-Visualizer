import React, { createContext, useContext, useState } from 'react';

const BucketDataListContext = createContext();

const BucketDataListProvider = ({ children }) => {
  const [bucketDataList, setbucketDataList] = useState([]);

  return (
    <BucketDataListContext.Provider value={{ bucketDataList: bucketDataList, setBucketDataList: setbucketDataList }}>
      {children}
    </BucketDataListContext.Provider>
  );
};

const useBucketDataList = () => {
  return useContext(BucketDataListContext);
};
<button></button>
export { BucketDataListProvider, useBucketDataList };
