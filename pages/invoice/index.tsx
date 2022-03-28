import React from 'react';
import { Typography } from 'shared';

import { Products } from './Products';

const index = () => {

  return (
    <div>
      <Typography
        variant="h1"
        align="left"
        size='20px'
        style={{ marginBottom: 50 }}
      >
        Products
      </Typography>

      <Products />

    </div>
  );
};

export default index;