import { useEffect, useState } from "react";

const useFetch = (
  service,
  initialValue,
  mappingFn = null,
  refetchVals = null
) => {
  const [result, setResult] = useState(initialValue);

  useEffect(() => {
    const fetchResults = async () => {
      const response = await service();
      if (response.status === 200) {
        let data = response.data;
        if (mappingFn) data = response.data.map(mappingFn);
        setResult(data);
      }
    };

    fetchResults();
  }, [refetchVals]);

  return result;
};

export default useFetch;
