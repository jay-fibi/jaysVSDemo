import unittest
from datetime import datetime, timedelta
from date import presentday, yesterday, tomorrow

class TestDate(unittest.TestCase):

    def test_yesterday(self):
        expected = presentday - timedelta(days=1)
        self.assertEqual(yesterday, expected)

    def test_tomorrow(self):
        expected = presentday + timedelta(days=1) 
        self.assertEqual(tomorrow, expected)

    def test_presentday_format(self):
        expected = datetime.now().strftime('%d-%m-%Y')
        self.assertEqual(presentday.strftime('%d-%m-%Y'), expected)

    def test_time_format(self):
        expected = datetime.now().strftime('%H:%M:%S')
        self.assertEqual(presentday.strftime('%H:%M:%S'), expected)

if __name__ == '__main__':
    unittest.main()
