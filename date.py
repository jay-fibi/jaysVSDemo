from datetime import datetime, timedelta

presentday = datetime.now()


yesterday = datetime.now() - timedelta(days=1)
today = datetime.now()
tomorrow = datetime.now() + timedelta(days=1)

print(f"Yesterday: {yesterday.strftime('%d-%m-%Y')}")
print(f"Today: {today.strftime('%d-%m-%Y')}")  
print(f"Tomorrow: {tomorrow.strftime('%d-%m-%Y')}")
print(f"Current Time: {today.strftime('%H:%M:%S')}")

