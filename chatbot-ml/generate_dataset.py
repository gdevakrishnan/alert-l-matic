import pandas as pd
import numpy as np
import os

# Define sample data
data = {
    "Intent": [
        "Disaster Awareness", "First Aid Guide", "General Guidance"
    ],
    "Entity": [
        "earthquake", "flood", "hurricane", "wildfire", "pandemic", "heatwave", 
        "tornado", "volcano", "burn", "cut", "sprain", "fracture", 
        "bleeding", "drowning", "shock", "mental_health", "shelter", "evacuation", 
        "food_and_water"
    ],
    "Response": [
        "During an earthquake, drop to your knees, cover your head and neck, and stay indoors. Avoid using elevators and follow evacuation instructions if provided.",
        "During a flood, move to higher ground, avoid walking or driving through floodwaters, and listen to local authorities for safety instructions and updates.",
        "During a hurricane, stay indoors, secure windows and doors, and have an emergency kit ready. Follow evacuation orders if issued and avoid using candles.",
        "During a wildfire, evacuate if instructed, close windows and doors to keep out smoke, and use a damp cloth to cover your nose and mouth. Stay informed via local news.",
        "During a pandemic, practice good hygiene, wear masks as advised, maintain social distancing, and stay informed through official health sources.",
        "During a heatwave, stay hydrated, avoid outdoor activities during peak heat hours, and use fans or air conditioning. Seek medical attention if you experience symptoms of heat exhaustion.",
        "During a tornado, move to a small, windowless interior room on the lowest floor, cover yourself with a mattress or heavy furniture, and avoid using elevators.",
        "During a volcanic eruption, stay indoors, avoid inhaling ash, and follow evacuation instructions. Keep windows and doors sealed to prevent ash from entering your home.",
        "For burns, cool the area with running water for at least 10 minutes, cover with a clean, non-stick bandage, and seek medical attention if necessary.",
        "For cuts, clean the wound with water, apply antiseptic, and cover with a sterile bandage. Seek professional medical help if needed.",
        "For a sprain, apply ice to the injured area, keep it elevated, and avoid using it. Seek medical attention if the pain persists or if there is severe swelling.",
        "For a fracture, immobilize the affected area, apply ice to reduce swelling, and seek immediate medical help.",
        "For bleeding, apply direct pressure to the wound with a clean cloth, elevate the injured area if possible, and seek medical assistance immediately.",
        "For drowning, get the person out of the water, perform CPR if trained, and seek emergency medical help immediately.",
        "For shock, lay the person flat, elevate their legs, keep them warm, and seek medical assistance immediately.",
        "Seek support from mental health professionals during crises. Contact local mental health services or hotlines for assistance.",
        "Find the nearest shelter by checking local resources or contacting local authorities for information.",
        "Follow local evacuation orders and use designated evacuation routes. Keep an emergency kit ready and stay informed through local news.",
        "Check local distribution centers for food and water. For specific locations and times, contact local services or visit official websites."
    ]
}

# Generate the DataFrame with random sampling
num_rows = 10000
np.random.seed(42)  # For reproducibility

# Create a DataFrame with random sampling from the data
df = pd.DataFrame({
    "Intent": np.random.choice(data["Intent"], num_rows),
    "Entity": np.random.choice(data["Entity"], num_rows),
    "Response": np.random.choice(data["Response"], num_rows)
})

# Create dataset folder if it does not exist
os.makedirs('dataset', exist_ok=True)

# Save to CSV
df.to_csv('dataset/disaster_assistance_dataset.csv', index=False)

print("dataset created and saved as disaster_assistance_dataset.csv.")
