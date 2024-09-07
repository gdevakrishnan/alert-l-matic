import pandas as pd
import numpy as np
import os
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
import joblib

# Load the dataset
file_path = 'dataset/landslide_dataset_india.csv'
data = pd.read_csv(file_path)

print("Hello")

# Display the first few rows of the dataset and info
print("Data Head:")
print(data.head())
print("\nData Info:")
print(data.info())

# Check for missing values
print("\nMissing Values:")
print(data.isnull().sum())

# Convert categorical variables to numerical
data['Place'] = data['Place'].astype('category').cat.codes
data['Period'] = data['Period'].astype('category').cat.codes

# Convert date columns to numeric (if applicable)
if 'DateColumn' in data.columns:  # Replace 'DateColumn' with your actual date column name
    data['DateColumn'] = pd.to_datetime(data['DateColumn'])
    data['DateColumn'] = (data['DateColumn'] - pd.Timestamp("1970-01-01")) // pd.Timedelta('1D')  # Convert to number of days since 1970-01-01

# Define a dummy target column for demonstration purposes
data['Landslide'] = np.random.randint(0, 2, size=len(data))  # Dummy target (0 or 1)

# Feature and target separation
X = data.drop('Landslide', axis=1, errors='ignore')
y = data['Landslide']

# Ensure all features are numeric
X = X.apply(pd.to_numeric, errors='coerce')  # Convert all columns to numeric, invalid parsing will be set as NaN

# Check for and handle missing values after conversion
X = X.fillna(0)  # Fill missing values with 0, or use a more appropriate strategy

# Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Standardize features
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Initialize and train the model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train_scaled, y_train)

# Save the model and scaler
model_path = 'model/landslide_predictor_model.pkl'
scaler_path = 'model/scaler.pkl'

os.makedirs('model', exist_ok=True)  # Create the directory if it doesn't exist
joblib.dump(model, model_path)
joblib.dump(scaler, scaler_path)

print(f"\nModel has been saved to {model_path}")
print(f"Scaler has been saved to {scaler_path}")
