
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import { useState } from 'react';

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} className="circular"/>
      <Box
        className='box'
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

const Container = styled.div`

  display: flex;
  justify-content: center;
  padding-bottom: 20px;

  .circular {
    width: 80px !important;
    margin-top: 30px;
    margin-left: -40px;
  }

  .box {
    position: absolute;
    bottom: 0;
    top: 40px;

    left: 7px;
  }
`

export default function CircularStatic() {
  const [progress, setProgress] = useState(80);

  return (
    <Container>
      <CircularProgressWithLabel value={progress}/>
    </Container>
  )
}
