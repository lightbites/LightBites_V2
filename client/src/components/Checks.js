import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function CheckboxLabels() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
    checkedD: true,
    checkedE: true,
    checkedF: true,
    checkedG: true
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <div>
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedA}
              onChange={handleChange("checkedA")}
              value="checkedA"
            />
          }
          label="Week 1"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedE}
              onChange={handleChange("checkedE")}
              value="checkedE"
            />
          }
          label="Breakfast"
        />
      </FormGroup>
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedB}
              onChange={handleChange("checkedB")}
              value="checkedB"
            />
          }
          label="Week 2"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedF}
              onChange={handleChange("checkedF")}
              value="checkedF"
            />
          }
          label="Lunch/Dinner"
        />
      </FormGroup>
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedC}
              onChange={handleChange("checkedC")}
              value="checkedC"
            />
          }
          label="Week 3"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedG}
              onChange={handleChange("checkedG")}
              value="checkedG"
            />
          }
          label="Snacks"
        />
      </FormGroup>
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedD}
              onChange={handleChange("checkedD")}
              value="checkedD"
            />
          }
          label="Week 4"
        />
      </FormGroup>
    </div>
  );
}
