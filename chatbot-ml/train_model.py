import pandas as pd
import joblib
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import Pipeline
from sklearn.model_selection import train_test_split
import os

# Load the dataset
df = pd.read_csv('dataset/disaster_assistance_dataset.csv')

# Inspect the data
print(df.head())

# Prepare the data for training
texts = df['Response']
labels = df['Intent']

# Split the data into training and test sets
X_train, X_test, y_train, y_test = train_test_split(texts, labels, test_size=0.2, random_state=42)

# Define the pipeline for vectorization and model training
pipeline = Pipeline([
    ('vect', CountVectorizer()),  # Convert text to a matrix of token counts
    ('clf', MultinomialNB())      # Naive Bayes classifier for multinomial models
])

# Train the model
pipeline.fit(X_train, y_train)

os.makedirs('model', exist_ok=True)

# Save the trained model
model_path = 'model/disaster_chatbot_model.pkl'
joblib.dump(pipeline, model_path)

print(f"Model trained and saved as {model_path}.")
