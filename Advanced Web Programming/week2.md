# BNF

- Syntax for programming languages that is machine readable

## A BB
- Defined to be a terminal followed by a structure and then followed by a terminal

## OR's
- Simply define multiple rules, there are no OR operators

## Choices
- Defined by using two

## Bits
- Defined as Bit or Bits

## Recursion
- A large difference between writing Bit Bits and Bits Bit

# EBNF
- Extended BNF

# Synax diagram conversions to BNF

    -> t1 -> ntl -> t2

would then become

    s1:== "t1" ntl "t2"

# Drawing recursive syntax model diagrams in BNF

    // A Simple case where the diagram can simply just be one terminal node
    s:== nt

    // An advanced syntax is using recursion, the s is self referenced inside the definition itself
    s:== nt s

# Terminals and non terminals in terms of BNF
- A terminal is the end point and would be an item such as a bracket, as this is a final stop point
- A non terminal is something where there is potential for another action, loop or definition. 


