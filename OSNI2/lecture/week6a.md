# Introduction

# Delay 
- Comprised of a few different pieces: Transmissions, propagation, processing and queing
- All of the methods will be outlined with examples
- Throughput, efficiency and bandwidth-delay are the three main concepts that will be derived from the afformentioned principles

# Communication 
// TODO: DOUBLE CHECK THESE, THEY'RE PROBABLY NOT RIGHT

Applicaiton layer 
-> 
Transport layer
->
Physical layer
->
Data-link layer
->
Network layer

# Protocols
- Different protocols used in different layers
- Examples: HTTP SMTP

# Messages
- There are different representations of binary data: 
    - ASCII codes (American standard code for information interchange)
    - Different characgters can be represented by 7 bits
    - 8th bit is used as parity bit however is now used for extended characters
- In the stack, each protocol takes the data of the protocol below and adds it own header

# Bandwidth
- Number of bits moved across a network per second
- Usually the speed is in megabits per second however can be anything that is time/size i.e
    - Megabits per second, terabits per second, etc ...

// NOTE: 1 kb/s is referrring 1000 bits per second not 1024

# Typical link bandwiths
- Dial up modems original bandwith restrictors
- Cable modems/ADSL 
- OC3, OC12 OC48 are differnet ways of portraying bandwith and time
    + This stands for optical carrier transmission rates

# Uk average broadband speed
- 14.7MB/s

# Conventions for calculations
- B is used for bandwith
- n is for number of packets
- Time table is then n / B (seconds)

// __NOTE__: THE MEW SYMBOL IN THE LECTURE SLIDES IS INDICATIVE OF A MICROSECOND SYMBOL

// __NOTE__: IT IS VERY IMPORTATNT TO WRITE DOWN MEASUREMENTS, I.E SECONDS, MILISECONDS ETC AND TO GET THESE RIGHT.

# Four types of packet delay

## Transmission delay
- Store and forward
- Depends on the packet length and the packet
- Is sometimes called a serialisation delay
- Is the delay between sending the first bit out and the last bit out
// NOTE: Be careful as the unit is different here, as it is simply measured in seconds (I think)

### Example
- A router is sending 1500 bits across a 10Mb/s ethernet link
- THe packet is 
- The power in the dvisor is related to the number of bits of the speed, i.e MB is done as 10^6 and KB is done as 10^3

100b packet over a 2Mb/s link and a 400B packet

100 x 8
-------------------------------------     =  0.000005 seconds = 50 microseconds
2 (MB's) x 10^6 // because it's in MB


400 x 8
-------------------------------------     =  0.0016 seconds = 1.6 milliseconds
2 (MB's) x 10^6 // because it's in MB


## Propogations delay
- The time taken to travel from one end of the wire (optical cable w/e) to the other
- Basically depends on the distance and the speed of the signal in the medium
- Speed of light in a vacum = 3 x 10^8 m/s
    - Therefore speed of an optical fibre is assumed as: 2 x 10^8 m/s

## Calulations of propogation delays 

n
----------
2 x 10^8 m/s

## Example

### 10m Cable

10
------------ = .00000005 m/s
2 x 10^8 m/s

### 200km fibre

200
------------ = .0001 km/s
2 x 10^8 km/s

### 7000km fibre

7000
------------ = .000035 KM/s
2 x 10^8 km/s

## A more complex example
- A message being sent to a router, with then a transfer either side of this router
- In ordr to calculate, work out the transmission delay, and the propogation delay either side of the cable to work out the examples answer
- 

## Processing delay
- Check bit errors

## Queueing delay
- Depends on the congestion level of the router


























