password = "Pa$455"

if len(password) < 6:
    strength = "Week"
elif len(password) <= 10:
    strength = "Medium"
else:
    strength = "Strong"

print(strength)
