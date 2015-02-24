


# First deliverable

- 1500 words
- Advantages and disadvantages of XML
- Support your argument with reference to a minimum of two case studies.
- Focus upon the latest developments and uses of XML based technologies. 
- Credit will be given for depth in terms of the literature found and the case studies cited. The case studies should include references to “real-world” examples. The use of supplementary technologies such as AJAX, JASON, Javascript can also be included demonstrating your appreciation of the technologies available.

## The problem
- Embedding data into the GUI

## Structure vs presentation
- XML is concerned with the structure of the data as opposed to the layout

# Alternatives
- JSON

## Advantages

- Not restricted to certain tag names as you can define your own
- Can then use transforms to convert custom tags into HTML if needs be
- Tag set gives more freedom to the creation of a data set that fits the use case
- Can limit the data to formatting rules
- Allows you to manipulate different data sets across different HTML pages by just editing the data set as opposed to the HTML pages themselves. 
- Can use it to apply meta data to the information
- Can make semantic inference based on data set tags
- Storing data in HTML would require data/screen scraping if you wanted to expose the data to someone else, or to another service
- Deeply structured and nested data structures are easier to read than in JSON
- Widely adopted
- Validation of the data set is something other datasets don't provide
    + However its clunky to implement
    + Most won't bother
- Can add attributes to data values
- Best for a rigid data structure

## Disadvantages
- Must be parsed into HTML prior to rendering in a browser
    + Currently no browsers that really properly parse the XML
- As compared to JSON, is simply more characters. Wrapping a string in two tags is longer than having key value pair therefore data transfer is slower
- Has more syntax than JSON
    - Can zip and compress XML however to lessen this cost
- Some new web services are only exposing JSON
- JSON integrates well with JavaScript ... JavaScript is growing
- 













