// create your App component here
import { useEffect, useState } from "react";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [imgUrl, setImgUrl] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((resp) => resp.json())
      .then((obj) => {
        setImgUrl(obj.message);
        setIsLoading(true);
      });
  }, []);

  if (!isLoading) {
    return <p>Loading...</p>;
  }

  return <img src={imgUrl} alt="A Random Dog" />;
};

export default App;