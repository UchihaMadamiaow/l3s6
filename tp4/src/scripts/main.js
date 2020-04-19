import React from ’react’;
import ReactDOM from ’react-dom’;

const bootstrapReact =
() => ReactDOM.render(
<article>
<h3>React in action, using jsx</h3>
<div>this div is in an article</div>
<div>this div is in the same article</div>
</article>,
document.getElementById(’insertReactHere’)
);
