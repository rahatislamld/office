// Button.js
import { Button as MuiButton, useTheme } from "@material-ui/core";
import { useState } from "react";

function Button({ children, ...props }) {
  const [ripple, setRipple] = useState(false);
  const theme = useTheme();

  const handleButtonClick = () => {
    setRipple(true);
    setTimeout(() => setRipple(false), 500);
  };

  return (
    <MuiButton
      variant="contained"
      color="primary"
      disableRipple={!ripple}
      style={{
        backgroundColor: ripple ? theme.palette.secondary.main : undefined,
      }}
      onClick={handleButtonClick}
      {...props}
    >
      {children}
    </MuiButton>
  );
}

export default Button;
