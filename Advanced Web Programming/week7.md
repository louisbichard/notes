
# Semantics
- A declaration
    + Introducing something, like a variable, function name and assigning it to a point in the memory so that it can be identified (hence identifier)
- An expression
    + Intended to generate a value
    + An expression will use identifiers, and perform some calculation, say an addition
- A statement
    + A task that is to be done
    + It is the carrying out of a task
    + Execution of a function


# Tutorial

## Exercises 1

### QUESTION 1

// INITIAL LOOPS
t=0;
for(i=0;i<10;i++){
    for(j=0;j<10;j++) {
        t+=v[i][j]
    }
}

// WHILE LOOPS

t=0;
i=0;
j=0

while(i<10) { 
    while(j<10) {
        t+=v[i][j]
        j++
    }
    i++
}

### QUESTION 2

    for(;v[i++]++;)

By executing the above you have no control variable, this would hypothetically error, or end up running an infinite loop as no end point for the loop is defined

## Exercise 2

### Question 1

The difference between these is that
if(x=y)...
if(x==y)...

The first is an assignment whereas the second is a loose comparison check. The second will not check type, however will show if the two values are the same, whether they are the same type or not, i.e "1" == 1 will be true.

In the case of if(x=y) the program will return the resulting value of the expression, which in turn will always be true if the assigned value is true, or false if the assigned value is false. 


