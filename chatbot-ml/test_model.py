import joblib
import pandas as pd

# Load the trained model
model_path = 'model/disaster_chatbot_model.pkl'
pipeline = joblib.load(model_path)

# Load the combined dataset to create a lookup for intents and responses
df = pd.read_csv('dataset/disaster_assistance_dataset.csv', low_memory=False)

# Create a mapping from intent to response
intent_response_map = df.drop_duplicates(subset=['Intent', 'Response']).set_index('Intent')['Response'].to_dict()

def get_response(user_query):
    # Use the loaded model to predict the intent
    predicted_intent = pipeline.predict([user_query])[0]
    # Map the predicted intent to its response
    response = intent_response_map.get(predicted_intent, "Sorry, I don't have information for this request.")
    return response

# Test cases
test_queries = [
    "What should I do during an earthquake?",
    "What should I do during a flood water?",
    "I have an injury in my hand. What should I do?"
]

for query in test_queries:
    response = get_response(query)
    print(f"User Query: {query}")
    print(f"Response: {response}\n")
