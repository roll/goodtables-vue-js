# goodtables-vue-js

Vue component to show goodtables report

## Demo

https://roll.github.io/goodtables-vue-js/

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
          report,
        },
        components: {
          'goodtables-report': goodtablesVue.Report,
        },
        template: '<goodtables-report v-if="report" :report="report" />',
      })
    </script>
  </body>
</html>
```
