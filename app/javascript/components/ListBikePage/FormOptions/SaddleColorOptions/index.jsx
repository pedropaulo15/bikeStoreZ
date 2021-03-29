import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import React, {useState} from "react";

const renderSaddleColorOption = ({bike}) => {
  const [saddleColorValue, setSaddleColorValue] = useState(bike.attributes.saddle_color);
  
  const handleSaddleColorChange = (event) => {
    setSaddleColorValue(event.target.value);
  };
  
  return (
    <div>
      <FormLabel component="legend">
        <h3>Saddle Collor</h3>
      </FormLabel>
      <RadioGroup
        aria-label="saddleColor"
        name="saddleColor"
        value={saddleColorValue}
        onChange={handleSaddleColorChange}
      >
        <div>
          <FormControlLabel
            value="black"
            control={<Radio color="primary" />}
            label="Black"
          />
          <FormControlLabel
            value="blue"
            control={<Radio color="primary" />}
            label="Blue"
          />
          <FormControlLabel
            value="brown"
            control={<Radio color="primary" />}
            label="Brown"
          />
        </div>
      </RadioGroup>
    </div>
  );
};

export default renderSaddleColorOption;
