# goodtables-vue-js

[![Travis](https://img.shields.io/travis/frictionlessdata/goodtables-vue-js/master.svg)](https://travis-ci.org/frictionlessdata/goodtables-vue-js)
[![Codecov](https://img.shields.io/codecov/c/github/frictionlessdata/goodtables-vue-js/master.svg)](https://codecov.io/gh/frictionlessdata/goodtables-vue-js)

[![Saucelabs](https://saucelabs.com/browser-matrix/goodtables-vue-js.svg)](https://saucelabs.com/u/goodtables-vue-js)

Vue component to show goodtables report.

## Demo

https://frictionlessdata.github.io/goodtables-vue-js/

## Usage

```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>goodtables-vue</title>
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="//unpkg.com/goodtables-vue@version/dist/goodtables-vue.min.css">
  </head>
  <body>
    <div id="app"></div>
    <script src="//unpkg.com/axios@0.15.3/dist/axios.js"></script>
    <script src="//code.jquery.com/jquery-3.1.1.min.js"></script>
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="//unpkg.com/vue@2.1.10/dist/vue.js"></script>
    <script src="//unpkg.com/goodtables-vue@version/dist/goodtables-vue.min.js"></script>
    <script>
      var app = new Vue({
        el: '#app',
        data: {
          report: null,
        },
        components: {
          Report: goodtablesVue.Report,
        },
        template: '<div class="container"><Report v-if="report" :report="report" /></div>',
        mounted: function () {
          axios.get('data/report.json').then(res => {
            this.report = res.data
          })
        }
      })
    </script>
  </body>
</html>
```

## Development

```bash
$ npm run dev
$ npm run build
$ npm run test
```
