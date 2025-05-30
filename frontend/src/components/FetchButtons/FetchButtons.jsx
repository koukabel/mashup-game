import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import _ from "lodash";
import Error from "../Error/Error";
import "./FetchButtons.scss";

function FetchButtons({
  isReady,
  apiList = [],
  onApiSelect,
  selectedApi,
  apiData = [],
}) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [localApiData, setLocalApiData] = useState([]);

  // Sync with parent component's apiData
  useEffect(() => {
    if (apiData && apiData.length > 0) {
      setLocalApiData(apiData);
    }
  }, [apiData]);

  const fetchData = async (url, name) => {
    if (!isReady) {
      setError("Please enter a username first");
      return;
    }

    setIsLoading(true);
    setError(null);
    setLocalApiData([]);

    try {
      const response = await axios.get(url);
      const api = apiList.find((api) => api.name === name);

      if (!api) {
        throw new Error(`API configuration not found for ${name}`);
      }

      // Safely extract data with fallback to empty array
      const data = api.path_to_data
        ? _.get(response.data, api.path_to_data, [])
        : response.data || [];

      if (!Array.isArray(data)) {
        throw new Error(`Expected array but got ${typeof data}`);
      }

      if (data.length === 0) {
        throw new Error("No data available for this API");
      }

      // Process data with image URLs
      const processedData = data.map((item) => ({
        ...item,
        imageUrl:
          typeof api.path_to_image === "function"
            ? api.path_to_image(item)
            : _.get(item, api.path_to_image, ""),
      }));

      onApiSelect(name, processedData);
      setLocalApiData(processedData);
    } catch (err) {
      console.error("API fetch error:", err);
      setError(err.message);
      setLocalApiData([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStartGame = () => {
    if (selectedApi && localApiData.length > 0) {
      // Create a clean API list without functions
      const cleanApiList = apiList.map((api) => ({
        ...api,
        // Remove any functions from the API config
        path_to_image:
          typeof api.path_to_image === "function" ? null : api.path_to_image,
        // Include template strings instead
        image_template: api.image_template || null,
      }));

      navigate("/game", {
        state: {
          apiData: localApiData,
          apiName: selectedApi,
          apiList: cleanApiList, // Pass the cleaned list
        },
      });
    }
  };

  return (
    <div className="fetch-container">
      <h2 className="themetitle">Choose a theme!</h2>

      {error && <Error type={error} />}

      <div className="fetch-buttons-container">
        {apiList.map((api) => (
          <button
            key={api.name}
            className={`api-button ${selectedApi === api.name ? "active" : ""}`}
            onClick={() => fetchData(api.url, api.name)}
            disabled={isLoading}
          >
            {api.name}
            {isLoading && selectedApi === api.name && (
              <span className="button-loader"></span>
            )}
          </button>
        ))}
      </div>

      {selectedApi && localApiData.length > 0 && (
        <div className="api-results">
          <button className="start-game-button" onClick={handleStartGame}>
            Start Game
          </button>
        </div>
      )}
    </div>
  );
}

FetchButtons.propTypes = {
  isReady: PropTypes.bool.isRequired,
  apiList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      path_to_data: PropTypes.string,
      path_to_image: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
        .isRequired,
      key: PropTypes.string.isRequired,
      item_name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onApiSelect: PropTypes.func.isRequired,
  selectedApi: PropTypes.string,
  apiData: PropTypes.arrayOf(PropTypes.object),
};

export default FetchButtons;
