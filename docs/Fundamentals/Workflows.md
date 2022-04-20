---
sidebar_position: 1
---

Workflows are like a blueprint to your application. 

<img width="570" alt="Screenshot 2022-04-21 at 1 18 57 AM" src="https://user-images.githubusercontent.com/10784425/164311221-ae4ce6ae-3bc9-4c05-81b3-0e6f5f3c045e.png">

Each application in Zorp specifies a proess to be done. Each process has multiple steps. 

## Steps
The steps indicate different possible scenarios a user can be in. 
Eg., Imagine a warehouse worker is moving products from the inventory to their loading bay. Here, the worker could be looking for the product or picked up the product or loading the product into the truck. Each of these steps put together forms the workflow. 

## Transitions
Transitions indicate how these steps are connected to one another. 

The instance of a workflow is called a task. Imagine workflow as a process flow and a task is created with the blueprint of this workflow for every single customer order or sales person visit.
