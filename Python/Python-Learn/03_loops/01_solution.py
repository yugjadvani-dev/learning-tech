numbers = [1, -2, 3, -4, 5, 6, -7, -8, 9, 10]
positive_number_count = 0

for num in numbers:
    if (num > 0):
        print(num)
        positive_number_count += 1

print("Final count of positive count", positive_number_count)