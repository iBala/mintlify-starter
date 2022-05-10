---
sidebar_position: 2
---

# Workflows
A workflow is a series of steps a user goes through to complete a task. It is visually represented as a series of steps and the transition between those steps. A step can be a) a mobile app screen or b) a condition node

A workflow on ZORP consists of: 
1. Steps 
2. Transitions. 

## Creating a workflow:
With ZORP, you can manage multiple workflows at the same time. For example, a user performing delivery can also use the same ZORP app to execute an attendance task.
The list of available workflows are present in the [workflow](https://app.zorp.one/#/workflows) tab. To create a new workflow, click on the `New Workflow` button.

![Create a new workflow](https://user-images.githubusercontent.com/10784425/167636357-5b447dc4-9dd6-4f16-8849-b274f33c523f.png)

## Creating Steps and Transitions:

>All Workflows need to have initialStep and terminalSteps. Initial step is the first screen the user sees when he starts the task and terminalSteps are the screens where the tasks assigned to a User come to an End. 
        By default the ZORP builder provides you with a NEW Step (initalStep) and COMPLETED Step (terminalStep).

To create a new step,

<div><h3>Click on Create Node</h3>
<img src="https://images.tango.us/public/screenshot_1c91c153-9393-4139-8ed9-a2273d1cc77d.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8375&fp-y=0.0788&fp-z=2.9759&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A888" width="600" alt="Click on Create Node" />
</div>

<div><h3>Click on Create a Step</h3>
<img src="https://images.tango.us/public/screenshot_3255e015-4b1f-4ff1-a68c-25395f288f98.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7932&fp-y=0.1481&fp-z=3.0061&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A888" width="600" alt="Click on Create a Step required for your workflow that is to be completed by your user." />
</div>


<div><h3>Connect it with another node to create a transition</h3>
<img src="https://images.tango.us/public/screenshot_3de3e895-f8f1-4373-b373-9e8062bb41d2.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.3711&fp-y=0.3964&fp-z=2.7374&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A888" width="600" alt="Connect it with another node to create a transition." />
</div>
Any new Transition on ZORP is called `NEXT` by default. The transition name is what the user sees as the Buttons that take them to the next screens.

## Configuring the Screens of your Steps:

1. Once you have created your Steps and Transitioned you need to configure the Screens in order to Show/Gather information. 
2. Click on any step whose screen you want to edit. 
3. You can use the Components to configure the screens. To add a component to a screen, just drag and drop a component onto the App Screen of the Builder.Click here to know more about the App Widgets
4. Once you have configured the Screens with the App widgets along with their respective data fields you need to Hit Publish to make the Workflow Live. 

# [Workflow with Zorp](https://app.tango.us/app/workflow/9e7db0c8-0bda-4932-858e-0f409ac5d367?utm_source=markdown&utm_medium=markdown&utm_campaign=workflow%20export%20links)


### Click on the STEP
![Step 2 screenshot](https://images.tango.us/public/screenshot_34f717c3-39b6-40b6-9f42-77dc9f14473a.png?crop=focalpoint&fit=crop&fp-x=0.4260&fp-y=0.3970&fp-z=2.8701&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A888)


### Drag UI components from left
![Step 3 screenshot](https://images.tango.us/public/screenshot_5bdfc63b-c5eb-4aaf-98bb-a1bd9d0aa861.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&fp-z=1.0000&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A888)

### Configure data fields from the right
![Step 3 screenshot](https://images.tango.us/public/screenshot_5bdfc63b-c5eb-4aaf-98bb-a1bd9d0aa861.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&fp-z=1.0000&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A888)


