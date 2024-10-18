from datetime import datetime, timedelta

presentday = datetime.now()

def display_dates():
    yesterday = presentday - timedelta(1)
    tomorrow = presentday + timedelta(1)

    print("Yesterday = ", yesterday.strftime('%d-%m-%Y'))
    print("Today = ", presentday.strftime('%d-%m-%Y'))
    print("Tomorrow = ", tomorrow.strftime('%d-%m-%Y'))
    print("Time now = ", presentday.strftime('%H:%M:%S'))
