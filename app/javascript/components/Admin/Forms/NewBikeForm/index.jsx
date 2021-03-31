import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AlertNotification from "../../../AlertNotification";
import BikesApi from "../../../../api/BikesApi";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    position: "fixed",
    width: "100%",
    height: "100%"
  },
  bikeForm: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(5),
      width: theme.spacing(80),
      height: theme.spacing(82)
    },
    fontFamily: "Roboto",
    justifyContent: "center",
    alignItems: "center"
  },
  menuOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "column"
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120
  },
  formTitle: {
    textAlign: "center",
    marginTop: "20px"
  },
  alertMsg: {
    width: "40%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5px",
    alignText: "center"
  }
}));

const NewBikeForm = () => {
  const classes = useStyles();
  const [displayNotification, setDisplayNotification] = useState(false);
  const [severityType, setSeverityType] = useState('success');
  const [notificationText, setNotificationText] = useState('');
  const [state, setState] = React.useState({
    name: "",
    description: "",
    price: "",
    wheel_size: "",
    rim_color: "",
    saddle_color: "",
    image_url: "",
    created_by: 1,
  });
  
  const handleChange = (event) => {
    const elementName = event.target.name;
    
    setState({
      ...state,
      [elementName]: event.target.value
    });
  };
  
  const handleSaveNewBike = () => {
    const { name, description, price, wheel_size, rim_color, saddle_color, image_url, created_by} = state;
    const newBikePayload = {
      bike: {
        name,
        description,
        price,
        wheel_size,
        rim_color,
        saddle_color,
        image_url,
        created_by
      }
    };
    
    BikesApi.addBike(newBikePayload)
      .then( resp => {
        if (resp.status === 201) {
          console.log(`New bike has been created: ${JSON.stringify(resp)}`);
          setSeverityType('success');
          setNotificationText('New bike created successfully!');
          setDisplayNotification(true);
        }
      })
      .catch( resp => {
        setSeverityType('error');
        setNotificationText('Error trying to create a new bike');
        console.error(resp);
      });
  };
  
  return (
    <div className={classes.root}>
      { displayNotification &&
        <AlertNotification
          setDisplayNotification={setDisplayNotification}
          notificationText={notificationText}
          severity={severityType}
        />
      }
      <div className={classes.bikeForm}>
        <Paper>
          <Typography variant="h4" className={classes.formTitle}>
            Enter the new bike details
          </Typography>
          <div className={classes.menuOptions}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="my-input">Bike Name</InputLabel>
              <Input
                id="my-input"
                aria-describedby="my-helper-text"
                inputProps={{
                  name: "name",
                  id: "name-native-simple"
                }}
                onChange={handleChange}
              />
            </FormControl>
            
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="saddle-color-native-simple">
                Saddle Color
              </InputLabel>
              <Select
                native
                value={state.saddle_color}
                onChange={handleChange}
                inputProps={{
                  name: "saddle_color",
                  id: "saddle-color-native-simple"
                }}
              >
                <option aria-label="None" value="" />
                <option value={'black'}>Black</option>
                <option value={'blue'}>Blue</option>
                <option value={'brown'}>Brown</option>
              </Select>
            </FormControl>
            
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="rim-color-native-simple">
                Rim Color
              </InputLabel>
              <Select
                native
                value={state.rim_color}
                onChange={handleChange}
                inputProps={{
                  name: "rim_color",
                  id: "rim-color-native-simple"
                }}
              >
                <option aria-label="None" value="" />
                <option value={"black"}>Black</option>
                <option value={"blue"}>Blue</option>
                <option value={"spotted"}>Spotted</option>
              </Select>
            </FormControl>
            
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="wheel-size-native-simple">
                Wheel Size
              </InputLabel>
              <Select
                native
                value={state.wheel_size}
                onChange={handleChange}
                inputProps={{
                  name: "wheel_size",
                  id: "wheel-size-native-simple"
                }}
              >
                <option aria-label="None" value="" />
                <option value={17}>17</option>
                <option value={19}>19</option>
                <option value={21}>21</option>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="my-input">Price</InputLabel>
              <Input
                id="price-input"
                aria-describedby="my-helper-text"
                onChange={handleChange}
                inputProps={{
                   name: "price",
                   id: "price-native-simple"
                }}
              />
              <FormHelperText id="my-helper-text">Eg.: 1200.99</FormHelperText>
            </FormControl>
            
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="my-input">Bike Description</InputLabel>
              <Input
                id="description-input"
                aria-describedby="my-helper-text"
                onChange={handleChange}
                inputProps={{
                  name: "description",
                  id: "description-native-simple"
                }}
              />
              <FormHelperText id="my-helper-text">
                Short description of the bike.
              </FormHelperText>
            </FormControl>
            
            <div>
              <Button
                variant="contained"
                color="primary"
                className={classes.formControl}
                onClick={handleSaveNewBike}
              >
                Save new bike
              </Button>
  
              <Link
                to={'/'}
                className="btn btn-lg"
                role="button"
              >
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.formControl}
                >
                  Back to home page
                </Button>
              </Link>
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default NewBikeForm;
