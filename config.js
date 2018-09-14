System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "core-js": "npm:core-js@1.2.7",
    "webpack": "npm:webpack@4.17.2",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.1": {
      "buffer": "npm:buffer@5.2.1"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.12.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-net@0.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.10"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-timers@0.1.0": {
      "timers-browserify": "npm:timers-browserify@1.4.2"
    },
    "github:jspm/nodelibs-tty@0.1.0": {
      "tty-browserify": "npm:tty-browserify@0.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "npm:@webassemblyjs/ast@1.5.13": {
      "@webassemblyjs/helper-module-context": "npm:@webassemblyjs/helper-module-context@1.5.13",
      "@webassemblyjs/helper-wasm-bytecode": "npm:@webassemblyjs/helper-wasm-bytecode@1.5.13",
      "@webassemblyjs/wast-parser": "npm:@webassemblyjs/wast-parser@1.5.13",
      "debug": "npm:debug@3.1.0",
      "mamacro": "npm:mamacro@0.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@webassemblyjs/helper-buffer@1.5.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "debug": "npm:debug@3.1.0"
    },
    "npm:@webassemblyjs/helper-code-frame@1.5.13": {
      "@webassemblyjs/wast-printer": "npm:@webassemblyjs/wast-printer@1.5.13"
    },
    "npm:@webassemblyjs/helper-module-context@1.5.13": {
      "debug": "npm:debug@3.1.0",
      "mamacro": "npm:mamacro@0.0.3"
    },
    "npm:@webassemblyjs/helper-wasm-section@1.5.13": {
      "@webassemblyjs/ast": "npm:@webassemblyjs/ast@1.5.13",
      "@webassemblyjs/helper-buffer": "npm:@webassemblyjs/helper-buffer@1.5.13",
      "@webassemblyjs/helper-wasm-bytecode": "npm:@webassemblyjs/helper-wasm-bytecode@1.5.13",
      "@webassemblyjs/wasm-gen": "npm:@webassemblyjs/wasm-gen@1.5.13",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "debug": "npm:debug@3.1.0"
    },
    "npm:@webassemblyjs/ieee754@1.5.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "ieee754": "npm:ieee754@1.1.12"
    },
    "npm:@webassemblyjs/leb128@1.5.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "long": "npm:long@4.0.0"
    },
    "npm:@webassemblyjs/wasm-edit@1.5.13": {
      "@webassemblyjs/ast": "npm:@webassemblyjs/ast@1.5.13",
      "@webassemblyjs/helper-buffer": "npm:@webassemblyjs/helper-buffer@1.5.13",
      "@webassemblyjs/helper-wasm-bytecode": "npm:@webassemblyjs/helper-wasm-bytecode@1.5.13",
      "@webassemblyjs/helper-wasm-section": "npm:@webassemblyjs/helper-wasm-section@1.5.13",
      "@webassemblyjs/wasm-gen": "npm:@webassemblyjs/wasm-gen@1.5.13",
      "@webassemblyjs/wasm-opt": "npm:@webassemblyjs/wasm-opt@1.5.13",
      "@webassemblyjs/wasm-parser": "npm:@webassemblyjs/wasm-parser@1.5.13",
      "@webassemblyjs/wast-printer": "npm:@webassemblyjs/wast-printer@1.5.13",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "debug": "npm:debug@3.1.0"
    },
    "npm:@webassemblyjs/wasm-gen@1.5.13": {
      "@webassemblyjs/ast": "npm:@webassemblyjs/ast@1.5.13",
      "@webassemblyjs/helper-wasm-bytecode": "npm:@webassemblyjs/helper-wasm-bytecode@1.5.13",
      "@webassemblyjs/ieee754": "npm:@webassemblyjs/ieee754@1.5.13",
      "@webassemblyjs/leb128": "npm:@webassemblyjs/leb128@1.5.13",
      "@webassemblyjs/utf8": "npm:@webassemblyjs/utf8@1.5.13"
    },
    "npm:@webassemblyjs/wasm-opt@1.5.13": {
      "@webassemblyjs/ast": "npm:@webassemblyjs/ast@1.5.13",
      "@webassemblyjs/helper-buffer": "npm:@webassemblyjs/helper-buffer@1.5.13",
      "@webassemblyjs/wasm-gen": "npm:@webassemblyjs/wasm-gen@1.5.13",
      "@webassemblyjs/wasm-parser": "npm:@webassemblyjs/wasm-parser@1.5.13",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "debug": "npm:debug@3.1.0"
    },
    "npm:@webassemblyjs/wasm-parser@1.5.13": {
      "@webassemblyjs/ast": "npm:@webassemblyjs/ast@1.5.13",
      "@webassemblyjs/helper-api-error": "npm:@webassemblyjs/helper-api-error@1.5.13",
      "@webassemblyjs/helper-wasm-bytecode": "npm:@webassemblyjs/helper-wasm-bytecode@1.5.13",
      "@webassemblyjs/ieee754": "npm:@webassemblyjs/ieee754@1.5.13",
      "@webassemblyjs/leb128": "npm:@webassemblyjs/leb128@1.5.13",
      "@webassemblyjs/utf8": "npm:@webassemblyjs/utf8@1.5.13",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:@webassemblyjs/wast-parser@1.5.13": {
      "@webassemblyjs/ast": "npm:@webassemblyjs/ast@1.5.13",
      "@webassemblyjs/floating-point-hex-parser": "npm:@webassemblyjs/floating-point-hex-parser@1.5.13",
      "@webassemblyjs/helper-api-error": "npm:@webassemblyjs/helper-api-error@1.5.13",
      "@webassemblyjs/helper-code-frame": "npm:@webassemblyjs/helper-code-frame@1.5.13",
      "@webassemblyjs/helper-fsm": "npm:@webassemblyjs/helper-fsm@1.5.13",
      "long": "npm:long@3.2.0",
      "mamacro": "npm:mamacro@0.0.3"
    },
    "npm:@webassemblyjs/wast-printer@1.5.13": {
      "@webassemblyjs/ast": "npm:@webassemblyjs/ast@1.5.13",
      "@webassemblyjs/wast-parser": "npm:@webassemblyjs/wast-parser@1.5.13",
      "long": "npm:long@3.2.0"
    },
    "npm:acorn-dynamic-import@3.0.0": {
      "acorn": "npm:acorn@5.7.2"
    },
    "npm:acorn@5.7.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ajv-keywords@3.2.0": {
      "ajv": "npm:ajv@6.5.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:ajv@6.5.3": {
      "fast-deep-equal": "npm:fast-deep-equal@2.0.1",
      "fast-json-stable-stringify": "npm:fast-json-stable-stringify@2.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "json-schema-traverse": "npm:json-schema-traverse@0.4.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "uri-js": "npm:uri-js@4.2.2"
    },
    "npm:anymatch@2.0.0": {
      "micromatch": "npm:micromatch@3.1.10",
      "normalize-path": "npm:normalize-path@2.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:are-we-there-yet@1.1.5": {
      "delegates": "npm:delegates@1.0.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "readable-stream": "npm:readable-stream@2.3.6",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:asn1.js@4.10.1": {
      "bn.js": "npm:bn.js@4.11.8",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.1",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:atob@2.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:base@0.11.2": {
      "cache-base": "npm:cache-base@1.0.1",
      "class-utils": "npm:class-utils@0.3.6",
      "component-emitter": "npm:component-emitter@1.2.1",
      "define-property": "npm:define-property@1.0.0",
      "isobject": "npm:isobject@3.0.1",
      "mixin-deep": "npm:mixin-deep@1.3.1",
      "pascalcase": "npm:pascalcase@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:binary-extensions@1.11.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:bluebird@3.5.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:brace-expansion@1.1.11": {
      "balanced-match": "npm:balanced-match@1.0.0",
      "concat-map": "npm:concat-map@0.0.1"
    },
    "npm:braces@2.3.2": {
      "arr-flatten": "npm:arr-flatten@1.1.0",
      "array-unique": "npm:array-unique@0.3.2",
      "extend-shallow": "npm:extend-shallow@2.0.1",
      "fill-range": "npm:fill-range@4.0.0",
      "isobject": "npm:isobject@3.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "repeat-element": "npm:repeat-element@1.1.3",
      "snapdragon": "npm:snapdragon@0.8.2",
      "snapdragon-node": "npm:snapdragon-node@2.1.1",
      "split-string": "npm:split-string@3.1.0",
      "to-regex": "npm:to-regex@3.0.2"
    },
    "npm:browserify-aes@1.2.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.4",
      "create-hash": "npm:create-hash@1.2.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
      "inherits": "npm:inherits@2.0.3",
      "safe-buffer": "npm:safe-buffer@5.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:browserify-cipher@1.0.1": {
      "browserify-aes": "npm:browserify-aes@1.2.0",
      "browserify-des": "npm:browserify-des@1.0.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.3"
    },
    "npm:browserify-des@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "cipher-base": "npm:cipher-base@1.0.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.3",
      "safe-buffer": "npm:safe-buffer@5.1.2"
    },
    "npm:browserify-rsa@4.0.1": {
      "bn.js": "npm:bn.js@4.11.8",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.6"
    },
    "npm:browserify-sign@4.0.4": {
      "bn.js": "npm:bn.js@4.11.8",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.2.0",
      "create-hmac": "npm:create-hmac@1.1.7",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.4.1",
      "inherits": "npm:inherits@2.0.3",
      "parse-asn1": "npm:parse-asn1@5.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "pako": "npm:pako@0.2.9",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.3.6",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:browserify-zlib@0.2.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "pako": "npm:pako@1.0.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:buffer-from@1.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:buffer@4.9.1": {
      "base64-js": "npm:base64-js@1.3.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.12",
      "isarray": "npm:isarray@1.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@5.2.1": {
      "base64-js": "npm:base64-js@1.3.0",
      "ieee754": "npm:ieee754@1.1.12"
    },
    "npm:builtin-status-codes@3.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:cacache@10.0.4": {
      "bluebird": "npm:bluebird@3.5.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "chownr": "npm:chownr@1.0.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@7.1.3",
      "graceful-fs": "npm:graceful-fs@4.1.11",
      "lru-cache": "npm:lru-cache@4.1.3",
      "mississippi": "npm:mississippi@2.0.0",
      "mkdirp": "npm:mkdirp@0.5.1",
      "move-concurrently": "npm:move-concurrently@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "promise-inflight": "npm:promise-inflight@1.0.1",
      "rimraf": "npm:rimraf@2.6.2",
      "ssri": "npm:ssri@5.3.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "unique-filename": "npm:unique-filename@1.1.0",
      "y18n": "npm:y18n@4.0.0"
    },
    "npm:cache-base@1.0.1": {
      "collection-visit": "npm:collection-visit@1.0.0",
      "component-emitter": "npm:component-emitter@1.2.1",
      "get-value": "npm:get-value@2.0.6",
      "has-value": "npm:has-value@1.0.0",
      "isobject": "npm:isobject@3.0.1",
      "set-value": "npm:set-value@2.0.0",
      "to-object-path": "npm:to-object-path@0.3.0",
      "union-value": "npm:union-value@1.0.0",
      "unset-value": "npm:unset-value@1.0.0"
    },
    "npm:chokidar@2.0.4": {
      "anymatch": "npm:anymatch@2.0.0",
      "async-each": "npm:async-each@1.0.1",
      "braces": "npm:braces@2.3.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "fsevents": "npm:fsevents@1.2.4",
      "glob-parent": "npm:glob-parent@3.1.0",
      "inherits": "npm:inherits@2.0.3",
      "is-binary-path": "npm:is-binary-path@1.0.1",
      "is-glob": "npm:is-glob@4.0.0",
      "lodash.debounce": "npm:lodash.debounce@4.0.8",
      "normalize-path": "npm:normalize-path@2.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readdirp": "npm:readdirp@2.1.0",
      "upath": "npm:upath@1.1.0"
    },
    "npm:chownr@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:chrome-trace-event@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "tslib": "npm:tslib@1.9.3"
    },
    "npm:cipher-base@1.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "safe-buffer": "npm:safe-buffer@5.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:class-utils@0.3.6": {
      "arr-union": "npm:arr-union@3.1.0",
      "define-property": "npm:define-property@0.2.5",
      "isobject": "npm:isobject@3.0.1",
      "static-extend": "npm:static-extend@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:collection-visit@1.0.0": {
      "map-visit": "npm:map-visit@1.0.0",
      "object-visit": "npm:object-visit@1.0.1"
    },
    "npm:commander@2.14.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commondir@1.0.1": {
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:concat-stream@1.6.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "buffer-from": "npm:buffer-from@1.1.1",
      "inherits": "npm:inherits@2.0.3",
      "readable-stream": "npm:readable-stream@2.3.6",
      "typedarray": "npm:typedarray@0.0.6"
    },
    "npm:console-browserify@1.1.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "date-now": "npm:date-now@0.1.4",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:constants-browserify@1.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:copy-concurrently@1.0.5": {
      "aproba": "npm:aproba@1.2.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "fs-write-stream-atomic": "npm:fs-write-stream-atomic@1.0.10",
      "iferr": "npm:iferr@0.1.5",
      "mkdirp": "npm:mkdirp@0.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rimraf": "npm:rimraf@2.6.2",
      "run-queue": "npm:run-queue@1.0.3",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:core-js@1.2.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:create-ecdh@4.0.3": {
      "bn.js": "npm:bn.js@4.11.8",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.4.1"
    },
    "npm:create-hash@1.2.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "cipher-base": "npm:cipher-base@1.0.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.3",
      "md5.js": "npm:md5.js@1.3.4",
      "ripemd160": "npm:ripemd160@2.0.2",
      "sha.js": "npm:sha.js@2.4.11"
    },
    "npm:create-hmac@1.1.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "cipher-base": "npm:cipher-base@1.0.4",
      "create-hash": "npm:create-hash@1.2.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.3",
      "ripemd160": "npm:ripemd160@2.0.2",
      "safe-buffer": "npm:safe-buffer@5.1.2",
      "sha.js": "npm:sha.js@2.4.11"
    },
    "npm:crypto-browserify@3.12.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.1",
      "browserify-sign": "npm:browserify-sign@4.0.4",
      "create-ecdh": "npm:create-ecdh@4.0.3",
      "create-hash": "npm:create-hash@1.2.0",
      "create-hmac": "npm:create-hmac@1.1.7",
      "diffie-hellman": "npm:diffie-hellman@5.0.3",
      "inherits": "npm:inherits@2.0.3",
      "pbkdf2": "npm:pbkdf2@3.0.16",
      "public-encrypt": "npm:public-encrypt@4.0.2",
      "randombytes": "npm:randombytes@2.0.6",
      "randomfill": "npm:randomfill@1.0.4"
    },
    "npm:debug@2.6.9": {
      "ms": "npm:ms@2.0.0"
    },
    "npm:debug@3.1.0": {
      "ms": "npm:ms@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:deep-extend@0.6.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:define-property@0.2.5": {
      "is-descriptor": "npm:is-descriptor@0.1.6"
    },
    "npm:define-property@1.0.0": {
      "is-descriptor": "npm:is-descriptor@1.0.2"
    },
    "npm:define-property@2.0.2": {
      "is-descriptor": "npm:is-descriptor@1.0.2",
      "isobject": "npm:isobject@3.0.1"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.1"
    },
    "npm:detect-libc@1.0.3": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:diffie-hellman@5.0.3": {
      "bn.js": "npm:bn.js@4.11.8",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.1",
      "randombytes": "npm:randombytes@2.0.6",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:domain-browser@1.2.0": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:duplexify@3.6.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "end-of-stream": "npm:end-of-stream@1.4.1",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "inherits": "npm:inherits@2.0.3",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.3.6",
      "stream-shift": "npm:stream-shift@1.0.0"
    },
    "npm:elliptic@6.4.1": {
      "bn.js": "npm:bn.js@4.11.8",
      "brorand": "npm:brorand@1.1.0",
      "hash.js": "npm:hash.js@1.1.5",
      "hmac-drbg": "npm:hmac-drbg@1.0.1",
      "inherits": "npm:inherits@2.0.3",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.1",
      "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:end-of-stream@1.4.1": {
      "once": "npm:once@1.4.0"
    },
    "npm:enhanced-resolve@4.1.0": {
      "graceful-fs": "npm:graceful-fs@4.1.11",
      "memory-fs": "npm:memory-fs@0.4.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tapable": "npm:tapable@1.0.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:errno@0.1.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "prr": "npm:prr@1.0.1"
    },
    "npm:eslint-scope@4.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "esrecurse": "npm:esrecurse@4.2.1",
      "estraverse": "npm:estraverse@4.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:esrecurse@4.2.1": {
      "estraverse": "npm:estraverse@4.2.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:estraverse@4.2.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:evp_bytestokey@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "md5.js": "npm:md5.js@1.3.4",
      "safe-buffer": "npm:safe-buffer@5.1.2"
    },
    "npm:expand-brackets@2.1.4": {
      "debug": "npm:debug@2.6.9",
      "define-property": "npm:define-property@0.2.5",
      "extend-shallow": "npm:extend-shallow@2.0.1",
      "posix-character-classes": "npm:posix-character-classes@0.1.1",
      "regex-not": "npm:regex-not@1.0.2",
      "snapdragon": "npm:snapdragon@0.8.2",
      "to-regex": "npm:to-regex@3.0.2"
    },
    "npm:extend-shallow@2.0.1": {
      "is-extendable": "npm:is-extendable@0.1.1"
    },
    "npm:extend-shallow@3.0.2": {
      "assign-symbols": "npm:assign-symbols@1.0.0",
      "is-extendable": "npm:is-extendable@1.0.1"
    },
    "npm:extglob@2.0.4": {
      "array-unique": "npm:array-unique@0.3.2",
      "define-property": "npm:define-property@1.0.0",
      "expand-brackets": "npm:expand-brackets@2.1.4",
      "extend-shallow": "npm:extend-shallow@2.0.1",
      "fragment-cache": "npm:fragment-cache@0.2.1",
      "regex-not": "npm:regex-not@1.0.2",
      "snapdragon": "npm:snapdragon@0.8.2",
      "to-regex": "npm:to-regex@3.0.2"
    },
    "npm:fast-json-stable-stringify@2.0.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:fill-range@4.0.0": {
      "extend-shallow": "npm:extend-shallow@2.0.1",
      "is-number": "npm:is-number@3.0.0",
      "repeat-string": "npm:repeat-string@1.6.1",
      "to-regex-range": "npm:to-regex-range@2.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:find-cache-dir@1.0.0": {
      "commondir": "npm:commondir@1.0.1",
      "make-dir": "npm:make-dir@1.3.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "pkg-dir": "npm:pkg-dir@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:find-up@2.1.0": {
      "locate-path": "npm:locate-path@2.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:flush-write-stream@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.3.6"
    },
    "npm:fragment-cache@0.2.1": {
      "map-cache": "npm:map-cache@0.2.2"
    },
    "npm:from2@2.3.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.3.6"
    },
    "npm:fs-minipass@1.2.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minipass": "npm:minipass@2.3.4",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:fs-write-stream-atomic@1.0.10": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "graceful-fs": "npm:graceful-fs@4.1.11",
      "iferr": "npm:iferr@0.1.5",
      "imurmurhash": "npm:imurmurhash@0.1.4",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.3.6",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:fs.realpath@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:fsevents@1.2.4": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "nan": "npm:nan@2.11.0",
      "node-pre-gyp": "npm:node-pre-gyp@0.10.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:gauge@2.7.4": {
      "aproba": "npm:aproba@1.2.0",
      "console-control-strings": "npm:console-control-strings@1.1.0",
      "has-unicode": "npm:has-unicode@2.0.1",
      "object-assign": "npm:object-assign@4.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "signal-exit": "npm:signal-exit@3.0.2",
      "string-width": "npm:string-width@1.0.2",
      "strip-ansi": "npm:strip-ansi@3.0.1",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "wide-align": "npm:wide-align@1.1.3"
    },
    "npm:glob-parent@3.1.0": {
      "is-glob": "npm:is-glob@3.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-dirname": "npm:path-dirname@1.0.2"
    },
    "npm:glob@7.1.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "fs.realpath": "npm:fs.realpath@1.0.0",
      "inflight": "npm:inflight@1.0.6",
      "inherits": "npm:inherits@2.0.3",
      "minimatch": "npm:minimatch@3.0.4",
      "once": "npm:once@1.4.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:graceful-fs@4.1.11": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:has-unicode@2.0.1": {
      "os": "github:jspm/nodelibs-os@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:has-value@0.3.1": {
      "get-value": "npm:get-value@2.0.6",
      "has-values": "npm:has-values@0.1.4",
      "isobject": "npm:isobject@2.1.0"
    },
    "npm:has-value@1.0.0": {
      "get-value": "npm:get-value@2.0.6",
      "has-values": "npm:has-values@1.0.0",
      "isobject": "npm:isobject@3.0.1"
    },
    "npm:has-values@1.0.0": {
      "is-number": "npm:is-number@3.0.0",
      "kind-of": "npm:kind-of@4.0.0"
    },
    "npm:hash-base@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "safe-buffer": "npm:safe-buffer@5.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:hash.js@1.1.5": {
      "inherits": "npm:inherits@2.0.3",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.1"
    },
    "npm:hmac-drbg@1.0.1": {
      "hash.js": "npm:hash.js@1.1.5",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.1",
      "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:https-browserify@1.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:iconv-lite@0.4.24": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "safer-buffer": "npm:safer-buffer@2.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:ignore-walk@3.0.1": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimatch": "npm:minimatch@3.0.4",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:inflight@1.0.6": {
      "once": "npm:once@1.4.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "wrappy": "npm:wrappy@1.0.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:inherits@2.0.3": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:ini@1.3.5": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:is-accessor-descriptor@0.1.6": {
      "kind-of": "npm:kind-of@3.2.2"
    },
    "npm:is-accessor-descriptor@1.0.0": {
      "kind-of": "npm:kind-of@6.0.2"
    },
    "npm:is-binary-path@1.0.1": {
      "binary-extensions": "npm:binary-extensions@1.11.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:is-buffer@1.1.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:is-data-descriptor@0.1.4": {
      "kind-of": "npm:kind-of@3.2.2"
    },
    "npm:is-data-descriptor@1.0.0": {
      "kind-of": "npm:kind-of@6.0.2"
    },
    "npm:is-descriptor@0.1.6": {
      "is-accessor-descriptor": "npm:is-accessor-descriptor@0.1.6",
      "is-data-descriptor": "npm:is-data-descriptor@0.1.4",
      "kind-of": "npm:kind-of@5.1.0"
    },
    "npm:is-descriptor@1.0.2": {
      "is-accessor-descriptor": "npm:is-accessor-descriptor@1.0.0",
      "is-data-descriptor": "npm:is-data-descriptor@1.0.0",
      "kind-of": "npm:kind-of@6.0.2"
    },
    "npm:is-extendable@1.0.1": {
      "is-plain-object": "npm:is-plain-object@2.0.4"
    },
    "npm:is-fullwidth-code-point@1.0.0": {
      "number-is-nan": "npm:number-is-nan@1.0.1"
    },
    "npm:is-glob@3.1.0": {
      "is-extglob": "npm:is-extglob@2.1.1"
    },
    "npm:is-glob@4.0.0": {
      "is-extglob": "npm:is-extglob@2.1.1"
    },
    "npm:is-number@3.0.0": {
      "kind-of": "npm:kind-of@3.2.2"
    },
    "npm:is-plain-object@2.0.4": {
      "isobject": "npm:isobject@3.0.1"
    },
    "npm:is-windows@1.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:isobject@2.1.0": {
      "isarray": "npm:isarray@1.0.0"
    },
    "npm:json-schema-traverse@0.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:json5@0.5.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:kind-of@3.2.2": {
      "is-buffer": "npm:is-buffer@1.1.6"
    },
    "npm:kind-of@4.0.0": {
      "is-buffer": "npm:is-buffer@1.1.6"
    },
    "npm:loader-runner@2.3.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:loader-utils@1.1.0": {
      "big.js": "npm:big.js@3.2.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "emojis-list": "npm:emojis-list@2.1.0",
      "json5": "npm:json5@0.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:locate-path@2.0.0": {
      "p-locate": "npm:p-locate@2.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-exists": "npm:path-exists@3.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.debounce@4.0.8": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:long@3.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:long@4.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lru-cache@4.1.3": {
      "pseudomap": "npm:pseudomap@1.0.2",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "yallist": "npm:yallist@2.1.2"
    },
    "npm:make-dir@1.3.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "pify": "npm:pify@3.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:mamacro@0.0.3": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:map-visit@1.0.0": {
      "object-visit": "npm:object-visit@1.0.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:md5.js@1.3.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "hash-base": "npm:hash-base@3.0.4",
      "inherits": "npm:inherits@2.0.3"
    },
    "npm:memory-fs@0.4.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "errno": "npm:errno@0.1.7",
      "readable-stream": "npm:readable-stream@2.3.6"
    },
    "npm:micromatch@3.1.10": {
      "arr-diff": "npm:arr-diff@4.0.0",
      "array-unique": "npm:array-unique@0.3.2",
      "braces": "npm:braces@2.3.2",
      "define-property": "npm:define-property@2.0.2",
      "extend-shallow": "npm:extend-shallow@3.0.2",
      "extglob": "npm:extglob@2.0.4",
      "fragment-cache": "npm:fragment-cache@0.2.1",
      "kind-of": "npm:kind-of@6.0.2",
      "nanomatch": "npm:nanomatch@1.2.13",
      "object.pick": "npm:object.pick@1.3.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "regex-not": "npm:regex-not@1.0.2",
      "snapdragon": "npm:snapdragon@0.8.2",
      "to-regex": "npm:to-regex@3.0.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:miller-rabin@4.0.1": {
      "bn.js": "npm:bn.js@4.11.8",
      "brorand": "npm:brorand@1.1.0"
    },
    "npm:minimatch@3.0.4": {
      "brace-expansion": "npm:brace-expansion@1.1.11",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:minipass@2.3.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "safe-buffer": "npm:safe-buffer@5.1.2",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "yallist": "npm:yallist@3.0.2"
    },
    "npm:minizlib@1.1.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "minipass": "npm:minipass@2.3.4",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:mississippi@2.0.0": {
      "concat-stream": "npm:concat-stream@1.6.2",
      "duplexify": "npm:duplexify@3.6.0",
      "end-of-stream": "npm:end-of-stream@1.4.1",
      "flush-write-stream": "npm:flush-write-stream@1.0.3",
      "from2": "npm:from2@2.3.0",
      "parallel-transform": "npm:parallel-transform@1.1.0",
      "pump": "npm:pump@2.0.1",
      "pumpify": "npm:pumpify@1.5.1",
      "stream-each": "npm:stream-each@1.2.3",
      "through2": "npm:through2@2.0.3"
    },
    "npm:mixin-deep@1.3.1": {
      "for-in": "npm:for-in@1.0.2",
      "is-extendable": "npm:is-extendable@1.0.1"
    },
    "npm:mkdirp@0.5.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimist": "npm:minimist@0.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:move-concurrently@1.0.1": {
      "aproba": "npm:aproba@1.2.0",
      "copy-concurrently": "npm:copy-concurrently@1.0.5",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "fs-write-stream-atomic": "npm:fs-write-stream-atomic@1.0.10",
      "mkdirp": "npm:mkdirp@0.5.1",
      "rimraf": "npm:rimraf@2.6.2",
      "run-queue": "npm:run-queue@1.0.3",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:nan@2.11.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:nanomatch@1.2.13": {
      "arr-diff": "npm:arr-diff@4.0.0",
      "array-unique": "npm:array-unique@0.3.2",
      "define-property": "npm:define-property@2.0.2",
      "extend-shallow": "npm:extend-shallow@3.0.2",
      "fragment-cache": "npm:fragment-cache@0.2.1",
      "is-windows": "npm:is-windows@1.0.2",
      "kind-of": "npm:kind-of@6.0.2",
      "object.pick": "npm:object.pick@1.3.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "regex-not": "npm:regex-not@1.0.2",
      "snapdragon": "npm:snapdragon@0.8.2",
      "to-regex": "npm:to-regex@3.0.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:needle@2.2.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "debug": "npm:debug@2.6.9",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "iconv-lite": "npm:iconv-lite@0.4.24",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "sax": "npm:sax@1.2.4",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:neo-async@2.5.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:node-libs-browser@2.1.0": {
      "assert": "npm:assert@1.4.1",
      "browserify-zlib": "npm:browserify-zlib@0.2.0",
      "buffer": "npm:buffer@4.9.1",
      "console-browserify": "npm:console-browserify@1.1.0",
      "constants-browserify": "npm:constants-browserify@1.0.0",
      "crypto-browserify": "npm:crypto-browserify@3.12.0",
      "domain-browser": "npm:domain-browser@1.2.0",
      "events": "npm:events@1.0.2",
      "https-browserify": "npm:https-browserify@1.0.0",
      "os-browserify": "npm:os-browserify@0.3.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-browserify": "npm:path-browserify@0.0.0",
      "process": "npm:process@0.11.10",
      "punycode": "npm:punycode@1.3.2",
      "querystring-es3": "npm:querystring-es3@0.2.1",
      "readable-stream": "npm:readable-stream@2.3.6",
      "stream-browserify": "npm:stream-browserify@2.0.1",
      "stream-http": "npm:stream-http@2.8.3",
      "string_decoder": "npm:string_decoder@1.1.1",
      "timers-browserify": "npm:timers-browserify@2.0.10",
      "tty-browserify": "npm:tty-browserify@0.0.0",
      "url": "npm:url@0.11.0",
      "util": "npm:util@0.10.3",
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:node-pre-gyp@0.10.3": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "detect-libc": "npm:detect-libc@1.0.3",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "mkdirp": "npm:mkdirp@0.5.1",
      "needle": "npm:needle@2.2.2",
      "nopt": "npm:nopt@4.0.1",
      "npm-packlist": "npm:npm-packlist@1.1.11",
      "npmlog": "npm:npmlog@4.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rc": "npm:rc@1.2.8",
      "rimraf": "npm:rimraf@2.6.2",
      "semver": "npm:semver@5.5.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "tar": "npm:tar@4.4.6",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:nopt@4.0.1": {
      "abbrev": "npm:abbrev@1.1.1",
      "osenv": "npm:osenv@0.1.5",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:normalize-path@2.1.1": {
      "remove-trailing-separator": "npm:remove-trailing-separator@1.1.0"
    },
    "npm:npm-bundled@1.0.5": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:npm-packlist@1.1.11": {
      "ignore-walk": "npm:ignore-walk@3.0.1",
      "npm-bundled": "npm:npm-bundled@1.0.5",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:npmlog@4.1.2": {
      "are-we-there-yet": "npm:are-we-there-yet@1.1.5",
      "console-control-strings": "npm:console-control-strings@1.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "gauge": "npm:gauge@2.7.4",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "set-blocking": "npm:set-blocking@2.0.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:object-copy@0.1.0": {
      "copy-descriptor": "npm:copy-descriptor@0.1.1",
      "define-property": "npm:define-property@0.2.5",
      "kind-of": "npm:kind-of@3.2.2"
    },
    "npm:object-visit@1.0.1": {
      "isobject": "npm:isobject@3.0.1"
    },
    "npm:object.pick@1.3.0": {
      "isobject": "npm:isobject@3.0.1"
    },
    "npm:once@1.4.0": {
      "wrappy": "npm:wrappy@1.0.2"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:os-browserify@0.3.0": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:os-homedir@1.0.2": {
      "os": "github:jspm/nodelibs-os@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:os-tmpdir@1.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:osenv@0.1.5": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "os-homedir": "npm:os-homedir@1.0.2",
      "os-tmpdir": "npm:os-tmpdir@1.0.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:p-limit@1.3.0": {
      "p-try": "npm:p-try@1.0.0"
    },
    "npm:p-locate@2.0.0": {
      "p-limit": "npm:p-limit@1.3.0"
    },
    "npm:pako@0.2.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pako@1.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:parallel-transform@1.1.0": {
      "cyclist": "npm:cyclist@0.2.2",
      "inherits": "npm:inherits@2.0.3",
      "readable-stream": "npm:readable-stream@2.3.6",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:parse-asn1@5.1.1": {
      "asn1.js": "npm:asn1.js@4.10.1",
      "browserify-aes": "npm:browserify-aes@1.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.2.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
      "pbkdf2": "npm:pbkdf2@3.0.16",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-dirname@1.0.2": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:path-exists@3.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:path-is-absolute@1.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pbkdf2@3.0.16": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.2.0",
      "create-hmac": "npm:create-hmac@1.1.7",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "ripemd160": "npm:ripemd160@2.0.2",
      "safe-buffer": "npm:safe-buffer@5.1.2",
      "sha.js": "npm:sha.js@2.4.11"
    },
    "npm:pify@3.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pkg-dir@2.0.0": {
      "find-up": "npm:find-up@2.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:process-nextick-args@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:pseudomap@1.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:public-encrypt@4.0.2": {
      "bn.js": "npm:bn.js@4.11.8",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.2.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.1.1",
      "randombytes": "npm:randombytes@2.0.6"
    },
    "npm:pump@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "end-of-stream": "npm:end-of-stream@1.4.1",
      "once": "npm:once@1.4.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:pumpify@1.5.1": {
      "duplexify": "npm:duplexify@3.6.0",
      "inherits": "npm:inherits@2.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "pump": "npm:pump@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:punycode@2.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:randombytes@2.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "safe-buffer": "npm:safe-buffer@5.1.2"
    },
    "npm:randomfill@1.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "randombytes": "npm:randombytes@2.0.6",
      "safe-buffer": "npm:safe-buffer@5.1.2"
    },
    "npm:rc@1.2.8": {
      "deep-extend": "npm:deep-extend@0.6.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ini": "npm:ini@1.3.5",
      "minimist": "npm:minimist@1.2.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-json-comments": "npm:strip-json-comments@2.0.1"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@2.3.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@2.0.0",
      "safe-buffer": "npm:safe-buffer@5.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "npm:string_decoder@1.1.1",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:readdirp@2.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-fs": "npm:graceful-fs@4.1.11",
      "minimatch": "npm:minimatch@3.0.4",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.3.6",
      "set-immediate-shim": "npm:set-immediate-shim@1.0.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:regex-not@1.0.2": {
      "extend-shallow": "npm:extend-shallow@3.0.2",
      "safe-regex": "npm:safe-regex@1.1.0"
    },
    "npm:remove-trailing-separator@1.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:rimraf@2.6.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@7.1.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ripemd160@2.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "hash-base": "npm:hash-base@3.0.4",
      "inherits": "npm:inherits@2.0.3"
    },
    "npm:run-queue@1.0.3": {
      "aproba": "npm:aproba@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:safe-buffer@5.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:safe-regex@1.1.0": {
      "ret": "npm:ret@0.1.15"
    },
    "npm:safer-buffer@2.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sax@1.2.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:schema-utils@0.4.7": {
      "ajv": "npm:ajv@6.5.3",
      "ajv-keywords": "npm:ajv-keywords@3.2.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:semver@5.5.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:set-blocking@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:set-value@0.4.3": {
      "extend-shallow": "npm:extend-shallow@2.0.1",
      "is-extendable": "npm:is-extendable@0.1.1",
      "is-plain-object": "npm:is-plain-object@2.0.4",
      "to-object-path": "npm:to-object-path@0.3.0"
    },
    "npm:set-value@2.0.0": {
      "extend-shallow": "npm:extend-shallow@2.0.1",
      "is-extendable": "npm:is-extendable@0.1.1",
      "is-plain-object": "npm:is-plain-object@2.0.4",
      "split-string": "npm:split-string@3.1.0"
    },
    "npm:setimmediate@1.0.5": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sha.js@2.4.11": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "safe-buffer": "npm:safe-buffer@5.1.2"
    },
    "npm:signal-exit@3.0.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:snapdragon-node@2.1.1": {
      "define-property": "npm:define-property@1.0.0",
      "isobject": "npm:isobject@3.0.1",
      "snapdragon-util": "npm:snapdragon-util@3.0.1"
    },
    "npm:snapdragon-util@3.0.1": {
      "kind-of": "npm:kind-of@3.2.2"
    },
    "npm:snapdragon@0.8.2": {
      "base": "npm:base@0.11.2",
      "debug": "npm:debug@2.6.9",
      "define-property": "npm:define-property@0.2.5",
      "extend-shallow": "npm:extend-shallow@2.0.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "map-cache": "npm:map-cache@0.2.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "source-map": "npm:source-map@0.5.7",
      "source-map-resolve": "npm:source-map-resolve@0.5.2",
      "use": "npm:use@3.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:source-list-map@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map-resolve@0.5.2": {
      "atob": "npm:atob@2.1.2",
      "decode-uri-component": "npm:decode-uri-component@0.2.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "resolve-url": "npm:resolve-url@0.2.1",
      "source-map-url": "npm:source-map-url@0.4.0",
      "urix": "npm:urix@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:source-map@0.5.7": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.6.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:split-string@3.1.0": {
      "extend-shallow": "npm:extend-shallow@3.0.2"
    },
    "npm:ssri@5.3.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "safe-buffer": "npm:safe-buffer@5.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:static-extend@0.1.2": {
      "define-property": "npm:define-property@0.2.5",
      "object-copy": "npm:object-copy@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:stream-browserify@2.0.1": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "readable-stream": "npm:readable-stream@2.3.6"
    },
    "npm:stream-each@1.2.3": {
      "end-of-stream": "npm:end-of-stream@1.4.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-shift": "npm:stream-shift@1.0.0"
    },
    "npm:stream-http@2.8.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "builtin-status-codes": "npm:builtin-status-codes@3.0.0",
      "inherits": "npm:inherits@2.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.3.6",
      "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:stream-shift@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:string-width@1.0.2": {
      "code-point-at": "npm:code-point-at@1.1.0",
      "is-fullwidth-code-point": "npm:is-fullwidth-code-point@1.0.0",
      "strip-ansi": "npm:strip-ansi@3.0.1"
    },
    "npm:string-width@2.1.1": {
      "is-fullwidth-code-point": "npm:is-fullwidth-code-point@2.0.0",
      "strip-ansi": "npm:strip-ansi@4.0.0"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:string_decoder@1.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "safe-buffer": "npm:safe-buffer@5.1.2"
    },
    "npm:strip-ansi@3.0.1": {
      "ansi-regex": "npm:ansi-regex@2.1.1"
    },
    "npm:strip-ansi@4.0.0": {
      "ansi-regex": "npm:ansi-regex@3.0.0"
    },
    "npm:tapable@1.0.0": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:tar@4.4.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "chownr": "npm:chownr@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "fs-minipass": "npm:fs-minipass@1.2.5",
      "minipass": "npm:minipass@2.3.4",
      "minizlib": "npm:minizlib@1.1.0",
      "mkdirp": "npm:mkdirp@0.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "safe-buffer": "npm:safe-buffer@5.1.2",
      "yallist": "npm:yallist@3.0.2"
    },
    "npm:through2@2.0.3": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.3.6",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:timers-browserify@1.4.2": {
      "process": "npm:process@0.11.10"
    },
    "npm:timers-browserify@2.0.10": {
      "setimmediate": "npm:setimmediate@1.0.5"
    },
    "npm:to-arraybuffer@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:to-object-path@0.3.0": {
      "kind-of": "npm:kind-of@3.2.2"
    },
    "npm:to-regex-range@2.1.1": {
      "is-number": "npm:is-number@3.0.0",
      "repeat-string": "npm:repeat-string@1.6.1"
    },
    "npm:to-regex@3.0.2": {
      "define-property": "npm:define-property@2.0.2",
      "extend-shallow": "npm:extend-shallow@3.0.2",
      "regex-not": "npm:regex-not@1.0.2",
      "safe-regex": "npm:safe-regex@1.1.0"
    },
    "npm:uglify-es@3.3.10": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "commander": "npm:commander@2.14.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.6.1"
    },
    "npm:uglifyjs-webpack-plugin@1.3.0": {
      "cacache": "npm:cacache@10.0.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "find-cache-dir": "npm:find-cache-dir@1.0.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "schema-utils": "npm:schema-utils@0.4.7",
      "serialize-javascript": "npm:serialize-javascript@1.5.0",
      "source-map": "npm:source-map@0.6.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "uglify-es": "npm:uglify-es@3.3.10",
      "webpack": "npm:webpack@4.17.2",
      "webpack-sources": "npm:webpack-sources@1.2.0",
      "worker-farm": "npm:worker-farm@1.6.0"
    },
    "npm:union-value@1.0.0": {
      "arr-union": "npm:arr-union@3.1.0",
      "get-value": "npm:get-value@2.0.6",
      "is-extendable": "npm:is-extendable@0.1.1",
      "set-value": "npm:set-value@0.4.3"
    },
    "npm:unique-filename@1.1.0": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "unique-slug": "npm:unique-slug@2.0.0"
    },
    "npm:unique-slug@2.0.0": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "imurmurhash": "npm:imurmurhash@0.1.4"
    },
    "npm:unset-value@1.0.0": {
      "has-value": "npm:has-value@0.3.1",
      "isobject": "npm:isobject@3.0.1"
    },
    "npm:upath@1.1.0": {
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:uri-js@4.2.2": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "punycode": "npm:punycode@2.1.1"
    },
    "npm:urix@0.1.0": {
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:url@0.11.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0"
    },
    "npm:util-deprecate@1.0.2": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:watchpack@1.6.0": {
      "chokidar": "npm:chokidar@2.0.4",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "graceful-fs": "npm:graceful-fs@4.1.11",
      "neo-async": "npm:neo-async@2.5.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:webpack-sources@1.2.0": {
      "source-list-map": "npm:source-list-map@2.0.0",
      "source-map": "npm:source-map@0.6.1"
    },
    "npm:webpack@4.17.2": {
      "@webassemblyjs/ast": "npm:@webassemblyjs/ast@1.5.13",
      "@webassemblyjs/helper-module-context": "npm:@webassemblyjs/helper-module-context@1.5.13",
      "@webassemblyjs/wasm-edit": "npm:@webassemblyjs/wasm-edit@1.5.13",
      "@webassemblyjs/wasm-opt": "npm:@webassemblyjs/wasm-opt@1.5.13",
      "@webassemblyjs/wasm-parser": "npm:@webassemblyjs/wasm-parser@1.5.13",
      "acorn": "npm:acorn@5.7.2",
      "acorn-dynamic-import": "npm:acorn-dynamic-import@3.0.0",
      "ajv": "npm:ajv@6.5.3",
      "ajv-keywords": "npm:ajv-keywords@3.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "chrome-trace-event": "npm:chrome-trace-event@1.0.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "enhanced-resolve": "npm:enhanced-resolve@4.1.0",
      "eslint-scope": "npm:eslint-scope@4.0.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "json-parse-better-errors": "npm:json-parse-better-errors@1.0.2",
      "loader-runner": "npm:loader-runner@2.3.0",
      "loader-utils": "npm:loader-utils@1.1.0",
      "memory-fs": "npm:memory-fs@0.4.1",
      "micromatch": "npm:micromatch@3.1.10",
      "mkdirp": "npm:mkdirp@0.5.1",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "neo-async": "npm:neo-async@2.5.2",
      "node-libs-browser": "npm:node-libs-browser@2.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readline": "github:jspm/nodelibs-readline@0.1.0",
      "schema-utils": "npm:schema-utils@0.4.7",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "tapable": "npm:tapable@1.0.0",
      "uglifyjs-webpack-plugin": "npm:uglifyjs-webpack-plugin@1.3.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0",
      "watchpack": "npm:watchpack@1.6.0",
      "webpack-sources": "npm:webpack-sources@1.2.0"
    },
    "npm:wide-align@1.1.3": {
      "string-width": "npm:string-width@2.1.1"
    },
    "npm:worker-farm@1.6.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "errno": "npm:errno@0.1.7",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:y18n@4.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    }
  }
});
