#include <stdio.h>

void mostrarMenu() {
printf("Seleccione una operación:\n");
printf("1. Suma (+)\n");
printf("2. Resta (-)\n");
printf("3. Multiplicación (*)\n");
printf("4. División (/)\n");
printf("5. Salir\n");
}

int main() {
int opcion;
float num1, num2, resultado;

do {
    mostrarMenu();
    printf("Ingrese su opción: ");
    scanf("%d", &opcion);

    if (opcion == 5) {
        printf("Saliendo...\n");
        break;
    }

    printf("Ingrese el primer número: ");
    scanf("%f", &num1);
    printf("Ingrese el segundo número: ");
    scanf("%f", &num2);
