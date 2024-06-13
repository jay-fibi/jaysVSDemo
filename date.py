from datetime import date, datetime

today = date.today()
print(today)

from datetime import date, datetime, timedelta

today = date.today()
print(today)

now = datetime.now()
print(now)

date_str = "2023-04-20"
date_obj = datetime.strptime(date_str, "%Y-%m-%d")
print("Date from string:", date_obj.date())

yesterday = today - timedelta(days=1)
print("Yesterday's date:", yesterday)


date1 = date(2023, 4, 15)
date2 = date(2023, 5, 1)
diff = date2 - date1
print("Difference in days:", diff.days)

formatted_date = today.strftime("%B %d, %Y")
print("Formatted date:", formatted_date)

formatted_time = now.strftime("%H:%M:%S")
print("Formatted time:", formatted_time)
