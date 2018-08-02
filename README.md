<p align="center">
<br>
	<b>D E P - G R A P H</b>
	<br>
	<br>
	<a href="https://travis-ci.org/CodeDotJS/dep-graph"><img src="https://travis-ci.org/CodeDotJS/dep-graph.svg?branch=master"></a>
	<img src="https://img.shields.io/badge/code_style-XO-5ed9c7.svg">
</p>

<p align="center">Packages count that a repository depends on!</p>



### Install

```
$ npm install --save dep-graph
```

### Usage

```js
const depGraphCount = require('dep-graph');

depGraphCount('facebook', 'react').then(res => {
  console.log(res);
  //  { repositories: '1,147,374', packages: '46,145' }

  // or

  console.log(res.repositories);
  // 1,147,374

  // or

  console.log(res.packages);
  // 46,145
});
```


### `API`

#### __`depGraphCount(username, repository)`__


#### __`depGraphCount(organization, repository)`__


__`typeof`__ `username/organization`  __-__ __`string`__

__`tyepof`__ `repository`
 __-__ __`string`__


### Related

- __[`depg`](https://github.com/CodeDotJS/depg)__ `:` `Command line tool to find total dependents on a repository!`

## License

MIT - Copyright &copy; [Rishi Giri](http://rishi.ml)
