---
sidebar_position: 3
---

# Workflows
A workflow is a series of steps a user goes through to complete a task. It is visually represented as a series of steps and the transition between those steps. A step can be a) a mobile app screen or b) a condition node

A workflow on ZORP consists of: 
1. Steps 
2. Transitions. 

## Creating a workflow:
With ZORP, you can manage multiple workflows at the same time. For example, a user performing delivery can also use the same ZORP app to execute an attendance task.
The list of available workflows are present in the [workflow](https://app.zorp.one/#/workflows) tab. To create a new workflow, click on the `New Workflow` button.

<kbd>![Create a new workflow](https://user-images.githubusercontent.com/10784425/167636357-5b447dc4-9dd6-4f16-8849-b274f33c523f.png)</kbd>

## Creating Steps and Transitions:

>All Workflows need to have initialStep and terminalSteps. Initial step is the first screen the user sees when he starts the task and terminalSteps are the screens where the tasks assigned to a User come to an End. 
        By default the ZORP builder provides you with a NEW Step (initalStep) and COMPLETED Step (terminalStep).

To create a new step,

<div><h3>Click on Create Node</h3>
<kbd><img src="https://images.tango.us/public/screenshot_1c91c153-9393-4139-8ed9-a2273d1cc77d.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8375&fp-y=0.0788&fp-z=2.9759&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A888" width="600" alt="Click on Create Node" /></kbd>
</div>

<div><h3>Click on Create a Step</h3>
<kbd><img src="https://images.tango.us/public/screenshot_3255e015-4b1f-4ff1-a68c-25395f288f98.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7932&fp-y=0.1481&fp-z=3.0061&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A888" width="600" alt="Click on Create a Step required for your workflow that is to be completed by your user." /></kbd>
</div>


<div><h3>Connect it with another node to create a transition</h3>
<kbd><img src="https://images.tango.us/public/screenshot_3de3e895-f8f1-4373-b373-9e8062bb41d2.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.3711&fp-y=0.3964&fp-z=2.7374&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A888" width="600" alt="Connect it with another node to create a transition." /></kbd>
</div>
Any new Transition on ZORP is called `NEXT` by default. The transition name is what the user sees as the Buttons that take them to the next screens.

# Congfigure the App screen

### Click on the STEP
Clicking on any step opens the screen for you to configure.
<kbd>![Open the step screen](https://images.tango.us/public/screenshot_34f717c3-39b6-40b6-9f42-77dc9f14473a.png?crop=focalpoint&fit=crop&fp-x=0.4260&fp-y=0.3970&fp-z=2.8701&w=600&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A888)</kbd>


### Drag UI components from left
ZORP comes with default set of component. Choose the component you want to use, drag it to the mobile screen.
<kbd>![Drag UI Components from left](https://images.tango.us/public/screenshot_5bdfc63b-c5eb-4aaf-98bb-a1bd9d0aa861.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&fp-z=1.0000&w=600&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A888)</kbd>

### Click on the component and configure data field on the right panel
You can edit the display values and the configurations of the UI component by clicking on the component.
<kbd>![Editing the UI component config](https://images.tango.us/public/screenshot_5bdfc63b-c5eb-4aaf-98bb-a1bd9d0aa861.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&fp-z=1.0000&w=600&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A888)</kbd>

# Pushing the App Live

### Click on Publish
Hit the publish button the top to push the app live instantly!
<kbd>![Click publish to push the app live](https://images.tango.us/public/screenshot_a8c6a099-2114-4191-9672-685bae2c4e0c.png?crop=focalpoint&fit=crop&fp-x=0.8906&fp-y=0.0260&fp-z=3.1554&w=600&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=3360%3A1714)</kbd>

Your workflow is live! Now, you can create tasks and execute them on the ZORP mobile app.
