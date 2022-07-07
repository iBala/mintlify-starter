---
sidebar_position: 1
---
# Text
The Text Component is a basic display component where one can show any text on the app.

## What is the Text Component?
The Text Component is one of the most basic and useful components for a variety of use cases. It helps the app maker add any kind of text to the app. With the help of the inserted text, the user can clearly understand the information on a particular screen and use the app with ease. 

![Text](https://user-images.githubusercontent.com/108575536/177692618-3bae2e79-f58a-41a3-99be-60acb3d3e46b.png)

## Text Component Attributes 
There are four sub-options to the Text app widget, they are namely:

- **Label** - The default Label name is “Label”. The Label name, font and font color can be modified by the maker. The Label can be hidden if required.
- **Main Text** - The text refers to the actual information that will be shown to the user. The font and font color can be modified by the user. This Box can not be left empty.
- **Sub Text** - The Default Sub Text is “subtext”. The Sub text font and font color can be modified by the maker. This can be hidden if required. 

**Note** : None of the above mentioned fields can be left empty if they are not hidden i.e., when they are marked visible. 

### Displaying Data from Datafields
The text information we want to show may not always be static. In case we want to show dynamic data from our data fields, we can insert the datafield path into the text field input to display the information there. 

All data fields are present under **`task.data.<data_field_name>`**

> **For Example:**, if we want to show customer name in a text field, we can use the following path ${task.data.customer_name}

![Text New](https://user-images.githubusercontent.com/108575536/177693264-d30dfc38-e9e6-48e4-82e5-4d0a6697c74d.png)


### Advanced processing of data
Zorp offers an even more advanced way of processing text information. For eg., we may want to combine text from two different fields or show the current time in one of the data fields. 
In order to do this advanced processing, Zorp offers the ability to write small snippets of JavaScript expressions to manipulate the data. 

To access this low-code environment, click on the `Fn` button next to the input box and write your expressions. 

More details about the datafield are present here. 



https://user-images.githubusercontent.com/108575536/177693518-5f368949-5b1e-44d2-baad-c1e1cfedce06.mp4












