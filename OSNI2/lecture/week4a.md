
# Device handler

Software that allows the OS to talk to a device

# Device drivers

__Definition of Shareable __:  Possibility of multiple requests, possible for multiple requests

__Definition of Non-Shareable __: Device allocated to one program, one request at a time

# Request queueing
- Serving of requests in some kind of priority ordering

# Magnetic disks
- Disk schedule works based off magnetic disks
- Has a spindle in the middle of the hard-drive that spins at very high rates (100 times a second)
- Typically 5200 revolutions per minute is relatively standard for a hard disk
- Each layer is called a read write platter
- The read/write head writes or reads from a given platter

# A track/cyclinder
- Track is used to describe a disk with a single platter

# Costs associated with accessing data on the hard disk
__Transfer rate__: The bottleneck caused by the speed at which data can flow from the hard disk
__Access time__: Costs associated with finding and hooking up the hard disk correctly
    __seek time__: The amount of time to move the disk head to the corect track
    __Rotational latency__: There is a cost in how long it takes for the disk to spin to get the correct track positioning under the read/write head
__Head crash__: When the disk head collides with the disk surface

# Disk scheduling
Information required for an I/O request: 

- Read or write?
- What the disk address for the transfer is
- What the (main) memory address for the transfer is
- Number of sectors to be transferred

# Disk scheduling example

The tracks are numbered from 0-199 in these examples
Head pointer starting at:   53
Request queue:              98, 183, 37, 122, 14, 124, 65, 67

# Types of algorithms for searching in the system:

## First come first served (FCFS)
- Worst case scenario: 0-199-0-199
    + Would cause the disk head to move erratically across the platter

## Shortest seek time first (SSTF)
- Can cause starvation of some tasks as they may not get serviced

## SCAN
- Starts at one side of the disk and moves to the otherside

## Comparison between the algorithm
- SCAN cannot have starvation as all the requests will be serviced in the sweep
- SCAN performs better for systems with heavier loads
- Performance depends on the number and types of requests
- SSTF is common and has a natural appeal

# Exercise
- Tracks 0-99
- Currently serving request is 10
- Previous serviced request was at 8
- Requests: 50,5,20,70,30 (5,20,30,50,70 ordered)
- What is the total tracks moved in each of the algorithms?
FCFS: 30 + 45 + 15 + 50 + 40 = 180
SSTF: 5 + 15 + 10 + 20 + 20 = 70
SCAN: ( 99 - 10) + (99 - 5)

# Solid state drives
- Lower memory capacity for the size
- More expensive
- Can have a limited life span as they have a limit to number of times to read and write onto the solid states
- Future looks to be in solid state drives
- Do not need the algorithms in a solid state drive as you are always connected to all areas (memory chips). No access time associated with this access type. 

# Unix considerations
- All devices are treated as files
- Uses the inode "special file" type of node to indicate that it is a device
    + Special file is a flag bit in the inode (bits 14-13)

# Special files
- Character special files and block special files
- Characters is characters as oppposed to chunks or blocks sent in a buffered manner



































