(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["osrscachereader"] = factory();
	else
		root["osrscachereader"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 264:
/***/ ((module) => {

"use strict";
/*! bz2 (C) 2019-present SheetJS LLC */



(function bz2() {
// https://www.ncbi.nlm.nih.gov/IEB/ToolBox/CPP_DOC/lxr/source/src/util/compress/bzip2/crctable.c
  const crc32Table = [
    0x00000000, 0x04c11db7, 0x09823b6e, 0x0d4326d9, 0x130476dc, 0x17c56b6b, 0x1a864db2, 0x1e475005,
    0x2608edb8, 0x22c9f00f, 0x2f8ad6d6, 0x2b4bcb61, 0x350c9b64, 0x31cd86d3, 0x3c8ea00a, 0x384fbdbd,
    0x4c11db70, 0x48d0c6c7, 0x4593e01e, 0x4152fda9, 0x5f15adac, 0x5bd4b01b, 0x569796c2, 0x52568b75,
    0x6a1936c8, 0x6ed82b7f, 0x639b0da6, 0x675a1011, 0x791d4014, 0x7ddc5da3, 0x709f7b7a, 0x745e66cd,
    0x9823b6e0, 0x9ce2ab57, 0x91a18d8e, 0x95609039, 0x8b27c03c, 0x8fe6dd8b, 0x82a5fb52, 0x8664e6e5,
    0xbe2b5b58, 0xbaea46ef, 0xb7a96036, 0xb3687d81, 0xad2f2d84, 0xa9ee3033, 0xa4ad16ea, 0xa06c0b5d,
    0xd4326d90, 0xd0f37027, 0xddb056fe, 0xd9714b49, 0xc7361b4c, 0xc3f706fb, 0xceb42022, 0xca753d95,
    0xf23a8028, 0xf6fb9d9f, 0xfbb8bb46, 0xff79a6f1, 0xe13ef6f4, 0xe5ffeb43, 0xe8bccd9a, 0xec7dd02d,
    0x34867077, 0x30476dc0, 0x3d044b19, 0x39c556ae, 0x278206ab, 0x23431b1c, 0x2e003dc5, 0x2ac12072,
    0x128e9dcf, 0x164f8078, 0x1b0ca6a1, 0x1fcdbb16, 0x018aeb13, 0x054bf6a4, 0x0808d07d, 0x0cc9cdca,
    0x7897ab07, 0x7c56b6b0, 0x71159069, 0x75d48dde, 0x6b93dddb, 0x6f52c06c, 0x6211e6b5, 0x66d0fb02,
    0x5e9f46bf, 0x5a5e5b08, 0x571d7dd1, 0x53dc6066, 0x4d9b3063, 0x495a2dd4, 0x44190b0d, 0x40d816ba,
    0xaca5c697, 0xa864db20, 0xa527fdf9, 0xa1e6e04e, 0xbfa1b04b, 0xbb60adfc, 0xb6238b25, 0xb2e29692,
    0x8aad2b2f, 0x8e6c3698, 0x832f1041, 0x87ee0df6, 0x99a95df3, 0x9d684044, 0x902b669d, 0x94ea7b2a,
    0xe0b41de7, 0xe4750050, 0xe9362689, 0xedf73b3e, 0xf3b06b3b, 0xf771768c, 0xfa325055, 0xfef34de2,
    0xc6bcf05f, 0xc27dede8, 0xcf3ecb31, 0xcbffd686, 0xd5b88683, 0xd1799b34, 0xdc3abded, 0xd8fba05a,
    0x690ce0ee, 0x6dcdfd59, 0x608edb80, 0x644fc637, 0x7a089632, 0x7ec98b85, 0x738aad5c, 0x774bb0eb,
    0x4f040d56, 0x4bc510e1, 0x46863638, 0x42472b8f, 0x5c007b8a, 0x58c1663d, 0x558240e4, 0x51435d53,
    0x251d3b9e, 0x21dc2629, 0x2c9f00f0, 0x285e1d47, 0x36194d42, 0x32d850f5, 0x3f9b762c, 0x3b5a6b9b,
    0x0315d626, 0x07d4cb91, 0x0a97ed48, 0x0e56f0ff, 0x1011a0fa, 0x14d0bd4d, 0x19939b94, 0x1d528623,
    0xf12f560e, 0xf5ee4bb9, 0xf8ad6d60, 0xfc6c70d7, 0xe22b20d2, 0xe6ea3d65, 0xeba91bbc, 0xef68060b,
    0xd727bbb6, 0xd3e6a601, 0xdea580d8, 0xda649d6f, 0xc423cd6a, 0xc0e2d0dd, 0xcda1f604, 0xc960ebb3,
    0xbd3e8d7e, 0xb9ff90c9, 0xb4bcb610, 0xb07daba7, 0xae3afba2, 0xaafbe615, 0xa7b8c0cc, 0xa379dd7b,
    0x9b3660c6, 0x9ff77d71, 0x92b45ba8, 0x9675461f, 0x8832161a, 0x8cf30bad, 0x81b02d74, 0x857130c3,
    0x5d8a9099, 0x594b8d2e, 0x5408abf7, 0x50c9b640, 0x4e8ee645, 0x4a4ffbf2, 0x470cdd2b, 0x43cdc09c,
    0x7b827d21, 0x7f436096, 0x7200464f, 0x76c15bf8, 0x68860bfd, 0x6c47164a, 0x61043093, 0x65c52d24,
    0x119b4be9, 0x155a565e, 0x18197087, 0x1cd86d30, 0x029f3d35, 0x065e2082, 0x0b1d065b, 0x0fdc1bec,
    0x3793a651, 0x3352bbe6, 0x3e119d3f, 0x3ad08088, 0x2497d08d, 0x2056cd3a, 0x2d15ebe3, 0x29d4f654,
    0xc5a92679, 0xc1683bce, 0xcc2b1d17, 0xc8ea00a0, 0xd6ad50a5, 0xd26c4d12, 0xdf2f6bcb, 0xdbee767c,
    0xe3a1cbc1, 0xe760d676, 0xea23f0af, 0xeee2ed18, 0xf0a5bd1d, 0xf464a0aa, 0xf9278673, 0xfde69bc4,
    0x89b8fd09, 0x8d79e0be, 0x803ac667, 0x84fbdbd0, 0x9abc8bd5, 0x9e7d9662, 0x933eb0bb, 0x97ffad0c,
    0xafb010b1, 0xab710d06, 0xa6322bdf, 0xa2f33668, 0xbcb4666d, 0xb8757bda, 0xb5365d03, 0xb1f740b4,
  ];

  // generated from 1 << i, except for 32
  const masks = [
    0x00000000, 0x00000001, 0x00000003, 0x00000007,
    0x0000000f, 0x0000001f, 0x0000003f, 0x0000007f,
    0x000000ff, 0x000001ff, 0x000003ff, 0x000007ff,
    0x00000fff, 0x00001fff, 0x00003fff, 0x00007fff,
    0x0000ffff, 0x0001ffff, 0x0003ffff, 0x0007ffff,
    0x000fffff, 0x001fffff, 0x003fffff, 0x007fffff,
    0x00ffffff, 0x01ffffff, 0x03ffffff, 0x07ffffff,
    0x0fffffff, 0x1fffffff, 0x3fffffff, -0x80000000,
  ];

  function createOrderedHuffmanTable(lengths) {
    const z = [];
    for (let i = 0; i < lengths.length; i += 1) {
      z.push([i, lengths[i]]);
    }
    z.push([lengths.length, -1]);
    const table = [];
    let start = z[0][0];
    let bits = z[0][1];
    for (let i = 0; i < z.length; i += 1) {
      const finish = z[i][0];
      const endbits = z[i][1];
      if (bits) {
        for (let code = start; code < finish; code += 1) {
          table.push({ code, bits, symbol: undefined });
        }
      }
      start = finish;
      bits = endbits;
      if (endbits === -1) {
        break;
      }
    }
    table.sort((a, b) => ((a.bits - b.bits) || (a.code - b.code)));
    let tempBits = 0;
    let symbol = -1;
    const fastAccess = [];
    let current;
    for (let i = 0; i < table.length; i += 1) {
      const t = table[i];
      symbol += 1;
      if (t.bits !== tempBits) {
        symbol <<= t.bits - tempBits;
        tempBits = t.bits;
        current = fastAccess[tempBits] = {};
      }
      t.symbol = symbol;
      current[symbol] = t;
    }
    return {
      table,
      fastAccess,
    };
  }

  function bwtReverse(src, primary) {
    if (primary < 0 || primary >= src.length) {
      throw RangeError('Out of bound');
    }
    const unsorted = src.slice();
    src.sort((a, b) => a - b);
    const start = {};
    for (let i = src.length - 1; i >= 0; i -= 1) {
      start[src[i]] = i;
    }
    const links = [];
    for (let i = 0; i < src.length; i += 1) {
      links.push(start[unsorted[i]]++); // eslint-disable-line no-plusplus
    }
    let i;
    const first = src[i = primary];
    const ret = [];
    for (let j = 1; j < src.length; j += 1) {
      const x = src[i = links[i]];
      if (x === undefined) {
        ret.push(255);
      } else {
        ret.push(x);
      }
    }
    ret.push(first);
    ret.reverse();
    return ret;
  }

  function decompress(bytes, checkCRC = false) {
    let index = 0;
    let bitfield = 0;
    let bits = 0;
    const read = (n) => {
      if (n >= 32) {
        const nd = n >> 1;
        return read(nd) * (1 << nd) + read(n - nd);
      }
      while (bits < n) {
        bitfield = (bitfield << 8) + bytes[index];
        index += 1;
        bits += 8;
      }
      const m = masks[n];
      const r = (bitfield >> (bits - n)) & m;
      bits -= n;
      bitfield &= ~(m << bits);
      return r;
    };

    const magic = read(16);
    if (magic !== 0x425A) { // 'BZ'
      throw new Error('Invalid magic');
    }
    const method = read(8);
    if (method !== 0x68) { // h for huffman
      throw new Error('Invalid method');
    }

    let blocksize = read(8);
    if (blocksize >= 49 && blocksize <= 57) { // 1..9
      blocksize -= 48;
    } else {
      throw new Error('Invalid blocksize');
    }

    let out = new Uint8Array(bytes.length * 1.5);
    let outIndex = 0;
    let newCRC = -1;
    while (true) {
      const blocktype = read(48);
      const crc = read(32) | 0;
      if (blocktype === 0x314159265359) {
        if (read(1)) {
          throw new Error('do not support randomised');
        }
        const pointer = read(24);
        const used = [];
        const usedGroups = read(16);
        for (let i = 1 << 15; i > 0; i >>= 1) {
          if (!(usedGroups & i)) {
            for (let j = 0; j < 16; j += 1) {
              used.push(false);
            }
            continue; // eslint-disable-line no-continue
          }
          const usedChars = read(16);
          for (let j = 1 << 15; j > 0; j >>= 1) {
            used.push(!!(usedChars & j));
          }
        }
        const groups = read(3);
        if (groups < 2 || groups > 6) {
          throw new Error('Invalid number of huffman groups');
        }
        const selectorsUsed = read(15);
        const selectors = [];
        const mtf = Array.from({ length: groups }, (_, i) => i);
        for (let i = 0; i < selectorsUsed; i += 1) {
          let c = 0;
          while (read(1)) {
            c += 1;
            if (c >= groups) {
              throw new Error('MTF table out of range');
            }
          }
          const v = mtf[c];
          for (let j = c; j > 0; mtf[j] = mtf[--j]) { // eslint-disable-line no-plusplus
          // nothing
          }
          selectors.push(v);
          mtf[0] = v;
        }
        const symbolsInUse = used.reduce((a, b) => a + b, 0) + 2;
        const tables = [];
        for (let i = 0; i < groups; i += 1) {
          let length = read(5);
          const lengths = [];
          for (let j = 0; j < symbolsInUse; j += 1) {
            if (length < 0 || length > 20) {
              throw new Error('Huffman group length outside range');
            }
            while (read(1)) {
              length -= (read(1) * 2) - 1;
            }
            lengths.push(length);
          }
          tables.push(createOrderedHuffmanTable(lengths));
        }
        const favourites = [];
        for (let i = 0; i < used.length - 1; i += 1) {
          if (used[i]) {
            favourites.push(i);
          }
        }
        let decoded = 0;
        let selectorPointer = 0;
        let t;
        let r;
        let repeat = 0;
        let repeatPower = 0;
        const buffer = [];
        while (true) {
          decoded -= 1;
          if (decoded <= 0) {
            decoded = 50;
            if (selectorPointer <= selectors.length) {
              t = tables[selectors[selectorPointer]];
              selectorPointer += 1;
            }
          }
          for (const b in t.fastAccess) {
            if (!Object.prototype.hasOwnProperty.call(t.fastAccess, b)) {
              continue; // eslint-disable-line no-continue
            }
            if (bits < b) {
              bitfield = (bitfield << 8) + bytes[index];
              index += 1;
              bits += 8;
            }
            r = t.fastAccess[b][bitfield >> (bits - b)];
            if (r) {
              bitfield &= masks[bits -= b];
              r = r.code;
              break;
            }
          }
          if (r >= 0 && r <= 1) {
            if (repeat === 0) {
              repeatPower = 1;
            }
            repeat += repeatPower << r;
            repeatPower <<= 1;
            continue; // eslint-disable-line no-continue
          } else {
            const v = favourites[0];
            for (; repeat > 0; repeat -= 1) {
              buffer.push(v);
            }
          }
          if (r === symbolsInUse - 1) {
            break;
          } else {
            const v = favourites[r - 1];
            // eslint-disable-next-line no-plusplus
            for (let j = r - 1; j > 0; favourites[j] = favourites[--j]) {
            // nothing
            }
            favourites[0] = v;
            buffer.push(v);
          }
        }
        const nt = bwtReverse(buffer, pointer);
        let i = 0;
        while (i < nt.length) {
          const c = nt[i];
          let count = 1;
          if ((i < nt.length - 4)
            && nt[i + 1] === c
            && nt[i + 2] === c
            && nt[i + 3] === c) {
            count = nt[i + 4] + 4;
            i += 5;
          } else {
            i += 1;
          }
          if (outIndex + count >= out.length) {
            const old = out;
            out = new Uint8Array(old.length * 2);
            out.set(old);
          }
          for (let j = 0; j < count; j += 1) {
            if (checkCRC) {
              newCRC = (newCRC << 8) ^ crc32Table[((newCRC >> 24) ^ c) & 0xff];
            }
            out[outIndex] = c;
            outIndex += 1;
          }
        }
        if (checkCRC) {
          const calculatedCRC = newCRC ^ -1;
          if (calculatedCRC !== crc) {
            throw new Error(`CRC mismatch: ${calculatedCRC} !== ${crc}`);
          }
          newCRC = -1;
        }
      } else if (blocktype === 0x177245385090) {
        read(bits & 0x07); // pad align
        break;
      } else {
        throw new Error('Invalid bz2 blocktype');
      }
    }
    return out.subarray(0, outIndex);
  }

  const exports = { decompress };

  if (typeof window !== 'undefined') {
    window.bz2 = exports; // eslint-disable-line no-undef
  } else {
    module.exports = exports;
  }
}());


/***/ }),

/***/ 793:
/***/ ((module) => {

(function () {
	'use strict';

	var table = [],
		poly = 0xEDB88320; // reverse polynomial

	// build the table
	function makeTable() {
		var c, n, k;

		for (n = 0; n < 256; n += 1) {
			c = n;
			for (k = 0; k < 8; k += 1) {
				if (c & 1) {
					c = poly ^ (c >>> 1);
				} else {
					c = c >>> 1;
				}
			}
			table[n] = c >>> 0;
		}
	}

	function strToArr(str) {
		// sweet hack to turn string into a 'byte' array
		return Array.prototype.map.call(str, function (c) {
			return c.charCodeAt(0);
		});
	}

	/*
	 * Compute CRC of array directly.
	 *
	 * This is slower for repeated calls, so append mode is not supported.
	 */
	function crcDirect(arr) {
		var crc = -1, // initial contents of LFBSR
			i, j, l, temp;

		for (i = 0, l = arr.length; i < l; i += 1) {
			temp = (crc ^ arr[i]) & 0xff;

			// read 8 bits one at a time
			for (j = 0; j < 8; j += 1) {
				if ((temp & 1) === 1) {
					temp = (temp >>> 1) ^ poly;
				} else {
					temp = (temp >>> 1);
				}
			}
			crc = (crc >>> 8) ^ temp;
		}

		// flip bits
		return crc ^ -1;
	}

	/*
	 * Compute CRC with the help of a pre-calculated table.
	 *
	 * This supports append mode, if the second parameter is set.
	 */
	function crcTable(arr, append) {
		var crc, i, l;

		// if we're in append mode, don't reset crc
		// if arr is null or undefined, reset table and return
		if (typeof crcTable.crc === 'undefined' || !append || !arr) {
			crcTable.crc = 0 ^ -1;

			if (!arr) {
				return;
			}
		}

		// store in temp variable for minor speed gain
		crc = crcTable.crc;

		for (i = 0, l = arr.length; i < l; i += 1) {
			crc = (crc >>> 8) ^ table[(crc ^ arr[i]) & 0xff];
		}

		crcTable.crc = crc;

		return crc ^ -1;
	}

	// build the table
	// this isn't that costly, and most uses will be for table assisted mode
	makeTable();

	module.exports = function (val, direct) {
		var val = (typeof val === 'string') ? strToArr(val) : val,
			ret = direct ? crcDirect(val) : crcTable(val);

		// convert to 2's complement hex
		return (ret >>> 0).toString(16);
	};
	module.exports.direct = crcDirect;
	module.exports.table = crcTable;
}());


/***/ }),

/***/ 762:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

(function () {
	'use strict';

	module.exports = {
		'inflate': __webpack_require__(689),
		'deflate': __webpack_require__(881)
	};
}());


/***/ }),

/***/ 881:
/***/ ((module) => {

/*
 * $Id: rawdeflate.js,v 0.3 2009/03/01 19:05:05 dankogai Exp dankogai $
 *
 * Original:
 *   http://www.onicos.com/staff/iz/amuse/javascript/expert/deflate.txt
 */

/* Copyright (C) 1999 Masanao Izumo <iz@onicos.co.jp>
 * Version: 1.0.1
 * LastModified: Dec 25 1999
 */

/* Interface:
 * data = deflate(src);
 */

(function () {
	/* constant parameters */
	var WSIZE = 32768, // Sliding Window size
		STORED_BLOCK = 0,
		STATIC_TREES = 1,
		DYN_TREES = 2,

	/* for deflate */
		DEFAULT_LEVEL = 6,
		FULL_SEARCH = false,
		INBUFSIZ = 32768, // Input buffer size
		//INBUF_EXTRA = 64, // Extra buffer
		OUTBUFSIZ = 1024 * 8,
		window_size = 2 * WSIZE,
		MIN_MATCH = 3,
		MAX_MATCH = 258,
		BITS = 16,
	// for SMALL_MEM
		LIT_BUFSIZE = 0x2000,
//		HASH_BITS = 13,
	//for MEDIUM_MEM
	//	LIT_BUFSIZE = 0x4000,
	//	HASH_BITS = 14,
	// for BIG_MEM
	//	LIT_BUFSIZE = 0x8000,
		HASH_BITS = 15,
		DIST_BUFSIZE = LIT_BUFSIZE,
		HASH_SIZE = 1 << HASH_BITS,
		HASH_MASK = HASH_SIZE - 1,
		WMASK = WSIZE - 1,
		NIL = 0, // Tail of hash chains
		TOO_FAR = 4096,
		MIN_LOOKAHEAD = MAX_MATCH + MIN_MATCH + 1,
		MAX_DIST = WSIZE - MIN_LOOKAHEAD,
		SMALLEST = 1,
		MAX_BITS = 15,
		MAX_BL_BITS = 7,
		LENGTH_CODES = 29,
		LITERALS = 256,
		END_BLOCK = 256,
		L_CODES = LITERALS + 1 + LENGTH_CODES,
		D_CODES = 30,
		BL_CODES = 19,
		REP_3_6 = 16,
		REPZ_3_10 = 17,
		REPZ_11_138 = 18,
		HEAP_SIZE = 2 * L_CODES + 1,
		H_SHIFT = parseInt((HASH_BITS + MIN_MATCH - 1) / MIN_MATCH, 10),

	/* variables */
		free_queue,
		qhead,
		qtail,
		initflag,
		outbuf = null,
		outcnt,
		outoff,
		complete,
		window,
		d_buf,
		l_buf,
		prev,
		bi_buf,
		bi_valid,
		block_start,
		ins_h,
		hash_head,
		prev_match,
		match_available,
		match_length,
		prev_length,
		strstart,
		match_start,
		eofile,
		lookahead,
		max_chain_length,
		max_lazy_match,
		compr_level,
		good_match,
		nice_match,
		dyn_ltree,
		dyn_dtree,
		static_ltree,
		static_dtree,
		bl_tree,
		l_desc,
		d_desc,
		bl_desc,
		bl_count,
		heap,
		heap_len,
		heap_max,
		depth,
		length_code,
		dist_code,
		base_length,
		base_dist,
		flag_buf,
		last_lit,
		last_dist,
		last_flags,
		flags,
		flag_bit,
		opt_len,
		static_len,
		deflate_data,
		deflate_pos;

	if (LIT_BUFSIZE > INBUFSIZ) {
		console.error("error: INBUFSIZ is too small");
	}
	if ((WSIZE << 1) > (1 << BITS)) {
		console.error("error: WSIZE is too large");
	}
	if (HASH_BITS > BITS - 1) {
		console.error("error: HASH_BITS is too large");
	}
	if (HASH_BITS < 8 || MAX_MATCH !== 258) {
		console.error("error: Code too clever");
	}

	/* objects (deflate) */

	function DeflateCT() {
		this.fc = 0; // frequency count or bit string
		this.dl = 0; // father node in Huffman tree or length of bit string
	}

	function DeflateTreeDesc() {
		this.dyn_tree = null; // the dynamic tree
		this.static_tree = null; // corresponding static tree or NULL
		this.extra_bits = null; // extra bits for each code or NULL
		this.extra_base = 0; // base index for extra_bits
		this.elems = 0; // max number of elements in the tree
		this.max_length = 0; // max bit length for the codes
		this.max_code = 0; // largest code with non zero frequency
	}

	/* Values for max_lazy_match, good_match and max_chain_length, depending on
	 * the desired pack level (0..9). The values given below have been tuned to
	 * exclude worst case performance for pathological files. Better values may be
	 * found for specific files.
	 */
	function DeflateConfiguration(a, b, c, d) {
		this.good_length = a; // reduce lazy search above this match length
		this.max_lazy = b; // do not perform lazy search above this match length
		this.nice_length = c; // quit search above this match length
		this.max_chain = d;
	}

	function DeflateBuffer() {
		this.next = null;
		this.len = 0;
		this.ptr = []; // new Array(OUTBUFSIZ); // ptr.length is never read
		this.off = 0;
	}

	/* constant tables */
	var extra_lbits = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0];
	var extra_dbits = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
	var extra_blbits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7];
	var bl_order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
	var configuration_table = [
		new DeflateConfiguration(0, 0, 0, 0),
		new DeflateConfiguration(4, 4, 8, 4),
		new DeflateConfiguration(4, 5, 16, 8),
		new DeflateConfiguration(4, 6, 32, 32),
		new DeflateConfiguration(4, 4, 16, 16),
		new DeflateConfiguration(8, 16, 32, 32),
		new DeflateConfiguration(8, 16, 128, 128),
		new DeflateConfiguration(8, 32, 128, 256),
		new DeflateConfiguration(32, 128, 258, 1024),
		new DeflateConfiguration(32, 258, 258, 4096)
	];


	/* routines (deflate) */

	function deflate_start(level) {
		var i;

		if (!level) {
			level = DEFAULT_LEVEL;
		} else if (level < 1) {
			level = 1;
		} else if (level > 9) {
			level = 9;
		}

		compr_level = level;
		initflag = false;
		eofile = false;
		if (outbuf !== null) {
			return;
		}

		free_queue = qhead = qtail = null;
		outbuf = []; // new Array(OUTBUFSIZ); // outbuf.length never called
		window = []; // new Array(window_size); // window.length never called
		d_buf = []; // new Array(DIST_BUFSIZE); // d_buf.length never called
		l_buf = []; // new Array(INBUFSIZ + INBUF_EXTRA); // l_buf.length never called
		prev = []; // new Array(1 << BITS); // prev.length never called

		dyn_ltree = [];
		for (i = 0; i < HEAP_SIZE; i++) {
			dyn_ltree[i] = new DeflateCT();
		}
		dyn_dtree = [];
		for (i = 0; i < 2 * D_CODES + 1; i++) {
			dyn_dtree[i] = new DeflateCT();
		}
		static_ltree = [];
		for (i = 0; i < L_CODES + 2; i++) {
			static_ltree[i] = new DeflateCT();
		}
		static_dtree = [];
		for (i = 0; i < D_CODES; i++) {
			static_dtree[i] = new DeflateCT();
		}
		bl_tree = [];
		for (i = 0; i < 2 * BL_CODES + 1; i++) {
			bl_tree[i] = new DeflateCT();
		}
		l_desc = new DeflateTreeDesc();
		d_desc = new DeflateTreeDesc();
		bl_desc = new DeflateTreeDesc();
		bl_count = []; // new Array(MAX_BITS+1); // bl_count.length never called
		heap = []; // new Array(2*L_CODES+1); // heap.length never called
		depth = []; // new Array(2*L_CODES+1); // depth.length never called
		length_code = []; // new Array(MAX_MATCH-MIN_MATCH+1); // length_code.length never called
		dist_code = []; // new Array(512); // dist_code.length never called
		base_length = []; // new Array(LENGTH_CODES); // base_length.length never called
		base_dist = []; // new Array(D_CODES); // base_dist.length never called
		flag_buf = []; // new Array(parseInt(LIT_BUFSIZE / 8, 10)); // flag_buf.length never called
	}

	function deflate_end() {
		free_queue = qhead = qtail = null;
		outbuf = null;
		window = null;
		d_buf = null;
		l_buf = null;
		prev = null;
		dyn_ltree = null;
		dyn_dtree = null;
		static_ltree = null;
		static_dtree = null;
		bl_tree = null;
		l_desc = null;
		d_desc = null;
		bl_desc = null;
		bl_count = null;
		heap = null;
		depth = null;
		length_code = null;
		dist_code = null;
		base_length = null;
		base_dist = null;
		flag_buf = null;
	}

	function reuse_queue(p) {
		p.next = free_queue;
		free_queue = p;
	}

	function new_queue() {
		var p;

		if (free_queue !== null) {
			p = free_queue;
			free_queue = free_queue.next;
		} else {
			p = new DeflateBuffer();
		}
		p.next = null;
		p.len = p.off = 0;

		return p;
	}

	function head1(i) {
		return prev[WSIZE + i];
	}

	function head2(i, val) {
		return (prev[WSIZE + i] = val);
	}

	/* put_byte is used for the compressed output, put_ubyte for the
	 * uncompressed output. However unlzw() uses window for its
	 * suffix table instead of its output buffer, so it does not use put_ubyte
	 * (to be cleaned up).
	 */
	function put_byte(c) {
		outbuf[outoff + outcnt++] = c;
		if (outoff + outcnt === OUTBUFSIZ) {
			qoutbuf();
		}
	}

	/* Output a 16 bit value, lsb first */
	function put_short(w) {
		w &= 0xffff;
		if (outoff + outcnt < OUTBUFSIZ - 2) {
			outbuf[outoff + outcnt++] = (w & 0xff);
			outbuf[outoff + outcnt++] = (w >>> 8);
		} else {
			put_byte(w & 0xff);
			put_byte(w >>> 8);
		}
	}

	/* ==========================================================================
	 * Insert string s in the dictionary and set match_head to the previous head
	 * of the hash chain (the most recent string with same hash key). Return
	 * the previous length of the hash chain.
	 * IN  assertion: all calls to to INSERT_STRING are made with consecutive
	 *    input characters and the first MIN_MATCH bytes of s are valid
	 *    (except for the last MIN_MATCH-1 bytes of the input file).
	 */
	function INSERT_STRING() {
		ins_h = ((ins_h << H_SHIFT) ^ (window[strstart + MIN_MATCH - 1] & 0xff)) & HASH_MASK;
		hash_head = head1(ins_h);
		prev[strstart & WMASK] = hash_head;
		head2(ins_h, strstart);
	}

	/* Send a code of the given tree. c and tree must not have side effects */
	function SEND_CODE(c, tree) {
		send_bits(tree[c].fc, tree[c].dl);
	}

	/* Mapping from a distance to a distance code. dist is the distance - 1 and
	 * must not have side effects. dist_code[256] and dist_code[257] are never
	 * used.
	 */
	function D_CODE(dist) {
		return (dist < 256 ? dist_code[dist] : dist_code[256 + (dist >> 7)]) & 0xff;
	}

	/* ==========================================================================
	 * Compares to subtrees, using the tree depth as tie breaker when
	 * the subtrees have equal frequency. This minimizes the worst case length.
	 */
	function SMALLER(tree, n, m) {
		return tree[n].fc < tree[m].fc || (tree[n].fc === tree[m].fc && depth[n] <= depth[m]);
	}

	/* ==========================================================================
	 * read string data
	 */
	function read_buff(buff, offset, n) {
		var i;
		for (i = 0; i < n && deflate_pos < deflate_data.length; i++) {
			buff[offset + i] = deflate_data[deflate_pos++] & 0xff;
		}
		return i;
	}

	/* ==========================================================================
	 * Initialize the "longest match" routines for a new file
	 */
	function lm_init() {
		var j;

		// Initialize the hash table. */
		for (j = 0; j < HASH_SIZE; j++) {
			// head2(j, NIL);
			prev[WSIZE + j] = 0;
		}
		// prev will be initialized on the fly */

		// Set the default configuration parameters:
		max_lazy_match = configuration_table[compr_level].max_lazy;
		good_match = configuration_table[compr_level].good_length;
		if (!FULL_SEARCH) {
			nice_match = configuration_table[compr_level].nice_length;
		}
		max_chain_length = configuration_table[compr_level].max_chain;

		strstart = 0;
		block_start = 0;

		lookahead = read_buff(window, 0, 2 * WSIZE);
		if (lookahead <= 0) {
			eofile = true;
			lookahead = 0;
			return;
		}
		eofile = false;
		// Make sure that we always have enough lookahead. This is important
		// if input comes from a device such as a tty.
		while (lookahead < MIN_LOOKAHEAD && !eofile) {
			fill_window();
		}

		// If lookahead < MIN_MATCH, ins_h is garbage, but this is
		// not important since only literal bytes will be emitted.
		ins_h = 0;
		for (j = 0; j < MIN_MATCH - 1; j++) {
			// UPDATE_HASH(ins_h, window[j]);
			ins_h = ((ins_h << H_SHIFT) ^ (window[j] & 0xff)) & HASH_MASK;
		}
	}

	/* ==========================================================================
	 * Set match_start to the longest match starting at the given string and
	 * return its length. Matches shorter or equal to prev_length are discarded,
	 * in which case the result is equal to prev_length and match_start is
	 * garbage.
	 * IN assertions: cur_match is the head of the hash chain for the current
	 *   string (strstart) and its distance is <= MAX_DIST, and prev_length >= 1
	 */
	function longest_match(cur_match) {
		var chain_length = max_chain_length; // max hash chain length
		var scanp = strstart; // current string
		var matchp; // matched string
		var len; // length of current match
		var best_len = prev_length; // best match length so far

		// Stop when cur_match becomes <= limit. To simplify the code,
		// we prevent matches with the string of window index 0.
		var limit = (strstart > MAX_DIST ? strstart - MAX_DIST : NIL);

		var strendp = strstart + MAX_MATCH;
		var scan_end1 = window[scanp + best_len - 1];
		var scan_end = window[scanp + best_len];

		var i, broke;

		// Do not waste too much time if we already have a good match: */
		if (prev_length >= good_match) {
			chain_length >>= 2;
		}

		// Assert(encoder->strstart <= window_size-MIN_LOOKAHEAD, "insufficient lookahead");

		do {
			// Assert(cur_match < encoder->strstart, "no future");
			matchp = cur_match;

			// Skip to next match if the match length cannot increase
			// or if the match length is less than 2:
			if (window[matchp + best_len] !== scan_end  ||
					window[matchp + best_len - 1] !== scan_end1 ||
					window[matchp] !== window[scanp] ||
					window[++matchp] !== window[scanp + 1]) {
				continue;
			}

			// The check at best_len-1 can be removed because it will be made
			// again later. (This heuristic is not always a win.)
			// It is not necessary to compare scan[2] and match[2] since they
			// are always equal when the other bytes match, given that
			// the hash keys are equal and that HASH_BITS >= 8.
			scanp += 2;
			matchp++;

			// We check for insufficient lookahead only every 8th comparison;
			// the 256th check will be made at strstart+258.
			while (scanp < strendp) {
				broke = false;
				for (i = 0; i < 8; i += 1) {
					scanp += 1;
					matchp += 1;
					if (window[scanp] !== window[matchp]) {
						broke = true;
						break;
					}
				}

				if (broke) {
					break;
				}
			}

			len = MAX_MATCH - (strendp - scanp);
			scanp = strendp - MAX_MATCH;

			if (len > best_len) {
				match_start = cur_match;
				best_len = len;
				if (FULL_SEARCH) {
					if (len >= MAX_MATCH) {
						break;
					}
				} else {
					if (len >= nice_match) {
						break;
					}
				}

				scan_end1 = window[scanp + best_len - 1];
				scan_end = window[scanp + best_len];
			}
		} while ((cur_match = prev[cur_match & WMASK]) > limit && --chain_length !== 0);

		return best_len;
	}

	/* ==========================================================================
	 * Fill the window when the lookahead becomes insufficient.
	 * Updates strstart and lookahead, and sets eofile if end of input file.
	 * IN assertion: lookahead < MIN_LOOKAHEAD && strstart + lookahead > 0
	 * OUT assertions: at least one byte has been read, or eofile is set;
	 *    file reads are performed for at least two bytes (required for the
	 *    translate_eol option).
	 */
	function fill_window() {
		var n, m;

	 // Amount of free space at the end of the window.
		var more = window_size - lookahead - strstart;

		// If the window is almost full and there is insufficient lookahead,
		// move the upper half to the lower one to make room in the upper half.
		if (more === -1) {
			// Very unlikely, but possible on 16 bit machine if strstart == 0
			// and lookahead == 1 (input done one byte at time)
			more--;
		} else if (strstart >= WSIZE + MAX_DIST) {
			// By the IN assertion, the window is not empty so we can't confuse
			// more == 0 with more == 64K on a 16 bit machine.
			// Assert(window_size == (ulg)2*WSIZE, "no sliding with BIG_MEM");

			// System.arraycopy(window, WSIZE, window, 0, WSIZE);
			for (n = 0; n < WSIZE; n++) {
				window[n] = window[n + WSIZE];
			}

			match_start -= WSIZE;
			strstart    -= WSIZE; /* we now have strstart >= MAX_DIST: */
			block_start -= WSIZE;

			for (n = 0; n < HASH_SIZE; n++) {
				m = head1(n);
				head2(n, m >= WSIZE ? m - WSIZE : NIL);
			}
			for (n = 0; n < WSIZE; n++) {
			// If n is not on any hash chain, prev[n] is garbage but
			// its value will never be used.
				m = prev[n];
				prev[n] = (m >= WSIZE ? m - WSIZE : NIL);
			}
			more += WSIZE;
		}
		// At this point, more >= 2
		if (!eofile) {
			n = read_buff(window, strstart + lookahead, more);
			if (n <= 0) {
				eofile = true;
			} else {
				lookahead += n;
			}
		}
	}

	/* ==========================================================================
	 * Processes a new input file and return its compressed length. This
	 * function does not perform lazy evaluationof matches and inserts
	 * new strings in the dictionary only for unmatched strings or for short
	 * matches. It is used only for the fast compression options.
	 */
	function deflate_fast() {
		while (lookahead !== 0 && qhead === null) {
			var flush; // set if current block must be flushed

			// Insert the string window[strstart .. strstart+2] in the
			// dictionary, and set hash_head to the head of the hash chain:
			INSERT_STRING();

			// Find the longest match, discarding those <= prev_length.
			// At this point we have always match_length < MIN_MATCH
			if (hash_head !== NIL && strstart - hash_head <= MAX_DIST) {
				// To simplify the code, we prevent matches with the string
				// of window index 0 (in particular we have to avoid a match
				// of the string with itself at the start of the input file).
				match_length = longest_match(hash_head);
				// longest_match() sets match_start */
				if (match_length > lookahead) {
					match_length = lookahead;
				}
			}
			if (match_length >= MIN_MATCH) {
				// check_match(strstart, match_start, match_length);

				flush = ct_tally(strstart - match_start, match_length - MIN_MATCH);
				lookahead -= match_length;

				// Insert new strings in the hash table only if the match length
				// is not too large. This saves time but degrades compression.
				if (match_length <= max_lazy_match) {
					match_length--; // string at strstart already in hash table
					do {
						strstart++;
						INSERT_STRING();
						// strstart never exceeds WSIZE-MAX_MATCH, so there are
						// always MIN_MATCH bytes ahead. If lookahead < MIN_MATCH
						// these bytes are garbage, but it does not matter since
						// the next lookahead bytes will be emitted as literals.
					} while (--match_length !== 0);
					strstart++;
				} else {
					strstart += match_length;
					match_length = 0;
					ins_h = window[strstart] & 0xff;
					// UPDATE_HASH(ins_h, window[strstart + 1]);
					ins_h = ((ins_h << H_SHIFT) ^ (window[strstart + 1] & 0xff)) & HASH_MASK;

				//#if MIN_MATCH !== 3
				//		Call UPDATE_HASH() MIN_MATCH-3 more times
				//#endif

				}
			} else {
				// No match, output a literal byte */
				flush = ct_tally(0, window[strstart] & 0xff);
				lookahead--;
				strstart++;
			}
			if (flush) {
				flush_block(0);
				block_start = strstart;
			}

			// Make sure that we always have enough lookahead, except
			// at the end of the input file. We need MAX_MATCH bytes
			// for the next match, plus MIN_MATCH bytes to insert the
			// string following the next match.
			while (lookahead < MIN_LOOKAHEAD && !eofile) {
				fill_window();
			}
		}
	}

	function deflate_better() {
		// Process the input block. */
		while (lookahead !== 0 && qhead === null) {
			// Insert the string window[strstart .. strstart+2] in the
			// dictionary, and set hash_head to the head of the hash chain:
			INSERT_STRING();

			// Find the longest match, discarding those <= prev_length.
			prev_length = match_length;
			prev_match = match_start;
			match_length = MIN_MATCH - 1;

			if (hash_head !== NIL && prev_length < max_lazy_match && strstart - hash_head <= MAX_DIST) {
				// To simplify the code, we prevent matches with the string
				// of window index 0 (in particular we have to avoid a match
				// of the string with itself at the start of the input file).
				match_length = longest_match(hash_head);
				// longest_match() sets match_start */
				if (match_length > lookahead) {
					match_length = lookahead;
				}

				// Ignore a length 3 match if it is too distant: */
				if (match_length === MIN_MATCH && strstart - match_start > TOO_FAR) {
					// If prev_match is also MIN_MATCH, match_start is garbage
					// but we will ignore the current match anyway.
					match_length--;
				}
			}
			// If there was a match at the previous step and the current
			// match is not better, output the previous match:
			if (prev_length >= MIN_MATCH && match_length <= prev_length) {
				var flush; // set if current block must be flushed

				// check_match(strstart - 1, prev_match, prev_length);
				flush = ct_tally(strstart - 1 - prev_match, prev_length - MIN_MATCH);

				// Insert in hash table all strings up to the end of the match.
				// strstart-1 and strstart are already inserted.
				lookahead -= prev_length - 1;
				prev_length -= 2;
				do {
					strstart++;
					INSERT_STRING();
					// strstart never exceeds WSIZE-MAX_MATCH, so there are
					// always MIN_MATCH bytes ahead. If lookahead < MIN_MATCH
					// these bytes are garbage, but it does not matter since the
					// next lookahead bytes will always be emitted as literals.
				} while (--prev_length !== 0);
				match_available = false;
				match_length = MIN_MATCH - 1;
				strstart++;
				if (flush) {
					flush_block(0);
					block_start = strstart;
				}
			} else if (match_available) {
				// If there was no match at the previous position, output a
				// single literal. If there was a match but the current match
				// is longer, truncate the previous match to a single literal.
				if (ct_tally(0, window[strstart - 1] & 0xff)) {
					flush_block(0);
					block_start = strstart;
				}
				strstart++;
				lookahead--;
			} else {
				// There is no previous match to compare with, wait for
				// the next step to decide.
				match_available = true;
				strstart++;
				lookahead--;
			}

			// Make sure that we always have enough lookahead, except
			// at the end of the input file. We need MAX_MATCH bytes
			// for the next match, plus MIN_MATCH bytes to insert the
			// string following the next match.
			while (lookahead < MIN_LOOKAHEAD && !eofile) {
				fill_window();
			}
		}
	}

	function init_deflate() {
		if (eofile) {
			return;
		}
		bi_buf = 0;
		bi_valid = 0;
		ct_init();
		lm_init();

		qhead = null;
		outcnt = 0;
		outoff = 0;

		if (compr_level <= 3) {
			prev_length = MIN_MATCH - 1;
			match_length = 0;
		} else {
			match_length = MIN_MATCH - 1;
			match_available = false;
		}

		complete = false;
	}

	/* ==========================================================================
	 * Same as above, but achieves better compression. We use a lazy
	 * evaluation for matches: a match is finally adopted only if there is
	 * no better match at the next window position.
	 */
	function deflate_internal(buff, off, buff_size) {
		var n;

		if (!initflag) {
			init_deflate();
			initflag = true;
			if (lookahead === 0) { // empty
				complete = true;
				return 0;
			}
		}

		n = qcopy(buff, off, buff_size);
		if (n === buff_size) {
			return buff_size;
		}

		if (complete) {
			return n;
		}

		if (compr_level <= 3) {
			// optimized for speed
			deflate_fast();
		} else {
			deflate_better();
		}

		if (lookahead === 0) {
			if (match_available) {
				ct_tally(0, window[strstart - 1] & 0xff);
			}
			flush_block(1);
			complete = true;
		}

		return n + qcopy(buff, n + off, buff_size - n);
	}

	function qcopy(buff, off, buff_size) {
		var n, i, j;

		n = 0;
		while (qhead !== null && n < buff_size) {
			i = buff_size - n;
			if (i > qhead.len) {
				i = qhead.len;
			}
			// System.arraycopy(qhead.ptr, qhead.off, buff, off + n, i);
			for (j = 0; j < i; j++) {
				buff[off + n + j] = qhead.ptr[qhead.off + j];
			}

			qhead.off += i;
			qhead.len -= i;
			n += i;
			if (qhead.len === 0) {
				var p;
				p = qhead;
				qhead = qhead.next;
				reuse_queue(p);
			}
		}

		if (n === buff_size) {
			return n;
		}

		if (outoff < outcnt) {
			i = buff_size - n;
			if (i > outcnt - outoff) {
				i = outcnt - outoff;
			}
			// System.arraycopy(outbuf, outoff, buff, off + n, i);
			for (j = 0; j < i; j++) {
				buff[off + n + j] = outbuf[outoff + j];
			}
			outoff += i;
			n += i;
			if (outcnt === outoff) {
				outcnt = outoff = 0;
			}
		}
		return n;
	}

	/* ==========================================================================
	 * Allocate the match buffer, initialize the various tables and save the
	 * location of the internal file attribute (ascii/binary) and method
	 * (DEFLATE/STORE).
	 */
	function ct_init() {
		var n; // iterates over tree elements
		var bits; // bit counter
		var length; // length value
		var code; // code value
		var dist; // distance index

		if (static_dtree[0].dl !== 0) {
			return; // ct_init already called
		}

		l_desc.dyn_tree = dyn_ltree;
		l_desc.static_tree = static_ltree;
		l_desc.extra_bits = extra_lbits;
		l_desc.extra_base = LITERALS + 1;
		l_desc.elems = L_CODES;
		l_desc.max_length = MAX_BITS;
		l_desc.max_code = 0;

		d_desc.dyn_tree = dyn_dtree;
		d_desc.static_tree = static_dtree;
		d_desc.extra_bits = extra_dbits;
		d_desc.extra_base = 0;
		d_desc.elems = D_CODES;
		d_desc.max_length = MAX_BITS;
		d_desc.max_code = 0;

		bl_desc.dyn_tree = bl_tree;
		bl_desc.static_tree = null;
		bl_desc.extra_bits = extra_blbits;
		bl_desc.extra_base = 0;
		bl_desc.elems = BL_CODES;
		bl_desc.max_length = MAX_BL_BITS;
		bl_desc.max_code = 0;

	 // Initialize the mapping length (0..255) -> length code (0..28)
		length = 0;
		for (code = 0; code < LENGTH_CODES - 1; code++) {
			base_length[code] = length;
			for (n = 0; n < (1 << extra_lbits[code]); n++) {
				length_code[length++] = code;
			}
		}
	 // Assert (length === 256, "ct_init: length !== 256");

		// Note that the length 255 (match length 258) can be represented
		// in two different ways: code 284 + 5 bits or code 285, so we
		// overwrite length_code[255] to use the best encoding:
		length_code[length - 1] = code;

		// Initialize the mapping dist (0..32K) -> dist code (0..29) */
		dist = 0;
		for (code = 0; code < 16; code++) {
			base_dist[code] = dist;
			for (n = 0; n < (1 << extra_dbits[code]); n++) {
				dist_code[dist++] = code;
			}
		}
		// Assert (dist === 256, "ct_init: dist !== 256");
		// from now on, all distances are divided by 128
		for (dist >>= 7; code < D_CODES; code++) {
			base_dist[code] = dist << 7;
			for (n = 0; n < (1 << (extra_dbits[code] - 7)); n++) {
				dist_code[256 + dist++] = code;
			}
		}
		// Assert (dist === 256, "ct_init: 256+dist !== 512");

		// Construct the codes of the static literal tree
		for (bits = 0; bits <= MAX_BITS; bits++) {
			bl_count[bits] = 0;
		}
		n = 0;
		while (n <= 143) {
			static_ltree[n++].dl = 8;
			bl_count[8]++;
		}
		while (n <= 255) {
			static_ltree[n++].dl = 9;
			bl_count[9]++;
		}
		while (n <= 279) {
			static_ltree[n++].dl = 7;
			bl_count[7]++;
		}
		while (n <= 287) {
			static_ltree[n++].dl = 8;
			bl_count[8]++;
		}
		// Codes 286 and 287 do not exist, but we must include them in the
		// tree construction to get a canonical Huffman tree (longest code
		// all ones)
		gen_codes(static_ltree, L_CODES + 1);

		// The static distance tree is trivial: */
		for (n = 0; n < D_CODES; n++) {
			static_dtree[n].dl = 5;
			static_dtree[n].fc = bi_reverse(n, 5);
		}

		// Initialize the first block of the first file:
		init_block();
	}

	/* ==========================================================================
	 * Initialize a new block.
	 */
	function init_block() {
		var n; // iterates over tree elements

		// Initialize the trees.
		for (n = 0; n < L_CODES;  n++) {
			dyn_ltree[n].fc = 0;
		}
		for (n = 0; n < D_CODES;  n++) {
			dyn_dtree[n].fc = 0;
		}
		for (n = 0; n < BL_CODES; n++) {
			bl_tree[n].fc = 0;
		}

		dyn_ltree[END_BLOCK].fc = 1;
		opt_len = static_len = 0;
		last_lit = last_dist = last_flags = 0;
		flags = 0;
		flag_bit = 1;
	}

	/* ==========================================================================
	 * Restore the heap property by moving down the tree starting at node k,
	 * exchanging a node with the smallest of its two sons if necessary, stopping
	 * when the heap property is re-established (each father smaller than its
	 * two sons).
	 *
	 * @param tree- tree to restore
	 * @param k- node to move down
	 */
	function pqdownheap(tree, k) {
		var v = heap[k],
			j = k << 1; // left son of k

		while (j <= heap_len) {
			// Set j to the smallest of the two sons:
			if (j < heap_len && SMALLER(tree, heap[j + 1], heap[j])) {
				j++;
			}

			// Exit if v is smaller than both sons
			if (SMALLER(tree, v, heap[j])) {
				break;
			}

			// Exchange v with the smallest son
			heap[k] = heap[j];
			k = j;

			// And continue down the tree, setting j to the left son of k
			j <<= 1;
		}
		heap[k] = v;
	}

	/* ==========================================================================
	 * Compute the optimal bit lengths for a tree and update the total bit length
	 * for the current block.
	 * IN assertion: the fields freq and dad are set, heap[heap_max] and
	 *    above are the tree nodes sorted by increasing frequency.
	 * OUT assertions: the field len is set to the optimal bit length, the
	 *     array bl_count contains the frequencies for each bit length.
	 *     The length opt_len is updated; static_len is also updated if stree is
	 *     not null.
	 */
	function gen_bitlen(desc) { // the tree descriptor
		var tree = desc.dyn_tree;
		var extra = desc.extra_bits;
		var base = desc.extra_base;
		var max_code = desc.max_code;
		var max_length = desc.max_length;
		var stree = desc.static_tree;
		var h; // heap index
		var n, m; // iterate over the tree elements
		var bits; // bit length
		var xbits; // extra bits
		var f; // frequency
		var overflow = 0; // number of elements with bit length too large

		for (bits = 0; bits <= MAX_BITS; bits++) {
			bl_count[bits] = 0;
		}

		// In a first pass, compute the optimal bit lengths (which may
		// overflow in the case of the bit length tree).
		tree[heap[heap_max]].dl = 0; // root of the heap

		for (h = heap_max + 1; h < HEAP_SIZE; h++) {
			n = heap[h];
			bits = tree[tree[n].dl].dl + 1;
			if (bits > max_length) {
				bits = max_length;
				overflow++;
			}
			tree[n].dl = bits;
			// We overwrite tree[n].dl which is no longer needed

			if (n > max_code) {
				continue; // not a leaf node
			}

			bl_count[bits]++;
			xbits = 0;
			if (n >= base) {
				xbits = extra[n - base];
			}
			f = tree[n].fc;
			opt_len += f * (bits + xbits);
			if (stree !== null) {
				static_len += f * (stree[n].dl + xbits);
			}
		}
		if (overflow === 0) {
			return;
		}

		// This happens for example on obj2 and pic of the Calgary corpus

		// Find the first bit length which could increase:
		do {
			bits = max_length - 1;
			while (bl_count[bits] === 0) {
				bits--;
			}
			bl_count[bits]--; // move one leaf down the tree
			bl_count[bits + 1] += 2; // move one overflow item as its brother
			bl_count[max_length]--;
			// The brother of the overflow item also moves one step up,
			// but this does not affect bl_count[max_length]
			overflow -= 2;
		} while (overflow > 0);

		// Now recompute all bit lengths, scanning in increasing frequency.
		// h is still equal to HEAP_SIZE. (It is simpler to reconstruct all
		// lengths instead of fixing only the wrong ones. This idea is taken
		// from 'ar' written by Haruhiko Okumura.)
		for (bits = max_length; bits !== 0; bits--) {
			n = bl_count[bits];
			while (n !== 0) {
				m = heap[--h];
				if (m > max_code) {
					continue;
				}
				if (tree[m].dl !== bits) {
					opt_len += (bits - tree[m].dl) * tree[m].fc;
					tree[m].fc = bits;
				}
				n--;
			}
		}
	}

	  /* ==========================================================================
	   * Generate the codes for a given tree and bit counts (which need not be
	   * optimal).
	   * IN assertion: the array bl_count contains the bit length statistics for
	   * the given tree and the field len is set for all tree elements.
	   * OUT assertion: the field code is set for all tree elements of non
	   *     zero code length.
	   * @param tree- the tree to decorate
	   * @param max_code- largest code with non-zero frequency
	   */
	function gen_codes(tree, max_code) {
		var next_code = []; // new Array(MAX_BITS + 1); // next code value for each bit length
		var code = 0; // running code value
		var bits; // bit index
		var n; // code index

		// The distribution counts are first used to generate the code values
		// without bit reversal.
		for (bits = 1; bits <= MAX_BITS; bits++) {
			code = ((code + bl_count[bits - 1]) << 1);
			next_code[bits] = code;
		}

		// Check that the bit counts in bl_count are consistent. The last code
		// must be all ones.
		// Assert (code + encoder->bl_count[MAX_BITS]-1 === (1<<MAX_BITS)-1, "inconsistent bit counts");
		// Tracev((stderr,"\ngen_codes: max_code %d ", max_code));

		for (n = 0; n <= max_code; n++) {
			var len = tree[n].dl;
			if (len === 0) {
				continue;
			}
			// Now reverse the bits
			tree[n].fc = bi_reverse(next_code[len]++, len);

			// Tracec(tree !== static_ltree, (stderr,"\nn %3d %c l %2d c %4x (%x) ", n, (isgraph(n) ? n : ' '), len, tree[n].fc, next_code[len]-1));
		}
	}

	/* ==========================================================================
	 * Construct one Huffman tree and assigns the code bit strings and lengths.
	 * Update the total bit length for the current block.
	 * IN assertion: the field freq is set for all tree elements.
	 * OUT assertions: the fields len and code are set to the optimal bit length
	 *     and corresponding code. The length opt_len is updated; static_len is
	 *     also updated if stree is not null. The field max_code is set.
	 */
	function build_tree(desc) { // the tree descriptor
		var tree = desc.dyn_tree;
		var stree = desc.static_tree;
		var elems = desc.elems;
		var n, m; // iterate over heap elements
		var max_code = -1; // largest code with non zero frequency
		var node = elems; // next internal node of the tree

		// Construct the initial heap, with least frequent element in
		// heap[SMALLEST]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
		// heap[0] is not used.
		heap_len = 0;
		heap_max = HEAP_SIZE;

		for (n = 0; n < elems; n++) {
			if (tree[n].fc !== 0) {
				heap[++heap_len] = max_code = n;
				depth[n] = 0;
			} else {
				tree[n].dl = 0;
			}
		}

		// The pkzip format requires that at least one distance code exists,
		// and that at least one bit should be sent even if there is only one
		// possible code. So to avoid special checks later on we force at least
		// two codes of non zero frequency.
		while (heap_len < 2) {
			var xnew = heap[++heap_len] = (max_code < 2 ? ++max_code : 0);
			tree[xnew].fc = 1;
			depth[xnew] = 0;
			opt_len--;
			if (stree !== null) {
				static_len -= stree[xnew].dl;
			}
			// new is 0 or 1 so it does not have extra bits
		}
		desc.max_code = max_code;

		// The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
		// establish sub-heaps of increasing lengths:
		for (n = heap_len >> 1; n >= 1; n--) {
			pqdownheap(tree, n);
		}

		// Construct the Huffman tree by repeatedly combining the least two
		// frequent nodes.
		do {
			n = heap[SMALLEST];
			heap[SMALLEST] = heap[heap_len--];
			pqdownheap(tree, SMALLEST);

			m = heap[SMALLEST]; // m = node of next least frequency

			// keep the nodes sorted by frequency
			heap[--heap_max] = n;
			heap[--heap_max] = m;

			// Create a new node father of n and m
			tree[node].fc = tree[n].fc + tree[m].fc;
			//	depth[node] = (char)(MAX(depth[n], depth[m]) + 1);
			if (depth[n] > depth[m] + 1) {
				depth[node] = depth[n];
			} else {
				depth[node] = depth[m] + 1;
			}
			tree[n].dl = tree[m].dl = node;

			// and insert the new node in the heap
			heap[SMALLEST] = node++;
			pqdownheap(tree, SMALLEST);

		} while (heap_len >= 2);

		heap[--heap_max] = heap[SMALLEST];

		// At this point, the fields freq and dad are set. We can now
		// generate the bit lengths.
		gen_bitlen(desc);

		// The field len is now set, we can generate the bit codes
		gen_codes(tree, max_code);
	}

	/* ==========================================================================
	 * Scan a literal or distance tree to determine the frequencies of the codes
	 * in the bit length tree. Updates opt_len to take into account the repeat
	 * counts. (The contribution of the bit length codes will be added later
	 * during the construction of bl_tree.)
	 *
	 * @param tree- the tree to be scanned
	 * @param max_code- and its largest code of non zero frequency
	 */
	function scan_tree(tree, max_code) {
		var n, // iterates over all tree elements
			prevlen = -1, // last emitted length
			curlen, // length of current code
			nextlen = tree[0].dl, // length of next code
			count = 0, // repeat count of the current code
			max_count = 7, // max repeat count
			min_count = 4; // min repeat count

		if (nextlen === 0) {
			max_count = 138;
			min_count = 3;
		}
		tree[max_code + 1].dl = 0xffff; // guard

		for (n = 0; n <= max_code; n++) {
			curlen = nextlen;
			nextlen = tree[n + 1].dl;
			if (++count < max_count && curlen === nextlen) {
				continue;
			} else if (count < min_count) {
				bl_tree[curlen].fc += count;
			} else if (curlen !== 0) {
				if (curlen !== prevlen) {
					bl_tree[curlen].fc++;
				}
				bl_tree[REP_3_6].fc++;
			} else if (count <= 10) {
				bl_tree[REPZ_3_10].fc++;
			} else {
				bl_tree[REPZ_11_138].fc++;
			}
			count = 0; prevlen = curlen;
			if (nextlen === 0) {
				max_count = 138;
				min_count = 3;
			} else if (curlen === nextlen) {
				max_count = 6;
				min_count = 3;
			} else {
				max_count = 7;
				min_count = 4;
			}
		}
	}

	/* ==========================================================================
	 * Send a literal or distance tree in compressed form, using the codes in
	 * bl_tree.
	 *
	 * @param tree- the tree to be scanned
	 * @param max_code- and its largest code of non zero frequency
	 */
	function send_tree(tree, max_code) {
		var n; // iterates over all tree elements
		var prevlen = -1; // last emitted length
		var curlen; // length of current code
		var nextlen = tree[0].dl; // length of next code
		var count = 0; // repeat count of the current code
		var max_count = 7; // max repeat count
		var min_count = 4; // min repeat count

		// tree[max_code+1].dl = -1; */  /* guard already set */
		if (nextlen === 0) {
			max_count = 138;
			min_count = 3;
		}

		for (n = 0; n <= max_code; n++) {
			curlen = nextlen;
			nextlen = tree[n + 1].dl;
			if (++count < max_count && curlen === nextlen) {
				continue;
			} else if (count < min_count) {
				do {
					SEND_CODE(curlen, bl_tree);
				} while (--count !== 0);
			} else if (curlen !== 0) {
				if (curlen !== prevlen) {
					SEND_CODE(curlen, bl_tree);
					count--;
				}
			// Assert(count >= 3 && count <= 6, " 3_6?");
				SEND_CODE(REP_3_6, bl_tree);
				send_bits(count - 3, 2);
			} else if (count <= 10) {
				SEND_CODE(REPZ_3_10, bl_tree);
				send_bits(count - 3, 3);
			} else {
				SEND_CODE(REPZ_11_138, bl_tree);
				send_bits(count - 11, 7);
			}
			count = 0;
			prevlen = curlen;
			if (nextlen === 0) {
				max_count = 138;
				min_count = 3;
			} else if (curlen === nextlen) {
				max_count = 6;
				min_count = 3;
			} else {
				max_count = 7;
				min_count = 4;
			}
		}
	}

	/* ==========================================================================
	 * Construct the Huffman tree for the bit lengths and return the index in
	 * bl_order of the last bit length code to send.
	 */
	function build_bl_tree() {
		var max_blindex; // index of last bit length code of non zero freq

		// Determine the bit length frequencies for literal and distance trees
		scan_tree(dyn_ltree, l_desc.max_code);
		scan_tree(dyn_dtree, d_desc.max_code);

		// Build the bit length tree:
		build_tree(bl_desc);
		// opt_len now includes the length of the tree representations, except
		// the lengths of the bit lengths codes and the 5+5+4 bits for the counts.

		// Determine the number of bit length codes to send. The pkzip format
		// requires that at least 4 bit length codes be sent. (appnote.txt says
		// 3 but the actual value used is 4.)
		for (max_blindex = BL_CODES - 1; max_blindex >= 3; max_blindex--) {
			if (bl_tree[bl_order[max_blindex]].dl !== 0) {
				break;
			}
		}
		// Update opt_len to include the bit length tree and counts */
		opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
		// Tracev((stderr, "\ndyn trees: dyn %ld, stat %ld",
		// encoder->opt_len, encoder->static_len));

		return max_blindex;
	}

	/* ==========================================================================
	 * Send the header for a block using dynamic Huffman trees: the counts, the
	 * lengths of the bit length codes, the literal tree and the distance tree.
	 * IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
	 */
	function send_all_trees(lcodes, dcodes, blcodes) { // number of codes for each tree
		var rank; // index in bl_order

		// Assert (lcodes >= 257 && dcodes >= 1 && blcodes >= 4, "not enough codes");
		// Assert (lcodes <= L_CODES && dcodes <= D_CODES && blcodes <= BL_CODES, "too many codes");
		// Tracev((stderr, "\nbl counts: "));
		send_bits(lcodes - 257, 5); // not +255 as stated in appnote.txt
		send_bits(dcodes - 1,   5);
		send_bits(blcodes - 4,  4); // not -3 as stated in appnote.txt
		for (rank = 0; rank < blcodes; rank++) {
			// Tracev((stderr, "\nbl code %2d ", bl_order[rank]));
			send_bits(bl_tree[bl_order[rank]].dl, 3);
		}

		// send the literal tree
		send_tree(dyn_ltree, lcodes - 1);

		// send the distance tree
		send_tree(dyn_dtree, dcodes - 1);
	}

	/* ==========================================================================
	 * Determine the best encoding for the current block: dynamic trees, static
	 * trees or store, and output the encoded block to the zip file.
	 */
	function flush_block(eof) { // true if this is the last block for a file
		var opt_lenb, static_lenb, // opt_len and static_len in bytes
			max_blindex, // index of last bit length code of non zero freq
			stored_len, // length of input block
			i;

		stored_len = strstart - block_start;
		flag_buf[last_flags] = flags; // Save the flags for the last 8 items

		// Construct the literal and distance trees
		build_tree(l_desc);
		// Tracev((stderr, "\nlit data: dyn %ld, stat %ld",
		// encoder->opt_len, encoder->static_len));

		build_tree(d_desc);
		// Tracev((stderr, "\ndist data: dyn %ld, stat %ld",
		// encoder->opt_len, encoder->static_len));
		// At this point, opt_len and static_len are the total bit lengths of
		// the compressed block data, excluding the tree representations.

		// Build the bit length tree for the above two trees, and get the index
		// in bl_order of the last bit length code to send.
		max_blindex = build_bl_tree();

	 // Determine the best encoding. Compute first the block length in bytes
		opt_lenb = (opt_len + 3 + 7) >> 3;
		static_lenb = (static_len + 3 + 7) >> 3;

	//  Trace((stderr, "\nopt %lu(%lu) stat %lu(%lu) stored %lu lit %u dist %u ", opt_lenb, encoder->opt_len, static_lenb, encoder->static_len, stored_len, encoder->last_lit, encoder->last_dist));

		if (static_lenb <= opt_lenb) {
			opt_lenb = static_lenb;
		}
		if (stored_len + 4 <= opt_lenb && block_start >= 0) { // 4: two words for the lengths
			// The test buf !== NULL is only necessary if LIT_BUFSIZE > WSIZE.
			// Otherwise we can't have processed more than WSIZE input bytes since
			// the last block flush, because compression would have been
			// successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
			// transform a block into a stored block.
			send_bits((STORED_BLOCK << 1) + eof, 3);  /* send block type */
			bi_windup();         /* align on byte boundary */
			put_short(stored_len);
			put_short(~stored_len);

			// copy block
			/*
				p = &window[block_start];
				for (i = 0; i < stored_len; i++) {
					put_byte(p[i]);
				}
			*/
			for (i = 0; i < stored_len; i++) {
				put_byte(window[block_start + i]);
			}
		} else if (static_lenb === opt_lenb) {
			send_bits((STATIC_TREES << 1) + eof, 3);
			compress_block(static_ltree, static_dtree);
		} else {
			send_bits((DYN_TREES << 1) + eof, 3);
			send_all_trees(l_desc.max_code + 1, d_desc.max_code + 1, max_blindex + 1);
			compress_block(dyn_ltree, dyn_dtree);
		}

		init_block();

		if (eof !== 0) {
			bi_windup();
		}
	}

	/* ==========================================================================
	 * Save the match info and tally the frequency counts. Return true if
	 * the current block must be flushed.
	 *
	 * @param dist- distance of matched string
	 * @param lc- (match length - MIN_MATCH) or unmatched char (if dist === 0)
	 */
	function ct_tally(dist, lc) {
		l_buf[last_lit++] = lc;
		if (dist === 0) {
			// lc is the unmatched char
			dyn_ltree[lc].fc++;
		} else {
			// Here, lc is the match length - MIN_MATCH
			dist--; // dist = match distance - 1
			// Assert((ush)dist < (ush)MAX_DIST && (ush)lc <= (ush)(MAX_MATCH-MIN_MATCH) && (ush)D_CODE(dist) < (ush)D_CODES,  "ct_tally: bad match");

			dyn_ltree[length_code[lc] + LITERALS + 1].fc++;
			dyn_dtree[D_CODE(dist)].fc++;

			d_buf[last_dist++] = dist;
			flags |= flag_bit;
		}
		flag_bit <<= 1;

		// Output the flags if they fill a byte
		if ((last_lit & 7) === 0) {
			flag_buf[last_flags++] = flags;
			flags = 0;
			flag_bit = 1;
		}
		// Try to guess if it is profitable to stop the current block here
		if (compr_level > 2 && (last_lit & 0xfff) === 0) {
			// Compute an upper bound for the compressed length
			var out_length = last_lit * 8;
			var in_length = strstart - block_start;
			var dcode;

			for (dcode = 0; dcode < D_CODES; dcode++) {
				out_length += dyn_dtree[dcode].fc * (5 + extra_dbits[dcode]);
			}
			out_length >>= 3;
			// Trace((stderr,"\nlast_lit %u, last_dist %u, in %ld, out ~%ld(%ld%%) ", encoder->last_lit, encoder->last_dist, in_length, out_length, 100L - out_length*100L/in_length));
			if (last_dist < parseInt(last_lit / 2, 10) && out_length < parseInt(in_length / 2, 10)) {
				return true;
			}
		}
		return (last_lit === LIT_BUFSIZE - 1 || last_dist === DIST_BUFSIZE);
		// We avoid equality with LIT_BUFSIZE because of wraparound at 64K
		// on 16 bit machines and because stored blocks are restricted to
		// 64K-1 bytes.
	}

	  /* ==========================================================================
	   * Send the block data compressed using the given Huffman trees
	   *
	   * @param ltree- literal tree
	   * @param dtree- distance tree
	   */
	function compress_block(ltree, dtree) {
		var dist; // distance of matched string
		var lc; // match length or unmatched char (if dist === 0)
		var lx = 0; // running index in l_buf
		var dx = 0; // running index in d_buf
		var fx = 0; // running index in flag_buf
		var flag = 0; // current flags
		var code; // the code to send
		var extra; // number of extra bits to send

		if (last_lit !== 0) {
			do {
				if ((lx & 7) === 0) {
					flag = flag_buf[fx++];
				}
				lc = l_buf[lx++] & 0xff;
				if ((flag & 1) === 0) {
					SEND_CODE(lc, ltree); /* send a literal byte */
					//	Tracecv(isgraph(lc), (stderr," '%c' ", lc));
				} else {
					// Here, lc is the match length - MIN_MATCH
					code = length_code[lc];
					SEND_CODE(code + LITERALS + 1, ltree); // send the length code
					extra = extra_lbits[code];
					if (extra !== 0) {
						lc -= base_length[code];
						send_bits(lc, extra); // send the extra length bits
					}
					dist = d_buf[dx++];
					// Here, dist is the match distance - 1
					code = D_CODE(dist);
					//	Assert (code < D_CODES, "bad d_code");

					SEND_CODE(code, dtree); // send the distance code
					extra = extra_dbits[code];
					if (extra !== 0) {
						dist -= base_dist[code];
						send_bits(dist, extra); // send the extra distance bits
					}
				} // literal or match pair ?
				flag >>= 1;
			} while (lx < last_lit);
		}

		SEND_CODE(END_BLOCK, ltree);
	}

	/* ==========================================================================
	 * Send a value on a given number of bits.
	 * IN assertion: length <= 16 and value fits in length bits.
	 *
	 * @param value- value to send
	 * @param length- number of bits
	 */
	var Buf_size = 16; // bit size of bi_buf
	function send_bits(value, length) {
		// If not enough room in bi_buf, use (valid) bits from bi_buf and
		// (16 - bi_valid) bits from value, leaving (width - (16-bi_valid))
		// unused bits in value.
		if (bi_valid > Buf_size - length) {
			bi_buf |= (value << bi_valid);
			put_short(bi_buf);
			bi_buf = (value >> (Buf_size - bi_valid));
			bi_valid += length - Buf_size;
		} else {
			bi_buf |= value << bi_valid;
			bi_valid += length;
		}
	}

	/* ==========================================================================
	 * Reverse the first len bits of a code, using straightforward code (a faster
	 * method would use a table)
	 * IN assertion: 1 <= len <= 15
	 *
	 * @param code- the value to invert
	 * @param len- its bit length
	 */
	function bi_reverse(code, len) {
		var res = 0;
		do {
			res |= code & 1;
			code >>= 1;
			res <<= 1;
		} while (--len > 0);
		return res >> 1;
	}

	/* ==========================================================================
	 * Write out any remaining bits in an incomplete byte.
	 */
	function bi_windup() {
		if (bi_valid > 8) {
			put_short(bi_buf);
		} else if (bi_valid > 0) {
			put_byte(bi_buf);
		}
		bi_buf = 0;
		bi_valid = 0;
	}

	function qoutbuf() {
		var q, i;
		if (outcnt !== 0) {
			q = new_queue();
			if (qhead === null) {
				qhead = qtail = q;
			} else {
				qtail = qtail.next = q;
			}
			q.len = outcnt - outoff;
			// System.arraycopy(outbuf, outoff, q.ptr, 0, q.len);
			for (i = 0; i < q.len; i++) {
				q.ptr[i] = outbuf[outoff + i];
			}
			outcnt = outoff = 0;
		}
	}

	function deflate(arr, level) {
		var i, j, buff;

		deflate_data = arr;
		deflate_pos = 0;
		if (typeof level === "undefined") {
			level = DEFAULT_LEVEL;
		}
		deflate_start(level);

		buff = [];

		do {
			i = deflate_internal(buff, buff.length, 1024);
		} while (i > 0);

		deflate_data = null; // G.C.
		return buff;
	}

	module.exports = deflate;
	module.exports.DEFAULT_LEVEL = DEFAULT_LEVEL;
}());


/***/ }),

/***/ 689:
/***/ ((module) => {

/*
 * $Id: rawinflate.js,v 0.2 2009/03/01 18:32:24 dankogai Exp $
 *
 * original:
 * http://www.onicos.com/staff/iz/amuse/javascript/expert/inflate.txt
 */

/* Copyright (C) 1999 Masanao Izumo <iz@onicos.co.jp>
 * Version: 1.0.0.1
 * LastModified: Dec 25 1999
 */

/* Interface:
 * data = inflate(src);
 */

(function () {
	/* constant parameters */
	var WSIZE = 32768, // Sliding Window size
		STORED_BLOCK = 0,
		STATIC_TREES = 1,
		DYN_TREES = 2,

	/* for inflate */
		lbits = 9, // bits in base literal/length lookup table
		dbits = 6, // bits in base distance lookup table

	/* variables (inflate) */
		slide,
		wp, // current position in slide
		fixed_tl = null, // inflate static
		fixed_td, // inflate static
		fixed_bl, // inflate static
		fixed_bd, // inflate static
		bit_buf, // bit buffer
		bit_len, // bits in bit buffer
		method,
		eof,
		copy_leng,
		copy_dist,
		tl, // literal length decoder table
		td, // literal distance decoder table
		bl, // number of bits decoded by tl
		bd, // number of bits decoded by td

		inflate_data,
		inflate_pos,


/* constant tables (inflate) */
		MASK_BITS = [
			0x0000,
			0x0001, 0x0003, 0x0007, 0x000f, 0x001f, 0x003f, 0x007f, 0x00ff,
			0x01ff, 0x03ff, 0x07ff, 0x0fff, 0x1fff, 0x3fff, 0x7fff, 0xffff
		],
		// Tables for deflate from PKZIP's appnote.txt.
		// Copy lengths for literal codes 257..285
		cplens = [
			3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31,
			35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0
		],
/* note: see note #13 above about the 258 in this list. */
		// Extra bits for literal codes 257..285
		cplext = [
			0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2,
			3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 99, 99 // 99==invalid
		],
		// Copy offsets for distance codes 0..29
		cpdist = [
			1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
			257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145,
			8193, 12289, 16385, 24577
		],
		// Extra bits for distance codes
		cpdext = [
			0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6,
			7, 7, 8, 8, 9, 9, 10, 10, 11, 11,
			12, 12, 13, 13
		],
		// Order of the bit length code lengths
		border = [
			16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15
		];
	/* objects (inflate) */

	function HuftList() {
		this.next = null;
		this.list = null;
	}

	function HuftNode() {
		this.e = 0; // number of extra bits or operation
		this.b = 0; // number of bits in this code or subcode

		// union
		this.n = 0; // literal, length base, or distance base
		this.t = null; // (HuftNode) pointer to next level of table
	}

	/*
	 * @param b-  code lengths in bits (all assumed <= BMAX)
	 * @param n- number of codes (assumed <= N_MAX)
	 * @param s- number of simple-valued codes (0..s-1)
	 * @param d- list of base values for non-simple codes
	 * @param e- list of extra bits for non-simple codes
	 * @param mm- maximum lookup bits
	 */
	function HuftBuild(b, n, s, d, e, mm) {
		this.BMAX = 16; // maximum bit length of any code
		this.N_MAX = 288; // maximum number of codes in any set
		this.status = 0; // 0: success, 1: incomplete table, 2: bad input
		this.root = null; // (HuftList) starting table
		this.m = 0; // maximum lookup bits, returns actual

	/* Given a list of code lengths and a maximum table size, make a set of
	   tables to decode that set of codes. Return zero on success, one if
	   the given code set is incomplete (the tables are still built in this
	   case), two if the input is invalid (all zero length codes or an
	   oversubscribed set of lengths), and three if not enough memory.
	   The code with value 256 is special, and the tables are constructed
	   so that no bits beyond that code are fetched when that code is
	   decoded. */
		var a; // counter for codes of length k
		var c = [];
		var el; // length of EOB code (value 256)
		var f; // i repeats in table every f entries
		var g; // maximum code length
		var h; // table level
		var i; // counter, current code
		var j; // counter
		var k; // number of bits in current code
		var lx = [];
		var p; // pointer into c[], b[], or v[]
		var pidx; // index of p
		var q; // (HuftNode) points to current table
		var r = new HuftNode(); // table entry for structure assignment
		var u = [];
		var v = [];
		var w;
		var x = [];
		var xp; // pointer into x or c
		var y; // number of dummy codes added
		var z; // number of entries in current table
		var o;
		var tail; // (HuftList)

		tail = this.root = null;

		// bit length count table
		for (i = 0; i < this.BMAX + 1; i++) {
			c[i] = 0;
		}
		// stack of bits per table
		for (i = 0; i < this.BMAX + 1; i++) {
			lx[i] = 0;
		}
		// HuftNode[BMAX][]  table stack
		for (i = 0; i < this.BMAX; i++) {
			u[i] = null;
		}
		// values in order of bit length
		for (i = 0; i < this.N_MAX; i++) {
			v[i] = 0;
		}
		// bit offsets, then code stack
		for (i = 0; i < this.BMAX + 1; i++) {
			x[i] = 0;
		}

		// Generate counts for each bit length
		el = n > 256 ? b[256] : this.BMAX; // set length of EOB code, if any
		p = b; pidx = 0;
		i = n;
		do {
			c[p[pidx]]++; // assume all entries <= BMAX
			pidx++;
		} while (--i > 0);
		if (c[0] === n) { // null input--all zero length codes
			this.root = null;
			this.m = 0;
			this.status = 0;
			return;
		}

		// Find minimum and maximum length, bound *m by those
		for (j = 1; j <= this.BMAX; j++) {
			if (c[j] !== 0) {
				break;
			}
		}
		k = j; // minimum code length
		if (mm < j) {
			mm = j;
		}
		for (i = this.BMAX; i !== 0; i--) {
			if (c[i] !== 0) {
				break;
			}
		}
		g = i; // maximum code length
		if (mm > i) {
			mm = i;
		}

		// Adjust last length count to fill out codes, if needed
		for (y = 1 << j; j < i; j++, y <<= 1) {
			if ((y -= c[j]) < 0) {
				this.status = 2; // bad input: more codes than bits
				this.m = mm;
				return;
			}
		}
		if ((y -= c[i]) < 0) {
			this.status = 2;
			this.m = mm;
			return;
		}
		c[i] += y;

		// Generate starting offsets into the value table for each length
		x[1] = j = 0;
		p = c;
		pidx = 1;
		xp = 2;
		while (--i > 0) { // note that i == g from above
			x[xp++] = (j += p[pidx++]);
		}

		// Make a table of values in order of bit lengths
		p = b; pidx = 0;
		i = 0;
		do {
			if ((j = p[pidx++]) !== 0) {
				v[x[j]++] = i;
			}
		} while (++i < n);
		n = x[g]; // set n to length of v

		// Generate the Huffman codes and for each, make the table entries
		x[0] = i = 0; // first Huffman code is zero
		p = v; pidx = 0; // grab values in bit order
		h = -1; // no tables yet--level -1
		w = lx[0] = 0; // no bits decoded yet
		q = null; // ditto
		z = 0; // ditto

		// go through the bit lengths (k already is bits in shortest code)
		for (null; k <= g; k++) {
			a = c[k];
			while (a-- > 0) {
				// here i is the Huffman code of length k bits for value p[pidx]
				// make tables up to required level
				while (k > w + lx[1 + h]) {
					w += lx[1 + h]; // add bits already decoded
					h++;

					// compute minimum size table less than or equal to *m bits
					z = (z = g - w) > mm ? mm : z; // upper limit
					if ((f = 1 << (j = k - w)) > a + 1) { // try a k-w bit table
						// too few codes for k-w bit table
						f -= a + 1; // deduct codes from patterns left
						xp = k;
						while (++j < z) { // try smaller tables up to z bits
							if ((f <<= 1) <= c[++xp]) {
								break; // enough codes to use up j bits
							}
							f -= c[xp]; // else deduct codes from patterns
						}
					}
					if (w + j > el && w < el) {
						j = el - w; // make EOB code end at table
					}
					z = 1 << j; // table entries for j-bit table
					lx[1 + h] = j; // set table size in stack

					// allocate and link in new table
					q = [];
					for (o = 0; o < z; o++) {
						q[o] = new HuftNode();
					}

					if (!tail) {
						tail = this.root = new HuftList();
					} else {
						tail = tail.next = new HuftList();
					}
					tail.next = null;
					tail.list = q;
					u[h] = q; // table starts after link

					/* connect to last table, if there is one */
					if (h > 0) {
						x[h] = i; // save pattern for backing up
						r.b = lx[h]; // bits to dump before this table
						r.e = 16 + j; // bits in this table
						r.t = q; // pointer to this table
						j = (i & ((1 << w) - 1)) >> (w - lx[h]);
						u[h - 1][j].e = r.e;
						u[h - 1][j].b = r.b;
						u[h - 1][j].n = r.n;
						u[h - 1][j].t = r.t;
					}
				}

				// set up table entry in r
				r.b = k - w;
				if (pidx >= n) {
					r.e = 99; // out of values--invalid code
				} else if (p[pidx] < s) {
					r.e = (p[pidx] < 256 ? 16 : 15); // 256 is end-of-block code
					r.n = p[pidx++]; // simple code is just the value
				} else {
					r.e = e[p[pidx] - s]; // non-simple--look up in lists
					r.n = d[p[pidx++] - s];
				}

				// fill code-like entries with r //
				f = 1 << (k - w);
				for (j = i >> w; j < z; j += f) {
					q[j].e = r.e;
					q[j].b = r.b;
					q[j].n = r.n;
					q[j].t = r.t;
				}

				// backwards increment the k-bit code i
				for (j = 1 << (k - 1); (i & j) !== 0; j >>= 1) {
					i ^= j;
				}
				i ^= j;

				// backup over finished tables
				while ((i & ((1 << w) - 1)) !== x[h]) {
					w -= lx[h]; // don't need to update q
					h--;
				}
			}
		}

		/* return actual size of base table */
		this.m = lx[1];

		/* Return true (1) if we were given an incomplete table */
		this.status = ((y !== 0 && g !== 1) ? 1 : 0);
	}


	/* routines (inflate) */

	function GET_BYTE() {
		if (inflate_data.length === inflate_pos) {
			return -1;
		}
		return inflate_data[inflate_pos++] & 0xff;
	}

	function NEEDBITS(n) {
		while (bit_len < n) {
			bit_buf |= GET_BYTE() << bit_len;
			bit_len += 8;
		}
	}

	function GETBITS(n) {
		return bit_buf & MASK_BITS[n];
	}

	function DUMPBITS(n) {
		bit_buf >>= n;
		bit_len -= n;
	}

	function inflate_codes(buff, off, size) {
		// inflate (decompress) the codes in a deflated (compressed) block.
		// Return an error code or zero if it all goes ok.
		var e; // table entry flag/number of extra bits
		var t; // (HuftNode) pointer to table entry
		var n;

		if (size === 0) {
			return 0;
		}

		// inflate the coded data
		n = 0;
		for (;;) { // do until end of block
			NEEDBITS(bl);
			t = tl.list[GETBITS(bl)];
			e = t.e;
			while (e > 16) {
				if (e === 99) {
					return -1;
				}
				DUMPBITS(t.b);
				e -= 16;
				NEEDBITS(e);
				t = t.t[GETBITS(e)];
				e = t.e;
			}
			DUMPBITS(t.b);

			if (e === 16) { // then it's a literal
				wp &= WSIZE - 1;
				buff[off + n++] = slide[wp++] = t.n;
				if (n === size) {
					return size;
				}
				continue;
			}

			// exit if end of block
			if (e === 15) {
				break;
			}

			// it's an EOB or a length

			// get length of block to copy
			NEEDBITS(e);
			copy_leng = t.n + GETBITS(e);
			DUMPBITS(e);

			// decode distance of block to copy
			NEEDBITS(bd);
			t = td.list[GETBITS(bd)];
			e = t.e;

			while (e > 16) {
				if (e === 99) {
					return -1;
				}
				DUMPBITS(t.b);
				e -= 16;
				NEEDBITS(e);
				t = t.t[GETBITS(e)];
				e = t.e;
			}
			DUMPBITS(t.b);
			NEEDBITS(e);
			copy_dist = wp - t.n - GETBITS(e);
			DUMPBITS(e);

			// do the copy
			while (copy_leng > 0 && n < size) {
				copy_leng--;
				copy_dist &= WSIZE - 1;
				wp &= WSIZE - 1;
				buff[off + n++] = slide[wp++] = slide[copy_dist++];
			}

			if (n === size) {
				return size;
			}
		}

		method = -1; // done
		return n;
	}

	function inflate_stored(buff, off, size) {
		/* "decompress" an inflated type 0 (stored) block. */
		var n;

		// go to byte boundary
		n = bit_len & 7;
		DUMPBITS(n);

		// get the length and its complement
		NEEDBITS(16);
		n = GETBITS(16);
		DUMPBITS(16);
		NEEDBITS(16);
		if (n !== ((~bit_buf) & 0xffff)) {
			return -1; // error in compressed data
		}
		DUMPBITS(16);

		// read and output the compressed data
		copy_leng = n;

		n = 0;
		while (copy_leng > 0 && n < size) {
			copy_leng--;
			wp &= WSIZE - 1;
			NEEDBITS(8);
			buff[off + n++] = slide[wp++] = GETBITS(8);
			DUMPBITS(8);
		}

		if (copy_leng === 0) {
			method = -1; // done
		}
		return n;
	}

	function inflate_fixed(buff, off, size) {
		// decompress an inflated type 1 (fixed Huffman codes) block.  We should
		// either replace this with a custom decoder, or at least precompute the
		// Huffman tables.

		// if first time, set up tables for fixed blocks
		if (!fixed_tl) {
			var i; // temporary variable
			var l = []; // 288 length list for huft_build (initialized below)
			var h; // HuftBuild

			// literal table
			for (i = 0; i < 144; i++) {
				l[i] = 8;
			}
			for (null; i < 256; i++) {
				l[i] = 9;
			}
			for (null; i < 280; i++) {
				l[i] = 7;
			}
			for (null; i < 288; i++) { // make a complete, but wrong code set
				l[i] = 8;
			}
			fixed_bl = 7;

			h = new HuftBuild(l, 288, 257, cplens, cplext, fixed_bl);
			if (h.status !== 0) {
				console.error("HufBuild error: " + h.status);
				return -1;
			}
			fixed_tl = h.root;
			fixed_bl = h.m;

			// distance table
			for (i = 0; i < 30; i++) { // make an incomplete code set
				l[i] = 5;
			}
			fixed_bd = 5;

			h = new HuftBuild(l, 30, 0, cpdist, cpdext, fixed_bd);
			if (h.status > 1) {
				fixed_tl = null;
				console.error("HufBuild error: " + h.status);
				return -1;
			}
			fixed_td = h.root;
			fixed_bd = h.m;
		}

		tl = fixed_tl;
		td = fixed_td;
		bl = fixed_bl;
		bd = fixed_bd;
		return inflate_codes(buff, off, size);
	}

	function inflate_dynamic(buff, off, size) {
		// decompress an inflated type 2 (dynamic Huffman codes) block.
		var i; // temporary variables
		var j;
		var l; // last length
		var n; // number of lengths to get
		var t; // (HuftNode) literal/length code table
		var nb; // number of bit length codes
		var nl; // number of literal/length codes
		var nd; // number of distance codes
		var ll = [];
		var h; // (HuftBuild)

		// literal/length and distance code lengths
		for (i = 0; i < 286 + 30; i++) {
			ll[i] = 0;
		}

		// read in table lengths
		NEEDBITS(5);
		nl = 257 + GETBITS(5); // number of literal/length codes
		DUMPBITS(5);
		NEEDBITS(5);
		nd = 1 + GETBITS(5); // number of distance codes
		DUMPBITS(5);
		NEEDBITS(4);
		nb = 4 + GETBITS(4); // number of bit length codes
		DUMPBITS(4);
		if (nl > 286 || nd > 30) {
			return -1; // bad lengths
		}

		// read in bit-length-code lengths
		for (j = 0; j < nb; j++) {
			NEEDBITS(3);
			ll[border[j]] = GETBITS(3);
			DUMPBITS(3);
		}
		for (null; j < 19; j++) {
			ll[border[j]] = 0;
		}

		// build decoding table for trees--single level, 7 bit lookup
		bl = 7;
		h = new HuftBuild(ll, 19, 19, null, null, bl);
		if (h.status !== 0) {
			return -1; // incomplete code set
		}

		tl = h.root;
		bl = h.m;

		// read in literal and distance code lengths
		n = nl + nd;
		i = l = 0;
		while (i < n) {
			NEEDBITS(bl);
			t = tl.list[GETBITS(bl)];
			j = t.b;
			DUMPBITS(j);
			j = t.n;
			if (j < 16) { // length of code in bits (0..15)
				ll[i++] = l = j; // save last length in l
			} else if (j === 16) { // repeat last length 3 to 6 times
				NEEDBITS(2);
				j = 3 + GETBITS(2);
				DUMPBITS(2);
				if (i + j > n) {
					return -1;
				}
				while (j-- > 0) {
					ll[i++] = l;
				}
			} else if (j === 17) { // 3 to 10 zero length codes
				NEEDBITS(3);
				j = 3 + GETBITS(3);
				DUMPBITS(3);
				if (i + j > n) {
					return -1;
				}
				while (j-- > 0) {
					ll[i++] = 0;
				}
				l = 0;
			} else { // j === 18: 11 to 138 zero length codes
				NEEDBITS(7);
				j = 11 + GETBITS(7);
				DUMPBITS(7);
				if (i + j > n) {
					return -1;
				}
				while (j-- > 0) {
					ll[i++] = 0;
				}
				l = 0;
			}
		}

		// build the decoding tables for literal/length and distance codes
		bl = lbits;
		h = new HuftBuild(ll, nl, 257, cplens, cplext, bl);
		if (bl === 0) { // no literals or lengths
			h.status = 1;
		}
		if (h.status !== 0) {
			if (h.status !== 1) {
				return -1; // incomplete code set
			}
			// **incomplete literal tree**
		}
		tl = h.root;
		bl = h.m;

		for (i = 0; i < nd; i++) {
			ll[i] = ll[i + nl];
		}
		bd = dbits;
		h = new HuftBuild(ll, nd, 0, cpdist, cpdext, bd);
		td = h.root;
		bd = h.m;

		if (bd === 0 && nl > 257) { // lengths but no distances
			// **incomplete distance tree**
			return -1;
		}
/*
		if (h.status === 1) {
			// **incomplete distance tree**
		}
*/
		if (h.status !== 0) {
			return -1;
		}

		// decompress until an end-of-block code
		return inflate_codes(buff, off, size);
	}

	function inflate_start() {
		if (!slide) {
			slide = []; // new Array(2 * WSIZE); // slide.length is never called
		}
		wp = 0;
		bit_buf = 0;
		bit_len = 0;
		method = -1;
		eof = false;
		copy_leng = copy_dist = 0;
		tl = null;
	}

	function inflate_internal(buff, off, size) {
		// decompress an inflated entry
		var n, i;

		n = 0;
		while (n < size) {
			if (eof && method === -1) {
				return n;
			}

			if (copy_leng > 0) {
				if (method !== STORED_BLOCK) {
					// STATIC_TREES or DYN_TREES
					while (copy_leng > 0 && n < size) {
						copy_leng--;
						copy_dist &= WSIZE - 1;
						wp &= WSIZE - 1;
						buff[off + n++] = slide[wp++] = slide[copy_dist++];
					}
				} else {
					while (copy_leng > 0 && n < size) {
						copy_leng--;
						wp &= WSIZE - 1;
						NEEDBITS(8);
						buff[off + n++] = slide[wp++] = GETBITS(8);
						DUMPBITS(8);
					}
					if (copy_leng === 0) {
						method = -1; // done
					}
				}
				if (n === size) {
					return n;
				}
			}

			if (method === -1) {
				if (eof) {
					break;
				}

				// read in last block bit
				NEEDBITS(1);
				if (GETBITS(1) !== 0) {
					eof = true;
				}
				DUMPBITS(1);

				// read in block type
				NEEDBITS(2);
				method = GETBITS(2);
				DUMPBITS(2);
				tl = null;
				copy_leng = 0;
			}

			switch (method) {
			case STORED_BLOCK:
				i = inflate_stored(buff, off + n, size - n);
				break;

			case STATIC_TREES:
				if (tl) {
					i = inflate_codes(buff, off + n, size - n);
				} else {
					i = inflate_fixed(buff, off + n, size - n);
				}
				break;

			case DYN_TREES:
				if (tl) {
					i = inflate_codes(buff, off + n, size - n);
				} else {
					i = inflate_dynamic(buff, off + n, size - n);
				}
				break;

			default: // error
				i = -1;
				break;
			}

			if (i === -1) {
				if (eof) {
					return 0;
				}
				return -1;
			}
			n += i;
		}
		return n;
	}

	function inflate(arr) {
		var buff = [], i;

		inflate_start();
		inflate_data = arr;
		inflate_pos = 0;

		do {
			i = inflate_internal(buff, buff.length, 1024);
		} while (i > 0);
		inflate_data = null; // G.C.
		return buff;
	}

	module.exports = inflate;
}());


/***/ }),

/***/ 606:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

(function () {
	'use strict';

	var crc32 = __webpack_require__(793),
		deflate = __webpack_require__(762),
		// magic numbers marking this file as GZIP
		ID1 = 0x1F,
		ID2 = 0x8B,
		compressionMethods = {
			'deflate': 8
		},
		possibleFlags = {
			'FTEXT': 0x01,
			'FHCRC': 0x02,
			'FEXTRA': 0x04,
			'FNAME': 0x08,
			'FCOMMENT': 0x10
		},
		osMap = {
			'fat': 0, // FAT file system (DOS, OS/2, NT) + PKZIPW 2.50 VFAT, NTFS
			'amiga': 1, // Amiga
			'vmz': 2, // VMS (VAX or Alpha AXP)
			'unix': 3, // Unix
			'vm/cms': 4, // VM/CMS
			'atari': 5, // Atari
			'hpfs': 6, // HPFS file system (OS/2, NT 3.x)
			'macintosh': 7, // Macintosh
			'z-system': 8, // Z-System
			'cplm': 9, // CP/M
			'tops-20': 10, // TOPS-20
			'ntfs': 11, // NTFS file system (NT)
			'qdos': 12, // SMS/QDOS
			'acorn': 13, // Acorn RISC OS
			'vfat': 14, // VFAT file system (Win95, NT)
			'vms': 15, // MVS (code also taken for PRIMOS)
			'beos': 16, // BeOS (BeBox or PowerMac)
			'tandem': 17, // Tandem/NSK
			'theos': 18 // THEOS
		},
		os = 'unix',
		DEFAULT_LEVEL = 6;

	function putByte(n, arr) {
		arr.push(n & 0xFF);
	}

	// LSB first
	function putShort(n, arr) {
		arr.push(n & 0xFF);
		arr.push(n >>> 8);
	}

	// LSB first
	function putLong(n, arr) {
		putShort(n & 0xffff, arr);
		putShort(n >>> 16, arr);
	}

	function putString(s, arr) {
		var i, len = s.length;
		for (i = 0; i < len; i += 1) {
			putByte(s.charCodeAt(i), arr);
		}
	}

	function readByte(arr) {
		return arr.shift();
	}

	function readShort(arr) {
		return arr.shift() | (arr.shift() << 8);
	}

	function readLong(arr) {
		var n1 = readShort(arr),
			n2 = readShort(arr);

		// JavaScript can't handle bits in the position 32
		// we'll emulate this by removing the left-most bit (if it exists)
		// and add it back in via multiplication, which does work
		if (n2 > 32768) {
			n2 -= 32768;

			return ((n2 << 16) | n1) + 32768 * Math.pow(2, 16);
		}

		return (n2 << 16) | n1;
	}

	function readString(arr) {
		var charArr = [];

		// turn all bytes into chars until the terminating null
		while (arr[0] !== 0) {
			charArr.push(String.fromCharCode(arr.shift()));
		}

		// throw away terminating null
		arr.shift();

		// join all characters into a cohesive string
		return charArr.join('');
	}

	/*
	 * Reads n number of bytes and return as an array.
	 *
	 * @param arr- Array of bytes to read from
	 * @param n- Number of bytes to read
	 */
	function readBytes(arr, n) {
		var i, ret = [];
		for (i = 0; i < n; i += 1) {
			ret.push(arr.shift());
		}

		return ret;
	}

	/*
	 * ZIPs a file in GZIP format. The format is as given by the spec, found at:
	 * http://www.gzip.org/zlib/rfc-gzip.html
	 *
	 * Omitted parts in this implementation:
	 */
	function zip(data, options) {
		var flags = 0,
			level,
			crc, out = [];

		if (!options) {
			options = {};
		}
		level = options.level || DEFAULT_LEVEL;

		if (typeof data === 'string') {
			data = Array.prototype.map.call(data, function (char) {
				return char.charCodeAt(0);
			});
		}

		// magic number marking this file as GZIP
		putByte(ID1, out);
		putByte(ID2, out);

		putByte(compressionMethods['deflate'], out);

		if (options.name) {
			flags |= possibleFlags['FNAME'];
		}

		putByte(flags, out);
		putLong(options.timestamp || parseInt(Date.now() / 1000, 10), out);

		// put deflate args (extra flags)
		if (level === 1) {
			// fastest algorithm
			putByte(4, out);
		} else if (level === 9) {
			// maximum compression (fastest algorithm)
			putByte(2, out);
		} else {
			putByte(0, out);
		}

		// OS identifier
		putByte(osMap[os], out);

		if (options.name) {
			// ignore the directory part
			putString(options.name.substring(options.name.lastIndexOf('/') + 1), out);

			// terminating null
			putByte(0, out);
		}

		deflate.deflate(data, level).forEach(function (byte) {
			putByte(byte, out);
		});

		putLong(parseInt(crc32(data), 16), out);
		putLong(data.length, out);

		return out;
	}

	function unzip(data, options) {
		// start with a copy of the array
		var arr = Array.prototype.slice.call(data, 0),
			t,
			compressionMethod,
			flags,
			mtime,
			xFlags,
			key,
			os,
			crc,
			size,
			res;

		// check the first two bytes for the magic numbers
		if (readByte(arr) !== ID1 || readByte(arr) !== ID2) {
			throw 'Not a GZIP file';
		}

		t = readByte(arr);
		t = Object.keys(compressionMethods).some(function (key) {
			compressionMethod = key;
			return compressionMethods[key] === t;
		});

		if (!t) {
			throw 'Unsupported compression method';
		}

		flags = readByte(arr);
		mtime = readLong(arr);
		xFlags = readByte(arr);
		t = readByte(arr);
		Object.keys(osMap).some(function (key) {
			if (osMap[key] === t) {
				os = key;
				return true;
			}
		});

		// just throw away the bytes for now
		if (flags & possibleFlags['FEXTRA']) {
			t = readShort(arr);
			readBytes(arr, t);
		}

		// just throw away for now
		if (flags & possibleFlags['FNAME']) {
			readString(arr);
		}

		// just throw away for now
		if (flags & possibleFlags['FCOMMENT']) {
			readString(arr);
		}

		// just throw away for now
		if (flags & possibleFlags['FHCRC']) {
			readShort(arr);
		}

		if (compressionMethod === 'deflate') {
			// give deflate everything but the last 8 bytes
			// the last 8 bytes are for the CRC32 checksum and filesize
			res = deflate.inflate(arr.splice(0, arr.length - 8));
		}

		if (flags & possibleFlags['FTEXT']) {
			res = Array.prototype.map.call(res, function (byte) {
				return String.fromCharCode(byte);
			}).join('');
		}

		crc = readLong(arr);
		if (crc !== parseInt(crc32(res), 16)) {
			throw 'Checksum does not match';
		}

		size = readLong(arr);
		if (size !== res.length) {
			throw 'Size of decompressed file not correct';
		}

		return res;
	}

	module.exports = {
		zip: zip,
		unzip: unzip,
		get DEFAULT_LEVEL() {
			return DEFAULT_LEVEL;
		}
	};
}());


/***/ }),

/***/ 423:
/***/ (() => {

DataView.prototype.addPosition = function(pos) {
	if(this.pos == undefined)
		this.setPosition(0);
	
	this.setPosition(this.getPosition() + pos)
}

DataView.prototype.setPosition = function(pos) {
	//if(pos < 0)
	//	throw "Stream read position cannot be less than 0";
	
	this.pos = pos;
}

DataView.prototype.getPosition = function() {
	if(this.pos == undefined)
		this.setPosition(0);
	
	return this.pos;
}

DataView.prototype.readUint8 = function() { //byte
	var val = this.getUint8(this.getPosition());
	this.addPosition(1);
    return val;
}
DataView.prototype.readUint16 = function() { //short
	var val = this.getUint16(this.getPosition());
	this.addPosition(2);
    return val;
}
DataView.prototype.readUint24 = function() {
	var val = this.getUint24(this.getPosition());
	this.addPosition(3);
    return val;
}
DataView.prototype.readUint32 = function() { //int
	var val = this.getUint32(this.getPosition());
	this.addPosition(4);
    return val;
}
DataView.prototype.readUnsignedShortSmart = function() {
	var peek = this.getUint8(this.pos) & 0xFF;
	return peek < 128 ? this.readUint8() : this.readUint16() - 0x8000;
}


DataView.prototype.readInt8 = function() { //byte
	var val = this.getInt8(this.getPosition());
	this.addPosition(1);
    return val;
}
DataView.prototype.readInt16 = function() { //short
	var val = this.getInt16(this.getPosition());
	this.addPosition(2);
    return val;
}
DataView.prototype.readInt24 = function() {
	var val = this.getInt24(this.getPosition());
	this.addPosition(3);
    return val;
}
DataView.prototype.readInt32 = function() { //int
	var val = this.getInt32(this.getPosition());
	this.addPosition(4);
    return val;
}
DataView.prototype.readShortSmart = function() {
	var peek = this.getUint8(this.pos) & 0xFF;
	return peek < 128 ? this.readUint8() - 64 : this.readUint16() - 0xc000;
}


DataView.prototype.readBigSmart = function() {
	var peek = this.getUint8(this.pos);
	if(peek >= 0) {
		this.readUint16() & 0xFFFF;
	}else{
		this.readInt32() & 0x7fffffff;
	}
}

DataView.prototype.readString = function() {
	var val = this.getString(this.getPosition());
	this.addPosition(val.length+1);
    return val;
}

DataView.prototype.getUint24 = function(pos) {
    return (this.getUint16(pos) << 8) | this.getUint8(pos+2);
}

DataView.prototype.getInt24 = function(pos) {
    return (this.getInt16(pos) << 8) | this.getInt8(pos+2);
}

//this method should never be used directly 
//but if required to use it then remember to do stringLength+1 for the last null character
DataView.prototype.getString = function(pos) {
	var string = "";
	var character;
	while(character != 0) {
		character = this.getUint8(pos);
		pos += 1;
		string += String.fromCharCode(character)
	}
	
	return string.substring(0,string.length-1);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ConfigType": () => (/* reexport */ cacheTypes_ConfigType),
  "IndexType": () => (/* reexport */ cacheTypes_IndexType),
  "RSCache": () => (/* reexport */ RSCache)
});

;// CONCATENATED MODULE: ./src/cacheReader/helpers/ajax.js
function getFile(file) {
    var xhttp = new XMLHttpRequest();
    return new Promise((resolve,reject) => {
        xhttp.onreadystatechange = function() {
          if(xhttp.readyState === XMLHttpRequest.DONE) {
            resolve(this.responseText);
          }
        };
        xhttp.open("GET", file, true);
        try{
          xhttp.send();
        }catch(e){}
    })
  }
  
function getFileBytes(file) {
    var xhttp = new XMLHttpRequest();
    return new Promise((resolve,reject) => {
        xhttp.onreadystatechange = function() {
          if(xhttp.readyState === XMLHttpRequest.DONE) {
            resolve(new Uint8Array(this.response));
          }
        };
        xhttp.open("GET", "cache/"+file, true);
        xhttp.responseType = "arraybuffer";
        try{
          xhttp.send();
        }catch(e){}
    })
  }
// EXTERNAL MODULE: ./src/cacheReader/helpers/DataView.js
var helpers_DataView = __webpack_require__(423);
;// CONCATENATED MODULE: ./src/cacheReader/loaders/ModelLoader.js
class ModelDefinition {
		
}

class ModelLoader {
	constructor(bytes) { 
		this.bytes = bytes;
		this.def = new ModelDefinition();
	}

    load() {
		let dataview = new DataView(this.bytes.buffer);
        if (dataview.getInt8(dataview.byteLength-1) == -1 && dataview.getInt8(dataview.byteLength-2) == -1)
		{
			this.load1(dataview);
		}
		else
		{
			this.load2(dataview);
		}

        this.computeNormals();
        this.computeTextureUVCoordinates();
        this.computeAnimationTables();
        
		return this.def;
	}

    load1(var1){
        var var2 = new DataView(var1.buffer);
		var var24 = new DataView(var1.buffer);
		var var3 = new DataView(var1.buffer);
		var var28 = new DataView(var1.buffer);
		var var6 = new DataView(var1.buffer);
		var var55 = new DataView(var1.buffer);
		var var51 = new DataView(var1.buffer);
		var2.setPosition(var1.byteLength - 23);
		var verticeCount = var2.readUint16();
		var triangleCount = var2.readUint16();
		var textureTriangleCount = var2.readUint8();
		var var13 = var2.readUint8();
		var modelPriority = var2.readUint8();
		var var50 = var2.readUint8();
		var var17 = var2.readUint8();
		var modelTexture = var2.readUint8();
		var modelVertexSkins = var2.readUint8();
		var var20 = var2.readUint16();
		var var21 = var2.readUint16();
		var var42 = var2.readUint16();
		var var22 = var2.readUint16();
		var var38 = var2.readUint16();
		var textureAmount = 0;
		var var7 = 0;
		var var29 = 0;
		var position;
		if (textureTriangleCount > 0)
		{
			this.def.textureRenderTypes = new byte[textureTriangleCount];
			var2.setPosition(0);

			for (position = 0; position < textureTriangleCount; ++position)
			{
				var renderType = this.def.textureRenderTypes[position] = var2.readInt8();
				if (renderType == 0)
				{
					++textureAmount;
				}

				if (renderType >= 1 && renderType <= 3)
				{
					++var7;
				}

				if (renderType == 2)
				{
					++var29;
				}
			}
		}

		position = textureTriangleCount + verticeCount;
		var renderTypePos = position;
		if (var13 == 1)
		{
			position += triangleCount;
		}

		var var49 = position;
		position += triangleCount;
		var priorityPos = position;
		if (modelPriority == 255)
		{
			position += triangleCount;
		}

		var triangleSkinPos = position;
		if (var17 == 1)
		{
			position += triangleCount;
		}

		var var35 = position;
		if (modelVertexSkins == 1)
		{
			position += verticeCount;
		}

		var alphaPos = position;
		if (var50 == 1)
		{
			position += triangleCount;
		}

		var var11 = position;
		position += var22;
		var texturePos = position;
		if (modelTexture == 1)
		{
			position += triangleCount * 2;
		}

		var textureCoordPos = position;
		position += var38;
		var colorPos = position;
		position += triangleCount * 2;
		var var40 = position;
		position += var20;
		var var41 = position;
		position += var21;
		var var8 = position;
		position += var42;
		var var43 = position;
		position += textureAmount * 6;
		var var37 = position;
		position += var7 * 6;
		var var48 = position;
		position += var7 * 6;
		var var56 = position;
		position += var7 * 2;
		var var45 = position;
		position += var7;
		var var46 = position;
		position += var7 * 2 + var29 * 2;
		this.def.vertexCount = verticeCount;
		this.def.faceCount = triangleCount;
		this.def.textureTriangleCount = textureTriangleCount;
		this.def.vertexPositionsX = [];
		this.def.vertexPositionsY = [];
		this.def.vertexPositionsZ = [];
		this.def.faceVertexIndices1 = [];
		this.def.faceVertexIndices2 = [];
		this.def.faceVertexIndices3 = [];
		if (modelVertexSkins == 1)
		{
			this.def.vertexSkins = [];
		}

		if (var13 == 1)
		{
			this.def.faceRenderTypes = [];
		}

		if (modelPriority == 255)
		{
			this.def.faceRenderPriorities = [];
		}
		else
		{
			this.def.priority = modelPriority;
		}

		if (var50 == 1)
		{
			this.def.faceAlphas = [];
		}

		if (var17 == 1)
		{
			this.def.faceSkins = [];
		}

		if (modelTexture == 1)
		{
			this.def.faceTextures = [];
		}

		if (modelTexture == 1 && textureTriangleCount > 0)
		{
			this.def.textureCoordinates = [];
		}

		this.def.faceColors = [];
		if (textureTriangleCount > 0)
		{
			this.def.textureTriangleVertexIndices1 = [];
			this.def.textureTriangleVertexIndices2 = [];
			this.def.textureTriangleVertexIndices3 = [];
			if (var7 > 0)
			{
				this.def.aShortArray2574 = [];
				this.def.aShortArray2575 = [];
				this.def.aShortArray2586 = [];
				this.def.aShortArray2577 = [];
				this.def.aByteArray2580 = [];
				this.def.aShortArray2578 = [];
			}

			if (var29 > 0)
			{
				this.def.texturePrimaryColors = [];
			}
		}

		var2.setPosition(textureTriangleCount);
		var24.setPosition(var40);
		var3.setPosition(var41);
		var28.setPosition(var8);
		var6.setPosition(var35);
		var vX = 0;
		var vY = 0;
		var vZ = 0;

		var vertexZOffset;
		var var10;
		var vertexYOffset;
		var var15;
		var povar;
		for (povar = 0; povar < verticeCount; ++povar)
		{
			var vertexFlags = var2.readUint8();
			var vertexXOffset = 0;
			if ((vertexFlags & 1) != 0)
			{
				vertexXOffset = var24.readShortSmart();
			}

			vertexYOffset = 0;
			if ((vertexFlags & 2) != 0)
			{
				vertexYOffset = var3.readShortSmart();
			}

			vertexZOffset = 0;
			if ((vertexFlags & 4) != 0)
			{
				vertexZOffset = var28.readShortSmart();
			}

			this.def.vertexPositionsX[povar] = vX + vertexXOffset;
			this.def.vertexPositionsY[povar] = vY + vertexYOffset;
			this.def.vertexPositionsZ[povar] = vZ + vertexZOffset;
			vX = this.def.vertexPositionsX[povar];
			vY = this.def.vertexPositionsY[povar];
			vZ = this.def.vertexPositionsZ[povar];
			if (modelVertexSkins == 1)
			{
				this.def.vertexSkins[povar] = var6.readUint8();
			}
		}

		var2.setPosition(colorPos);
		var24.setPosition(renderTypePos);
		var3.setPosition(priorityPos);
		var28.setPosition(alphaPos);
		var6.setPosition(triangleSkinPos);
		var55.setPosition(texturePos);
		var51.setPosition(textureCoordPos);

		for (povar = 0; povar < triangleCount; ++povar)
		{
			this.def.faceColors[povar] = var2.readUint16();
			if (var13 == 1)
			{
				this.def.faceRenderTypes[povar] = var24.readInt8();
			}

			if (modelPriority == 255)
			{
				this.def.faceRenderPriorities[povar] = var3.readInt8();
			}

			if (var50 == 1)
			{
				this.def.faceAlphas[povar] = var28.readInt8();
			}

			if (var17 == 1)
			{
				this.def.faceSkins[povar] = var6.readUint8();
			}

			if (modelTexture == 1)
			{
				this.def.faceTextures[povar] = (var55.readUint16() - 1);
			}

			if (this.def.textureCoordinates != null && this.def.faceTextures[povar] != -1)
			{
				this.def.textureCoordinates[povar] = (var51.readUint8() - 1);
			}
		}

		var2.setPosition(var11);
		var24.setPosition(var49);
		var trianglePovarX = 0;
		var trianglePovarY = 0;
		var trianglePovarZ = 0;
		vertexYOffset = 0;

		var var16;
		for (vertexZOffset = 0; vertexZOffset < triangleCount; ++vertexZOffset)
		{
			var numFaces = var24.readUint8();
			if (numFaces == 1)
			{
				trianglePovarX = var2.readShortSmart() + vertexYOffset;
				trianglePovarY = var2.readShortSmart() + trianglePovarX;
				trianglePovarZ = var2.readShortSmart() + trianglePovarY;
				vertexYOffset = trianglePovarZ;
				this.def.faceVertexIndices1[vertexZOffset] = trianglePovarX;
				this.def.faceVertexIndices2[vertexZOffset] = trianglePovarY;
				this.def.faceVertexIndices3[vertexZOffset] = trianglePovarZ;
			}

			if (numFaces == 2)
			{
				trianglePovarY = trianglePovarZ;
				trianglePovarZ = var2.readShortSmart() + vertexYOffset;
				vertexYOffset = trianglePovarZ;
				this.def.faceVertexIndices1[vertexZOffset] = trianglePovarX;
				this.def.faceVertexIndices2[vertexZOffset] = trianglePovarY;
				this.def.faceVertexIndices3[vertexZOffset] = trianglePovarZ;
			}

			if (numFaces == 3)
			{
				trianglePovarX = trianglePovarZ;
				trianglePovarZ = var2.readShortSmart() + vertexYOffset;
				vertexYOffset = trianglePovarZ;
				this.def.faceVertexIndices1[vertexZOffset] = trianglePovarX;
				this.def.faceVertexIndices2[vertexZOffset] = trianglePovarY;
				this.def.faceVertexIndices3[vertexZOffset] = trianglePovarZ;
			}

			if (numFaces == 4)
			{
				var var57 = trianglePovarX;
				trianglePovarX = trianglePovarY;
				trianglePovarY = var57;
				trianglePovarZ = var2.readShortSmart() + vertexYOffset;
				vertexYOffset = trianglePovarZ;
				this.def.faceVertexIndices1[vertexZOffset] = trianglePovarX;
				this.def.faceVertexIndices2[vertexZOffset] = var57;
				this.def.faceVertexIndices3[vertexZOffset] = trianglePovarZ;
			}
		}

		var2.setPosition(var43);
		var24.setPosition(var37);
		var3.setPosition(var48);
		var28.setPosition(var56);
		var6.setPosition(var45);
		var55.setPosition(var46);

		for (var texIndex = 0; texIndex < textureTriangleCount; ++texIndex)
		{
			var type = this.def.textureRenderTypes[texIndex] & 255;
			if (type == 0)
			{
				this.def.textureTriangleVertexIndices1[texIndex] = var2.readUint16();
				this.def.textureTriangleVertexIndices2[texIndex] = var2.readUint16();
				this.def.textureTriangleVertexIndices3[texIndex] = var2.readUint16();
			}

			if (type == 1)
			{
				this.def.textureTriangleVertexIndices1[texIndex] = var24.readUint16();
				this.def.textureTriangleVertexIndices2[texIndex] = var24.readUint16();
				this.def.textureTriangleVertexIndices3[texIndex] = var24.readUint16();
				this.def.aShortArray2574[texIndex] = var3.readUint16();
				this.def.aShortArray2575[texIndex] = var3.readUint16();
				this.def.aShortArray2586[texIndex] = var3.readUint16();
				this.def.aShortArray2577[texIndex] = var28.readUint16();
				this.def.aByteArray2580[texIndex] = var6.readInt8();
				this.def.aShortArray2578[texIndex] = var55.readUint16();
			}

			if (type == 2)
			{
				this.def.textureTriangleVertexIndices1[texIndex] = var24.readUint16();
				this.def.textureTriangleVertexIndices2[texIndex] = var24.readUint16();
				this.def.textureTriangleVertexIndices3[texIndex] = var24.readUint16();
				this.def.aShortArray2574[texIndex] = var3.readUint16();
				this.def.aShortArray2575[texIndex] = var3.readUint16();
				this.def.aShortArray2586[texIndex] = var3.readUint16();
				this.def.aShortArray2577[texIndex] = var28.readUint16();
				this.def.aByteArray2580[texIndex] = var6.readInt8();
				this.def.aShortArray2578[texIndex] = var55.readUint16();
				this.def.texturePrimaryColors[texIndex] = var55.readUint16();
			}

			if (type == 3)
			{
				this.def.textureTriangleVertexIndices1[texIndex] = var24.readUint16();
				this.def.textureTriangleVertexIndices2[texIndex] = var24.readUint16();
				this.def.textureTriangleVertexIndices3[texIndex] = var24.readUint16();
				this.def.aShortArray2574[texIndex] = var3.readUint16();
				this.def.aShortArray2575[texIndex] = var3.readUint16();
				this.def.aShortArray2586[texIndex] = var3.readUint16();
				this.def.aShortArray2577[texIndex] = var28.readUint16();
				this.def.aByteArray2580[texIndex] = var6.readInt8();
				this.def.aShortArray2578[texIndex] = var55.readUint16();
			}
		}

		var2.setPosition(position);
		vertexZOffset = var2.readUint8();
		if (vertexZOffset != 0)
		{
			//new Class41();
			var2.readUint16();
			var2.readUint16();
			var2.readUint16();
			var2.readInt32();
		}
    }

    load2(var1){
        var var2 = false;
		var var43 = false;
		var var5 = new DataView(var1.buffer);
		var var39 = new DataView(var1.buffer);
		var var26 = new DataView(var1.buffer);
		var var9 = new DataView(var1.buffer);
		var var3 = new DataView(var1.buffer);
		var5.setPosition(var1.byteLength - 18);
		var var10 = var5.readUint16();
		var var11 = var5.readUint16();
		var var12 = var5.readUint8();
		var var13 = var5.readUint8();
		var var14 = var5.readUint8();
		var var30 = var5.readUint8();
		var var15 = var5.readUint8();
		var var28 = var5.readUint8();
		var var27 = var5.readUint16();
		var var20 = var5.readUint16();
		var var36 = var5.readUint16();
		var var23 = var5.readUint16();
		var var16 = 0;
		var var46 = var16 + var10;
		var var24 = var46;
		var46 += var11;
		var var25 = var46;
		if (var14 == 255)
		{
			var46 += var11;
		}

		var var4 = var46;
		if (var15 == 1)
		{
			var46 += var11;
		}

		var var42 = var46;
		if (var13 == 1)
		{
			var46 += var11;
		}

		var var37 = var46;
		if (var28 == 1)
		{
			var46 += var10;
		}

		var var29 = var46;
		if (var30 == 1)
		{
			var46 += var11;
		}

		var var44 = var46;
		var46 += var23;
		var var17 = var46;
		var46 += var11 * 2;
		var var32 = var46;
		var46 += var12 * 6;
		var var34 = var46;
		var46 += var27;
		var var35 = var46;
		var46 += var20;
		var var10000 = var46 + var36;
		this.def.vertexCount = var10;
		this.def.faceCount = var11;
		this.def.textureTriangleCount = var12;
		this.def.vertexPositionsX = [];
		this.def.vertexPositionsY = [];
		this.def.vertexPositionsZ = [];
		this.def.faceVertexIndices1 = [];
		this.def.faceVertexIndices2 = [];
		this.def.faceVertexIndices3 = [];
		if (var12 > 0)
		{
			this.def.textureRenderTypes = [];
			this.def.textureTriangleVertexIndices1 = [];
			this.def.textureTriangleVertexIndices2 = [];
			this.def.textureTriangleVertexIndices3 = [];
		}

		if (var28 == 1)
		{
			this.def.vertexSkins = [];
		}

		if (var13 == 1)
		{
			this.def.faceRenderTypes = [];
			this.def.textureCoordinates = [];
			this.def.faceTextures = [];
		}

		if (var14 == 255)
		{
			this.def.faceRenderPriorities = [];
		}
		else
		{
			this.def.priority = var14;
		}

		if (var30 == 1)
		{
			this.def.faceAlphas = [];
		}

		if (var15 == 1)
		{
			this.def.faceSkins = [];
		}

		this.def.faceColors = [];
		var5.setPosition(var16);
		var39.setPosition(var34);
		var26.setPosition(var35);
		var9.setPosition(var46);
		var3.setPosition(var37);
		var var41 = 0;
		var var33 = 0;
		var var19 = 0;

		var var6;
		var var7;
		var var8;
		var var18;
		var var31;
		for (var18 = 0; var18 < var10; ++var18)
		{
			var8 = var5.readUint8();
			var31 = 0;
			if ((var8 & 1) != 0)
			{
				var31 = var39.readShortSmart();
			}

			var6 = 0;
			if ((var8 & 2) != 0)
			{
				var6 = var26.readShortSmart();
			}

			var7 = 0;
			if ((var8 & 4) != 0)
			{
				var7 = var9.readShortSmart();
			}

			this.def.vertexPositionsX[var18] = var41 + var31;
			this.def.vertexPositionsY[var18] = var33 + var6;
			this.def.vertexPositionsZ[var18] = var19 + var7;
			var41 = this.def.vertexPositionsX[var18];
			var33 = this.def.vertexPositionsY[var18];
			var19 = this.def.vertexPositionsZ[var18];
			if (var28 == 1)
			{
				this.def.vertexSkins[var18] = var3.readUint8();
			}
		}

		var5.setPosition(var17);
		var39.setPosition(var42);
		var26.setPosition(var25);
		var9.setPosition(var29);
		var3.setPosition(var4);

		for (var18 = 0; var18 < var11; ++var18)
		{
			this.def.faceColors[var18] = var5.readUint16();
			if (var13 == 1)
			{
				var8 = var39.readUint8();
				if ((var8 & 1) == 1)
				{
					this.def.faceRenderTypes[var18] = 1;
					var2 = true;
				}
				else
				{
					this.def.faceRenderTypes[var18] = 0;
				}

				if ((var8 & 2) == 2)
				{
					this.def.textureCoordinates[var18] = (var8 >> 2);
					this.def.faceTextures[var18] = this.def.faceColors[var18];
					this.def.faceColors[var18] = 127;
					if (this.def.faceTextures[var18] != -1)
					{
						var43 = true;
					}
				}
				else
				{
					this.def.textureCoordinates[var18] = -1;
					this.def.faceTextures[var18] = -1;
				}
			}

			if (var14 == 255)
			{
				this.def.faceRenderPriorities[var18] = var26.readInt8();
			}

			if (var30 == 1)
			{
				this.def.faceAlphas[var18] = var9.readInt8();
			}

			if (var15 == 1)
			{
				this.def.faceSkins[var18] = var3.readUint8();
			}
		}

		var5.setPosition(var44);
		var39.setPosition(var24);
		var18 = 0;
		var8 = 0;
		var31 = 0;
		var6 = 0;

		var var21;
		var var22;
		for (var7 = 0; var7 < var11; ++var7)
		{
			var22 = var39.readUint8();
			if (var22 == 1)
			{
				var18 = var5.readShortSmart() + var6;
				var8 = var5.readShortSmart() + var18;
				var31 = var5.readShortSmart() + var8;
				var6 = var31;
				this.def.faceVertexIndices1[var7] = var18;
				this.def.faceVertexIndices2[var7] = var8;
				this.def.faceVertexIndices3[var7] = var31;
			}

			if (var22 == 2)
			{
				var8 = var31;
				var31 = var5.readShortSmart() + var6;
				var6 = var31;
				this.def.faceVertexIndices1[var7] = var18;
				this.def.faceVertexIndices2[var7] = var8;
				this.def.faceVertexIndices3[var7] = var31;
			}

			if (var22 == 3)
			{
				var18 = var31;
				var31 = var5.readShortSmart() + var6;
				var6 = var31;
				this.def.faceVertexIndices1[var7] = var18;
				this.def.faceVertexIndices2[var7] = var8;
				this.def.faceVertexIndices3[var7] = var31;
			}

			if (var22 == 4)
			{
				var21 = var18;
				var18 = var8;
				var8 = var21;
				var31 = var5.readShortSmart() + var6;
				var6 = var31;
				this.def.faceVertexIndices1[var7] = var18;
				this.def.faceVertexIndices2[var7] = var21;
				this.def.faceVertexIndices3[var7] = var31;
			}
		}

		var5.setPosition(var32);

		for (var7 = 0; var7 < var12; ++var7)
		{
			this.def.textureRenderTypes[var7] = 0;
			this.def.textureTriangleVertexIndices1[var7] = var5.readUint16();
			this.def.textureTriangleVertexIndices2[var7] = var5.readUint16();
			this.def.textureTriangleVertexIndices3[var7] = var5.readUint16();
		}

		if (this.def.textureCoordinates != null)
		{
			var var45 = false;

			for (var22 = 0; var22 < var11; ++var22)
			{
				var21 = this.def.textureCoordinates[var22] & 255;
				if (var21 != 255)
				{
					if ((this.def.textureTriangleVertexIndices1[var21] & '\uffff') == this.def.faceVertexIndices1[var22] && (this.def.textureTriangleVertexIndices2[var21] & '\uffff') == this.def.faceVertexIndices2[var22] && (this.def.textureTriangleVertexIndices3[var21] & '\uffff') == this.def.faceVertexIndices3[var22])
					{
						this.def.textureCoordinates[var22] = -1;
					}
					else
					{
						var45 = true;
					}
				}
			}

			if (!var45)
			{
				this.def.textureCoordinates = null;
			}
		}

		if (!var43)
		{
			this.def.faceTextures = null;
		}

		if (!var2)
		{
			this.def.faceRenderTypes = null;
		}
    }

    computeAnimationTables()
	{
		var groupCounts = [];
		var numGroups = 0;
		var var3, var4, var10002;
		if (this.def.vertexSkins != null)
		{


			for (var3 = 0; var3 < this.def.vertexCount; ++var3)
			{
				var4 = this.def.vertexSkins[var3];
				++groupCounts[var4];
				if (var4 > numGroups)
				{
					numGroups = var4;
				}
			}

			this.def.vertexGroups = [];

			for (var3 = 0; var3 <= numGroups; ++var3)
			{
				this.def.vertexGroups[var3] = [];
				groupCounts[var3] = 0;
			}

			for (var3 = 0; var3 < this.def.vertexCount; this.def.vertexGroups[var4][groupCounts[var4]++] = var3++)
			{
				var4 = this.def.vertexSkins[var3];
			}

			this.def.vertexSkins = null;
		}
		if (this.def.faceSkins != null)
		{ // L: 785
			groupCounts = []; // L: 786
			numGroups = 0; // L: 787

			for (var3 = 0; var3 < this.def.faceCount; ++var3)
			{ // L: 788
				var4 = this.def.faceSkins[var3]; // L: 789
				var10002 = groupCounts[var4]++; // L: 790
				if (var4 > numGroups)
				{ // L: 791
					numGroups = var4;
				}
			}

			this.def.faceLabelsAlpha = []; // L: 793

			for (var3 = 0; var3 <= numGroups; ++var3)
			{ // L: 794
				this.def.faceLabelsAlpha[var3] = []; // L: 795
				groupCounts[var3] = 0; // L: 796
			}

			for (var3 = 0; var3 < this.def.faceCount; this.def.faceLabelsAlpha[var4][groupCounts[var4]++] = var3++)
			{ // L: 798 800
				var4 = this.def.faceSkins[var3]; // L: 799
			}

			this.def.faceSkins = null; // L: 802
		}
		// triangleSkinValues is here
	}

    computeTextureUVCoordinates()
	{
		this.def.faceTextureUCoordinates = [];
		this.def.faceTextureVCoordinates = [];

		for (var i = 0; i < this.def.faceCount; i++)
		{
			var textureCoordinate;
			if (this.def.textureCoordinates == undefined)
			{
				textureCoordinate = -1;
			}
			else
			{
				textureCoordinate = this.def.textureCoordinates[i];
			}

			var textureIdx;
			if (this.def.faceTextures == undefined)
			{
				textureIdx = -1;
			}
			else
			{
				textureIdx = this.def.faceTextures[i] & 0xFFFF;
			}

			if (textureIdx != -1)
			{
				var u = [];
				var v = [];

				if (textureCoordinate == -1)
				{
					u[0] = 0.0;
					v[0] = 1.0;

					u[1] = 1.0;
					v[1] = 1.0;

					u[2] = 0.0;
					v[2] = 0.0;
				}
				else
				{
					textureCoordinate &= 0xFF;

					var textureRenderType = 0;
					if (textureRenderTypes != null)
					{
						textureRenderType = textureRenderTypes[textureCoordinate];
					}

					if (textureRenderType == 0)
					{
						var faceVertexIdx1 = faceVertexIndices1[i];
						var faceVertexIdx2 = faceVertexIndices2[i];
						var faceVertexIdx3 = faceVertexIndices3[i];

						var triangleVertexIdx1 = textureTriangleVertexIndices1[textureCoordinate];
						var triangleVertexIdx2 = textureTriangleVertexIndices2[textureCoordinate];
						var triangleVertexIdx3 = textureTriangleVertexIndices3[textureCoordinate];

						var triangleX = vertexPositionsX[triangleVertexIdx1];
						var triangleY = vertexPositionsY[triangleVertexIdx1];
						var triangleZ = vertexPositionsZ[triangleVertexIdx1];

					    var f_882_ = vertexPositionsX[triangleVertexIdx2] - triangleX;
					    var f_883_ = vertexPositionsY[triangleVertexIdx2] - triangleY;
					    var f_884_ = vertexPositionsZ[triangleVertexIdx2] - triangleZ;
					    var f_885_ = vertexPositionsX[triangleVertexIdx3] - triangleX;
					    var f_886_ = vertexPositionsY[triangleVertexIdx3] - triangleY;
					    var f_887_ = vertexPositionsZ[triangleVertexIdx3] - triangleZ;
					    var f_888_ = vertexPositionsX[faceVertexIdx1] - triangleX;
					    var f_889_ = vertexPositionsY[faceVertexIdx1] - triangleY;
					    var f_890_ = vertexPositionsZ[faceVertexIdx1] - triangleZ;
					    var f_891_ = vertexPositionsX[faceVertexIdx2] - triangleX;
					    var f_892_ = vertexPositionsY[faceVertexIdx2] - triangleY;
					    var f_893_ = vertexPositionsZ[faceVertexIdx2] - triangleZ;
					    var f_894_ = vertexPositionsX[faceVertexIdx3] - triangleX;
					    var f_895_ = vertexPositionsY[faceVertexIdx3] - triangleY;
					    var f_896_ = vertexPositionsZ[faceVertexIdx3] - triangleZ;

					    var f_897_ = f_883_ * f_887_ - f_884_ * f_886_;
					    var f_898_ = f_884_ * f_885_ - f_882_ * f_887_;
					    var f_899_ = f_882_ * f_886_ - f_883_ * f_885_;
					    var f_900_ = f_886_ * f_899_ - f_887_ * f_898_;
					    var f_901_ = f_887_ * f_897_ - f_885_ * f_899_;
					    var f_902_ = f_885_ * f_898_ - f_886_ * f_897_;
					    var f_903_ = 1.0 / (f_900_ * f_882_ + f_901_ * f_883_ + f_902_ * f_884_);

						u[0] = (f_900_ * f_888_ + f_901_ * f_889_ + f_902_ * f_890_) * f_903_;
						u[1] = (f_900_ * f_891_ + f_901_ * f_892_ + f_902_ * f_893_) * f_903_;
						u[2] = (f_900_ * f_894_ + f_901_ * f_895_ + f_902_ * f_896_) * f_903_;

						f_900_ = f_883_ * f_899_ - f_884_ * f_898_;
						f_901_ = f_884_ * f_897_ - f_882_ * f_899_;
						f_902_ = f_882_ * f_898_ - f_883_ * f_897_;
						f_903_ = 1.0 / (f_900_ * f_885_ + f_901_ * f_886_ + f_902_ * f_887_);

						v[0] = (f_900_ * f_888_ + f_901_ * f_889_ + f_902_ * f_890_) * f_903_;
						v[1] = (f_900_ * f_891_ + f_901_ * f_892_ + f_902_ * f_893_) * f_903_;
						v[2] = (f_900_ * f_894_ + f_901_ * f_895_ + f_902_ * f_896_) * f_903_;
					}
				}

				this.def.faceTextureUCoordinates[i] = u;
				this.def.faceTextureVCoordinates[i] = v;
			}
		}
    }

    computeNormals()
	{
		if (this.def.vertexNormals != undefined)
		{
			return;
		}

		this.def.vertexNormals = [];

		var var1;
		for (var1 = 0; var1 < this.def.vertexCount; ++var1)
		{
			this.def.vertexNormals[var1] = {};
		}

		for (var1 = 0; var1 < this.def.faceCount; ++var1)
		{
			var vertexA = this.def.faceVertexIndices1[var1];
			var vertexB = this.def.faceVertexIndices2[var1];
			var vertexC = this.def.faceVertexIndices3[var1];

			var xA = this.def.vertexPositionsX[vertexB] - this.def.vertexPositionsX[vertexA];
			var yA = this.def.vertexPositionsY[vertexB] - this.def.vertexPositionsY[vertexA];
			var zA = this.def.vertexPositionsZ[vertexB] - this.def.vertexPositionsZ[vertexA];

			var xB = this.def.vertexPositionsX[vertexC] - this.def.vertexPositionsX[vertexA];
			var yB = this.def.vertexPositionsY[vertexC] - this.def.vertexPositionsY[vertexA];
			var zB = this.def.vertexPositionsZ[vertexC] - this.def.vertexPositionsZ[vertexA];

			// Compute cross product
			var var11 = yA * zB - yB * zA;
			var var12 = zA * xB - zB * xA;
			var var13 = xA * yB - xB * yA;

			while (var11 > 8192 || var12 > 8192 || var13 > 8192 || var11 < -8192 || var12 < -8192 || var13 < -8192)
			{
				var11 >>= 1;
				var12 >>= 1;
				var13 >>= 1;
			}

			var length = Math.sqrt(var11 * var11 + var12 * var12 + var13 * var13);
			if (length <= 0)
			{
				length = 1;
			}

			var11 = var11 * 256 / length;
			var12 = var12 * 256 / length;
			var13 = var13 * 256 / length;

			var var15;
			if (this.def.faceRenderTypes == null)
			{
				var15 = 0;
			}
			else
			{
				var15 = this.def.faceRenderTypes[var1];
			}

			if (var15 == 0)
			{
				var var16 = this.def.vertexNormals[vertexA];
                var16.magnitude = 0;
				var16.x += var11;
				var16.y += var12;
				var16.z += var13;
				++var16.magnitude;

				var16 = this.def.vertexNormals[vertexB];
				var16.x += var11;
				var16.y += var12;
				var16.z += var13;
				++var16.magnitude;

				var16 = this.def.vertexNormals[vertexC];
				var16.x += var11;
				var16.y += var12;
				var16.z += var13;
				++var16.magnitude;
			}
			else if (var15 == 1)
			{
				if (this.def.faceNormals == null)
				{
					this.def.faceNormals = [];
				}

				var var17 = this.def.faceNormals[var1] = {};
				var17.x = var11;
				var17.y = var12;
				var17.z = var13;
			}
		}
	}
}
;// CONCATENATED MODULE: ./src/cacheReader/cacheTypes/IndexType.js


const IndexType = { 
    FRAMES:{id: 0, loader: undefined},
    FRAMEMAPS:{id: 1, loader: undefined},
    CONFIGS:{id: 2, loader: undefined},
    INTERFACES:{id: 3, loader: undefined},
    SOUNDEFFECTS:{id: 4, loader: undefined},
    MAPS:{id: 5, loader: undefined},
    TRACK1:{id: 6, loader: undefined},
    MODELS:{id: 7, loader: ModelLoader},
    SPRITES:{id: 8, loader: undefined},
    TEXTURES:{id: 9, loader: undefined},
    BINARY:{id: 10, loader: undefined},
    TRACK2:{id: 11, loader: undefined},
    CLIENTSCRIPT:{id: 12, loader: undefined},
    FONTS:{id: 13, loader: undefined},
    VORBIS:{id: 14, loader: undefined},
    INSTRUMENTS:{id: 15, loader: undefined},
    WORLDMAP:{id: 16, loader: undefined},

    valueOf(id){
        var values = Object.values(IndexType);
        var keys = Object.keys(IndexType);
        for(var i=0;i<values.length;i++) {
            if(id == values[i].id)
                return IndexType[keys[i]];
        }
        return undefined;
    }
};
Object.freeze(IndexType);

/* harmony default export */ const cacheTypes_IndexType = (IndexType);
;// CONCATENATED MODULE: ./src/cacheReader/loaders/KitLoader.js
class KitDefinition {
		
}
class KitLoader {

	load(bytes) {
		this.def = new KitDefinition();
		let dataview = new DataView(bytes.buffer);
		do {
			var opcode = dataview.readUint8();
			this.handleOpcode(opcode, dataview);
		} while(opcode != 0);
		
		return this.def;
	}
	
	handleOpcode(opcode, dataview){
        switch(opcode) {
			case 0:
				break;

            case 1:
                this.def.bodyPartId = dataview.readUint8();
                break;
            
            case 2:
                var length = dataview.readUint8();
				this.def.models = [];

				for (var index = 0; index < length; ++index)
					this.def.models[index] = dataview.readUint16();
                break;

            case 3:
                this.def.nonSelectable = true;
                break;
            
            case 40:
                var length = dataview.readUint8();
				this.def.recolorToFind = [];
				this.def.recolorToReplace = [];

				for (var index = 0; index < length; ++index)
				{
					this.def.recolorToFind[index] = dataview.readInt16();
					this.def.recolorToReplace[index] = dataview.readInt16();
				}
                break;
            
            case 41:
                var length = dataview.readUint16();
				this.def.retextureToFind = new short[length];
				this.def.retextureToReplace = new short[length];

				for (var index = 0; index < length; ++index)
				{
					this.def.retextureToFind[index] = dataview.readInt16();
					this.def.retextureToReplace[index] = dataview.readInt16();
				}
                break;

            default:
                if(opcode >= 60 && opcode < 70){
					if(this.def.chatheadModels == undefined) this.def.chatheadModels = [];
                    this.def.chatheadModels[opcode - 60] = dataview.readUint16();
				}else{
                    throw 'Unknown opcode found: ' + opcode;
				}
          }
	}
}
;// CONCATENATED MODULE: ./src/cacheReader/loaders/ObjectLoader.js
class ObjectDefinition {
	constructor(){
		this.shadow = true;
	}
}
class ObjectLoader {
	
	load(bytes) {
		this.def = new ObjectDefinition();
		let dataview = new DataView(bytes.buffer);
		do {
			var opcode = dataview.readUint8();
			this.handleOpcode(opcode, dataview);
		} while(opcode != 0);
		
		return this.def;
	}
	
	handleOpcode(opcode, dataview){
		if (opcode == 1)
		{
			var length = dataview.readUint8();
			if (length > 0)
			{
				this.def.objectTypes = [];
				this.def.objectModels = [];

				for (var index = 0; index < length; ++index)
				{
					this.def.objectModels.push(dataview.readUint16());
					this.def.objectTypes.push(dataview.readUint8());
				}

			}
		}
		else if (opcode == 2)
		{
			this.def.name = dataview.readString();
		}
		else if (opcode == 5)
		{
			var length = dataview.readUint8();
			if (length > 0)
			{
				this.def.objectTypes = null;
				this.def.objectModels = [];

				for (var index = 0; index < length; ++index)
				{
					this.def.objectModels.push(dataview.readUint16());
				}
			}
		}
		else if (opcode == 14)
		{
			this.def.sizeX = dataview.readUint8();
		}
		else if (opcode == 15)
		{
			this.def.sizeY = dataview.readUint8();
		}
		else if (opcode == 17)
		{
			this.def.interactType = 0;
			this.def.blocksProjectile = false;
		}
		else if (opcode == 18)
		{
			this.def.blocksProjectile = false;
		}
		else if (opcode == 19)
		{
			this.def.wallOrDoor = dataview.readUint8();
		}
		else if (opcode == 21)
		{
			this.def.contouredGround = 0;
		}
		else if (opcode == 22)
		{
			this.def.setMergeNormals = true;
		}
		else if (opcode == 23)
		{
			this.def.aBool2111 = true;
		}
		else if (opcode == 24)
		{
			this.def.animationID = dataview.readUint16();
			if (this.def.animationID == 0xFFFF)
			{
				this.def.animationID = -1;
			}
		}
		else if (opcode == 27)
		{
			this.def.interactType = 1;
		}
		else if (opcode == 28)
		{
			this.def.decorDisplacement = dataview.readUint8();
		}
		else if (opcode == 29)
		{
			this.def.setAmbient = dataview.readInt8();
		}
		else if (opcode == 39)
		{
			this.def.contrast = dataview.readInt8() * 25;
		}
		//30-34, 40, 41 are similar to NPCLoader, maybe make parent class for similar opcode loaders
		else if (opcode >= 30 && opcode < 35)
		{
			if(this.def.actions == undefined)
				this.def.actions = [];
			
			var readString = dataview.readString();
			this.def.actions[opcode - 30] = readString;
			
			//might be better to leave it as hidden (?)
			if (this.def.actions[opcode - 30] == "Hidden")
			{
				this.def.actions[opcode - 30] = undefined;
			}
			
		}
		else if (opcode == 40)
		{
			var length = dataview.readUint8();
			this.def.recolorToFind = [];
			this.def.recolorToReplace = [];

			for (index = 0; index < length; ++index)
			{
				this.def.recolorToFind.push(dataview.readUint16());
				this.def.recolorToReplace.push(dataview.readUint16());
			}
		}
		else if (opcode == 41)
		{
			var length = dataview.readUint8();
			this.def.retextureToFind = [];
			this.def.textureToReplace = [];

			for (index = 0; index < length; ++index)
			{
				this.def.retextureToFind.push(dataview.readUint16());
				this.def.textureToReplace.push(dataview.readUint16());
			}
		}
		else if (opcode == 62)
		{
			this.def.rotated = true;
		}
		else if (opcode == 64)
		{ //needs to be declared as true in constructor if toggling to false
			this.def.shadow = false;
		}
		else if (opcode == 65)
		{
			this.def.modelSizeX = dataview.readUint16();
		}
		else if (opcode == 66)
		{
			this.def.modelSizeHeight = dataview.readUint16();
		}
		else if (opcode == 67)
		{
			this.def.modelSizeY = dataview.readUint16();
		}
		else if (opcode == 68)
		{
			this.def.mapSceneID = dataview.readUint16();
		}
		else if (opcode == 69)
		{
			this.def.blockingMask = dataview.readInt8();
		}
		else if (opcode == 70)
		{
			this.def.offsetX = dataview.readUint16();
		}
		else if (opcode == 71)
		{
			this.def.offsetHeight = dataview.readUint16();
		}
		else if (opcode == 72)
		{
			this.def.offsetY = dataview.readUint16();
		}
		else if (opcode == 73)
		{
			this.def.obstructsGround = true;
		}
		else if (opcode == 74)
		{
			this.def.hollow = true;
		}
		else if (opcode == 75)
		{
			this.def.supportsItems = dataview.readUint8();
		}
		else if (opcode == 77)
		{
			var varpID = dataview.readUint16();
			if (varpID == 0xFFFF)
			{
				varpID = -1;
			}
			this.def.varbitID = varpID;

			var configId = dataview.readUint16();
			if (configId == 0xFFFF)
			{
				configId = -1;
			}
			this.def.varpID = configId;

			var length = dataview.readUint8();
			this.def.configChangeDest = [];

			for (var index = 0; index <= length; ++index)
			{
				this.def.configChangeDest.push(dataview.readUint16());
				if (0xFFFF == this.def.configChangeDest[index])
				{
					this.def.configChangeDest[index] = -1;
				}
			}
			this.def.configChangeDest.push(-1);
		}
		else if (opcode == 78)
		{
			this.def.setAmbientSoundId = dataview.readUint16();
			this.def.setAnInt2083 = dataview.readUint8();
		}
		else if (opcode == 79)
		{
			this.def.setAnInt2112 = dataview.readUint16();
			this.def.setAnInt2113 = dataview.readUint16();
			this.def.setAnInt2083 = dataview.readUint8();
			var length = dataview.readUint8();
			this.def.anIntArray2084 = [];

			for (var index = 0; index < length; ++index)
			{
				this.def.anIntArray2084.push(dataview.readUint16());
			}
		}
		else if (opcode == 81)
		{
			this.def.setContouredGround = dataview.readUint8() * 256;
		}
		else if (opcode == 82)
		{
			this.def.setMapAreaId = dataview.readUint16();
		}
		else if (opcode == 92)
		{
			var varpID = dataview.readUint16();
			if (varpID == 0xFFFF)
			{
				varpID = -1;
			}
			this.def.varbitID = varpID;

			var configId = dataview.readUint16();
			if (configId == 0xFFFF)
			{
				configId = -1;
			}
			this.def.varpID = configId;


			var varValue = dataview.readUint16();
			if (varValue == 0xFFFF)
			{
				varValue = -1;
			}

			var length = dataview.readUint8();
			this.def.configChangeDest = [];

			for (var index = 0; index <= length; ++index)
			{
				this.def.configChangeDest.push(dataview.readUint16());
				if (0xFFFF == this.def.configChangeDest[index])
				{
					this.def.configChangeDest[index] = -1;
				}
			}
			this.def.configChangeDest.push(varValue);
		}
		else if (opcode == 249)
		{
			var length = dataview.readUint8();
			this.def.params = {};

			for (var i = 0; i < length; i++)
			{
				var isString = dataview.readUint8() == 1;
				
				var key = dataview.readInt24();
				var value;

				if (isString)
				{
					value = dataview.readString();
				}
				else
				{
					value = dataview.readInt32()
				}

				this.def.params[key] = value;
			}
		}
	}
}
;// CONCATENATED MODULE: ./src/cacheReader/loaders/NpcLoader.js
class NpcDefinition {
		
}
class NpcLoader {

	load(bytes) {
		this.def = new NpcDefinition();
		let dataview = new DataView(bytes.buffer);
		do {
			var opcode = dataview.readUint8();
			this.handleOpcode(opcode, dataview);
		} while(opcode != 0);
		
		return this.def;
	}
	
	handleOpcode(opcode, dataview){
		var length;
		var index;
		if (opcode == 1)
		{
			length = dataview.readUint8();
			this.def.models = [];

			for (index = 0; index < length; ++index)
			{
				this.def.models.push(dataview.readUint16());
			}
		}else if (opcode == 2)
		{
			var name = dataview.readString();
			this.def.name = name;
		}
		else if (opcode == 12)
		{
			this.def.size = dataview.readUint8();
		}
		else if (opcode == 13)
		{
			this.def.standingAnimation = dataview.readUint16();
		}
		else if (opcode == 14)
		{
			this.def.walkingAnimation = dataview.readUint16();
		}
		else if (opcode == 15)
		{
			this.def.rotateLeftAnimation = dataview.readUint16();
		}
		else if (opcode == 16)
		{
			this.def.rotateRightAnimation = dataview.readUint16();
		}
		else if (opcode == 17)
		{
			this.def.walkingAnimation = dataview.readUint16();
			this.def.rotate180Animation = dataview.readUint16();
			this.def.rotate90RightAnimation = dataview.readUint16();
			this.def.rotate90LeftAnimation = dataview.readUint16();
		}
		else if (opcode == 18)
		{
			this.def.category = dataview.readUint16();
		}
		else if (opcode >= 30 && opcode < 35)
		{
			if(this.def.actions == undefined)
				this.def.actions = [];
			
			var readString = dataview.readString();
			this.def.actions[opcode - 30] = readString;
			
			if (this.def.actions[opcode - 30] == "Hidden")
			{
				this.def.actions[opcode - 30] = undefined;
			}
		}
		else if (opcode == 40)
		{
			length = dataview.readUint8();
			this.def.recolorToFind = [];
			this.def.recolorToReplace = [];

			for (index = 0; index < length; ++index)
			{
				this.def.recolorToFind.push(dataview.readUint16());
				this.def.recolorToReplace.push(dataview.readUint16());
			}

		}
		else if (opcode == 41)
		{
			length = dataview.readUint8();
			this.def.retextureToFind = [];
			this.def.retextureToReplace = [];

			for (index = 0; index < length; ++index)
			{
				this.def.retextureToFind.push(dataview.readUint16());
				this.def.retextureToReplace.push(dataview.readUint16());
			}

		}
		else if (opcode == 60)
		{
			length = dataview.readUint8();
			this.def.chatheadModels = [];

			for (index = 0; index < length; ++index)
			{
				this.def.chatheadModels.push(dataview.readUint16());
			}

		}
		else if (opcode == 93)
		{
			this.def.isMinimapVisible = false;
		}
		else if (opcode == 95)
		{
			this.def.combatLevel = dataview.readUint16();
		}
		else if (opcode == 97)
		{
			this.widthScale = dataview.readUint16();
		}
		else if (opcode == 98)
		{
			this.def.heightScale = dataview.readUint16();
		}
		else if (opcode == 99)
		{
			this.def.hasRenderPriority = true;
		}
		else if (opcode == 100)
		{
			this.def.ambient = dataview.readInt8();
		}
		else if (opcode == 101)
		{
			this.def.contrast = dataview.readInt8();
		}
		else if (opcode == 102)
		{
			this.def.headIcon = dataview.readUint16();
		}
		else if (opcode == 103)
		{
			this.def.rotationSpeed = dataview.readUint16();
		}
		else if (opcode == 106)
		{
			this.def.varbitId = dataview.readUint16();
			if (this.def.varbitId == 65535)
			{
				this.def.varbitId = -1;
			}

			this.def.varpIndex = dataview.readUint16();
			
			if (this.def.varpIndex == 65535)
			{
				this.def.varpIndex = -1;
			}

			length = dataview.readUint8();
			
			this.def.configs = [];

			for (index = 0; index <= length; ++index)
			{
				this.def.configs[index] = dataview.readUint16();
				
				if (this.def.configs[index] == '\uffff')
				{
					this.def.configs[index] = -1;
				}
			}

			this.def.configs[length + 1] = -1;

		}
		else if (opcode == 107)
		{
			this.def.isInteractable = false;
		}
		else if (opcode == 109)
		{
			this.def.rotationFlag = false;
		}
		else if (opcode == 111)
		{
			this.def.isPet = true;
		}
		else if (opcode == 118)
		{
			this.def.varbitId = dataview.readUint16();
			
			if (this.def.varbitId == 65535)
			{
				this.def.varbitId = -1;
			}

			this.def.varpIndex = dataview.readUint16();
			
			if (this.def.varpIndex == 65535)
			{
				this.def.varpIndex = -1;
			}

			var varVal = dataview.readUint16();
			
			if (varVal == 0xFFFF)
			{
				varVal = -1;
			}

			length = dataview.readUint8();
			this.def.configs = [];

			for (index = 0; index <= length; ++index)
			{
				var value = dataview.readUint16();
				
				if (this.def.configs[index] == '\uffff') {
					this.def.configs.push(-1);
				} else {
					this.def.configs.push(value);
				}
			}

			this.def.configs.push(varVal);
		}
		else if (opcode == 249)
		{
			length = dataview.readUint8();
			
			this.def.params = {};

			for (var i = 0; i < length; i++)
			{
				var isString = dataview.readUint8() == 1;
				
				var key = dataview.readInt24();
				var value;

				if (isString)
				{
					value = dataview.readString();
				}

				else
				{
					value = dataview.readInt32()
				}

				this.def.params[key] = value;
			}
		}
	}
}
;// CONCATENATED MODULE: ./src/cacheReader/cacheTypes/ConfigType.js




const ConfigType = { 
    UNDERLAY: {id: 1, loader: undefined},
	IDENTKIT: {id: 3, loader: KitLoader},
	OVERLAY: {id: 4, loader: undefined},
	INV: {id: 5, loader: undefined},
	OBJECT: {id: 6, loader: ObjectLoader},
	ENUM: {id: 8, loader: undefined},
	NPC: {id: 9, loader: NpcLoader},
	ITEM: {id: 10, loader: undefined},
	PARAMS: {id: 11, loader: undefined},
	SEQUENCE: {id: 12, loader: undefined},
	SPOTANIM: {id: 13, loader: undefined},
	VARBIT: {id: 14, loader: undefined},
	VARCLIENT: {id: 19, loader: undefined},
	VARCLIENTSTRING: {id: 15, loader: undefined},
	VARPLAYER: {id: 16, loader: undefined},
	HITSPLAT: {id: 32, loader: undefined},
	HEALTHBAR: {id: 33, loader: undefined},
	STRUCT: {id: 34, loader: undefined},
	AREA: {id: 35, loader: undefined},

	valueOf(id){
        var values = Object.values(ConfigType);
        var keys = Object.keys(ConfigType);
        for(var i=0;i<values.length;i++) {
            if(id == values[i].id)
                return ConfigType[keys[i]];
        }
        return undefined;
    }
}
Object.freeze(ConfigType);

/* harmony default export */ const cacheTypes_ConfigType = (ConfigType);
;// CONCATENATED MODULE: ./src/cacheReader/CacheDefinitionLoader.js



class CacheDefinitionLoader {
	constructor(indexId, archiveId, files){
		this.indexType = cacheTypes_IndexType.valueOf(indexId);
		this.archiveId = archiveId;
		this.files = files;
	}

	load() {
		var loader;

		if(this.indexType == cacheTypes_IndexType.CONFIGS){
			loader = new (cacheTypes_ConfigType.valueOf(this.archiveId).loader)();
		}else{
			loader = new this.indexType.loader();
		}
		
		for(var i=0;i<this.files.length;i++){
			
			//unload archive file memory to replace it with definition info
			this.files[i].def = loader.load(this.files[i].content);
			this.files[i].content = undefined;
		}
	}
}
// EXTERNAL MODULE: ./node_modules/bz2/index.js
var node_modules_bz2 = __webpack_require__(264);
;// CONCATENATED MODULE: ./src/cacheReader/CacheRequester.js
var gzip = __webpack_require__(606);




class CacheRequester {
	//should be used to make read requests from the cache
	//this should make it easier to multithread/async this later on
	constructor(rootDir){
		this.datDataPromise = getFileBytes(rootDir+"main_file_cache.dat2");
		this.datDataPromise.then((x) => {
			this.datData = x;
		});
	}
	
	readData(index, size, segment){
		var compressedData = new Uint8Array(size);
		this.readSector(compressedData, segment);
		
		let dataview = new DataView(compressedData.buffer);
		var compressionOpcode = dataview.getUint8(0);
		
		var data = new Uint8Array(dataview.buffer.slice(9,9+dataview.getUint32(1)));
		var decompressedData;
		
		if(compressionOpcode == 0) { //none
			decompressedData = data;
		} else if(compressionOpcode == 1) { //bz2
			var header = "BZh1";
			var bzData = new Uint8Array(4+data.length);
			bzData[0]= 'B'.charCodeAt(0);
			bzData[1]= 'Z'.charCodeAt(0);
			bzData[2]= 'h'.charCodeAt(0);
			bzData[3]= '1'.charCodeAt(0);
			bzData.set(data, 4)
			decompressedData = bz2.decompress(bzData);
		} else if(compressionOpcode == 2) { //gz
			decompressedData = new Uint8Array(gzip.unzip(data));
		}
		
		return decompressedData;
	}

	readSector(buffer, pos){
		var convertedPos = pos * 520;
		
		let dataview = new DataView(this.datData.buffer);
		var nextSector = dataview.getUint24(convertedPos+4);
		var data; 
		
		if(nextSector != 0)
			data = new Uint8Array(dataview.buffer.slice(convertedPos+8,convertedPos+520));
		else
			data = new Uint8Array(dataview.buffer.slice(convertedPos+8,convertedPos+8+(buffer.byteLength%512)));
		
		buffer.set(data, dataview.getInt16(convertedPos+2)*512);

		if(nextSector != 0)
			this.readSector(buffer, nextSector);
	}

}
;// CONCATENATED MODULE: ./src/cacheReader/cacheTypes/Archive.js
class ArchiveData {
	constructor() { 
		this.id = 0;
		this.name = "";
		this.hash = 0;
		this.nameHash = 0;
		this.crc = 0;
		this.revision = 0;
		this.filesLoaded = false;
		this.files = [];
	}
	
	loadFiles(data) {
		if(this.files.length == 1){
			this.files[0].content = data;
			return;
		}
		let dataview = new DataView(data.buffer);
		var chunks = dataview.getUint8(data.length - 1);

		var chunkSizes = [];
		for(var i=0;i<this.files.length;i++){
			chunkSizes[i] = [];
		}
		var fileSizes = Array(this.files.length).fill(0);
		
		var streamPosition = data.length - 1 - chunks * this.files.length * 4;

		//the following two loops can be combined in to one
		for(var i=0;i<chunks;i++){
			var chunkSize = 0;
			for(var id = 0; id < this.files.length; id++){
				var delta = dataview.getInt32(streamPosition);
				chunkSize += delta;
				streamPosition += 4;
				chunkSizes[id][i] = chunkSize;
				fileSizes[id] += chunkSize;
			}
		}
		
		var fileOffsets = Array(this.files.length).fill(0);
		
		streamPosition = 0;
		
		for(var i=0;i<chunks; i++){
			for(var id=0;id<this.files.length;id++){
				var chunkSize = chunkSizes[id][i];
				this.files[id].content = new Uint8Array(dataview.buffer.slice(streamPosition,streamPosition+chunkSize));
				streamPosition += chunkSize;
				fileOffsets[id] += chunkSize;
			}
		}
		
		this.filesLoaded = true;
	}
}
;// CONCATENATED MODULE: ./src/cacheReader/cacheTypes/File.js
class FileData {
	constructor(id) {
		this.id = id;
		this.name = "";
		this.def = undefined;
		this.nameHash = 0;
		this.size = 0;
		this.content = [];
	}
}
;// CONCATENATED MODULE: ./src/cacheReader/HashConverter.js
var nameHashLookup = {}
/* harmony default export */ const HashConverter = ({
    nameHashLookup
});
;// CONCATENATED MODULE: ./src/cacheReader/cacheTypes/Index.js





class Index {
	constructor(id) {
		this.id = id;
		this.protocol = 0;
		this.revision = -1;
		this.hash = 0;
		this.crc = 0;
		this.compression = 0;
		this.named = false;
		this.archivesCount = 0;
		this.archives = {};
		this.indexSegments = [];
	}
	
	loadIndexData(data) {
		let dataview = new DataView(data.buffer);
		var streamPos = 0;
		
		this.protocol = dataview.readUint8();
		
		if(this.protocol >= 6){
			this.revision = dataview.readInt32();
		}
		this.hash = dataview.readUint8();
		
		this.named = (1 & this.hash) != 0;
		
		//var validArchivesCount = protocol >= 7 ? stream.readBigSmart() : stream.readUnsignedShort();
		if(this.protocol >= 7){
			console.log("Warning: Unhandled protcol 7");
			return;
		}
		
		this.archivesCount = dataview.readUint16();

		var lastArchiveId = 0;
		for(var i=0;i<this.archivesCount;i++) {
			var archiveId = lastArchiveId += dataview.readInt16();
			
			this.archives[archiveId] = new ArchiveData();
			this.archives[archiveId].id = archiveId;
		}
		
		var archiveKeys = Object.keys(this.archives);
		
		if(this.named){
			for(var i=0;i<this.archivesCount;i++) {
				var nameHash = dataview.readInt32();
				this.archives[archiveKeys[i]].nameHash = nameHash;
				if(HashConverter[nameHash] != undefined)
					this.archives[archiveKeys[i]].name = HashConverter[nameHash];
			}
		}
		
		for(var i=0;i<this.archivesCount;i++) {
			var crc = dataview.readInt32();
			this.archives[archiveKeys[i]].crc = crc;
		}
		
		for(var i=0;i<this.archivesCount;i++) {
			var revision = dataview.readInt32();
			this.archives[archiveKeys[i]].revision = revision;
		}
		
		for(var i=0;i<this.archivesCount;i++) {
			var numberOfFiles = dataview.readUint16();
			if(numberOfFiles <= 0)
				console.log(numberOfFiles);
			this.archives[archiveKeys[i]].files = Array(numberOfFiles).fill(undefined);
		}
		
		for(var i=0;i<this.archivesCount;i++) {
			var fileID = 0;
			for(var j=0;j<this.archives[archiveKeys[i]].files.length;j++){
				fileID += dataview.readUint16();
				this.archives[archiveKeys[i]].files[j] = new FileData(fileID);
			}
		}
		
		if(this.named){
			for(var i=0;i<this.archivesCount;i++) {
				for(var j=0;j<this.archives[archiveKeys[i]].files.length;j++){
					var fileName = dataview.readUint32();
					
					this.archives[archiveKeys[i]].files[j].nameHash = fileName;
					
					if(HashConverter[fileName] != undefined)
						this.archives[archiveKeys[i]].files[j].name = HashConverter[fileName];
					
				}
			}
		}
	}
	
	toString() {
		return this.id;
	}
}

;// CONCATENATED MODULE: ./src/cacheReader/Cache.js









class RSCache {
	constructor(cacheRootDir, nameRootDir = undefined){
		this.indicies = {};
		
		this.cacheRequester = new CacheRequester(cacheRootDir);
		this.onload = this.loadCacheFiles(cacheRootDir, nameRootDir);
	}
	
	getAllFiles(indexId, archiveId) {
		var index = this.indicies[indexId];
		if(index == undefined){
			throw "Index " + indexId + " does not exist";
		}
		
		var archive = index.archives[archiveId];
		if(archive == undefined){
			throw "Archive " + archiveId + " does not exist in Index " + indexId;
		}

		//files should only be loaded when they are required. need a better memory management system or something in the future
		if(archive.filesLoaded == false){
			//might be an error here because of index.indexSegments[archiveId]. might need to use archive keys instead of archiveId
			var data = this.cacheRequester.readData(index, index.indexSegments[archiveId].size, index.indexSegments[archiveId].segment)
			archive.loadFiles(data);
			new CacheDefinitionLoader(indexId, archiveId, archive.files).load();
		}
		
		return archive.files;
	}

	//some archives only contain 1 file so a fileId is only needed in some cases
	getFile(indexId, archiveId, fileId = 0) {
		return this.getAllFiles(indexId, archiveId)[fileId];
	}
	
	loadCacheFiles(rootDir, namesRootDir) {

		//this is basically relying on loading faster than the other stuff. probably should merge this with something
		if(namesRootDir == undefined)
			namesRootDir = rootDir;
			
		getFile(namesRootDir+"names.tsv").then((nameData) => {
			var splitNameData = nameData.split("\n");
			for(var i=0;i<splitNameData.length;i++) {
				var tabSplit = splitNameData[i].split("\t");
				HashConverter[tabSplit[3]] = tabSplit[4]; //3 = hash, 4 = name
			}
		});
		
		var idx255 = getFileBytes(rootDir+"main_file_cache.idx255");
		var idxFiles = [];

		return idx255.then((idx255Data) => {
			var indiciesAmount = idx255Data.length/6; //each section is 6 bits

			for(var i=0;i<indiciesAmount;i++){
				idxFiles.push(getFileBytes(rootDir+"main_file_cache.idx"+i));
			}
			
			//theres probably a better way of doing this
			//also not completely sure yet if this really needs to be done for index 255
			return Promise.all(idxFiles).then((idxFileData) => {
				for(var i=0;i<=idxFileData.length;i++){
					var dataview;
					if(i == idxFileData.length){
						dataview = new DataView(idx255Data.buffer);
						i = 255;
					}else{
						dataview = new DataView(idxFileData[i].buffer);
					}
					
					this.indicies[i] = new Index(i);
					
					for(var j=0;j<dataview.byteLength;j+=6){
						var size = dataview.readUint24();
						var segment = dataview.readUint24();
						//if(indexSegments[i] == undefined) indexSegments[i] = [];
						//this.indicies[i].indexSegments.push(new IndexSegment(size,segment));
                        this.indicies[i].indexSegments.push({size,segment});
					}
					
				};

				return this.cacheRequester.datDataPromise.then((x) => {
					this.loadIndicies(idx255Data);
				});

			});
			
		});
	}
	
	loadIndicies(idxData) {
		var dataview = new DataView(idxData.buffer);
		//could probably use the indexSegments or remove the weird i = 255 part from loadCacheFiles
		//might look better if j++, but works for now
		for(var j=0;j<dataview.byteLength;j+=6) {
			var size = dataview.readUint24();
			var segment = dataview.readUint24();
			var index = this.indicies[j/6];
			
			var data = this.cacheRequester.readData(index, size, segment);
			index.loadIndexData(data);
		}
	}

}
;// CONCATENATED MODULE: ./src/index.js





})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});