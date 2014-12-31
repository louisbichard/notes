# Copy an array
## Instructions

Write a function that takes a list of numbers in python, and makes a copy.

## Answer

	def copy_list(l):
	  """Make a copy of a list of numbers"""
	  return l[:]

# Remove duplicates from an array

    def remove_duplicates(list):
        result = []
        print "Original array", list
        for curr in list:
            if curr not in result:
                result.append(curr)
                print "Not in array"
        return result

# Creating classes using others as bases

    class Employee(object):
        """Models real-life employees!"""
        def __init__(self, employee_name):
            self.employee_name = employee_name

        def calculate_wage(self, hours):
            self.hours = hours
            return hours * 20.00

    class PartTimeEmployee(Employee):

        def calculate_wage(self, hours):
            self.hours = hours
            return hours * 12.00

        def full_time_wage(self, hours):
            return super(PartTimeEmployee, self).calculate_wage(hours)

    print PartTimeEmployee('milton').full_time_wage(1)