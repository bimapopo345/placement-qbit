from typing import Literal

def create_fruit(fruit_id: int, fruit_name: str, fruit_type: Literal['IMPORT', 'LOCAL'], stock: int) -> dict:
    return {
        "fruitId": fruit_id,
        "fruitName": fruit_name,
        "fruitType": fruit_type,
        "stock": stock
    }

fruits = [
    create_fruit(1, 'Apel', 'IMPORT', 10),
    create_fruit(2, 'Kurma', 'IMPORT', 20),
    create_fruit(3, 'apel', 'IMPORT', 50),
    create_fruit(4, 'Manggis', 'LOCAL', 100),
    create_fruit(5, 'Jeruk Bali', 'LOCAL', 10),
    create_fruit(5, 'KURMA', 'IMPORT', 20),
    create_fruit(5, 'Salak', 'LOCAL', 150)
]


for fruit in fruits:
    print(fruit)

def Buah_Andi():
    buah_names = ""
    for fruit in fruits:
        buah_names = buah_names + fruit["fruitName"] + ", "
    return buah_names.strip(", ")

def jumlah_wadah():

    wadah_local = []
    wadah_import = []


    for fruit in fruits:
        if fruit["fruitType"] == "LOCAL":
            wadah_local.append(fruit["fruitName"])
        else:
            wadah_import.append(fruit["fruitName"])


    Sum_of_container = 0

    if wadah_local:
        Sum_of_container += 1
    if wadah_import:
        Sum_of_container += 1

    list_soal_2 = [Sum_of_container, wadah_local, wadah_import]

    return list_soal_2

def total_stok_wadah():
    stok_wadah_local = 0
    stok_wadah_import = 0

    for fruit in fruits:
        if fruit["fruitType"] == "LOCAL":
            stok_wadah_local += fruit["stock"]
        else:
            stok_wadah_import += fruit["stock"]

    return stok_wadah_local, stok_wadah_import


def toLower():
    buah = []
    for fruit in fruits:
        fruit["fruitName"] = fruit["fruitName"].lower()
        buah.append(fruit["fruitName"])
    return buah
# def call_without_double():
#     for fruit in fruits:

# def call_whitout_double():
#     mutual = toLower()
#     case = ""
#     for i in range(len(mutual)):
        
#         if (mutual.count(mutual[i])>1):
#             continue
#         else:
#             case += mutual[i] + ', '

#     return case

# if mutual[i] not in case:
    case += mutual[i] + ', '

def call_whitout_double():
    mutual = toLower()
    case = ""
    for i in range(len(mutual)):
        if mutual[i] not in case:
            case += mutual[i] + ', '

    return case.strip(", ")

def toCapitalize_JerukBaliTobe2Data():
    buah_kapital = [] 
    mutual = toLower()

    for nama_buah_kecil in mutual:
        
        kata_kata = nama_buah_kecil.split(' ') 
        
        kata_kata_kapital = []
        
        for kata in kata_kata:
            kata_kapital = kata.capitalize() 
            kata_kata_kapital.append(kata_kapital) 

        nama_buah_lengkap_kapital = ' '.join(kata_kata_kapital) 

        buah_kapital.append(nama_buah_lengkap_kapital)
            
    return buah_kapital 
    

print("1. Buah Yang dimiliki Andi : ", Buah_Andi())
print("2. Jumlah Buah Berdasarkan Tipe Wadah : ", jumlah_wadah()[0], "Wadah Local : ", jumlah_wadah()[1], "Wadah Import : ", jumlah_wadah()[2])
print("3. Total Stok Buah Wadah Local : ", total_stok_wadah()[0], "Total Stok Buah wadah Import : ", total_stok_wadah()[1] )
print("4. Komentar terkait kasus : \na. Terdapat data dengan fruitId yang sama yaitu 5, seharusnya tidak ada duplikasi, karena id itu unik \nb. Tidak Konsisten Dalam Penulisan Nama Buah, misal 'apel' dan'Apel', seharusnya konsisten dalam penulisan huruf, karena ini bisa dianggap 2 buah yang berbeda")


print("test : ", toLower())
print("hasil_case : ", call_whitout_double())
print("Kapital & word With 2 space to be split : ", toCapitalize_JerukBaliTobe2Data())
