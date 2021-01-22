import React from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, Image } from 'grommet';
import { Shop } from 'grommet-icons';

import { IRecord } from './records';

interface IRecordProps {
  record: IRecord;
};

const RecordCard = (props: IRecordProps) => {
  const { record } = props;
  const headerTitle = `${record.artist} - ${record.name}`;
  return (
    <Card
      elevation="medium"
      key={record.name}
      background="light-1"
    >
      <CardHeader
        pad="medium"
        background="light-2"
      >
        {headerTitle}
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
        <Button
          icon={<Shop />}
          hoverIndicator
        />
      </CardFooter>
    </Card>
  );
};

export default React.memo(RecordCard);
