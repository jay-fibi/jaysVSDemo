from datetime import datetime, timedelta

presentday = datetime.now()

"""
Calculates and prints the dates for yesterday, today, and tomorrow, as well as the current time.

The `presentday` variable is set to the current date and time using `datetime.now()`. From this, the `yesterday` and `tomorrow` variables are calculated by subtracting or adding a timedelta of 1 day.

The dates and time are then printed using the `strftime()` method to format the datetime objects into readable strings.
"""
yesterday = datetime.now() - timedelta(days=1)
today = datetime.now()
tomorrow = datetime.now() + timedelta(days=1)

print(f"Yesterday: {yesterday.strftime('%d-%m-%Y')}")
print(f"Today: {today.strftime('%d-%m-%Y')}")  
print(f"Tomorrow: {tomorrow.strftime('%d-%m-%Y')}")
print(f"Current Time: {today.strftime('%H:%M:%S')}")
