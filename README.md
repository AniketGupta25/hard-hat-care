# Hard-Hat Care


Hard Hat Care is a website intended to improve the mental health of construction workers by flagging employees with signs of depression.

Through a model trained on the causes of depression in the workplace, Hard Hat Care can provide a strong probability on workers with depression.

We feature a robust, interactive website that enables employers to organize and examine the mental well-being of their employees.

**USE CASE:** Corporate officers can leverage this tool to periodically identify employees most at risk for depression and get them treatment.  


**DISCLAIMER:** Hard-Hate Care is not intended to diagnose depression. This does not provide medical advice. Seek professional care only.


## Hard hats are not enough :triangular_flag_on_post:


***Did you know?*** According to a [2020 report](https://www.cdc.gov/mmwr/volumes/69/wr/mm6903a1.htm) from the Center for Disease Control (CDC), the construction industry records the **second highest suicide** rate in the U.S.

Numerous factors go into why construction workers are struggling with mental health. Mainly, construction is a mentally and physically draining job.
Other factors include:
* Highly-stressful environment *(Imagine working all day in the Texas summer while wearing a full uniform)* 
* 8+ Work Hours with little break 
* Physically demanding job leading to injuries 
* Seasonal layoff leaving workers with no job
* High variance of salary 

There is a lack of resources to help these struggling construction workers due to their work environment. Construction workers are discouraged from discussing about their mental health for fear of losing their jobs. As a result, many construction workers bottle up their emotions which can lead to depression.

Therefore, companies and employers should take the initiative to help support their workers form the backbone of society. However, it's extremely difficult for companies to keep track of their thousands of employees thus making it hard to identify struggling individuals. That's where we come in.

## Introducing our products :bulb:

Hard-Hat Care serves as a tool to easily organize a large database of employee records and flag individuals who may be struggling with their mental health. 

The rules governing flagging mechanics are based on a robustly-trained XGBoost and tuned machine learning model. This enables companies and managers to perform follow-up actions and provide the necessary resources to help struggling employees.    
 

### How does it work:question:

Hard Hat Care uses a model that computes a mental health score based on the following inputs:
1. Date of Joining
2. Gender
3. Designation (Seniority)
4. Resource Allocation
5. Mental Fatigue Score

Clients must upload a CSV file containing this data. This score is used to flag employees.

## How to Use :notebook:

1. Go to [HardHatCare]() website
2. Click the *"Start Analysis"* button
3. Upload a CSV file to the website (**Note:** an empty template CSV file is provided)
4. Receive results on employees with at-risk mental health based on the data provided.
5. **DONE!**


## Challenges faced when building :confused:

**Finding Accurate Data:** Given the gravity of mental health problems, we wanted to find an accurate and reliable quantitative database to train our model. However, this proved to be our biggest obstacle during HackTX23 for the following reasons:
* Lack of datasets in the mental health sphere *(especially in blue-collar jobs)*
* The time taken to find viable datasets with quantative data points, not textual

**Implementation of Concept:** As most of our team was participating in the Hackathon for the first time, we faced a steep learning curve. Some new learnings include:
* Connecting the front end to the back end
* Parsing a CSV file in TypeScript
* Perfoming relevant encodings on categorical data
* Using Flask API to run the exported model (.pkl)

## What we learned :mortar_board:

The construction industry poses specific challenges to the mental health of its workers, including high stress, physical strain, job insecurity, and isolation. However, there is a growing recognition of these issues, and efforts are being made to improve mental health awareness, reduce stigma, and provide support and resources to workers in this field. 

The ultimate goal is to create a more mentally healthy and supportive environment within the construction industry. We hope our tool can play a small part in acheiving this goal. :)


## Contribution :smile:


This project was made for HackTX 2023 with the help of [Andy](), [Ishan](), [Evan](), [Aniket]()
