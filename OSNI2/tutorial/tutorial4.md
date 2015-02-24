# What is the purpose of disk scheduling in an operating system?

- Ensure effectiveness in recieving and sending data when making I/O requests. 
- Minimise the access time (costs associated with hooking up the hard disk correctly)

# For a given queue of pending requests to access tracks on the magnetic disk, does the shortest-seek-timefirst (SSTF) disk scheduling algorithm always generate an optimal I/O schedule? You should either give some reasoning about why it does always give the optimal schedule, or else give an example to show that in some cases in does not provide an optimal solution.

Doesn't provide an optimal solution if a lot of the tasks are on one side of the disk as this will lead to what is known as 'starvation'. Starvation is where a lot of tasks keep being brought in on one side of the disk, but are never served on the other sides

# Suppose that a disk drive has 1,000 tracks, numbered 0 to 999. The drive is currently serving a request at track 125, and the previous request was at track 150. The queue of pending requests, in FCFS order, is:
125, 75, 975, 525, 25, 900, 750

25, 75, 125, 525, 750, 900, 975
Starting from the current head position, what is the total distance (in tracks) that the disk arm moves to satisfy
all the pending requests for each of the following disk scheduling algorithms?
a) FCFS
(125 - 75) + (975 - 75) + (925 - 525) + (525 - 25) + (900 - 25) + (900 - 750) 
2875
b) SSTF
(125 - 75) + (75 - 50) + (525 - 25) + (750 - 525) + (900 - 725) + (975 - 900)
1050
c) SCAN
(125) + (1000)
1125

# Consider a Level-0 RAID scheme using block-level striping with 8 hard drives. If a process requests data from
blocks 7, 8, 9, …, 20, then how many blocks of data would be transferred from each drive?
5. a) What is the purpose of mirroring in a RAID scheme?
b) What is the purpose of striping in a RAID scheme?