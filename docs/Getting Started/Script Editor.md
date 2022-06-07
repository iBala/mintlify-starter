---
sidebar_position: 10
---

For advanced users, ZORP provides an ability to write JavaScript scripts to manipulate your data fields. 

Apart from vanilla JS, we also support the following libraries.

Lodash ([https://lodash.com/docs/4.17.15](https://lodash.com/docs/4.17.15))

Luxon([https://moment.github.io/luxon/api-docs/index.html](https://moment.github.io/luxon/api-docs/index.html))

## Where to use JS Scripts?
JS Snippets can be used when you want to manipulate the date before displaying or storing. Few examples are given below. 
1. Your data has First name and Last name, you want to display them in a single field:
```
return task.data.first_name + " " + task.data.last_name
```
2. Displaying the month from a specific date
```
<Insert snippet here>
```

## How to use JS Scripts?
You can write the JS scripts anywhere you find the `JS` icon. 

<img width="126" alt="Script Entry Point" src="https://user-images.githubusercontent.com/10784425/172360643-d8c74316-7bf5-40fa-a4d1-fb8dd9210756.png">

### Click on the icon will open the script editor
<img width="1431" alt="Script Editor" src="https://user-images.githubusercontent.com/10784425/172360842-cc1441dd-a005-455a-9ef2-f5a61a127c0e.png">

### Easily access the data field from the side panel below
<img width="1433" alt="Data Fields List" src="https://user-images.githubusercontent.com/10784425/172361003-733fd4b2-015b-478f-8152-90ab7fc3d229.png">

### Access example scripts in the side panel
<img width="1434" alt="Function Scripts" src="https://user-images.githubusercontent.com/10784425/172361071-6e6cb625-4ed6-45b3-807e-dbe4fc1cbf04.png">

## Testing the Script
In order to test the script you have written, click on the run button below. The output should be displayed in the output box. 
> Please note that the type of output should match the type of data field expected by the underlying UI component field. For eg., when we write an expression for a number field, the output of the data field should be a number. 

All the data fields in ZORP will have mock data generated that can be used while testing. 

Click on `Update Mock Data` to set different values for the mock data.
<img width="848" alt="Update Mock Data" src="https://user-images.githubusercontent.com/10784425/172361474-7bc2a5f0-4b00-40d7-b010-cae3308b5c7f.png">

## Some more examples
1. Getting the first element of a list
```jsx
let words = ['sky', 'wood', 'forest', 'falcon',
    'pear', 'ocean', 'universe'];

return _.first(words);
```

2. Get the current datetime
```jsx
return `DateTime.now().toISO()`
```
3. Get the current time in New York
```jsx
return `localTime  ${ DateTime.local({ zone: "America/New_York" }) }`
```
4. Format a given time in local format
```jsx
return ` formatted ${DateTime.fromISO("2018-05-01T13:44:48.708709Z").toLocaleString()}`
```
