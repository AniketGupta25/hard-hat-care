# Hard-Hat Care


Hard Hat Care is a website intended to improve the mental health of construction workers by flagging employees with signs of depression.

By using a model trained on the causes of depression in the workplace, Hard Hat Care will provide a strong probability of workers with depression.

We featured a robust interactive website that enables employers to organize and examine the mental well-being of their employees.

**USE CASE:** Corporate officers can periodically leverage this tool to identify employees most at risk for depression and get them treatment.  


**DISCLAIMER:** Hard-Hate Care is not intended to diagnose depression. This does not provide medical advice. Please seek professional care only.


## Hard hats are not enough :triangular_flag_on_post:


***Did you know?*** According to a [2020 report](https://www.cdc.gov/mmwr/volumes/69/wr/mm6903a1.htm) from the Center for Disease Control (CDC), the construction industry records the **second highest suicide** rate in the U.S.

Numerous factors go into why construction workers are struggling with mental health. Mainly, construction is a mentally and physically draining job.
Other factors include:
* Highly-stressful environment *(Imagine working all day in the Texas summer while wearing a full uniform)* 
* 8+ Work Hours with little break 
* Physically demanding job leading to injuries 
* Seasonal layoff leaving workers with no job
* High variance of salary 

Furthermore, there is a lack of resources to help these struggling construction workers due to their work environment. For one, construction workers are discouraged from discussing about their mental health due to their fear of losing their jobs. As a result, many construction workers bottled up their emotions which could lead to depression.

Therefore, companies and employers should take the initiative action to help support their workers who act as the backbone of society. However, it's extremely difficult for companies to keep track of their thousands of employees thus making it hard to identify struggling individuals.

## Introducing our products :bulb:

Hard-Hat Care serves as a tool to easily organize a large database of employee records and flag individuals who may be struggling with their mental health, and the rules governing flagging mechanics are based on a machine learning model. This enables companies and managers to perform follow-up actions and provide the necessary resources to help struggling employees.
    
 

### How does it work:question:

Hard Hat Care uses a model that computes the following inputs:
1. Date of Joining
2. Gender
3. Designation (Seniority)
4. Resource Allocation
5. Mental Fatigue Score


Clients must upload a CSV file with these inputs.

## How to Use :notebook:

1. Go to [HardHatCare]() website
2. Click the *"Start Analysis"* button
3. Upload a CSV file to the website (**Note:** an empty template CSV file is provided)
4. **DONE!**


## Challenges faced when building :confused:

**Finding Accurate Data:** Given the serious problem of mental health, we want to find an accurate and reliable quantitative database to train our model. However, this proves this to be the biggest obstacle due to the following reasons:
* Lack of datasets in the mental health sphere *(especially in blue-collar jobs)*
* The time taken to find viable datasets with quantative data points, not textual

**Implementation of Concept:** Since half of our team was participating in the Hackathon for the first time, we struggled to integrate smoothly across the stack. For example,
* Connect the front end to the back end
* Parsing a CSV file in TypeScript




## What we learned :mortar_board:

The construction industry poses specific challenges to the mental health of its workers, including high stress, physical strain, job insecurity, and isolation. However, there is a growing recognition of these issues, and efforts are being made to improve mental health awareness, reduce stigma, and provide support and resources to workers in this field. The ultimate goal is to create a more mentally healthy and supportive environment within the construction industry. 


## Contribution :smile:


This project was made for HackTX 2023 with the help of [Andy](), [Ishan](), [Evan](), [Aniket]()
