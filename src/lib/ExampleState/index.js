import React from 'react'
import { Action, withStateMachine } from 'react-automata'
import posed from 'react-pose'
const statechart = {
  initial: 'a',
  states: {
    a: {
      on: {
        NEXT: 'b',
      },
      onEntry: 'sayHello',
    },
    b: {
      on: {
        NEXT: 'a',
      },
      onEntry: 'sayCiao',
    },
  },
}
const Box = posed.div({
  a: {
    boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)'
  },
  b: {
    x: -10,
    y: -10,
    boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.25)',
    transition: { duration: 1000 }
  }
})
class ExampleState extends React.Component {
  handleClick = () => {
    this.props.transition('NEXT')
  }

  render() {
    console.log(this.props.machineState)
    return (
      <Box initialPose="b" pose={this.props.machineState.value}>
        <button onClick={this.handleClick}>s</button>
        <Action is="sayHello">A</Action>
        <Action is="sayCiao">B</Action>
      </Box>
    )
  }
}

export default withStateMachine(statechart)(ExampleState)