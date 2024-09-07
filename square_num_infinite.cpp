#include <iostream>
using namespace std;

int main(){
    int num = 3, n = 1;
    for (int i = 0; i < num; i++)
    {
        for (int j = 0; j < num; j++)
        {
            cout << n << " ";
            n++;
        }
        cout << endl;
    }
    
    return 0;
}