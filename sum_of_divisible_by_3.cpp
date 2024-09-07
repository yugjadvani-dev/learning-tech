#include <iostream>
using namespace std;

int main(){
    int num = 10, sum = 0;
    
    for (int i = 0; i <= num; i++)
    {
        if(i % 3 == 0){
            sum += i;
        }
    }
    cout << sum << endl;
    
    return 0;
}