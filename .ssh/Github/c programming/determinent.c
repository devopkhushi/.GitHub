#include <stdio.h>

int determinantOf2x2(int a, int b, int c, int d) {
    return (a * d) - (b * c);
}

int determinantOfMatrix(int matrix[3][3]) {
    int det = 0;
    
    for (int i = 0; i < 3; i++) {
        det += matrix[0][i] * determinantOf2x2(matrix[1][(i + 1) % 3], matrix[1][(i + 2) % 3],
                                              matrix[2][(i + 1) % 3], matrix[2][(i + 2) % 3]);
    }
    
    return det;
}

int main() {
    int matrix[3][3];
    
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            printf("Enter the element: ");
            scanf("%d", &matrix[i][j]);
        }
        printf("\n");
    }
    
    printf("Printing the elements of the matrix: \n");
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            printf("%d\t", matrix[i][j]);
        }
        printf("\n");
    }
    
    int determinant = determinantOfMatrix(matrix);
    printf("The determinant is: %d", determinant);

    return 0;
}