import { useState } from "react";
import FetchButtons from "../../components/FetchButtons/FetchButtons";
import InputUserName from "../../components/InputUsername/InputUsername";
import "./HomePage.scss";

// Define your API configurations at the highest needed level
const API_LIST = [
  {
    name: "Rick and Morty",
    url: "https://rickandmortyapi.com/api/character",
    path_to_data: "results",
    path_to_image: "image",
    key: "id",
    item_name: "name",
  },
  // {
  //   name: "Pokémon",
  //   url: "https://pokeapi.co/api/v2/pokemon",
  //   path_to_data: "results",
  //   path_to_image: "url", // Just store the URL, we'll process it in GameLogic
  //   image_template:
  //     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{id}.png",
  //   key: "name",
  //   item_name: "name",
  // },
  // Add other APIs here...
];

function HomePage() {
  const [ready, setReady] = useState(false);
  const [apiData, setApiData] = useState([]);
  const [selectedApi, setSelectedApi] = useState(null);

  const handleApiSelect = (apiName, data) => {
    setSelectedApi(apiName);
    setApiData(data);
    console.log(`Selected API: ${apiName}`, data);
  };

  return (
    <>
      <div className="title_container">
        <div className="header_text" id="Mashup">
          <span style={{ "--i": -4 }}>M</span>
          <span style={{ "--i": -3 }}>a</span>
          <span style={{ "--i": -4 }}>s</span>
          <span style={{ "--i": -1 }}>h</span>
          <span style={{ "--i": 0 }}>u</span>
          <span style={{ "--i": 1 }}>p</span>
          <span />
          <span style={{ "--i": 2 }}>M</span>
          <span style={{ "--i": 3 }}>e</span>
          <span style={{ "--i": 4 }}>m</span>
          <span style={{ "--i": 4 }}>o</span>
        </div>
      </div>

      <InputUserName isReady={setReady} />
      <FetchButtons
        isReady={ready}
        apiList={API_LIST}
        onApiSelect={handleApiSelect}
        selectedApi={selectedApi}
        apiData={apiData}
      />
    </>
  );
}

export default HomePage;
