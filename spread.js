const g1 =[
    "Sebastian",
    "Maria",
    "Daniela"
]
const g2 =[
    "Fabian",
    "Cristian",
    "Camilo"
]
const g3 =[
    "Carlos",
    "Geral",
    "Esteban",
    ...g1,//descomprimiendo el arreglo
    //g2 sin descomprimir el arreglo
    ...g2
]
console.log(g3)