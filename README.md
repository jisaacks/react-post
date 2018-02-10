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