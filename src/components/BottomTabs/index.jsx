import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Activity, Clock, House, MagnifyingGlass, User } from 'phosphor-react';
import { useState } from 'react';
import { Container, SearchContainer } from './styles';


export default function BottomTabs() {
  const [value, setValue] = useState(0);

  return (
    <Container>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction icon={<House size={30} weight="fill" />} />
        <BottomNavigationAction icon={<Activity size={30} />} />
        <SearchContainer>
          <BottomNavigationAction icon={<MagnifyingGlass size={30} color="#ffff" />} />
        </SearchContainer>
        <BottomNavigationAction icon={<Clock size={30} />} />
        <BottomNavigationAction icon={<User size={30} />} />
      </BottomNavigation>
    </Container>
  );
}
