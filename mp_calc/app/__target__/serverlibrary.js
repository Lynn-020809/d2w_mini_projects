'use strict';import{AssertionError,AttributeError,BaseException,DeprecationWarning,Exception,IndexError,IterableError,KeyError,NotImplementedError,RuntimeWarning,StopIteration,UserWarning,ValueError,Warning,__JsIterator__,__PyIterator__,__Terminal__,__add__,__and__,__call__,__class__,__envir__,__eq__,__floordiv__,__ge__,__get__,__getcm__,__getitem__,__getslice__,__getsm__,__gt__,__i__,__iadd__,__iand__,__idiv__,__ijsmod__,__ilshift__,__imatmul__,__imod__,__imul__,__in__,__init__,__ior__,__ipow__,
__irshift__,__isub__,__ixor__,__jsUsePyNext__,__jsmod__,__k__,__kwargtrans__,__le__,__lshift__,__lt__,__matmul__,__mergefields__,__mergekwargtrans__,__mod__,__mul__,__ne__,__neg__,__nest__,__or__,__pow__,__pragma__,__proxy__,__pyUseJsNext__,__rshift__,__setitem__,__setproperty__,__setslice__,__sort__,__specialattrib__,__sub__,__super__,__t__,__terminal__,__truediv__,__withblock__,__xor__,abs,all,any,assert,bool,bytearray,bytes,callable,chr,copy,deepcopy,delattr,dict,dir,divmod,enumerate,filter,float,
getattr,hasattr,input,int,isinstance,issubclass,len,list,map,max,min,object,ord,pow,print,property,py_TypeError,py_iter,py_metatype,py_next,py_reversed,py_typeof,range,repr,round,set,setattr,sorted,str,sum,tuple,zip}from"./org.transcrypt.__runtime__.js";var __name__="__main__";export var merge=function(array,first,middle,last,byfunc){var left_point=0;var right_point=0;var total_index=first;var left_array=array.__getslice__(first,middle+1,1);var right_array=array.__getslice__(middle+1,last+1,1);while(left_point<
len(left_array)&&right_point<len(right_array)){if(byfunc(left_array[left_point])<=byfunc(right_array[right_point])){array[total_index]=left_array[left_point];left_point++}else{array[total_index]=right_array[right_point];right_point++}total_index++}if(left_point<len(left_array))for(var i=left_point;i<len(left_array);i++){array[total_index]=left_array[i];total_index++}if(right_point<len(right_array))for(var j=right_point;j<len(right_array);j++){array[total_index]=right_array[j];total_index++}};export var mergesort_recursion=
function(array,first,last,byfunc){if(last-first>=1){var middle=Math.floor((last+first)/2);mergesort_recursion(array,first,middle,byfunc);mergesort_recursion(array,middle+1,last,byfunc);merge(array,first,middle,last,byfunc)}};export var mergesort=function(array,byfunc){if(typeof byfunc=="undefined"||byfunc!=null&&byfunc.hasOwnProperty("__kwargtrans__"))var byfunc=null;var item_total=len(array);mergesort_recursion(array,0,item_total-1,byfunc)};export var Stack=__class__("Stack",[object],{__module__:__name__,
get __init__(){return __get__(this,function(self){self.py_items=[]})},get push(){return __get__(this,function(self,item){self.py_items.append(item)})},get py_pop(){return __get__(this,function(self){if(self.is_empty)return null;var pop_item=self.py_items.py_pop();return pop_item})},get peek(){return __get__(this,function(self){if(self.is_empty)return null;return self.py_items[-1]})},get _get_is_empty(){return __get__(this,function(self){if(self.size==0)return true;return false})},get _get_size(){return __get__(this,
function(self){return len(self.py_items)})}});Object.defineProperty(Stack,"size",property.call(Stack,Stack._get_size));Object.defineProperty(Stack,"is_empty",property.call(Stack,Stack._get_is_empty));export var EvaluateExpression=__class__("EvaluateExpression",[object],{__module__:__name__,valid_char:"0123456789+-*/() ",digits:"0123456789",chars:"+-*/()",get __init__(){return __get__(this,function(self,string){if(typeof string=="undefined"||string!=null&&string.hasOwnProperty("__kwargtrans__"))var string=
"";self.__expr=string})},get _get_expression(){return __get__(this,function(self){return self.__expr})},get _set_expression(){return __get__(this,function(self,new_expr){for(var i of new_expr)if(!__in__(i,self.valid_char)){self.__expr="";return}self.__expr=new_expr})},get insert_space(){return __get__(this,function(self){var temp_expr="";for(var i=0;i<len(self.__expr);i++){if(self.__expr[i]!=" "&&!__in__(self.__expr[i],self.digits)){temp_expr+=" ";temp_expr+=self.__expr[i];temp_expr+=" "}if(__in__(self.__expr[i],
self.digits))temp_expr+=self.__expr[i]}self.expression=temp_expr;return self.expression})},get process_operator(){return __get__(this,function(self,operand_stack,operator_stack){var operator=operator_stack.py_pop();var right_operand=int(operand_stack.py_pop());var left_operand=int(operand_stack.py_pop());if(operator=="+")operand_stack.push(left_operand+right_operand);else if(operator=="-")operand_stack.push(left_operand-right_operand);else if(operator=="*")operand_stack.push(left_operand*right_operand);
else if(operator=="/")operand_stack.push(Math.floor(left_operand/right_operand))})}});Object.defineProperty(EvaluateExpression,"expression",property.call(EvaluateExpression,EvaluateExpression._get_expression,EvaluateExpression._set_expression));export var EvaluateExpression=__class__("EvaluateExpression",[object],{__module__:__name__,valid_char:"0123456789+-*/() ",digits:"0123456789",chars:"+-*/() ",negative_check:"+-*/(",get __init__(){return __get__(this,function(self,string){if(typeof string==
"undefined"||string!=null&&string.hasOwnProperty("__kwargtrans__"))var string="";self.__expr=string})},get _get_expression(){return __get__(this,function(self){return self.__expr})},get _set_expression(){return __get__(this,function(self,new_expr){for(var i of new_expr)if(!__in__(i,self.valid_char)){self.__expr="";return}self.__expr=new_expr})},get insert_space(){return __get__(this,function(self){var temp_expr=" ( ";for(var i=0;i<len(self.__expr);i++){if(self.__expr[i]!=" "&&!__in__(self.__expr[i],
self.digits)){temp_expr+=" ";temp_expr+=self.__expr[i];temp_expr+=" "}if(__in__(self.__expr[i],self.digits))temp_expr+=self.__expr[i]}temp_expr+=" ) ";self.expression=temp_expr;return self.expression})},get process_operator(){return __get__(this,function(self,operand_stack,operator_stack){var operator=operator_stack.py_pop();var right_operand=int(operand_stack.py_pop());var left_operand=int(operand_stack.py_pop());if(operator=="+")operand_stack.push(left_operand+right_operand);else if(operator=="-")operand_stack.push(left_operand-
right_operand);else if(operator=="*")operand_stack.push(left_operand*right_operand);else if(operator=="/")operand_stack.push(Math.floor(left_operand/right_operand))})},get extract_operator(){return __get__(this,function(self,op,operand_stack,operator_stack){if(op=="+"||op=="-"){while(operator_stack.peek()!="("&&operator_stack.peek()!=")"&&operator_stack.peek()!=null)self.process_operator(operand_stack,operator_stack);operator_stack.push(op)}if(op=="*"||op=="/"){while(operator_stack.peek()=="*"||operator_stack.peek()==
"/")self.process_operator(operand_stack,operator_stack);operator_stack.push(op)}if(op=="(")operator_stack.push(op);if(op==")"){while(operator_stack.peek()!="(")self.process_operator(operand_stack,operator_stack);operator_stack.py_pop()}})},get enable_negative_num(){return __get__(this,function(self,tokens){for(var i=0;i<len(tokens);i++)if(tokens[i]=="-"&&__in__(tokens[i-1],self.negative_check))tokens.insert(i,"0");return tokens})},get evaluate(){return __get__(this,function(self){var operand_stack=
Stack();var operator_stack=Stack();var expression=self.insert_space();var tokens=expression.py_split();var tokens=self.enable_negative_num(tokens);for(var i=0;i<len(tokens);i++)if(!__in__(tokens[i],self.chars))operand_stack.push(tokens[i]);else self.extract_operator(tokens[i],operand_stack,operator_stack);var result=operand_stack.py_pop();return result})}});Object.defineProperty(EvaluateExpression,"expression",property.call(EvaluateExpression,EvaluateExpression._get_expression,EvaluateExpression._set_expression));
export var get_smallest_three=function(challenge){var records=challenge.records;var times=function(){var __accu0__=[];for(var r of records)__accu0__.append(r);return __accu0__}();mergesort(times,function __lambda__(x){return x.elapsed_time});return times.__getslice__(0,3,1)};

//# sourceMappingURL=serverlibrary.map