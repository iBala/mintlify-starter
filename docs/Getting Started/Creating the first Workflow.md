---
sidebar_position: 2
---

# Workflows

A Workflow is used in the Zorp builder to represent the sequence of steps done by the end user of the App. A workflow on Zorp consists of : 
1. Steps 
2. Transitions. 

Creating a Workflow on Zorp involves creating the Steps required and joining these steps to create Transitions. Each Step represents a screen that the User sees on the Zorp mobile app while performing the task assigned to him/her. 

## Creating Steps and Transitions:

>All Workflows need to have initialStep and terminalSteps. Initial step is the first screen the user sees when he starts the task and terminalSteps are the screens where the tasks assigned to a User come to an End. 
        By default the Zorp builder provides you with a NEW Step (initalStep) and COMPLETED Step (terminalStep).

1. To create a new Step drag and drop the Step Node onto the Canvas. 
2. Enter the Step's Name and Description
3. To create a Transition connect the Steps in the required sequence. 
4. Any new Transition on Zorp is called "NEXT" by default. The transition name is what the user sees as the Buttons that take them to the next screens.

## Configuring the Screens of your Steps:

1. Once you have created your Steps and Transitionsd you need to configure the Screens in order to Show/Gather information. 
2. Click on any step whose screen you want to edit. 
3. You can use the Components to configure the screens. To add a component to a screen, just drag and drop a component onto the App Screen of the Builder.Click here to know more about the App Widgets
4. Once you have configured the Screens with the App widgets along with their respective data fields you need to Hit Publish to make the Workflow Live. 

