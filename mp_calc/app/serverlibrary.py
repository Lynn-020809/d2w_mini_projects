def merge(array, first, middle, last, byfunc):
    left_point = 0
    right_point = 0
    total_index = first
    left_array = array[first: middle+1]
    right_array = array[middle+1: last+1]
    while (left_point < len(left_array) and right_point < len(right_array)):
        if (byfunc(left_array[left_point]) <= byfunc(right_array[right_point])):
            array[total_index] = left_array[left_point]
            left_point += 1
        else:
            array[total_index] = right_array[right_point]
            right_point += 1
        total_index += 1
    if (left_point < len(left_array)):
        for i in range(left_point, len(left_array)):
            array[total_index] = left_array[i]
            total_index += 1
    if (right_point < len(right_array)):
        for j in range(right_point, len(right_array)):
            array[total_index] = right_array[j]
            total_index += 1

def mergesort_recursion(array, first, last, byfunc):
    if (last-first >= 1):
        middle = (last + first)//2
        mergesort_recursion(array, first, middle, byfunc)
        mergesort_recursion(array, middle+1, last, byfunc)
        merge(array, first, middle, last, byfunc)

def mergesort(array, byfunc=None):
    item_total = len(array)
    mergesort_recursion(array, 0, item_total-1, byfunc)

class Stack:
    def __init__(self):
        self.__items = []
        
    def push(self, item):
        self.__items.append(item)
        
    def pop(self):
        if (self.is_empty):
            return None
        pop_item = self.__items.pop()
        return pop_item
        
    def peek(self):
        if (self.is_empty):
            return None
        return self.__items[-1]

    @property
    def is_empty(self):
        if (self.size == 0):
            return True
        return False
        
    @property
    def size(self):
        return len(self.__items)


class EvaluateExpression:
    valid_char = '0123456789+-*/() '
    digits = "0123456789"
    chars = "+-*/()"

    def __init__(self, string=""):
        self.__expr = string

    @property
    def expression(self):
        return self.__expr

    @expression.setter
    def expression(self, new_expr):
        for i in new_expr:
            if i not in self.valid_char:
                self.__expr = ""
                return
        self.__expr = new_expr

    def insert_space(self):
        temp_expr = ''
        for i in range (len(self.__expr)):
            if (self.__expr[i] != ' ' and self.__expr[i] not in self.digits):
                temp_expr += ' '
                temp_expr += self.__expr[i]
                temp_expr += ' '
            if (self.__expr[i] in self.digits):
                temp_expr += self.__expr[i]
        self.expression = temp_expr
        return self.expression

    def process_operator(self, operand_stack, operator_stack):
        operator = operator_stack.pop()
        right_operand = int(operand_stack.pop())
        left_operand = int(operand_stack.pop())
        if (operator == "+"):
            operand_stack.push(left_operand + right_operand)
        elif (operator == "-"):
            operand_stack.push(left_operand - right_operand)
        elif (operator == "*"):
            operand_stack.push(left_operand * right_operand)
        elif (operator == "/"):
            operand_stack.push(left_operand // right_operand)

class EvaluateExpression:
    valid_char = '0123456789+-*/() '
    digits = "0123456789"
    chars = "+-*/() "
    negative_check = "+-*/("

    def __init__(self, string=""):
        self.__expr = string

    @property
    def expression(self):
        return self.__expr

    @expression.setter
    def expression(self, new_expr):
        for i in new_expr:
            if i not in self.valid_char:
                self.__expr = ""
                return
        self.__expr = new_expr

    def insert_space(self):
        temp_expr = ' ( '
        for i in range (len(self.__expr)):
            if (self.__expr[i] != ' ' and self.__expr[i] not in self.digits):
                temp_expr += ' '
                temp_expr += self.__expr[i]
                temp_expr += ' '
            if (self.__expr[i] in self.digits):
                temp_expr += self.__expr[i]
        temp_expr += ' ) '
        self.expression = temp_expr
        return self.expression

    def process_operator(self, operand_stack, operator_stack):
        operator = operator_stack.pop()
        right_operand = int(operand_stack.pop())
        left_operand = int(operand_stack.pop())
        if (operator == "+"):
            operand_stack.push(left_operand + right_operand)
        elif (operator == "-"):
            operand_stack.push(left_operand - right_operand)
        elif (operator == "*"):
            operand_stack.push(left_operand * right_operand)
        elif (operator == "/"):
            operand_stack.push(left_operand // right_operand)
            
    def extract_operator(self, op, operand_stack, operator_stack):
        if (op == '+' or op == '-'):
            while (operator_stack.peek() != '(' and operator_stack.peek() != ')' and operator_stack.peek() != None):
                self.process_operator(operand_stack, operator_stack)
            operator_stack.push(op)
        if (op == '*' or op == '/'):
            while (operator_stack.peek() == '*' or operator_stack.peek() == '/'):
                self.process_operator(operand_stack, operator_stack)
            operator_stack.push(op)
        if (op == '('):
            operator_stack.push(op)
        if (op == ')'):
            while (operator_stack.peek() != '('):
                self.process_operator(operand_stack, operator_stack)
            operator_stack.pop()

    def enable_negative_num(self, tokens):
        for i in range(len(tokens)):
            if (tokens[i] == '-') and (tokens[i-1] in self.negative_check):
                tokens.insert(i, '0')
        return tokens
            
    def evaluate(self):
        operand_stack = Stack()
        operator_stack = Stack()
        expression = self.insert_space()
        tokens = expression.split()
        tokens = self.enable_negative_num(tokens)
        for i in range(len(tokens)):
            if (tokens[i] not in self.chars):
                operand_stack.push(tokens[i])
            else:
                self.extract_operator(tokens[i], operand_stack, operator_stack)
        result = operand_stack.pop()
        return result

def get_smallest_three(challenge):
    records = challenge.records
    times = [r for r in records]
    mergesort(times, lambda x: x.elapsed_time)
    return times[:3]





