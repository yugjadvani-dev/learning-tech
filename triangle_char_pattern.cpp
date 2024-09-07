#include <iostream>
using namespace std;

int main(){
    int num = 5;
    char ch = 'A';

    for (int i = 0; i < num; i++)
    {
        for (int j = 0; j <= i; j++)
        {
            // Print the character
            cout << ch << " ";
        }
        ch++; // Increment ch after each row
        cout << "\n";
    }
    
    return 0;
}
