import { useEffect, useState } from "react";
import * as API from "./api/API";
import Form from "./components/form/Form";
import Cards from "./components/card/Cards";
function App() {
  const [colorsData, setColorsData] = useState([]);
  const [colors, setColors] = useState([]);
  const [error, setError] = useState("");

  const getColors = (name) => {
    //only filter if length id greater or equal to 3
    if (name.trim().length >= 3) {
      if (colorsData.length > 0) {
        const filterData = colorsData.filter((color) => {
          return (
            color.name.toLowerCase().indexOf(name.toLowerCase().trim()) > -1
          );
          // const strToArray = color.name.toLowerCase().split(" ");
          // return strToArray.indexOf(name.toLowerCase().trim()) > -1;
        });
        setColors(
          filterData.length
            ? filterData
            : [
                {
                  hex: "#f0c",
                  rgb: { r: 255, g: 255, b: 255 },
                  name: `${name} color not found!`,
                },
              ]
        );
      }
    } else {
      setColors([]);
    }
  };

  useEffect(() => {
    async function getColorData() {
      try {
        const { data } = await API.getColors();
        setColorsData(data.colors);
      } catch (e) {
        setError(e.message);
      }
    }
    getColorData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <Form getColors={getColors} />
      </div>
      <div className="row mt-2">
        <Cards colors={colors} />
      </div>
    </div>
  );
}

export default App;
