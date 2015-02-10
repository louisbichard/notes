# Processor scheduling
 
## Process states
    Running, Runnable & blocked processes

- The difference between the status of programs

# Transitions between states
- Running is pushed to blocked 
- Running and runable is decided by the scheduler
- Blocked to runnable occurs if 'wait' the conditiion is satisfied

# Decsystem 10 - scheduler
    + Keeps required information in 3 tables    
    + Tables are: JBTQ, JBSTS, QTT

# Job table queue
- A queue is an important data structure
- Stores all the sets of jobs in three 'priority queues'

# Definiton: Queue
- Need to be able to add elements to the back and the front of the queue
- Queues are sometimes called FIFO structure
    + First in first out (Fair queue type system)

# Definition: Stack
- LIFO data structure
- Items are taken from the same way that they are put into the stack

# Doubly linked list
- A list of all jobs in the queue
- Each element has a link (pointer) to the next job in the queue and a pointer to the previous job in the queue
- Pointers basically point to the last job in the list, and the upcoming one

## Why use a doubly linked list?
- Efficiency
- Efficient deletion and insertion
- The two most important elements in a queue are the jobs at the start of the queue and the end of the queue

# JBTQ
- A row for each of the jobs in the system
- Negative indices are used for priority queues 1/2/3
- The next job in queue column is populated related to the incoming jobs
    + If a job incoming is 6 -> 4 -> 7 then the column is populated so that the 4th index is the number 4, and the next value is 7, so the column is popualted with a seven to indicate the next value to come in the queue
    + A -1 denotes the gap at the end of the array. So -1 is pointed to the first element (i.e in this case, 6)
    + A -1 is used for priority queue 1, a -2 is used for priority queue 2 and so on
    + The negative indices is used for the end and start of the array (as there is no value at this part, so rather than have a null value, a placeholder negative index is used for this part in the array)
    + if there is nothing in a queue then the placeholder for the queue is used in the place in the queue in the negative indices box
- Priority queues are executed in order

## Wait queue
- Those that are blocked, those in the runnable queue are organised into the tbales
- 

# Notes on how you would update the table if you were to insert a job into the job table queue
    + Look up the - value for that queue, and look up the current value in the table. Replace the current value with the new item, update the new item with the old item, and the upcoming - value, and then update the - value with the new number to be added to the job queue

# Job status bits
- Run is set to 1 if the jobs are runnable
- JRQ bit is set to 1 if the job state has changed and needs to be re-queued
- The wait state code is the reason the job is not runnable

# Quantum run time left
- Measured in jiffies
- Amount of time that the program should be left to run undisturbed

# What happens when quantum run time is exceeded
- 

# Ways in which a scheduler could start to run

# Definition: Time slice
- At the end of a time slice, the quantum run time is decremented by a single value
- Jobs are only requeued at the end of a time slice

#  QTT
- Queue transfer table tells us which queue to go to
- And which quantum run time to set
- Each entry is comprised of 2 pieces of information
    + The destination queue, the queue that needs to be moved to
    + What to set the quantum run time to when the job is ran
    + 

# Question 2 at the last slide
- An I/O bound program is likely to be in the wait queue, while the I/O request is completed.

# Why is the scheduler built into a table
- Allows the user to modify the table itself in order to manipulate the QTT for instance
- Allows the scheduler to be more dynamic for instance
- This allows the scheduler to check whether the system was particularly slow, and then modify the construct
- Modern schedulers will modify their own values based on data that they collect about how the jobs are being used in the system

# Decsystem-10 example
# When is QRT decreased?
- When the process over runs the end of the time slice the QRT is then decremented at that point in time, it is not relevant what else has ran, only what is running at that point in time.
- 






































































