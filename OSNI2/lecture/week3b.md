# Inode referencing to directories
- Will specify the 
- Directory entry is 16 bytes (2 bytes to denote the inode number and 14 bytes for the filename)
- Filenames are not stored in the inode

# Ext2 and Ext3
- Filing systems
- Inode strucutre has 15 address pointers, usually 3 or 4 bytes in length rather than 2
- Reduces the need to check the disk after incorrect shutdown

# Protection inside filing systems

# Accessing a particular file 
- Either read or write for example
- Need to check permissions on the file itself but also all of the releant parent folders

# Buffers
- If the file size exceeds 512bites, then it is stored in the buffer before writing to the hard disk
- Buffer is just used to hold data when there is not enough to write
- 
