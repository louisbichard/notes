# Code comments

	=begin
	Some code comment so I don't forget
	=end

or 

	# Some comment here

# Flow control statements

##IF statement

Note the stupid spelling of elsif
Also note the end on the IF

	if x > y
		print "It is greater than y"
	elsif
		print "It is not"
	else
		print "Something else goes here"
	end

##UNLESS statement

The opposite of if, so if it is false

##Powers
	
	2**3 = 2 * 2 * 2 = 8
	3**3 = 3 * 3 * 3 = 27

	
## Getting user input

gets.chomp gets the user input and removes the new line

	print "Plz may you give me a strng?"
	gets.chomp

##Performing functions on variables

Note you do not have to assign the variable back if using the bang (!) operator at the end of the function

	user_input.downcase!

# Utility functions

__String replacing__:

Example for replacing all instances of s's in a string with th's

	user_input.gsub!(/s/, "th")

## The while loop

	i = 0
	while i < 5
	  puts i
	  i = i + 1
	end

## The until loop

Same as the while

	i = 0
	until i < 5
	  puts i
	  i = i + 1
	end

## The for loop

	for num in 1...10
	  puts num
	end


Continue where you left off: 

http://www.codecademy.com/courses/ruby-beginner-en-XYcN1/1/2?curriculum_id=5059f8619189a5000201fbcb