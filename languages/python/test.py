def fibonacci(num1, num2):
	added = num1 + num2
	print 
	if len(str(added)) > 100:
		return added
	else:
		return fibonacci(num2, added)

print fibonacci(0,1)