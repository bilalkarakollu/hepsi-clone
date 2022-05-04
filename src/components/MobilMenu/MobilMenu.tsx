import React from 'react'
import { Container, Button, Text } from '../../styled/MobilMenu.styled';
import { IoFunnelOutline, IoSwapVerticalOutline } from 'react-icons/io5';
import { useAppDispatch } from '../../store/hooks';
import { setIsOpen } from '../../store/slices/filterSlice';

const MobilMenu = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setIsOpen());
  }
  
  return (
    <Container>
      <Button> <Text><IoSwapVerticalOutline/></Text> <Text>Sırala</Text></Button>
      <Button onClick={handleClick}> <Text><IoFunnelOutline/></Text> <Text>Filtrele</Text></Button>
    </Container>
  )
}

export default MobilMenu;
