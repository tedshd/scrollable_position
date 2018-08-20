# scrollable_position

Set & get scrollable position

Use `localStorage` set position & get it

```JavaScript
new scrollablePosition(<option>);
```

**Method**

* getPosition
  * get position

* setPosition
  * set position

**Option**

|key|type|required|description|example|
|---|---|---|---|---|
|direction|string|no|which direction want set position|'horizontal' or 'vertical'|
|name|string|yes|set name & can get it|'navPosition'|
|dom|dom object|yes|detect dom position||



**Example**

```JavaScript
var pos = new scrollablePosition({
    direction: 'horizontal',
    name: 'navPos',
    dom: document.querySelector('.pure-menu')
});
// get position
pos.getPosition();
// set position
pos.setPosition();
```
