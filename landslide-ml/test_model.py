import pandas as pd
import joblib
from sklearn.preprocessing import StandardScaler
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder

# Load the model and scaler
model_path = 'model/landslide_predictor_model.pkl'
scaler_path = 'model/scaler.pkl'

loaded_model = joblib.load(model_path)
loaded_scaler = joblib.load(scaler_path)

# Define the feature columns expected by the scaler and model
feature_columns = [
    "Date", "Place", "Time", "Period", "Water Level (m)", "Water Level Percentage (%)", 
    "Temperature (°C)", "Vibration on Earth (mg)", "Rain Gauge Level (mm)", 
    "Pore Pressure (kPa)", "Soil Moisture (%)", "Latitude", "Longitude", "Distance (km)"
]

# Example new data for prediction
# Case 1: Landslide will occur
case_1_data = pd.DataFrame({
    'Place': [1],  # Assume 'Munnar' was encoded as 1
    'Period': [1],  # Assume 'Morning' was encoded as 1
    'Water Level (m)': [5.0],  # High water level indicating a potential landslide
    'Water Level Percentage (%)': [90],  # High percentage indicating saturation
    'Temperature (°C)': [20],
    'Vibration on Earth (mg)': [0.05],  # Higher vibration might indicate instability
    'Rain Gauge Level (mm)': [50],  # High rain level
    'Pore Pressure (kPa)': [150],  # High pore pressure
    'Soil Moisture (%)': [60],  # High soil moisture
    'Latitude': [10.0889],
    'Longitude': [77.0594],
    'Distance (km)': [20]
}, columns=feature_columns)

# Case 2: Landslide will not occur
case_2_data = pd.DataFrame({
    'Place': [1],  # Assume 'Munnar' was encoded as 1
    'Period': [1],  # Assume 'Morning' was encoded as 1
    'Water Level (m)': [0.5],  # Low water level
    'Water Level Percentage (%)': [10],  # Low percentage
    'Temperature (°C)': [22],
    'Vibration on Earth (mg)': [0.01],  # Low vibration
    'Rain Gauge Level (mm)': [5],  # Low rain level
    'Pore Pressure (kPa)': [30],  # Low pore pressure
    'Soil Moisture (%)': [15],  # Low soil moisture
    'Latitude': [10.0889],
    'Longitude': [77.0594],
    'Distance (km)': [20]
}, columns=feature_columns)

# Ensure the columns are in the correct order
case_1_data = case_1_data[feature_columns]
case_2_data = case_2_data[feature_columns]

# Convert new data
# Apply the same preprocessing steps to the test data as applied during training
case_1_scaled = loaded_scaler.transform(case_1_data)
case_2_scaled = loaded_scaler.transform(case_2_data)

# Predict
case_1_prediction = loaded_model.predict(case_1_scaled)
case_2_prediction = loaded_model.predict(case_2_scaled)

print(f"\nPredicted Landslide for Case 1 (Landslide will occur): {case_1_prediction[0]}")
print(f"Predicted Landslide for Case 2 (Landslide will not occur): {case_2_prediction[0]}")
