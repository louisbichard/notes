# Question 1 

In a stop-and-wait protocol the following events happen at the sender. What different scenarios could have happened and what patterns of packets could have been received by the receiver in each scenario? Assume there are no errors and no re-ordering of packets in the network.

Send A
ACK received
Send B
ACK received
Send C
Timeout
Send C
ACK received
Send D
ACK received 
Send E
ACK received


- The reciever could not have recieved packet C
- The ack could have been lost and the reciever might have recieved packet C twice

Demonstrate what would happen in the same scenarios if an alternating-bit mechanism was added.

Using alternating bit

# Distinguish between “Go-Back-N” and “Selective-repeat” protocols.  

# If a sliding window of size n segments is employed. How much more efficient can your communication be when compared to a simple stop-and-wait protocol? 

3 x n
====== 
B x RTT 

RTT = round trip time

# Consider the following 2 data (written in binary): 

10110110 11011000
01111010 11001111


## Compute the “Internet checksum”.

11001100 00010111

## If the bits in positions 2,3, 5 and 8 in data 1 (counting from left to right starting from 1 are corrupted during transmission, will this be detected by the receiver?

11011111 11011000
01111010 11001111

10100111

Yes as the check sum is different

## If the bits in positions 2 in data 1 and data 2 are corrupted, will this be detected by the receiver?

No one is a 1 and one is a 0 so swap these and they will equal the same value

## With the 1’s complement scheme, how does the receiver detect errors?

Run the check sum, i.e add the two values, and then convert all the one's to zeros
 
#Compute the “Internet checksum” for the following data (written in hexadecimal): A7 4D 41 23 5F 1B. 


1010 0111 0000 0100 1101 0000
0100 0001 0000 0010 0011 0000 
0101 1111 0000 0001 1011

