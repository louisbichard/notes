#Filing systems
- Multilevel filing systems

#Hard disk blocks
- Made up of a number of physical blocks
- Non-volatile data
    + Nothing is lost when the machine is turned off
    + Unlike RAM where everything is lost when the machine is turned off
- Each is capable of storing either:
    - 256 16-bit
        or
    - 512 8-bit 

- Physical characteristics of the hard disk aren't relevant today

#How to think about the hard disk
- A large array of the blocks
- Each block is just a segment of the array



__Note__: All that follows is regarding Linux hard drive systems

#Boot block
- Is used to load the entire operating system

#Super block
- Data defining the system
- Number of inode blocks
- Details of free blocks
- Date of last sync

#Inode block
- Contains information about nodes
- A directory or special file

#What is an inode?
- A certain number of blocks on the hard disk are dedicated to storing inodes

#Inode flags
- bit 15: In use flag
    - Describes whether an inode is in use, or is free
    - Free = 0 or in use = 1
    - These values are set if the inode is describing a file or directory
- bit 14-13: Up to 4 numbers are then used for defining the type of file 
    + Could be a plain file, a directory or a special file
- bit 11-10: setting uid and guid on execution (respectively)
    + uid = user id
    + guid = group user id
- bit 8-0: Used for storing permissions
    + Define read, write and execute permissions

# Permissions
- Owner, Group and all permissions
- Each as rwx permissions

# Structure of an inode
- 32 bytes of lengths
- if 512 bytes in the hard disk, that's 16 potential inodes

# Breadkdown of the internal structure of an inode
- 2 bytes for flags
- 1 byte for links (Symbolic link pointers - good for knowing whether you can delete a file or not)
- 1 byte is uid
- 1 byte is gid

# Small files and what they are
- Small files are less than < 4kb
- Operating system files are usually small
- 12 bits of the flags are set to 0 if all the address slots relate to individual blocks

# What is the smallest size a file can be?
- The first 3 blocks in the file must be completely filled with data

# Indirect blocks
- Point to data blocks
- Double indirect blocks point to indirect blocks, which then point to data blocks
- Can often end up with a lot of data pointers which can be quite inefficient

# Large files
- Large file is less than 1MB in size
- Only has 7 accessible rows as the last is used for point to another indirect block

# Huge files
- Limited to 2^24 bytes since there are only 25 bits set aside in the inode to store the file size
- Instead of the last row pointing to another indirect block it points to a doubly indirect block
- The last pointer is non zero and points to another block
- Each block in the doubly indirect block points to more indirect blocks, which in turn point to different data blocks
- Has a more difficult data structure so makes the computer run slower as it is harder to find the dat that the user might want

# Class q