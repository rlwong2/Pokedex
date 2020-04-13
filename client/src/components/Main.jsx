import React from 'react';
import styled from 'styled-components';
import ScreenDisplay from './ScreenDisplay.jsx';
import Buttons from './Buttons.jsx';

const MainContainer = styled.div`

`

const Main = (props) => {
  return (
    <MainContainer>
      <ScreenDisplay />
      <Buttons getPokemon={props.getPokemon} powerOn={props.powerOn} />
    </MainContainer>

  )
}


export default Main;