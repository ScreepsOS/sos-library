# sos-library

## Install

Copy files into your screeps directory.

### Dependencies

The `cache` and `broadcaster` modules have the ability to compress data using
[`lzstring`](https://github.com/pieroxy/lz-string) as long as the library is
available. To install it simply copy [this file](https://raw.githubusercontent.com/pieroxy/lz-string/master/libs/lz-string.js)
to your screeps directory as `lib_lzstring`.


## Usage

### Loading

```javascript
// Initialize library into global for easy access.
global.sos_lib = require('sos_lib')
```


### Tick Start

Some libraries require initialization each tick to run. For the `segments` library
this is needed to ensure data split across multiple segments gets properly
reconstructured, and for the `stormtracker` needs to run each tick to identify
global reset storms.

```javascript
sos_lib.segments.moveToGlobalCache()
sos_lib.stormtracker.track()
```


### Close

Some of the libraries require some processing at the end of the tick.

```javascript
// Flush dirty vram pages to segments.
sos_lib.vram.saveDirty()

// Update the public segment with the latest channel information if it is
// out of date.
sos_lib.broadcaster.saveIndexSegment()

// Process segments- clean no longer used ones, flush memory buffer, set public
// segments, set default public segment.
sos_lib.segments.process()
```
