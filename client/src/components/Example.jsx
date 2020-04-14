import React from 'react';
import styled from 'styled-components';

const Button = styled.button` // Reusable styled react component
  border: 1px solid #FF5733;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 0px 1px 0px 0px rgba(0,0,0,1);
  cursor: pointer;
`

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }

  componentDidMount() {
  }

  getStuff() {
    // GET the goods
  }

  render() {
    return (<div>
      <Button>
        Press Me
      </Button>
    </div>)
  }
}

export default Example;