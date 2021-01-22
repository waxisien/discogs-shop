import React from 'react';
import { Box, Grid, ResponsiveContext } from 'grommet';

import { IRecord, sortedRecords } from './records';
import RecordCard from './RecordCard';

interface ResponsiveSizes {
  [size: string]: string[];
};

// If the size is small, we only see 1 column
// If the size is medium, we only see 2 columns
// If the size is either large or xlarge, we see 3 columns
const columns: ResponsiveSizes = {
  small: ['auto'],
  medium: ['auto', 'auto'],
  large: ['auto', 'auto', 'auto', 'auto'],
  xlarge: ['auto', 'auto', 'auto', 'auto'],
};

interface ResponsiveProps {
  children: JSX.Element[];
  gap: string;
  margin: string;
}
const Responsive = ({
  children,
  ...props
}: ResponsiveProps) => (
  <ResponsiveContext.Consumer>
    {size => {
      return (
        <Grid
          {...props}
          columns={columns[size]}
        >
          {children}
        </Grid>
      );
    }}
  </ResponsiveContext.Consumer>
);

const Store = () => (
  <Box fill>
    <Responsive gap="medium" margin="medium">
      {sortedRecords.map(
        (record: IRecord) => <RecordCard record={record} key={record.artist+record.name}/>
      )}
    </Responsive>
  </Box>
);

export default Store;
