# Buffering and queuing similarities
- Usually the delay themselves are negligible
- When congestion occurs, the delay increases because of more queuing
- If a queue is full then packets begin to be dropped, which means that buffers and queuing can be a cause of loss in transmission

# Processing delay
- If the device has several interfaces then each packet muse be examined in the interfaces, and causes the delay

# Queuing delay
- Each output hasa buffer for queuing packets while they arrive and while the previous packet hasn't been transferred

## Calculations 

     average number of bits arriving per second
I =  ------------------------------------------
                        R

### What does this calculation of I mean? 
- If I > 1 the router cannot function
- If I < 1 then the packets will arrive at uniform levels and there is no queue
- The queuing delay increases exponentially as the traffic approaches 1
- Usually packets arrive in bursts

## Bursting of the internet
- THe internet traffic in model comes in bursts, which can make it hard to model and manage
- No single model can then be used to represent different internet characteristics
- Different models were created to try and emulate this characteristic of bursting. A model would then model some type of bursting such as aggressive short cycle bursting, or longer bigger bursts ... maybe?

# Different types of delays and their calculations
- processing delay
    + Usually some microseconds
- Queuing delay
    + Depends on congestion
- Transmission delay
    + L/R for low speed links
- Propogation delay
    + A few microseconds to a hundred milliseconds


# Differences between TCP and UDP
## TCP 
- Has flow and congestion control

## UDP
- Send and hope protocol
- The packets have no flow and congestion control

# Network layer in the protocol stack
- Provides best effort service
- Cannot guarentee or indicate any congestion
- There is a lot of congestion occuring because of the network layer

# Working out the delays in larger messages
- Large messages are divided into smaller packets which are sent individually

// __NOTE__: Difference in the application of delay. Some delays are multiplied by the number of packets, whereas some are not as they are a static cost, i.e like fixed and variable costs in a business. Transmission cost for instance is only the measurement of the time across two components, therefore is not multiplied by the packets

# Stop and wait protocol
- Some  protocols require each packet to be acknowledged
- Stop and wait means that the next packet cannot be sent until an acknowledgement was received for the current packet

# Round trip time
- The delay between sending the packet and recieving the ackowledgement
- The value here is only ever estimated as it is dependent on the packet length
    + The smaller the packet the more times it will have to be acknowledged
    + THis would therefore increase the round trip time

# Throughput
- Throughput is the amount of data per second that can be transferred

## Computation of throughput
- The amount of data that is successfully carried

## Efficiency regarding bandwidth and throughput
- The efficiency of a communication is ratio between thee actual performance and the maximum theoretical performance, ie throughput divided by bandwidth

# Bandwidth-delay product
- The product of the data links capacity (in bits per second) and its end-to-end delay
- The result is an amount of data measured in bits that is equivalent to the maximum amount of data on the network circuit at any given time























