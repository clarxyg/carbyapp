import styled from "@emotion/styled";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";


export const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 55,
  height: 30,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme === 'dark' ? '#EEA4CE' : '#C58BF2',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 19,
    height: 19,
    marginTop: 3,
    marginLeft: 10
  },
  '& .MuiSwitch-track': {
    borderRadius: 28 / 2,
    backgroundColor: theme === 'light' ? '#E9E9EA' : '#d7d7db',
    opacity: 1
  },
}));


export default function SwitchToggle() {
  return (
    <FormGroup>
      <FormControlLabel
        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
      />
    </FormGroup>
  );
}
