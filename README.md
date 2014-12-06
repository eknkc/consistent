# consistent
Consistent hashing module for Node.JS

## installation

```
npm install consistent
```

## usage

```js
var consistent = require('consistent');

var ring = consistent({
  members: [
    "member1",
    "member2",
    {
      key: "member3",
      weight: 1.5 // optional, default weight is 1
    }
  ]
});

console.log(ring.get('some key'));
// outputs member1 or member2 or member3
```

## api

### add member
adds a new member

```js
ring.add('member4');
// or
ring.add({
  key: "member4",
  weight: 3
})
```

### remove member
removes a member

```js
ring.remove("member2")
```

### replace member
this preserves the hash slots of old member, if you want to recalculate hashes for the new member, just remove the old one and add the new one.

```js
ring.replace('member1', 'member5');
```

### get member for hash slot

```js
ring.get('some key');
```

## author
Ekin Koc

## license
MIT