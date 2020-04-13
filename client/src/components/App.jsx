import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import axios from 'axios';
import { createApolloFetch } from 'apollo-fetch';

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

const Main = styled.div`
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
  border-width: 0 0 1px 0;
`

const Diag = styled.div`
  position: absolute;
  top: 80px;
  left: 200px;
  width: 100px;
  height: 70px;
  background: linear-gradient(to top left, #DC143C calc(50% - 1px), #000, #DC143C calc(50% + 1px) );
`
const DiagEnd = styled.div`
  position: absolute;
  top: 0;
  left: 300px;
  width: 180px;
  height: 80px;
  border: solid #000000;
  border-width: 0 0 1px 0;

`

const Sensor = styled.div`
  background-color: #0389D6;
  border-radius: 50%;
  height: 90px;
  width: 90px;
  border: 12px solid #ffffff;
  margin: auto 15px auto 30px;
  box-shadow: 0px 1px 0px 0px rgba(0,0,0,1);
`

const RedLight = styled.div`
  background-color: #8B0000;
  border-radius: 50%;
  height: 15px;
  width: 15px;
  border: 2px solid #333333;
  margin: 20px 0px 0px 12px;
  box-shadow: 0px 5px 30px 0px rgba(153,153,153,1);
`

const YellowLight = styled(RedLight)`
  background-color: #FFD700;
`

const GreenLight = styled(RedLight)`
  background-color: #006400;
`

const ScreenAsm = styled.div`
  position: relative;
  top: 40px;
  border: 1px solid #000000;
  height: 260px;
  width: 320px;
  margin: 0 auto;
  background-color: #FFF;
  border-radius: 10px;
  box-shadow: 0px 1px 0px 0px rgba(0,0,0,1);
`

const Screen = styled.div`
  position: relative;
  top: 30px;
  font-weight: 500;
  border: 1px solid #000000;
  border-radius: 10px;
  height: 200px;
  width: 235px;
  margin: auto;
  background-color: #333333;
`

const ButtonAsm = styled.div`
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
`

const Horiz = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  background-color: #333;
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
      pokemon: {}
    }
    this.getPokemon = this.getPokemon.bind(this)
  }

  componentDidMount() {
    this.getPokemon('pikachu')
  }


  getPokemon(pokemon) {
    const query = `
    query {
      pokemon(name: "Pikachu") {
        id
        number
        name
        attacks {
          special {
            name
            type
            damage
          }
        }
        evolutions {
          id
          number
          name
          weight {
            minimum
            maximum
          }
          attacks {
            fast {
              name
              type
              damage
            }
          }
        }
      }
    }
    `
    apolloFetch({ query })
    .then((result) => {
      console.log(result)
      this.setState({
        pokemon: result.data
      })
    })
    .catch(error => {
      console.log('API Error')
    });
  }

  render() {
    return (<Container>
    <Top>
      <Sensor />
      <RedLight />
      <YellowLight />
      <GreenLight />
      <DiagStart />
      <Diag />
      <DiagEnd />
    </Top>
    <Main>
      <ScreenAsm>
        <Screen></Screen>
      </ScreenAsm>
      <ButtonAsm>
          <CircleButton />
          <GreenButton />
          <OrangeButton />
          <GreenPad />
          <DirPad>
            <Vert />
            <Horiz />
          </DirPad>
      </ButtonAsm>
      <Hinge />
    </Main>

    </Container>)
  }
}

export default App;