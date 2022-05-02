import React from 'react'
import { Container } from '../../styled/Global'
import { HomeRow, Left, Right } from '../../styled/Home.styled'

const Home = () => {
  return (
    <Container>
        <HomeRow>
            <Left>
        grid1
            </Left>
            <Right>grid2</Right>
        </HomeRow>
    </Container>
  )
}

export default Home
