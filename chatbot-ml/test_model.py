import joblib
import json

# First Aid Model Testing

# Load the model
model = joblib.load('model/first_aid_model.pkl')

# Load the intent responses
with open('dataset/first_aid_dataset.json', 'r') as file:
    data = json.load(file)

intent_responses = {}
for intent in data['intents']:
    tag = intent['tag']
    response = intent['responses'][0]  # Assuming only one response per intent
    intent_responses[tag] = response

# Predict using the model
def predict_intent(text):
    prediction = model.predict([text])
    return prediction[0]

def get_response(text):
    intent = predict_intent(text)
    return intent_responses.get(intent, "Sorry, I don't have a response for that.")

# Example usage
text = "How to cure Cuts?"
response = get_response(text)
print(f"Response for '{text}': {response}")


# Disaster preparedness and awareness model testing

# Load the model
model = joblib.load('model/disaster_preparedness_model.pkl')

# Load the intent responses
with open('dataset/disaster_preparedness_dataset.json', 'r') as file:
    data = json.load(file)

intent_responses = {}
for intent in data['intents']:
    tag = intent['tag']
    response = intent['responses'][0]  # Assuming only one response per intent
    intent_responses[tag] = response

# Predict using the model
def predict_intent(text):
    prediction = model.predict([text])
    return prediction[0]

def get_response(text):
    intent = predict_intent(text)
    return intent_responses.get(intent, "Sorry, I don't have a response for that.")

# Example usage
text = "How to save myself during tsunami?"
response = get_response(text)
print(f"Response for '{text}': {response}")