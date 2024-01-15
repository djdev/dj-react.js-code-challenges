import { useState, useEffect } from "react";

export default function DogPics() {
  const [dogPicUrl, setDogPicUrl] = useState("");

  useEffect(() => {
    loadNewDogPic();
  }, []);

  const loadNewDogPic = async () => {
    // fetch("https://dog.ceo/api/breeds/image/random")
    //   .then((response) => response.json())
    //   .then((data) => setDogPicUrl(data.message));

    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    setDogPicUrl(data.message);
  };

  return (
    <div className="dog-pics">
      <img
        src={dogPicUrl}
        alt={dogPicUrl.split("/")[dogPicUrl.split("/").length - 1]}
      />
      <button onClick={() => loadNewDogPic()}>🐶</button>
    </div>
  );
}
