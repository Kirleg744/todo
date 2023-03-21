#include <iostream>

using namespace std;

struct Cube {
    int length;     // довжина ребра в см
    string color;   // колір
    string material;// матеріал (дерево, метал, пластмаса)
};

int main() {
    Cube cubes[14] = {
        {3, "red", "wood"}, 
        {4, "blue", "plastic"}, 
        {5, "green", "metal"}, 
        {6, "yellow", "wood"},
        {7, "orange", "plastic"},
        {8, "purple", "metal"},
        {3, "white", "wood"},
        {4, "black", "plastic"},
        {5, "gray", "metal"},
        {6, "brown", "wood"},
        {7, "pink", "plastic"},
        {8, "silver", "metal"},
        {3, "gold", "wood"},
        {4, "bronze", "plastic"}
    };

    // Знаходимо кількість дерев'яних кубиків з ребром 3 см
    int wood_cubes_count = 0;
    for (int i = 0; i < 14; i++) {
        if (cubes[i].length == 3 && cubes[i].material == "wood") {
            wood_cubes_count++;
        }
    }
    cout << "Кількість дерев'яних кубиків з ребром 3 см: " << wood_cubes_count << endl;

    // Знаходимо кількість металевих кубиків з ребром більше 5 см
    int metal_cubes_count = 0;
    for (int i = 0; i < 14; i++) {
        if (cubes[i].length > 5 && cubes[i].material == "metal") {
            metal_cubes_count++;
        }
    }
    cout << "Кількість металевих кубиків з ребром більшим за 5 см: " << metal_cubes_count << endl;

    return 0;
}
