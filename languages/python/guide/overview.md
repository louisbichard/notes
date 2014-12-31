# General notes
================

- Arguments need to take the exact specified amount of arguments that the funciton defines

# Setting variables

	my_int = 7
	my_float = 1.23

# Booleans
_Note: Note that booleans are capital letters_

	my_bool = True

# Indentation
	
	def spam():
	    eggs = 12
	    return eggs
        
	print spam()

# Comments
	
	# Some comment

## Multiline comments
	
	"""
	Some comment code goes here

	"""

#Math operators

## Addition
	some_variable = 234 + 243
## Exponentials
	some_variable = 234 ** 243
## Modulo 
	some_remainder = 2 % 2

# Printing  

	print "Hello world!"

# String operators

## Length of string
	parrot = "Norwegian Blue"
	print len(parrot)

## is alpha

	"String".isalpha()

## Slicing a string
to slice a word from 1 to the end	

	new_word = new_word[1:len(new_word)]

# String to lower case

	parrot = "Norwegian Blue"

	print parrot.lower()

# Converting non strings into strings

	print str(pi)

# Function usage

Usage of global functions such as: len() are available as they are not tied to one data type as opposed to functions such as upper() which only work and only make sense for in strings)

# String concatentation

	print("Spam " + "and" + " eggs")

# String formatting

	name = raw_input("What is your name?")
	quest = raw_input("What is your quest?")
	color = raw_input("What is your favorite color?")

	print "Ah, so your name is %s, your quest is %s, " \
	"and your favorite color is %s." % (name, quest, color)

or
	now = datetime.now()
	print '%s/%s/%s' % (now.month, now.day, now.year)

# Date time objects

	from datetime import datetime

	now = datetime.now()

	print now

	print now.year

	print now.month

	print now.day

# Comparators

	==
	!=
	< 
	<=
	>=

# or and and not
For example, True or not False and False returns True.

	not is evaluated first;
	and is evaluated next;
	or is evaluated last.


# Defining a function

	def using_control_again():
        return "Success #2"

# Conditionals
Notice the use of colons

	def greater_less_equal_5(answer):
	    if ________:
	        return 1
	    elif ________:          
	        return -1
	    else:
	        return 8


# Getting user input

	original = raw_input("Enter a word:")

# Math functions
================

__Max__: For the max number from a list of numbers

	maximum = max(1, 3, 4, 5, 6) # --> Returns 6

__Min__: For the minimum number from a list of numbers

	minimum = min(1, 3, 4, 5, 6) # --> Returns 1

__Abs__: The absolute distance from 0 (always a positive value)

	abs(-40) # -> Returns 40

# Importing modules
===================	

## Importing all methods
__note:__ by this method you still have to call `math.sqrt`, just `sqrt` is not global
	
	import math

	print math.sqrt(25)

## importing single methods

	from math import sqrt

Now you can do

	sqrt(25)

## Importing all methods
__note__: This will import all math methods and make them available to the file
__note__: This is also _dangerous_ as it pollutest the namespaces of functions and variables

	from math import * 

## View all methods of a module

	import math            # Imports the math module
	everything = dir(math) # Sets everything to a list of things from math
	print everything       # Prints 'em all!

# Type checking
===============

	print type(42) # --> int
	print type(34.343) # --> float
	print type("Some string") # --> str

Can be used as such:

	if type("something") == str --> True

# Looping
=========

# For loop
	my_list = [1,9,3,8,5,7]

	for number in my_list:
	    print(2 * number)

# Looping through a string

	word = "Programming is fun!"

	for letter in word:
	    # Only print out the letter i
	    if letter == "i":
	        print letter

# For a certaing range

	for i in range(len(list)):
	    print list[i]

# While loop
	
	while count < 5:
    print "Hello, I am a while and count is", count
    count += 1

# While else loop
if the condition is true and a brea is executed, the else isn't ran
if the condition is false than else is ran

	while guesses_left > 0:
	    guess = int(raw_input("What is your guess Louey???!"))
	    guesses_left -= 1
	else:
	    print "You lose!"

# Classes
=========


	class Animal(object):
	    def __init__(self, name):
	        self.name = name

	zebra = Animal("Jeffrey")

	print zebra.name

