# Overview

# Wildcarding
    
    .

- By adding the dot, you will allow anything (wildcard) in the string match

# Repeater operator
    
    * 

- Repeats the previous statement any number of times
- Therefore `c.*t` will match any character any number of times

    +

- Will match the preceeding value if it appears more than 1 time in the pattern match

# Case precision
- Matching strings will not work for given cases

# Defining the number of repetitions
    
    waz{2,4}

Will match any string that says `wa` with between 2 and 4 preceeding z's


# Escaping

    \

Is done with a backslash 