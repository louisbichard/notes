
# What are inodes used for and what is the size of an inode in bytes?

- Contains information about nodes (file or directory)
- Hard disk has a certain amount of allocatiion space available for inodes
- 32 byte data structure
- 

# If a particular inode represents a directory in the filing system and has a value of n in its first address word, what will be stored in block n of the hard disk?

- Block n on the hard disk will contain directory entries. These are 16 bytes in size, 2 bytes are the inode number and 14 bytes represent the name of the node

# What is the maximum file size of the following types of files, assuming that the size of a block in the filing
system is 512 bytes? You should justify your answers.

i. A small file
    
    4KB

ii. A large file

    896KB

iii. A huge file

    16MB

# How can small, large and huge files be distinguished from each other?

Small files link to data blocks only. Address pointer 8 points to a disk block.

Large files link to indirect blocks which point to data blocks. Address pointer 8 points to a 0.

Huge files are the same as large, however the last points to a double indirect block

# Given the following file under the Unix Filing System (version 6):
/paul/report/info.txt
explain how we can identify the location of the inode describing the file info.txt.

Look at the directory entry for the inode of paul then report then info.txt