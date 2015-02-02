# Activity 1
- 6 months to 2 year projects
- It is imperative to the success of large projects that everyone in the team understands and is contributing to
the delivery plan. 
- This can be very difficult using traditional techniques. Gantt charts are too high level to accurately represent the complexities of the dependencies. 
- Detailed Microsoft Project plans are very difficult to discuss or understand
- To address these issues we use a visual representation of the project plan called a Delivery Path. 
- Make it very easy to see the dependencies between tasks, their duration and current status.
- Aid discussion
- Ensure a consistent understanding of the priorities
- Identify and address plan issues. 

## The actual diagram

The following diagram is an extract from an example Delivery Path. Delivery Path description:
- Each line is an activity with a start date and end date, predecessor and successor
- Start dates are computed based on the end date of predecessor tasks
- End dates are computed based on the calculated start date + the task duration
- The colours of each activity map to a workstream (a project team) conducting that activity
- The coloured circles are Nodes where one or many activities terminate allowing dependent activities to begin
- The Nodes are colour coded by status (Blue: Complete, Green: On Track, Amber: May Slip,
Red: Slipped)
- The Node takes the colour of the worst status of any of its predecessor tasks

## The objective

OUR OBJECTIVES
- Allow the user to draw delivery path diagrams through the web interface
- Dependencies drawn in the user interface would be translated to plan dependencies used to determine project timelines and critical path
- Each element of the diagram (nodes, activities) should store data in the database and have all the features of a project plan (start dates, end dates, predecessors and successors)
- Users are able to update the status of individual milestones and this is reflected in the Delivery Path

