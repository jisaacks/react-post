import React, { Component } from 'react'

let i = 0

function generateIframeName() {
  return `react-post-iframe-${i++}`
}

export default class PostIframe extends Component {

  iframeName = generateIframeName()

  componentDidMount() {
    const form = this.buildForm()
    document.body.appendChild(form)
    form.submit()
    form.remove()
  }

  buildForm() {
    const { src, params } = this.props

    const form = document.createElement('form')
    form.setAttribute('method', 'post')
    form.setAttribute('action', src)
    form.setAttribute('target', this.iframeName)

    Object.keys(params).forEach(key => {
      const input = document.createElement('input')
      input.setAttribute('type', 'hidden')
      input.setAttribute('name', key)
      input.setAttribute('value', params[key])
      form.appendChild(input)
    })

    return form
  }

  render() {
    const { src, params, ...props } = this.props
    return (
      <iframe {...props} name={this.iframeName} />
    )
  }

}