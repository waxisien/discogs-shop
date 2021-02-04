import { Stack, Box, Text } from 'grommet';
import { Cart } from 'grommet-icons';
import { useSelector } from 'react-redux';

import { getCartSize } from 'src/redux/selectors';

const CartIcon = () => {
  const cartSize = useSelector(getCartSize);

  // TODO: fix icon size
  return (
    <Stack anchor="top-right">
      <Cart size="large"/>  
        <Box
          background="light-1"
          pad={{ horizontal: 'xsmall' }}
          round
        >
          <Text size="xsmall">{cartSize}</Text>
      </Box>
    </Stack>
  );
};

export default CartIcon;
