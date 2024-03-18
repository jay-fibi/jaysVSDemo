import datetime

print(datetime.datetime.now())

print(datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"))

print(datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S.%f"))

print(datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S.%f")[:-3])
