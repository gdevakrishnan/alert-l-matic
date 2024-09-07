import pandas as pd
import numpy as np
import random
import os
from datetime import datetime, timedelta

# Define constants
places = {
    "Shimla": (31.1048, 77.1734),
    "Manali": (32.2396, 77.1885),
    "Darjeeling": (27.0385, 88.2622),
    "Shillong": (25.5788, 91.8933),
    "Dehradun": (30.3165, 78.0322),
    "Munnar": (10.0889, 77.0594)
}
periods = ["Morning", "Afternoon", "Evening", "Night"]
num_records = 10000

# Function to generate random data
def generate_random_data():
    start_date = datetime(2020, 1, 1)
    end_date = datetime(2024, 12, 31)
    delta = end_date - start_date
    
    data = []
    for _ in range(num_records):
        # Random date within the range
        date = start_date + timedelta(days=random.randint(0, delta.days))
        place = random.choice(list(places.keys()))
        time = f"{random.randint(0, 23):02}:{random.randint(0, 59):02}"
        period = random.choice(periods)
        water_level = round(random.uniform(1.0, 4.0), 1)
        water_level_percentage = round(random.uniform(60, 90), 0)
        temperature = round(random.uniform(15, 30), 1)
        vibration = round(random.uniform(0.01, 0.10), 2)
        rain_gauge_level = round(random.uniform(0, 35), 1)
        pore_pressure = round(random.uniform(100, 140), 1)
        soil_moisture = round(random.uniform(25, 50), 1)
        latitude, longitude = places[place]
        distance = round(random.uniform(0, 50), 2)  # Random distance for demonstration

        data.append([date.strftime("%Y-%m-%d"), place, time, period, water_level, water_level_percentage,
                     temperature, vibration, rain_gauge_level, pore_pressure, soil_moisture,
                     latitude, longitude, distance])

    return data

# Create DataFrame
data = generate_random_data()
columns = ["Date", "Place", "Time", "Period", "Water Level (m)", "Water Level Percentage (%)", 
           "Temperature (°C)", "Vibration on Earth (mg)", "Rain Gauge Level (mm)", 
           "Pore Pressure (kPa)", "Soil Moisture (%)", "Latitude", "Longitude", "Distance (km)"]

df = pd.DataFrame(data, columns=columns)

# Create dataset folder if it does not exist
os.makedirs('dataset', exist_ok=True)

# Define the file path
file_path = 'dataset/landslide_dataset_india.csv'

# Save to CSV
df.to_csv(file_path, index=False)

print(f"CSV file with 10,000 records and sensor data for 2020-2024 has been created and saved to {file_path}.")
