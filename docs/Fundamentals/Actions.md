---
sidebar_position: 4
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/vMHsaAOjN5U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br/><br/>

Actions are the Zorp infrastructure for Integrations. 


The apps that are built on Zorp have a large need to integrate with external systes. This could be 
- Sending an SMS to a customer when the delivery worker starts from the warehouse (or)
- Uploading the document to a CRM when the sales person collects the documents at the customer's home
- Updating the status of the task constantly to the internal data warehouse. 

All of these can be done via Actions. Actions is a WISIWYG interface for API integrations. Any data that needs to be pushed to an external system can be sent via the Actions interface. 

<img width="1248" alt="Screenshot 2022-04-21 at 1 23 45 AM" src="https://user-images.githubusercontent.com/10784425/164311952-0ff65121-df53-45af-9563-3b5cd7ee1ac9.png"></img>

## Creating an action
An action can be created in a transition. There are multiple types of actions. The most commonly used one is the API action which can work with any API. 

## Expression Support
Actions can take plain text/numbers/dates etc but also can support complex javascript expressions and data points that are part of the task or users. 

