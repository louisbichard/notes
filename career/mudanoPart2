# Part 2

- User friendly interface allowing team members to enter their planned absence is required. 
- The interface should allow users to view other team member’s planned absence and highlight to them any clashes with other team members of any absence they enter. 
- The entered absence, once confirmed by the team member should then be passed to the server to be logged in the database.

Time Categories and Units

- The user should be able to mark time as “Present”, “Vacation”, “Public Holiday”, “Training”
- All categories other than “Present” are classified as Absent
- Weekends should be ignored by the system (not displayed and no classification should be given)
- The system should work on units of half days
- The default for days should be “Present” other than Public Holidays
- Public Holidays should be defaulted to “Public Holiday” however should be able to be changed to
any of the other categories

- The user should be able to see the records for other team members as they make their selections
- The interface should be designed to be able to deal with projects with up to 40 people

# Clashes
- Should highlight clashes: absenteeism is within 4 days of another user
- Favour GUI over form input
- Deal with a period of up to 12 months in the future (not required to show all 12 months) most common use case: next 3 months
- The interface should be designed to reduce the required interactions (clicks, scrolls, searches, etc.) from the user to be able to 

REQUIREMENTS CLARIFICATION

TASK CONTEXT
- No need to build the user login, you can hard code the logged in user as assume the component you build sits behind any user authentication

The columns are
 userid: Unique identifier for the user
 name: Display name for the user
 date: Day of the record (yyyy-mm-dd)
 unit: Morning (AM) or afternoon (PM) section of the day
 value: Value for the user in that period; Public Holiday (P), Vacation (V), Training (T). There is no
entry for present as this is the default value