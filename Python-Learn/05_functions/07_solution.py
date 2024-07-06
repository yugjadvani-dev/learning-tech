def summ_all(*args):
    # pass
    # print(*args)
    # print(args) # tuple
    for i in args:
        print(i * 2)
    return sum(args)

print(summ_all(1, 2))
print(summ_all(1, 2, 3, 4))
print(summ_all(1, 2, 3, 4, 6, 7, 8))