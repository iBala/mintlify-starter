---
sidebar_position: 7
---

# Decision Node
Transition between screens using automatic if-else conditions

## What is a Decision Node?
Have you ever felt the need to show different screens to the user depending on the work progress without the user specifically choosing it? You can now do that in Zorp using the Decision Node. Decision nodes help users to navigate to different screens programmatically through a simple if-else method. 

> For Example : A Particular agent has met an appointed customer and needs to enter it in the designated app. The app will prompt two possible options : “Met'' or “Not Met”. He will click on the “Met” Option.  The agent will now be prompted to the “Congratulations, keep it up!” screen. Had the agent not met the customer and clicked on the “Not Met” Option, he would have been prompted to the “Uh no, Pending Customer!” Screen.

So now, How do we automatically show the right screen to the user, based on the data we have collected? That is where the Decision Node comes into play!

## How to use a Decision Node?
1. Open Your Existing Workflow in which you would like to insert your Decision Node.
(Click here to know - How to Create a Workflow)
2.  Click on the **“Create Node”** Option located on the right portion of the Navigation Bar. It will show you two options - “Step Node” and “Decision Node”. Click on the **“Decision Node”** Option.
![Step 2](https://user-images.githubusercontent.com/108575536/177477239-c64ff142-4162-45f0-a1f9-fae352bff902.png)
![Step 2 1](https://user-images.githubusercontent.com/108575536/177477338-20700de3-f442-4d37-8200-ad9e86dea1ad.png)

3.  The Decision Node Action Box will Pop up. Create a transition between the Step node to the Decision Node. Similarly, create a transition from the Decision node to the desired Step Nodes.
(Click here to know more about Step Nodes)
![Step 3](https://user-images.githubusercontent.com/108575536/177477556-b92916e1-9bf6-43de-b9a1-41e8d49b468f.png)
![Step 3 1](https://user-images.githubusercontent.com/108575536/177477616-f387ab01-ea98-4363-83c7-a35f656f2439.png)
![Step 3 2](https://user-images.githubusercontent.com/108575536/177477656-27e2cfc2-d433-471c-89c3-62620b972b41.png)

4. Click on the **“First Switch”** option, under the “If” data space. The Tab will open on the right side of your workspace. 
![Step 4](https://user-images.githubusercontent.com/108575536/177477877-e58ca36c-63ae-4b93-8895-fc7b16918d1f.png)

5. Click on the **“+Add New”** option, which is present alongside the **Conditions Drop Down Box**. You will be shown two options :
   - **Location Check** - It identifies whether two specified geo locations are close to one another. The specific distance to check the proximity can be modified. There is no pre-specified distance. 
A good example where you can use this is when you want to make sure the user is at a given location ( at or near the customer’s location).
   - **Expression Check** - This is a simple logic based check. The User can enter the logic based code in the low-code environment. The code can be simple (for example - to check whether the two values are the same) or it can be a complex code (For example-  To check whether the delivery boy has reached the location between 12pm to 1pm). 
   ![Step 1 0](https://user-images.githubusercontent.com/108575536/177478665-3a42ddc6-a1c9-40cb-86ad-4d3bb56ebfba.png)
   ![Step](https://user-images.githubusercontent.com/108575536/177478773-6725224b-d41e-42e1-bf7b-4085cc15eb08.png)

6. You can add multiple if-conditions if you wish to do so. For that you must click on the **“Add Switch”** Button under the if-description box and write your desired logic for the same. 

![If step](https://user-images.githubusercontent.com/108575536/177478916-6d69ada3-c4f5-4f68-b013-ccfe9d85147c.png)

7. The logic is ready. You can check it by implementing it on your app. The link to an example video it linked at the bottom of the page. 





