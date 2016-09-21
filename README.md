# blade.js
Few useful functions for everyday programming.

## Installation
Download and include `blade.min.js` in your page.

```html
<script src="/path/blade.min.js"></script>
```

## Usage

```html
<script type="text/javascript">

  var newNumber = new blade().addSign({
    number: '9999999',
    // sign: ',',
    // frequency: 3,
    // safeFirstSign: false,
    // addFirstSign: '',
    // decimals: false
  });

  "newNumber" will now be "9,999,999"

  // --------------------------------------

  var obj1 = {a:'AAA',b:'BBB', c:'CCC'},
      obj2 = {b:'222', c:'333'},
      newObj = new blade().merge(obj1, obj2);

  "newObj" will now be "{a:'AAA',b:'222', c:'333'}"

  // --------------------------------------

  var newString = new blade().sliceString('FirstSecondThird','Second');

  "newString" will now be "FirstThird"

</script>
```

## Options
"blade.addSign({})" options
<table>
    <tr>
        <th>Option</th>
        <th>Type</th>
        <th>Default</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>number</td>
        <td>number</td>
        <td>null</td>
        <td>This number will be sliced.</td>
    </tr>
    <tr>
        <td>sign</td>
        <td>string</td>
        <td>,</td>
        <td>Number will be sliced with this sign.</td>
    </tr>
    <tr>
        <td>frequency</td>
        <td>number</td>
        <td>3</td>
        <td>Sign will be added after every third character.</td>
    </tr>
    <tr>
        <td>safeFirstSign</td>
        <td>boolean</td>
        <td>false</td>
        <td>First sign will be ignored. Useful if the first sign is currency ($1000 > $1,000). </td>
    </tr>
    <tr>
        <td>addFirstSign</td>
        <td>string</td>
        <td>empty string</td>
        <td>Add sign at the first position (1000 > $1,000). </td>
    </tr>
    <tr>
        <td>decimals</td>
        <td>boolean</td>
        <td>false</td>
        <td>Include decimals (1000 > 1,000.00 | 1000.2 > 1,000.20). </td>
    </tr>
</table>

## License
[MIT license](http://www.opensource.org/licenses/MIT)
