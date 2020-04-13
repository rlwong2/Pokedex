import React, { useState } from 'react';
import styled from 'styled-components';

const ButtonsContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 1;
  border: 0px solid #000000;
  font-weight: 500;
  display: grid;
  grid-template-columns: 120px 240px auto;
  grid-template-rows: auto;
`

const CircleButton = styled.button`
  position: absolute;
  left: 40px;
  top: 480px;
  height: 60px;
  width: 60px;
  border: 1px solid #000000;
  border-radius: 50%;
  background-color: #333;
  box-shadow: 0px 1px 0px 0px rgba(0,0,0,1);
  cursor: pointer;

`

const GreenButton = styled.button`
  position: absolute;
  left: 140px;
  top: 460px;
  border: 1px solid #000000;
  border-radius: 4px;
  background-color: #006400;
  width: 40px;
  height: 8px;
  cursor: pointer;
  margin: 20px 0px 0px 0px;
  box-shadow: 0px 1px 0px 0px rgba(0,0,0,1);
`

const OrangeButton = styled(GreenButton)`
  background-color: #FF8C00;
  left: 200px;
`

const GreenPad = styled.button`
  position: absolute;
  left: 130px;
  top: 520px;
  border: 1px solid #000000;
  border-radius: 5px;
  background-color: #00A733;
  width: 120px;
  height: 80px;
  cursor: pointer;
  box-shadow: 0px 1px 0px 0px rgba(0,0,0,1);
  font: 35px Courier;
  value: 'ON';
`

const DirPad = styled.div`
  position: absolute;
  top: 480px;
  left: 290px;
  border: 1px #000000;
  display: grid;
  grid-template-columns: auto 35% auto;
  grid-template-rows: auto 35% auto;
  width: 100px;
  height: 100px;
`

const Vert = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 4;
  background-color: #333;
  box-shadow: 0px 2px 0px 0px rgba(0,0,0,1);
  border: 1px solid #000;
  border-width: 1px 0 1px 0;
`

const HorizL = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  background-color: #333;
  border: 1px solid #000;
  border-width: 1px 0 1px 1px;
  box-shadow: 0px 2px 0px 0px rgba(0,0,0,1);
`

const HorizR = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  background-color: #333;
  border: 1px solid #000;
  border-width: 1px 1px 1px 0;
  box-shadow: 0px 2px 0px 0px rgba(0,0,0,1);
`

const Buttons = (props) => {
  const [display, setDisplay] = useState('OFF');

  return (
    <ButtonsContainer>
      <CircleButton onClick={props.getPokemon} />
      <GreenButton></GreenButton>
      <OrangeButton />
  <GreenPad onClick={() => setDisplay('ON')}>{display}</GreenPad>
      <DirPad>
        <HorizL />
        <Vert />
        <HorizR />
      </DirPad>
    </ButtonsContainer>
  )
}


export default Buttons;

