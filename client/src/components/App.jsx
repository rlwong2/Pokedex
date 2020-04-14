import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { createApolloFetch } from 'apollo-fetch';
import Main from './Main.jsx';
import catchPokemon from './query.js';

const uri = 'http://localhost:5000/graphql';
const apolloFetch = createApolloFetch({ uri });

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 50px;
  width: 480px;
  height: 640px;
  font: 14px/1.4 Helvetica;
  margin: 0 auto;
  border: 2px solid #000000;
  border-radius: 10px;
  background-color: #DC143C;
  -webkit-box-shadow: 0px 5px 30px 0px rgba(153,153,153,1);
  -moz-box-shadow: 0px 5px 30px 0px rgba(153,153,153,1);
  box-shadow: 0px 5px 30px 0px rgba(153,153,153,1);
`

const Top = styled.div`
  grid-row-start: 1;
  grid-row-end: 1;
  border: 0px #000000 solid;
  display: flex;
  flex-direction: row;
  grid-column-start: 1;
  grid-column-end: 1;
  height: 150px;
`

const Bottom = styled.div`
  border: 0px solid #000000;
  display: inline-grid;
  grid-template-columns: 420px auto;
  grid-template-rows: 300px auto;
  height: 490px;
  width: 480px;
`

const DiagStart = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 150px;
  border: solid #000000;
  border-width: 0 0 2px 0;
`

const Diag = styled.div`
  position: absolute;
  top: 80px;
  left: 200px;
  width: 100px;
  height: 72px;
  background: linear-gradient(to top left, #DC143C calc(50% - 1px), #000, #DC143C calc(50% + 2px) );
`
const DiagEnd = styled.div`
  position: absolute;
  top: 0;
  left: 298px;
  width: 182px;
  height: 80px;
  border: solid #000000;
  border-width: 0 0 2px 0;
  z-index: 1;
`

const Sensor = styled.div`
  background-color: ${props => props.light === true ? "#5CC4FF" : "#0389D6"} ;
  border-radius: 50%;
  height: 90px;
  width: 90px;
  border: 12px solid #ffffff;
  margin: auto 15px auto 30px;
  box-shadow: ${props => props.light === true ? "0px 1px 0px 0px #fff" : "0px 2px 2px 0px #000"};
`

const RedLight = styled.div`
  background-color: #8B0000;
  border-radius: 50%;
  height: 15px;
  width: 15px;
  border: 1px solid #333333;
  margin: 20px 0px 0px 12px;
  box-shadow: 0px 0px 2px 0px #000;
`

const YellowLight = styled(RedLight)`
  background-color: #FFD700;
`

const GreenLight = styled(RedLight)`
  background-color: #006400;
`

const Hinge = styled.div`
  border: 1px solid #000000;
  border-width: 0 0 0 1px;
  position: absolute;
  top: 80px;
  left: 420px;
  bottom: 0;
  right: 0;
`


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: {},
      light: false,
      on: false
    }
    this.getPokemon = this.getPokemon.bind(this);
    this.handleFlash = this.handleFlash.bind(this);
  }

  componentDidMount() {

  }

  handleFlash() {
    this.setState({light: !this.state.light})
  }

  getPokemon(pokemon) {
    let query = catchPokemon(pokemon)

    apolloFetch({ query })
    .then((result) => {
      console.log(result)
      this.setState({
        pokemon: result.data
      })
    })
    .catch(error => {
      console.log('Fetch Error')
    })

  }

  render() {
    return (<Container>
    <Top>
      <Sensor light={this.state.light} />
      <RedLight />
      <YellowLight />
      <GreenLight />
      <DiagStart />
      <Diag />
      <DiagEnd />
    </Top>
    <Bottom>
      <Main getPokemon={this.getPokemon} handleFlash={this.handleFlash} powerOn={this.state.on} />
      <Hinge />
    </Bottom>

    </Container>)
  }
}

export default App;