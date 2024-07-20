import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" py={3} mt={5} bgcolor="lightgray" textAlign="center">
      <Typography variant="body1">
        <Link href="https://gagan-yadav.github.io/" target="_blank" rel="noopener noreferrer">
          My Portfolio
        </Link>
      </Typography>
      <Typography variant="body1">
        <Link href="https://github.com/gagan-yadav" target="_blank" rel="noopener noreferrer">
           My GitHub
        </Link>
      </Typography>
      <Typography variant="body1">
        Work Samples:
      </Typography>
      <Typography variant="body1">
        <Link href="https://linkedin-clone-by-gagan.vercel.app/" target="_blank" rel="noopener noreferrer">
          1. LinkedIn Clone
        </Link>
        
      </Typography>
      <Typography variant="body1">
      <Link href="https://vvuniqueinfotech.vercel.app/" target="_blank" rel="noopener noreferrer">
           2. VvUniqueInfotech
        </Link>
      </Typography>
      
      <Typography variant="body2" color="textSecondary" mt={2}>
        &copy; {new Date().getFullYear()} Gagan Yadav. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
