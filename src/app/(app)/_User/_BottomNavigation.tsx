import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="オススメ" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="アカウント" icon={<AccountCircleIcon />} /> 
      </BottomNavigation>
  );
}