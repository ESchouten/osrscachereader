# OSRS Cache reader

![Wise Old Man](https://oldschool.runescape.wiki/images/4/46/Wise_Old_Man_chathead.png?68f26)

This project will load stuff from the runescape cache, in browser.

## Running

Before loading anything run this in console to read the cache,

```js
cache = new Cache("./")
```
The Cache class takes a string as the root directory to load the cache from. This root directory must contain a folder named cache which has files such as ```main_file_cache.idx255``` and ```main_file_cache.dat2```. The cache folder is provided but can be replaced with different versions of the cache. If the cache is not complete it may not load correctly. Runescape streams in the cache so using the files from the client will not be loaded correctly. An archive of complete caches can be found at https://archive.openrs2.org/caches

Then, load with,

```js
var allNpcs = cache.getAllFiles(IndexType.CONFIGS.id, ConfigType.NPC.id);
```
Here the ```IndexType.CONFIGS.id``` is the Index and the ```ConfigType.NPC.id``` is the Archive.

```js
var zulrah = cache.getFile(IndexType.CONFIGS.id, ConfigType.NPC.id, 2042);
```
Here again, the ```IndexType.CONFIGS.id``` is the Index, the ```ConfigType.NPC.id``` is the Archive, and the 2042 is the File Id or in this case the NPC Id.



## Loaders Implemented

Loaders currently implemented in JS from [here](https://github.com/open-osrs/runelite/tree/master/cache/src/main/java/net/runelite/cache/definitions/loaders),

- [ ] Area Loader
- [ ] Enum Loader
- [ ] Frame Loader
- [ ] Framemap Loader
- [ ] HealthBar Loader
- [ ] HitSplat Loader
- [ ] Interface Loader
- [ ] Inventory Loader
- [ ] Item Loader
- [x] Kit Loader
- [ ] Locations Loader
- [ ] Map Loader
- [ ] Model Loader
- [x] Npc Loader
- [x] Object Loader
- [ ] Overlay Loader
- [ ] Param Loader
- [ ] Script Loader
- [ ] Sequence Loader
- [ ] SpotAnim Loader
- [ ] Sprite Loader
- [ ] Struct Loader
- [ ] Texture Loader
- [ ] Track Loader
- [ ] Underlay Loader
- [ ] Varbit Loader
- [ ] WorldMap Loader

## TODO
