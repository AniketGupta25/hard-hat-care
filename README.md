# Hard Hat Care


Hard Hat Care aims improve the mental health of construction workers by flagging employees that show signs of poor mental health. We feature a robust, interactive website that enables employers to organize and examine the mental well-being of their employees.

**USE CASE:** Corporate officers and site managers can leverage this tool to periodically identify at risk employees, allowing them to proactively reach out and provide the necessary mental health support. 


**DISCLAIMER:** Hard Hat Care is not intended to diagnose depression. This does not provide medical advice. Seek professional care only.


## Hard hats are not enough :triangular_flag_on_post:


***Did you know?*** According to a [2020 report](https://www.cdc.gov/mmwr/volumes/69/wr/mm6903a1.htm) from the Center for Disease Control (CDC), the construction industry records the **second highest suicide** rate in the U.S.

There are numerous reasons why construction workers are struggling with mental health.
Some factors include:
* A highly-stressful environment 
* 8+ work hours with little break 
* Physically demanding tasks 
* Seasonal layoffs that leave workers with no job 

Construction workers are discouraged from discussing their mental health, as there is a strong stigma associated with such conversations. Therefore, companies should take initiative to help support the people that form the backbone of society. However, it's extremely difficult for companies to keep track of their many employees, making it hard to identify struggling individuals. That's where we come in.

## Introducing our product :bulb:

Hard Hat Care serves as a tool to easily organize a large database of employee records and flag individuals who may be struggling with their mental health. The rules governing flagging mechanics are based on a robustly-trained and tuned XGBoost Regressor machine learning model.
This enables companies and managers to perform follow-up actions and provide the necessary resources to help their struggling employees.    
 

### How does it work:question:

Hard Hat Care uses a model that computes a mental health score based on the following data:
1. Date of Joining (YYYY-MM-DD)
2. Gender (Male or Female)
3. Designation ([0.0, 5.0] where higher means higher senority level)
4. Resource Allocation ([1.0, 10.0] where higher means higher workload)
5. Performance ([0.0, 10.0] where higher means higher performance)

Clients must upload a CSV file containing this data. This mental health score is used to flag employees.

## How to Use :notebook:

1. Go to [HardHatCare]() website
2. Click the *"Start Analysis"* button
3. Upload a CSV file to the website (**Note:** an empty template CSV file is provided)
4. Receive results on employees flagged for at risk mental health.


## Challenges faced when building :confused:

**Finding Accurate Data:** Given the gravity of mental health problems, we wanted to find an accurate and reliable quantitative database to train our model. However, this proved to be a big obstacle during HackTX23 for the following reasons:
* Lack of datasets related to employee mental health *(especially in blue-collar jobs)*
* Many existing datasets mostly contained textual data points rather than quantitative data points

**Implementation of Concept:** As this was a majority of our team's first hackathon, we faced a steep learning curve in integrating smoothly across the stack. Some problems included:
* Connecting the Next.js front end to the Flask back end
* Parsing a CSV file in TypeScript
* Perfoming relevant encodings on categorical data
* Deploying our application through a hosting service
* Using the Flask API to run the exported machine learning model (.pkl)

## What we learned :mortar_board:

The construction industry poses specific challenges regarding the mental health of its employees, including high stress, physical strain, job insecurity, and isolation. However, there is a growing recognition of these issues, and efforts are being made to improve mental health awareness, reduce stigma, and provide support and resources to workers in this field. 

The ultimate goal is to create a more mentally healthy and supportive environment within the construction industry. We hope our tool can play a small part in acheiving this goal. :)


## Contribution :smile:


This project was made for HackTX 2023 with the help of [Andy](), [Ishan](), [Evan](), and [Aniket]()
