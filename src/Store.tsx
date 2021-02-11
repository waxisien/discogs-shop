import React from "react";
import { Box, Grid, ResponsiveContext } from "grommet";
import { useSelector } from "react-redux";

import RecordCard from "src/RecordCard";
import { IRecord } from "src/redux/reducers/inventory";
import { getRecordsSorted } from "src/redux/selectors";

interface ResponsiveSizes {
  [size: string]: string[];
}

// If the size is small, we only see 1 column
// If the size is medium, we only see 2 columns
// If the size is either large or xlarge, we see 3 columns
const columns: ResponsiveSizes = {
  small: ["auto"],
  medium: ["auto", "auto"],
  large: ["auto", "auto", "auto", "auto"],
  xlarge: ["auto", "auto", "auto", "auto", "auto"],
};

interface ResponsiveProps {
  children: JSX.Element[];
  gap: string;
  margin: string;
}
const Responsive = ({ children, ...props }: ResponsiveProps) => (
  <ResponsiveContext.Consumer>
    {(size) => {
      return (
        <Grid {...props} columns={columns[size]}>
          {children}
        </Grid>
      );
    }}
  </ResponsiveContext.Consumer>
);

const Store = () => {
  const sortedRecords = useSelector(getRecordsSorted);
  return (
    <Box fill>
      <Responsive gap="medium" margin="medium">
        {sortedRecords.map((record: IRecord) => (
          <RecordCard record={record} key={record.recordId} />
        ))}
      </Responsive>
    </Box>
  );
};

export default Store;
