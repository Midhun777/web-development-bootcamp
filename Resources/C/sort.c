#include <stdio.h>

void sortArray(int arr[], int n)
{
    for (int i = 0; i < n - 1; i++)
    {
        for (int j = 0; j < n - i - 1; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

void printArray(int arr[], int n)
{
    for (int i = 0; i < n; i++)
    {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

int main()
{
    int array[] = {34, 7, 23, 32, 5, 62};
    int n = sizeof(array) / sizeof(array[0]);

    printf("Original Array: ");
    printArray(array, n);

    sortArray(array, n);

    printf("Sorted Array: ");
    printArray(array, n);

    return 0;
}
