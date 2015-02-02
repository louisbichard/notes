
Note: Different names for virtual and real addresses: 
- Relative and absolute
- Logical and physical address

- RAM = Main memory

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

# Frames
- Are "pages" within the main memory
- 1 page will fit into 1 frame

# Page table
- Is the link between pages and frames
- Defines where the page can be found within the main memory
- Is basically with the link between a page and a frame

# Demand paging
- We leave all the pages of a process on the hard disk
- When we try to access a page, load that into the RAM
- Example: 
    - A game has many 'levels', it cannot load all of the levels or data into the RAM at any one time
    - When user starts a level or game, only the data or code associated with that level will be loaded up
    - Will only require so much data, on the RAM at any one time
    
# Page fault
- When a page is attempted to be accessed but is not in the main memory
- When this occurs, it loads the relevant page that has been requested

# Purpose of pages, RAM and Hard disk
- Hardware limitations mean that all data cannot be loaded into the RAM
- RAM is volatile (all the data is lost when the machine is shut down)

# Valid-Invalid bit
- Each page table entry has a valid-invalid bit
- This will tell us if that particular frame is loaded into the RAM from the hard drive

# Handling 

# Trap definition
- A software interrupt

# Performance of demand paging
- Page fault rate is between 0 and 1
- No page faults is better, you don't want to be getting page faults and waiting all the time
- Page fault rate = 0 <= p <=1 

# Effective access time (DON'T HAVE TO REVISE THIS)
- Is how long it takes for memory access
- When there is a page fault, it needs to: 
    1. Boot up the operating system (takes a small amount of time, but still relevant) 
    2. swap out a page
    3. Bring in a new page 
    4. Restart the page table
- Small changes in the EAT will lead to massive (exponential) increases speed

# How demand paging is achieved
- Algorithms are used to decide which pages to replace in memory

# Victim frame
- Is a page that is chosen to be removed so that a new page can replace it

# FIFO page replacement
- In a real system it is likely that a system will be accessing the same pages over and over again
- Access to pages may be like 1,4,6,1,6,1,6,1
- Pages that are the oldest will be replaced

# Modified bit
- Also called a 'dirty bit'
- Only need to save pages to backing stores if it has been modified

# Define: Mutliprogramming/ Multitasking
- Switch between 

# Thrashing
- Too many processes being ran at the time
- Some pages swaps are made to allow another process to run, but this means taking pages from another processes working set, stopping it from working. This means now that there are multiple processes that aren't running and the processor is merely allocating pages arbitrarily, but without properly allowing each process to have access to it's working set (and thus run effectively). Remember the example with the paper that he shows us in class where there are so many processes that can't run as they are all requesting different values from their working set, but none have a full working set, and thus cannot run effectively
- Ends up doing no useful work, but instead is just swapping pages 
- The more concurrent programs running, the more likelihood that there will be swapping
- Having more processes is usually better for CPU utilisation, however this 'drops off a cliff' when thrashing starts to occur

# How to prevent thrashing
- To resolve the large amount of processing power degredation, some processes are closed completely

# The working set theory
- A process has something called a working set associated with it
- Is a set of pages that have been accessed in the past X amount of time
- COmpute the working set size for each process (I) 
- You need to calculate all the pages that the process needs and 
- Keeping the demand for pages down will reduce the propencity for thrashing to occur

# Inverted page table
- 

# Associative memory
Outside of scope ( do not bother revising )



















