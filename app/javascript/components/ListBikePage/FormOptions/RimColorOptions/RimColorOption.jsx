import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import React from "react";

const RimColorOption = ({ color }) => (
  <FormControlLabel
    value={color}
    control={<Radio color="primary" />}
    label={color}
  />
);

export default RimColorOption;
