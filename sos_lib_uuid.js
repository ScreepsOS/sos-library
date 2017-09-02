
var shardid = false
if(Game.shard) {
  var matches = Game.shard.name.match(/\d+$/);
  if (matches) {
    shardid = parseInt(matches[0]).toString(36);
  }
}

var sos_lib_uuid = {
  index: 0,
  tick: Game.time,

  v4: function() {
    var result, i, j;
    result = '';
    for(j=0; j<32; j++) {
      if( j == 8 || j == 12|| j == 16|| j == 20) {
        result = result + '-';
      }
      i = Math.floor(Math.random()*16).toString(16).toUpperCase();
      result = result + i;
    }
    return result;
  },

  vs: function() {
    if(Game.time != this.tick) {
      this.index = 0
      this.tick = Game.time
    }
    this.index++
    var base = Game.time.toString(36) + this.index.toString(36).leftPad(3, '0')
    if(shardid !== false) {
      base = shardid + base
    }
    return base
  }
}

module.exports = sos_lib_uuid
