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