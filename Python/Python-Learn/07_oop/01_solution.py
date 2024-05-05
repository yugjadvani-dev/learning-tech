class Car:
    total_car = 0

    def __init__(self, brand, model):
        # self.brand = brand
        self.__brand = brand
        self.__model = model
        Car.total_car += 1

    def get_brand(self):
        return self.__brand + '!'

    def full_name(self):
        return f"{self.__brand} {self.__model}"

    def fuel_type(self):
        return "Petrol or Diesel"

    @staticmethod
    def general_description():
        return "Cars are means of transport"

    @property  # decorator
    def model(self):
        return self.__model


class ElectricCar(Car):
    def __init__(self, brand, model, battery_size):
        super().__init__(brand, model)
        self.battery_size = battery_size

    def fuel_type(self):
        return "Electric charge"


# my_tesla = ElectricCar("Tesla", "Model S", "85kWh")
# print(isinstance(my_tesla, Car))
# print(isinstance(my_tesla, ElectricCar))
# print(my_tesla.full_name())
# print(my_tesla.brand, my_tesla.model, my_tesla.battery_size)
# print(my_tesla.get_brand())
# print(my_tesla.fuel_type())


# safari = Car("Tata", "Safari")
# safari.model = "City"s
# safariThree = Car("Tata", "Nexon")
# print(safari.fuel_type())
# print(safari.total_car)
# print(safariThree.fuel_type())


# print(safari.model)


# test = Car("Test", "Test")
# print(test.total_car)


# Car("Tata", "Safari")
# Car("Tata", "Nexon")

# print(Car.total_car)


# my_car = Car("Toyota", "Corolla")
# print(my_car.brand, my_car.model)
# print(my_car.full_name())


# print(my_car.general_description())
# print(Car.general_description())


# my_new_car = Car("Tata", "Safari")
# print(my_new_car.brand, my_new_car.model)


class Battery:
    def battery_info(self):
        return "This is battery"


class Engine:
    def engine_info(self):
        return "This is engine"


class ElectricCatTwo(Battery, Engine, Car):
    pass


my_new_tesla = ElectricCatTwo("Tesla", "Model S")
print(my_new_tesla.engine_info())
print(my_new_tesla.battery_info())
