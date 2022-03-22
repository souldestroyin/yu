(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.III = {}));
})(this, (function (exports) { 'use strict';

	let a = 666;


	const b = a;

	console.log('hello');


	 const x = 12;


	console.log(b);

	exports.x = x;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
