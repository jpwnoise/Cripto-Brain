import React from 'react';
import { Typography } from '@mui/material';

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <Typography style={{backgroundColor: '#f5f5f5'}}
      variant="h4"
      component="h1"
      align="center"
      sx={{
        fontWeight: 'bold',
        color: 'primary.main',
        margin: '0',
      }}
    >
      {text}
    </Typography>
  );
};

export default Title;