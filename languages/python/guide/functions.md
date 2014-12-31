# Returning functions
=====================

def add(num):
    def wrapper(other):
        return num + other
    return wrapper