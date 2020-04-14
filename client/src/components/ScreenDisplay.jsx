import React from 'react';
import styled from 'styled-components';


const ScreenContainer = styled.div`
  position: relative;
  top: 20px;
  border: 1px solid #000000;
  height: 260px;
  width: 340px;
  margin: 0 auto;
  background-color: #FFF;
  border-radius: 10px;
  box-shadow: 0px 1px 0px 0px rgba(0,0,0,1);
`

const Screen = styled.div`
  position: relative;
  top: 20px;
  font-weight: 500;
  border: 1px solid #000000;
  border-radius: 10px;
  height: 220px;
  width: 280px;
  margin: auto;
  background-color: #333333;
`

const ScreenDisplay = (props) => {
  return (
    <ScreenContainer>
      <Screen>

      </Screen>
    </ScreenContainer>
  )
}

export default ScreenDisplay;