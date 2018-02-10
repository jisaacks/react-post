# React Post

Use POST request on elements that normally just use GET

## POST Link

```javascript
import { PostLink } from 'react-post'

<PostLink href="some-url" target="_blank" params={params}>Click Me</PostLink>
```

Clicking the link will POST the `params` to _some-url_ in a new window.

## POST Iframe

```javascript
import { PostIframe } from 'react-post'

<PostIframe frameBorder="0" src="some-url" params={params} />
```

The url _some-url_ will be loaded into the iframe with the `params` sent via a POST request.

## Install

```shell
npm install react-post --save
```

Or

```shell
yarn add react-post
```

## Limitations

This uses forms (not ajax) under the hood to submit the data. This means the `params` object needs to be key/value pairs and the values will always get converted to strings.

This means if you wanted to send some JSON and you sent your params like this:

```javascript
import { post } from 'react-post';

post({
  action: 'some-end-point',
  params: {
    count: 2,
    records: [
      { foo: 'bar' },
      { foo: 'buz' },
    ]
  }
})
```

You would not be sending a single JSON payload. You would be sending a `count` param with a value of `"2"` and a `records` param with the value being the JSON string of the `records` array `"[{"foo":"bar"},{"foo":"buz"}]"`.

If you want to send the whole object as a single JSON string, then nest it under a name like so:

```javascript
import { post } from 'react-post';

post({
  action: 'some-end-point',
  params: { payload: {
    count: 2,
    records: [
      { foo: 'bar' },
      { foo: 'buz' },
    ]
  } }
})
```

This will send the whole object as a JSON string under the parameter name `payload`.