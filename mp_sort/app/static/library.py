from org.transcrypt.stubs.browser import *
import random

array = []

def gen_random_int(number, seed):
	result = list(range(number))
	random.seed(seed)
	random.shuffle(result)
	return result

def generate():
	global array
	number = 10
	seed = 200
 
    # convert the items into one single string
    # the number should be separated by a comma
    # and a full stop should end the string.
	array = gen_random_int(number, seed)
	array_str = [str(i) for i in array]
	array_str = ','.join(array_str)+'.'

	# This line is to placed the string into the HTML
	# under div section with the id called "generate"	
	document.getElementById("generate").innerHTML = array_str


def sortnumber1():
	'''	This function is used in Exercise 1.
		The function is called when the sort button is clicked.

		You need to do the following:
		- get the list of numbers from the global variable array and 
			copy it to a new list
		- call your sort function, either bubble sort or insertion sort
		- create a string of the sorted numbers and store it in array_str
	'''
	new_array = []
	for i in range(len(array)):
		new_array.append(array[i])

    ###BEGIN SOLUTION
	for i in range(0,len(new_array)):
		for j in range(0, len(new_array) - 1):
			if new_array[j] > new_array[j+1]:
				new_array[j], new_array[j+1] = new_array[j+1], new_array[j]
    ###END SOLUTION

	array_str = ""

	for i in range(0 , len(new_array) - 1):
		array_str += str(new_array[i])
		array_str += ","
	array_str += str(new_array[-1])
	array_str += "."
	
	document.getElementById("sorted").innerHTML = array_str

def sortnumber2():
	'''	This function is used in Exercise 2.
		The function is called when the sort button is clicked.
	
		You need to do the following:
		- Get the numbers from a string variable "value".
		- Split the string using comma as the separator and convert them to 
			a list of numbers
		- call your sort function, either bubble sort or insertion sort
		- create a string of the sorted numbers and store it in array_str
	'''
	# The following line get the value of the text input called "numbers"
	value = document.getElementsByName("numbers")[0].value

	# Throw alert and stop if nothing in the text input
	if value == "":
		window.alert("Your textbox is empty")
		return
	
	new_array = value.split(",")
	new_array_int = [int(i) for i in new_array]

	for i in range(0, len(new_array_int)):
		for j in range(0, len(new_array_int) - 1):
			if new_array_int[j] > new_array_int[j+1]:
				new_array_int[j], new_array_int[j+1] = new_array_int[j+1], new_array_int[j]

	array_str = ""

	for i in range(0 , len(new_array_int) - 1):
		array_str += str(new_array_int[i])
		array_str += ","
	array_str += str(new_array_int[-1])
	array_str += "."

	document.getElementById("sorted").innerHTML = array_str


