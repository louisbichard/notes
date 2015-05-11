# Calculate the propagation delay for a signal travelling down optical fibres of the following lengths: 

## 300m

      n
------------
2 x 10^8 m/s

     300
------------ = 40 00(300 / 2 * (10^8)) *  (1 000 000) = 1.5 microseconds
2 x 10^8 m/s


40 000
----------- = (40000 / (2 * 10^8)) = 0.002 seconds
2 x 10^8 m/s


5000km. 
------------   = (5000 0000 / (2 * 10^6)) = 0.25 seconds
2 x 10^8 m/s


# Calculate the transmission delay for the following packets and link bandwidths: 

## 600 bit packet on a 10Megabit Ethernet 

n / B (s) where n = packet size and B = bandwidth

600 / (10 * 10^6) = .00006 bits per second

## 1500 byte packet onto a 2Meg ADSL link

(1500 * 8) / (2 * 10^6) = .006 bits per second

## 1500 byte packet onto a 1Gig fibre link

(1500 * 8) / (2 * 10^9) = .000006 bits per second

What is the bandwidth of an OC-192 link?

What are the four types of delay a packet can experience, how do these occur?

__Transmission delay__: The delay in the amount of time a packet starts sending and the end of the packet has left the router. Depends on the size of the packet and the size of the bandwidth.
__Propagation delay__: Caused by the physical length of the physical link, i.e time for light to travel down fibre. This depends on the size of the cable
__Processing delay__: The delay is occured when the packets are being examined and verified
__Queuing delay__: Time waiting at output link for transmission. The delay incurred when the computation is waiting and incoming requests are queued

## What are the units of the Bandwidth-Delay product?

bits

## What does the value represent?

The amount of time that is spare when making a request and the time taken for the request to reurn

## Calculate the bandwidth delay products for the links in question 2 assuming link lengths in question 1. (e.g., for 1a and 2a)



## Consider a network where a PC is connected via a 100 meg Ethernet to a router over a distance of 100m.  This in turn is connected across a campus gigabit backbone (distance 1km) to a further router, which in turn is connected to another site 300km distant over a 2meg DSL link.

##Assuming a packet of 1500 bytes, what is the delay across the entire route? Only consider propagation and transmission delays.

## Which component of the delay dominates the total value?
