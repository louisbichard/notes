Explain carefully the difference between the following:

if(x=y)...
if(x==y)...

In the first example, the value that is 'returned' is the value of Y as this is the value of the assigned variable. This could return a string, boolean, etc

In the second example a check is made against both variables and will return true or false only


Q2 It might be assumed that in a conditional where the condition is written exp == exp where the same expression is repeated would always evaluate to true. Explain carefully your understanding of the following (where x is a simple integer variable):

if(x==x)...

This will always be correct as X will always equal itself, and will always be of the same type also to satisfy the == operator

if(x++==x++)...
if(x++==x)...
if(x==x++)...
if(++x==x)...
if(x==++x)...
If you want to try some more think about (++x=x++), (x++=++x), (++x=x--), (x--=++x), etc.

Q3

The semantics of the expression v op= exp can be expressed by giving an alternative expression with the same meaning ( v = v op exp ).

Find (separate) alternative expressions for v++ and ++v which have the same meaning.

