import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import CheckboxLabels from "./Checks";

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }
  return (
    <div>
      <Button
        aria-controls="simple-menu"
        variant="contained"
        color="secondary"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Filter View
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <CheckboxLabels />
      </Menu>
    </div>
  );
}
