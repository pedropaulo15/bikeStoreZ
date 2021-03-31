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
import SuppliersApi from "../../../../api/SuppliersApi";
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
  supplierForm: {
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

const NewSupplierForm = () => {
  const classes = useStyles();
  const [displayNotification, setDisplayNotification] = useState(false);
  const [severityType, setSeverityType] = useState('success');
  const [notificationText, setNotificationText] = useState('');
  const [state, setState] = React.useState({
    supplier_name: "",
    bike_part: "",
    color: "",
  });
  
  const handleChange = (event) => {
    const elementName = event.target.name;
    
    setState({
      ...state,
      [elementName]: event.target.value
    });
  };
  
  const handleSaveNewBike = () => {
    const { supplier_name, bike_part, color } = state;
    const newSupplierPayload = {
      supplier: {
        supplier_name,
        bike_part,
        color
      }
    };
  
    SuppliersApi.addSuppliers(newSupplierPayload)
      .then( resp => {
        if (resp.status === 201) {
          console.log(`New supplier has been created: ${JSON.stringify(resp)}`);
          setSeverityType('success');
          setNotificationText('New supplier created successfully!');
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
      <div className={classes.supplierForm}>
        <Paper>
          <Typography variant="h4" className={classes.formTitle}>
            Enter the new supplier details
          </Typography>
          <div className={classes.menuOptions}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="my-input">Supplier Name</InputLabel>
              <Input
                id="my-input"
                aria-describedby="my-helper-text"
                inputProps={{
                  name: "supplier_name",
                  id: "name-native-simple"
                }}
                onChange={handleChange}
              />
            </FormControl>
            
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="bike-part-native-simple">
                Bike part
              </InputLabel>
              <Select
                native
                value={state.bike_part}
                onChange={handleChange}
                inputProps={{
                  name: "bike_part",
                  id: "bike-part-native-simple"
                }}
              >
                <option aria-label="None" value="" />
                <option value={'chain'}>Chain</option>
                <option value={'gear'}>Gear</option>
                <option value={'breaks'}>Breaks</option>
              </Select>
            </FormControl>
            
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="color-native-simple">
                Color
              </InputLabel>
              <Select
                native
                value={state.color}
                onChange={handleChange}
                inputProps={{
                  name: "color",
                  id: "color-native-simple"
                }}
              >
                <option aria-label="None" value="" />
                <option value={"black"}>Black</option>
                <option value={"blue"}>Blue</option>
                <option value={"green"}>Green</option>
                <option value={"white"}>White</option>
                <option value={"red"}>Red</option>
                <option value={"spotted"}>Spotted</option>
                <option value={"brown"}>Brown</option>
              </Select>
            </FormControl>
            
            <div>
              <Button
                variant="contained"
                color="primary"
                className={classes.formControl}
                onClick={handleSaveNewBike}
              >
                Save new Supplier
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

export default NewSupplierForm;
