
Note: Different names for virtual and real addresses: 
- Relative and absolute
- Logical and physical address

# Definitions

__Virtual address__: Used by the program and is between 0 and the amount of memory allocated to the program

__Real address__: Some address in main memory

# What is segmentation 

- Splitting a program up logically, so some segments are code, some constants etc
- The means permissions such as w,r,x can be specified for each segment
- Allows to protect and share memory
- Wasteful of space

# Paging
- Split into equally sized pages
- Not segmented into types, random mess of constants, functions etc
- 