import React from 'react'
import { Container, Button, Text } from '../../styled/MobilMenu.styled';
import { IoFunnelOutline, IoSwapVerticalOutline } from 'react-icons/io5';

const MobilMenu = () => {
  return (
    <Container>
      <Button> <Text><IoSwapVerticalOutline/></Text> <Text>Sırala</Text></Button>
      <Button> <Text><IoFunnelOutline/></Text> <Text>Filtrele</Text></Button>
    </Container>
  )
}

export default MobilMenu;
