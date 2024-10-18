import unittest
from datetime import datetime, timedelta
from date import display_dates
from io import StringIO
import sys

class TestDisplayDates(unittest.TestCase):
    def setUp(self):
        self.held, sys.stdout = sys.stdout, StringIO()

    def tearDown(self):
        sys.stdout = self.held

    def test_display_dates_output_format(self):
        display_dates()
        output = sys.stdout.getvalue().strip().split('\n')

        self.assertEqual(len(output), 4)
        self.assertTrue(output[0].startswith("Yesterday = "))
        self.assertTrue(output[1].startswith("Today = "))
        self.assertTrue(output[2].startswith("Tomorrow = "))
        self.assertTrue(output[3].startswith("Time now = "))

    def test_display_dates_date_consistency(self):
        display_dates()
        output = sys.stdout.getvalue().strip().split('\n')

        yesterday = datetime.strptime(output[0].split('=')[1].strip(), '%d-%m-%Y')
        today = datetime.strptime(output[1].split('=')[1].strip(), '%d-%m-%Y')
        tomorrow = datetime.strptime(output[2].split('=')[1].strip(), '%d-%m-%Y')

        self.assertEqual(today - yesterday, timedelta(days=1))
        self.assertEqual(tomorrow - today, timedelta(days=1))

    def test_display_dates_time_format(self):
        display_dates()
        output = sys.stdout.getvalue().strip().split('\n')

        time_now = output[3].split('=')[1].strip()
        self.assertTrue(len(time_now) == 8)  # HH:MM:SS format
        hour, minute, second = map(int, time_now.split(':'))
        self.assertTrue(0 <= hour < 24)
        self.assertTrue(0 <= minute < 60)
        self.assertTrue(0 <= second < 60)

if __name__ == '__main__':
    unittest.main()
