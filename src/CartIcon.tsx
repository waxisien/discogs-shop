import { Stack, Box, Text } from 'grommet';
import { Cart } from 'grommet-icons';

const CartIcon = () => {
  // TODO: fix icon size
  return (
    <Stack anchor="top-right">
      <Cart size="large"/>  
        <Box
          background="light-1"
          pad={{ horizontal: 'xsmall' }}
          round
        >
          <Text size="xsmall">0</Text>
      </Box>
    </Stack>
  );
};

export default CartIcon;
