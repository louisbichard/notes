# Reliable data transfer

# Reliability issues 
- Packets can get lost in routers
- Packets can get lost due to errors

# What is an acknowledgement? 
- From reciever to sender containing an indication as to whether the packet was recieved or not (ACK or NACK)

# Ack's
- If a packet is lost, then a timeout occurs for the packet to be resent

# Improve efficiecny of stop and wait protocol?

# How many packets can we send? 

# Sliding window protocols
- Sender can have up to N unacked packets in a window

## The two forms of sliding window protocols
- Go back N
    + Reciever only sends cumulative acks
        * Doesn't ack a packet if there is a gap
    + Sender has a timer for oldest unacked packet
        * If timer expires, retransmit all unacked packets
    + If you lose packet data, you must go back to the full window to resend

- Selective repeat
    + This protocol is created to improve on the go back protocol
    + This means that you can selectively repeat packets
    + Reciever individually acknowledges all correctly recieved packets
    + Reciever asks individual packets
    + Sender maintains timer for each unacked packet

# Parity bit
## Even parity
- Ensure that the other bits are the value of even or odd
- Even parity means that the other bits in the packet are odd, and given the parity bit added together then the full packet is then even
## How many errors can be detected with an even parity bit?
- Only 50% of the changes can be detected as if there are multiple errors this might cause an issue

# Check sum
- 