import React, { Component } from 'react'
import post from './post'

export default class PostLink extends Component {

  handleClick = event => {
    event.preventDefault()
    const { href, target, params } = this.props
    post({ action: href, target, params })
  }

  render() {
    const { params, ...props } = this.props
    return (
      <a {...props} onClick={this.handleClick} />
    )
  }
}