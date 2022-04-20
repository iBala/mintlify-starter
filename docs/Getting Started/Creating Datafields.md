---
sidebar_position: 5
---

# Data Fields

Data Fields are the data variables defined by the user on the Zorp builder where you can store the information collected from the input components or read from to display on the display components. 
>Click here to see the components available on Zorp

## Creating a Datafield 

1. Click on the "Configure Data Fields" tab on the Zorp builder. 
2. Click on "Create a New Data Field".
3. Every Data field has:
    (a)**Name**: The name of the data field
    (b)**Datafield Type** : The datatype of the datafield to be set. 
>Every datafield's type needs to be set according to the Component you would want to use it in. 
The datafield would show up in "Write to Datafield" option in the builder.
   (c)**Default Value** : You can set a default value for the datafield which would be used in the task creation if the *"Show during Task creation"* flag is enabled for a datafield.
   (d)**Mandatory** : You can set if the datafield value is Mandatory for task creation.

### Datafield Types:

1. **Text**: You need to use the Text datafield type to store texts we get from Text Input component or display it in the Text component.
    > Click here to see how to create a Text component/ Text input component.
2. **Number** : You need to use the Number datafield type to store numerical input we get from Number Input component or display it in the Text component.
    > Click here to see how to create a Number input component.
3. **Location** : You need to use the Location datafield type to display the location on the Map component.
    > Click here to see how to create a Map component.
4. **Boolean** : You need to use the Boolean datafield type to store the boolean input we get from Switch component.
    > Click here to see how to create a Switch component.
5. **Date** : You need to use the Date datafield type to store the date/datetime from the Date&Time component.
    > Click here to see how to create a Date&Time component.
6. **List of Text** : You need to use the List of text datafield type to store the inputs from Dropdown and Checkbox components.
    > Click here to see how to create a Dropdown component/ Checkbox component.
7. **Image** : You need to use the Image datafield type to store the Images from the Camera component.
    > Click here to see how to create a Camera component.
8. **File** : You need to use the File datafield type to store the Files from the File Upload component.
    > Click here to see how to create a File Upload component.
9. **Signature** : You need to use the Signature datafield type to store the Files from the Signature component.
    > Click here to see how to create a Signature component.

## Write to Datafield

1. The datafields created would show up in the components when you click "Write to Datafield".
2. The data fields get shown in the component only if the data type matches the component's function. 

Example: A Camera component will capture an Image so you will be able to see only Image datatype datafields in which you can save these images in. 

## Referring your Datafield

1. The datafields created can be referred in a workflow component or in the Body of the Actions REST API. 
To do this you need to use the below syntax
>${task.data.datafield name} 
Replace *datafield name* with the name of the datafield

Example: Lets say you have a datafield names "Customer_Name" you need to refer it as :
                                {task.data.Customer_Name}






    