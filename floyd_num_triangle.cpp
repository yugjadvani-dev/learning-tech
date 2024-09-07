#include <iostream>
using namespace std;

int main(){
    int num = 4, n = 1;

    for (int i = 0; i < num; i++)
    {
        for (int j = i+1; j > 0; j--)
        {
            cout << n << " ";
            n++;
        }
        cout << endl;
    }
    
    return 0;
}