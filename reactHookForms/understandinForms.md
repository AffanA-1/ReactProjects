React Hooks Froms Vs Native Forms:
----
React Natice Forms:
- For Each form input or element, you would need a lot of maintainance:
    - State Management for each Elemnt in the Form
    - Error Handling for Each oif the,
    - preventDefault for each form

React Hook Forms reduce this overhead.

----

React Hook Forms Components:
- useForm<>()
- How to connect the useFrom to the Form elements? - {...register("fieldName oyuve provided for in the generic of the useForm <email, password>")}
- To connoect the Form's Submit action to the useForm - handleSubmit is the function which takes a function as its argumeny
- COmes with inbuilt Validation like: required, pattern, minLength. 
- Can use custom validation: pass your custom validation function  to 'validation' prop
- Add Error handling through formState: And it is required to chagne the Register prop for this - Include Messages for the error to be visible
- OR for Error handling use SetError 




