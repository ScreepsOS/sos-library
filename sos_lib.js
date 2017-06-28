

if(!Memory.sos) {
  Memory.sos = {}
}

let target = {};

let handler = {
    get(target, key, receiver) {
      var classname = 'sos_lib_' + key
      if(!target[classname]) {
        target[classname] = require(classname)
      }
      return target[classname]
    }
};

module.exports = new Proxy({}, handler);
