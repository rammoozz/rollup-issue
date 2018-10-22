import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
const Grid = styled.div`
background:green;
`
export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      text
    } = this.props

    return (
      <Grid>
         fv f: {text}
       
      </Grid>
    )
  }
}
