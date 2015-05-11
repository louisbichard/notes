# Transport versus network layer

## Transport layer
- Process to process communication
- Transport protocols run in end systems
- Send side: Breaks app messages into segments and passes these to the network layer

## Network layer
- 

# Key functions of the network layer
## Forwarding
- 

## Router
- Determining the path taken by packets as tehy flow from a sender to a reciever

# Datagram networks
- No call setup at the network layer
- Routers have no state about end-to-end connections
- Packets are forwarded using destination host address
	- Packets between same source-destination pair may take different paths

# Packets between the same source desination pair may take different paths

# Network service model
- Cannot guarentte anything
- Tries to provide "best-effort" service, however there is no certainty of speed, loss, errors etc

# What is the advantage of "best-effort" service provided by the network service model
- Is simple 
- New apps can be developed without the need to make any changes to lower layers

# TCP vs UDP
- You choose a protocol based on reliability

# IP address is an important component in the network service model
- A device can have many IP addresses, each individual 'interface' must have an individual IP however

# Subnets in IP's
- Only using the final parts in an IP address to distinguish devices
- Subnet masks is giving remaining 24 bits to the host
- Subnets then create islands of isolated networks

# CIDR (Classless InterDomain Routing)

# IP addresses: Subnetting

# IPv4
- Does not work in larger networks as we run out of IP's quickly

# How does a host obtain an IP address?
- DHCP
- Hardcoded in the UNIX system

# DHCP
- Dynamic Host Configuration Protocol
- Is a method of obtaining an IP or a new IP
- Can dynamically recieve IP when it joins a network

# Process of connecting to a DHCP
- Is a four step process for connecting with the DHCP

1 Host broadcasts 'discover message' 
2 Server will respond with an 'offer'
3 Host requests an IP address
4 Server responds with an ACK

# Network address translation
- Helps to save address space by only exposing a single IP address
- Exists as an exposed single IP address for a local network
- Internally the network as many different devices, but only ONE exposed IP
- Prevents unwanted messages reaching a device
- Private networks have some reserved IP addresses where hosts in the private network will assign these
- These IP addresses are assigned and translated using the NAT router using port numbers
- 

# Controversey over NAT
- Some believe that it is simple and a good idea
	- The port number can distinguish different hosts
	- Want to solve the shortage of the IPv4 address shortage using NAT
- Some believe that it is a bad idea
	- They think that the router should only process up to layer 3
	- Believe that IPv4 address shortage should be solved in IPv6, not through NAT technology

# IPv4
- ttl is the time to live for the datagram, ensures that the packet doesn't survive forever, decremented by 1 each time it moves therefore ensuring that the packet doesn't move around forever
- Header checksum: Ensures that there are no errors in transmission
- MTU: Maximum size of data (payload that can fit in the link layer frame)

# Fragmentation
- Splits up large datagrams
- The MTU defines the maximum size of the datagram, so it must be fragmented if it is to be used
- Reassembled only at the final location

# ICMP
- Typical messages:
	- Host unreachable, 
	- port unreachable, i.e port accessible, btut nothing is running.

NOTE: Important to notice the differences between IPv4 and IPv6 and why the changes were made

# IPv6 
- Initial motivation was that space was limited for IPv4
- Header formatting of IPv6 helps to increase processsing speed
- Header changes increase quality of the service that is provided by the service

# Differences in IPv6 to IPv4 (IMPORTANT, MAKE SURE YOU LEARN THIS BIT)
- Version number is 6, not 4
- IP address is 128 bits as opposed to 32 bits, to ensure that the technology is functional into the future by allowing larger addresses
- No fragmentation is allowed and is instead replaced by ICMP, which saves time at routing
- No header check sum saves time at routers

# How do we move from IPv4 to IPv6
- Not all routers cannot be updated at the same time, how can we operate with both methods
- Cannot just intervene and request that all users of the internet use a different method at a given time as it's not a viable option
- 




















