// Transcrypt'ed from Python, 2021-09-20 17:48:45
var random = {};
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as __module_random__ from './random.js';
__nest__ (random, '', __module_random__);
var __name__ = '__main__';
export var array = [];
export var gen_random_int = function (number, seed) {
	var result = list (range (number));
	random.seed (seed);
	random.shuffle (result);
	return result;
};
export var generate = function () {
	var number = 10;
	var seed = 200;
	array = gen_random_int (number, seed);
	var array_str = (function () {
		var __accu0__ = [];
		for (var i of array) {
			__accu0__.append (str (i));
		}
		return __accu0__;
	}) ();
	var array_str = ','.join (array_str) + '.';
	document.getElementById ('generate').innerHTML = array_str;
};
export var sortnumber1 = function () {
	var new_array = [];
	for (var i = 0; i < len (array); i++) {
		new_array.append (array [i]);
	}
	for (var i = 0; i < len (new_array); i++) {
		for (var j = 0; j < len (new_array) - 1; j++) {
			if (new_array [j] > new_array [j + 1]) {
				var __left0__ = tuple ([new_array [j + 1], new_array [j]]);
				new_array [j] = __left0__ [0];
				new_array [j + 1] = __left0__ [1];
			}
		}
	}
	var array_str = '';
	for (var i = 0; i < len (new_array) - 1; i++) {
		array_str += str (new_array [i]);
		array_str += ',';
	}
	array_str += str (new_array [-(1)]);
	array_str += '.';
	document.getElementById ('sorted').innerHTML = array_str;
};
export var sortnumber2 = function () {
	var value = document.getElementsByName ('numbers') [0].value;
	if (value == '') {
		window.alert ('Your textbox is empty');
		return ;
	}
	var new_array = value.py_split (',');
	var new_array_int = (function () {
		var __accu0__ = [];
		for (var i of new_array) {
			__accu0__.append (int (i));
		}
		return __accu0__;
	}) ();
	for (var i = 0; i < len (new_array_int); i++) {
		for (var j = 0; j < len (new_array_int) - 1; j++) {
			if (new_array_int [j] > new_array_int [j + 1]) {
				var __left0__ = tuple ([new_array_int [j + 1], new_array_int [j]]);
				new_array_int [j] = __left0__ [0];
				new_array_int [j + 1] = __left0__ [1];
			}
		}
	}
	var array_str = '';
	for (var i = 0; i < len (new_array_int) - 1; i++) {
		array_str += str (new_array_int [i]);
		array_str += ',';
	}
	array_str += str (new_array_int [-(1)]);
	array_str += '.';
	document.getElementById ('sorted').innerHTML = array_str;
};

//# sourceMappingURL=library.map