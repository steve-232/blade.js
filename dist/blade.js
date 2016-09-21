// Plugin Name: blade.js
// Git:		      https://github.com/steve-232/blade.js.git
// Description: Few useful functions for everyday programming.
// Version:     1.0
// Author:      steve-232
// Author URI:  http://lizard-themes.com/
// License:     MIT

var blade = function(){};

blade.prototype = {
  addSignDefaults: {
    number: null,
    sign: ',',
    frequency: 3,
    safeFirstSign: false,
    addFirstSign: '',
    decimals: false
  },
  addSign: function(opts) {
    var config = this.merge(this.addSignDefaults, opts),
        number = String(config.number),
        rgx = new RegExp('\\' + config.sign,'g'),
        i = 0,
        decimals = '',
        safeFirstSign = '',
        newNum = '';

    if (config.decimals){
      number = String(config.number.toFixed(2));
      decimals = number.slice(-3);
      number = number.slice(0,-3);
    }

    if (config.safeFirstSign){
      safeFirstSign = number.slice(0,1);
      number = number.slice(1);
    }

    for (i=0;i<number.length;i+=config.frequency){
      if (i>0){
        var part = number.slice(-i);
        if (part.length > config.frequency) part = part.slice(0,config.frequency);
        newNum = config.sign + part + newNum;
      }
    }

    newNum = number.slice(0,(number.length-newNum.replace(rgx,'').length)) + newNum;

    return safeFirstSign + config.addFirstSign + newNum + decimals;
  },
  merge: function(obj1, obj2) {
    var newObj = {};

    for (var key in obj1){
      if (obj2.hasOwnProperty(key)){
        newObj[key] = obj2[key];
      } else {
        newObj[key] = obj1[key];
      }
    }

    return newObj;
  },
  sliceString: function(data, slice) {
    var cut1 = data.indexOf(slice),
        cut2 = cut1+slice.length;

    if (cut1 === 0){
      return data.slice(cut2);
    } else {
      return data.slice(0,cut1)+data.slice(cut2);
    }
  }
};
