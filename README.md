# publixe-event-target
Event target abstract class

```js

import EventTarge from 'publixe-event-target';

class Service extends EventTarget {
	check() {
		this.dispatchEvent('check', {abc: 'ABC'});
	};
};

let s = new Service();
let fn1 = (o) => {
	console.log('fn1', o);
};

s.addEventListener('check', fn1);
s.check();

```
