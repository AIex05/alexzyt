import { useState, useEffect } from "react";

const useImage = (key, s3) => {
  const [image, setImage] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    const bucketName = "alexzyt-portfolio";

    async function getObject(key) {
      var params = {
        Bucket: bucketName,
        Key: key,
      };
      try {
        const data = await s3.getObject(params).promise();
        setIsPending(false);
        setInfo(data);
        setImage(data.Body);
      } catch (e) {
        setIsPending(false);
        setError(e.message);
      }
    }
    
    getObject(key)

    // abort the fetch
    return () => abortCont.abort();
  }, []);

  return { image, info, isPending, error };
};

export default useImage;
