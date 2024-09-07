#include <iostream>
using namespace std;

int main(){
    int num = 5, sum = 0;
    for (int i = 1; i <= 5; i++){
        if(i % 2 != 0){
            sum += i;
        }
    }
    cout << "Sum of odd numbers from 1 to " << num << " is " << sum << endl;
    return 0;
}