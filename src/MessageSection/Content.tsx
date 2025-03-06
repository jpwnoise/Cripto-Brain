import React from 'react';
import { Typography, Box } from '@mui/material';

interface ContentProps {
  paragraphs: string[];
}

const Content: React.FC<ContentProps> = ({ paragraphs }) => {
  return (
    <Box sx={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
      {paragraphs.map((paragraph, index) => (
        <Typography
          key={index}
          variant="body1"
          component="p"
          sx={{
            marginBottom: '16px',
            lineHeight: '1.6',
            color: 'white',
          }}
        >
          {paragraph}
        </Typography>
      ))}
    </Box>
  );
};

export default Content;