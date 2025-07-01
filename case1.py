from typing import Literal

# Fungsi untuk membuat data buah
def create_fruit(fruit_id: int, fruit_name: str, fruit_type: Literal['IMPORT', 'LOCAL'], stock: int) -> dict:
    return {
        "fruitId": fruit_id,
        "fruitName": fruit_name,
        "fruitType": fruit_type,
        "stock": stock
    }

# Data buah dalam list
fruits = [
    create_fruit(1, 'Apel', 'IMPORT', 10),
    create_fruit(2, 'Kurma', 'IMPORT', 20),
    create_fruit(3, 'apel', 'IMPORT', 50),
    create_fruit(4, 'Manggis', 'LOCAL', 100),
    create_fruit(5, 'Jeruk Bali', 'LOCAL', 10),
    create_fruit(5, 'KURMA', 'IMPORT', 20),
    create_fruit(5, 'Salak', 'LOCAL', 150)
]

# Menampilkan data buah
for fruit in fruits:
    print(fruit["fruitId"])

