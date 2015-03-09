# Race conditions
- A prevention method is achieved through semaphores

# Semaphores
- A semaphore is an integer that is only operated on after intialisation
- Is modified by p or v operations
- p and v operations test whether the semaphore is locked or unlocked

# P-operation
- is for waiting

# V-operation
- V operation is a signal

# Atomicity of P and V
- P and V operations cannot be running at the same time

# Spin lock/ busy waiting
- While waiting for a semaphore they can loop continuously
- To prevent this the process can unblock itself by sleeping

# Binary and counting semaphores
- binary sempahores are on or off
- counts resources, until it reaches the top count when all resources are in use

# Deadlock
- When two processes are waiting for a resource

# Examples of a deadlock
- Process A and B
- Process A and B are copying from one file into another (file A and B respectively)
- When they copy from their own file, they will need to write into the other resource and thus a deadlock will occur where exclusive access is required by the two processes

# Deadlock prevention
- Do not allow the opportunity for deadlock
- Detect the deadlock itself

# Determining deadlock in the system
- Look at a resource graph and identify a cycle

# Test
- 













