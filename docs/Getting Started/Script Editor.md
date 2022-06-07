---
sidebar_position: 10
---

You can also use scripts to mmanipulate data before storing them in your data fields. This is accomplished via our script editor which supports javascript. 

We also support Lodash ([https://lodash.com/docs/4.17.15](https://lodash.com/docs/4.17.15)) and Luxon([https://moment.github.io/luxon/api-docs/index.html](https://moment.github.io/luxon/api-docs/index.html)).

Here are some examples for you to explore.

```jsx
let words = ['sky', 'wood', 'forest', 'falcon',
    'pear', 'ocean', 'universe'];

let fel = _.first(words);
let lel = _.last(words);

console.log(`First element: ${fel}`);
console.log(`Last element: ${lel}`);
```

```bash
$ node first_last.js
First element: sky
Last element: universe
```

```jsx
_.times(4, () => {
    console.log("zorp");
})
```

```bash
$ node times_fun.js
zorp
zorp
zorp
zorp
```

```jsx
import { DateTime } from 'luxon';

return `DateTime.now().toISO()`
return `localTime  ${ DateTime.local({ zone: "America/New_York" }) }`
return ` formatted ${DateTime.fromISO("2018-05-01T13:44:48.708709Z").toLocaleString()}`
```

```bash
firstEx 2022-06-03T21:15:45.558+05:30
localTime 2022-06-03T11:50:41.579-04:00 //~> now, in US east coast time
formatted 01/05/2018
```


***
