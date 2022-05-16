# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.

1) the user clicks the 1 button
2) the onClick attribute of the one button calls the click handler function.
3) the click handler callse the addOne function
4) the addOne function passes { type: ADD_ONE } to the reducer function
5) the reducer function reads type: ADD_ONE and sets state.total to state.total + 1

