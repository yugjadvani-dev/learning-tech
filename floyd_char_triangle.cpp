#include <iostream>
using namespace std;

int main(){
    int n = 4, num = 1;
    char ch = 'A';

    for (int i = 0; i < num; i++)
    {
        for (int j = i+1; j > 0; j--)
        {
            cout << ch << " ";
        }
        ch++;
    }
    return 0;
}