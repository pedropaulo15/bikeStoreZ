import React, {useState} from "react";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import RimColorOption from "./RimColorOption";

const RimColorOptions = ({bike}) => {
  const [rimColorValue, setRimColorValue] = useState(bike.attributes.rim_color);
  const { wheel_size } = bike.attributes;
  
  const handleRimColorChange = (event) => {
    setRimColorValue(event.target.value);
  };
  
  const renderOptions = () => {
    if (wheel_size === 17) {
      return <RimColorOption color={'green'} />
    } else if (wheel_size === 19) {
      return (
        <>
          <RimColorOption color={'green'} />
          <RimColorOption color={'blue'} />
        </>
      );
    } else {
      return (
        <>
          <RimColorOption color={'green'} />
          <RimColorOption color={'blue'} />
          <RimColorOption color={'black'} />
        </>
      )
    }
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
          { renderOptions() }
        </div>
      </RadioGroup>
    </div>
  );
};

export default RimColorOptions;
