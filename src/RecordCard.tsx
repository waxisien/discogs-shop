import React from 'react';
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Image } from 'grommet';
import { Shop } from 'grommet-icons';

import { IRecord } from './records';

interface IRecordProps {
  record: IRecord;
};

const RecordCard = (props: IRecordProps) => {
  const { record } = props;
  const headerTitle = `${record.artist} - ${record.name}`;

  const doSomething = () => null;

  return (
    <Card
      elevation="medium"
      key={record.name}
      background="light-1"
      hoverIndicator={true}
      onClick={doSomething}
    >
      <CardHeader
        pad="medium"
        background="light-2"
      >
        {headerTitle} {record.format}
      </CardHeader>
      <CardBody height="small" pad="small">
        {record.picture &&
          <Image
            fit="contain"
            src={record.picture}
          />
        }
      </CardBody>
      <CardFooter pad={{ horizontal: "small" }} background="light-2">
        <Box direction="row">{record.priceCurrency}<b>{record.priceAmount.toFixed(2)}</b></Box>
        <Button
          icon={<Shop />}
          hoverIndicator
          tip="Add to cart"
        />
      </CardFooter>
    </Card>
  );
};

export default React.memo(RecordCard);
