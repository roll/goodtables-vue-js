# goodtables-vue-js

[![Travis](https://img.shields.io/travis/frictionlessdata/goodtables-vue-js/master.svg)](https://travis-ci.org/frictionlessdata/goodtables-vue-js)
[![Codecov](https://img.shields.io/codecov/c/github/frictionlessdata/goodtables-vue-js/master.svg)](https://codecov.io/gh/frictionlessdata/goodtables-vue-js)

[![Saucelabs](https://saucelabs.com/browser-matrix/goodtables-vue-js.svg)](https://saucelabs.com/u/goodtables-vue-js)

Vue component to show goodtables report

## Demo

https://frictionlessdata.github.io/goodtables-vue-js/

## Usage

```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>goodtables-vue</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="//unpkg.com/vue@version/dist/vue.js"></script>
    <script src="//unpkg.com/goodtables-vue@version/dist/goodtables-vue.min.js"></script>
    <script>
      var app = new Vue({
        el: '#app',
        data: {
          report, // Your goodtables report
        },
        components: {
          'goodtables-report': goodtablesVue.Report,
        },
        template: '<goodtables-report :report="report" />',
      })
    </script>
  </body>
</html>
```

## Development

```bash
$ npm run dev
```
