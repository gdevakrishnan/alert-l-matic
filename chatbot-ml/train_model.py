import json
import numpy as np
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import Pipeline
from sklearn.model_selection import train_test_split
import joblib
import os

# First Aid Model Training

# Load the dataset
with open('dataset/first_aid_dataset.json', 'r') as file:
    data = json.load(file)

# Extract intents, patterns, and responses
patterns = []
responses = []

for intent in data['intents']:
    tag = intent['tag']
    for pattern in intent['patterns']:
        patterns.append(pattern)
        responses.append(tag)

# Split the dataset
X_train, X_test, y_train, y_test = train_test_split(patterns, responses, test_size=0.2, random_state=42)

# Create a pipeline for text classification
model = Pipeline([
    ('vect', CountVectorizer()),
    ('clf', MultinomialNB())
])

# Train the model
model.fit(X_train, y_train)

os.makedirs('model', exist_ok=True)

# Save the model
joblib.dump(model, 'model/first_aid_model.pkl')

print("First AId Model trained and saved successfully.")

#############################################

# Disaster preparedness train model

# Load the dataset
with open('dataset/disaster_preparedness_dataset.json', 'r') as file:
    data = json.load(file)

# Extract intents, patterns, and responses
patterns = []
responses = []

for intent in data['intents']:
    tag = intent['tag']
    for pattern in intent['patterns']:
        patterns.append(pattern)
        responses.append(tag)

# Split the dataset
X_train, X_test, y_train, y_test = train_test_split(patterns, responses, test_size=0.2, random_state=42)

# Create a pipeline for text classification
model = Pipeline([
    ('vect', CountVectorizer()),
    ('clf', MultinomialNB())
])

# Train the model
model.fit(X_train, y_train)

os.makedirs('model', exist_ok=True)

# Save the model
joblib.dump(model, 'model/disaster_preparedness_model.pkl')

print("Disaster Preparedness Model trained and saved successfully.")
