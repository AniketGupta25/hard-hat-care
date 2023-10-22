from flask import Flask, jsonify, request
from flask_cors import CORS
import pickle
import xgboost as xgb
import numpy as np
import pandas as pd
# import timedelta as td


# app instance
app = Flask(__name__)
CORS(app)

loaded_model = pickle.load(open('xgb_model.pkl', 'rb'))

@app.route('/')
def home():
    return "HELLO WORLD UNITE!"

#/api/home
@app.route("/api/home", methods={'GET', 'POST'})
def return_home():
    data = request.json.get('data', None)
    
    if data is None:
        return jsonify({'error': 'Data not provided in request'}), 400


    result_list = []
    print(data)

    today_date = pd.to_datetime("today");

    for person in data:

        person_name = person['id']    
        del person['id']

        # change input var from date_of_joining string to the days_count int
        days_count = today_date - pd.to_datetime(person['date_of_joining'])
        del person['date_of_joining']
        person['days_count'] = days_count.days

        # encode gender input variable to 0/1
        init_gender = person['gender']
        person['gender'] = 1 if (init_gender == "Female") else 0

        # creating df and making it an np array
        df = []
        df.append(person["gender"])
        df.append(person["designation"])
        df.append(person["resource_allocation"])
        df.append(person["mental_fatigue_score"])
        df.append(person["days_count"])
    
        df = np.array(df)


        feature_names = ["Gender", "Designation", "Resource Allocation", "Mental Fatigue Score", "days_count"]
        df = pd.DataFrame([df], columns=feature_names)
        
        # making prediction and returningto front
        prediction = loaded_model.predict(df)
        prediction = float(prediction[0])
        result_list.append([person_name, prediction])

    print("RESULT LIST", result_list)

    return jsonify({'result': result_list})

if __name__ == "__main__":
    app.run(debug=True, port=8080)
