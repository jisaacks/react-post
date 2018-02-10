function isDate(val) {
  // Cross realm comptatible
  return Object.prototype.toString.call(val) === '[object Date]'
}

function isObj(val) {
  return typeof val === 'object'
}

function stringifyValue(val) {
  if (isObj(val) && !isDate) {
    return JSON.stringify(val)
  } else {
    return val
  }
}

function buildForm({ action, target, params }) {
  const form = document.createElement('form')
  form.setAttribute('method', 'post')
  form.setAttribute('action', action)
  form.setAttribute('target', target)

  Object.keys(params).forEach(key => {
    const input = document.createElement('input')
    input.setAttribute('type', 'hidden')
    input.setAttribute('name', key)
    input.setAttribute('value', stringifyValue(params[key]))
    form.appendChild(input)
  })

  return form
}

export default function post(details) {
  const form = this.buildForm(details)
  document.body.appendChild(form)
  form.submit()
  form.remove()
}