import React, { Component } from 'react'

export default class PostLink extends Component {

  handleClick = event => {
    event.preventDefault()
    this.form.submit()
  }

  buildForm() {
    const { href, target, params } = this.props
    const fields = Object.keys(params).map(key => (
      <input key={key} type="hidden" name={key} value={params[key]} />
    ))
    return (
      <form ref={el => this.form = el} method="POST" action={href} target={target}>
        {fields}
      </form>
    )
  }

  render() {
    const { params, ...props } = this.props
    return (
      <a {...props} onClick={this.handleClick}>
        {children}
        {this.buildForm()}
      </a>
    )
  }

}