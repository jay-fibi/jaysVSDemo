class TestAddFunction:
    def test_add_positive_numbers(self):
        assert add(10, 5) == 15

    def test_add_negative_numbers(self):
        assert add(-3, -7) == -10

    def test_add_positive_and_negative(self):
        assert add(8, -3) == 5

    def test_add_zero(self):
        assert add(0, 10) == 10
        assert add(5, 0) == 5

    def test_add_large_numbers(self):
        assert add(1000000, 2000000) == 3000000

    def test_add_floating_point(self):
        assert abs(add(3.14, 2.86) - 6.0) < 1e-6

    def test_add_string_numbers(self):
        with pytest.raises(TypeError):
            add("5", "3")

    def test_add_missing_argument(self):
        with pytest.raises(TypeError):
class TestIncrementFunction:
    def test_increment_positive_number(self):
        assert increment(5) == 6

    def test_increment_negative_number(self):
        assert increment(-3) == -2

    def test_increment_zero(self):
        assert increment(0) == 1

    def test_increment_floating_point(self):
        assert abs(increment(3.14) - 4.14) < 1e-6

    def test_increment_by_custom_value(self):
        assert increment(10, by=5) == 15

    def test_increment_by_negative_value(self):
        assert increment(10, by=-3) == 7

    def test_increment_by_zero(self):
        assert increment(7, by=0) == 7

    def test_increment_large_number(self):
        assert increment(1000000) == 1000001

    def test_increment_string_number(self):
        with pytest.raises(TypeError):
            increment("5")

    def test_increment_missing_argument(self):
        with pytest.raises(TypeError):
            increment()
            add(5)
