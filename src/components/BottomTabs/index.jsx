import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Activity, Clock, House, MagnifyingGlass, User } from 'phosphor-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
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
        style={
          {
            borderBottomLeftRadius: '40px',
            borderBottomRightRadius: '40px',

          }}

      >
        <BottomNavigationAction
          icon={
            <Link to="/dashboard">
              <House size={32} weight={value === 'house' ? 'fill' : 'regular'} color={value === 'house' ? '#C58BF2' : '#ADA4A5'} />
            </Link>
          }
          value="house" />
        <BottomNavigationAction icon={<Activity size={32} value="activity" color={value === 'activity' ? '#C58BF2' : '#ADA4A5'} />} />
        <SearchContainer>
          <Link to="/menu">
            <BottomNavigationAction icon={<MagnifyingGlass size={32} color="#ffff" weight={value === 'search' ? 'fill' : 'regular'} />} value="search" />
          </Link>
        </SearchContainer>
        <BottomNavigationAction
          icon={<Clock size={32} weight={value === 'clock' ? 'fill' : 'regular'} />} value="clock" color={value === 'clock' ? '#C58BF2' : '#ADA4A5'} />
        <BottomNavigationAction
          icon={
            <Link to="/completeprofile">
              <User size={32} weight={value === 'user' ? 'fill' : 'regular'} color={value === 'user' ? '#C58BF2' : '#ADA4A5'} />
            </Link>
          }
          value="user" />
      </BottomNavigation>
    </Container>
  );
}
