import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import React, {useState} from "react";

const RimColorOptions = ({bike}) => {
  const [rimColorValue, setRimColorValue] = useState(bike.attributes.rim_color);
  
  const handleRimColorChange = (event) => {
    setRimColorValue(event.target.value);
  };
  
  return (
    <div>
      <FormLabel component="legend">
        <h3>Rim Color</h3>
      </FormLabel>
      <RadioGroup
        aria-label="rimColor"
        name="rimColor"
        value={rimColorValue}
        onChange={handleRimColorChange}
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
            value="spotted"
            control={<Radio color="primary" />}
            label="Spotted"
          />
        </div>
      </RadioGroup>
    </div>
  );
};

export default RimColorOptions;
