import React from 'react';
import styled from 'styled-components';
import ScreenDisplay from './ScreenDisplay.jsx';
import ButtonAsm from './Buttons.jsx';

const MainContainer = styled.div`

`

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
     <MainContainer>
       <ScreenDisplay />
       <ButtonAsm getPokemon={this.props.getPokemon} />
     </MainContainer>
   )
  }
}


export default Main;