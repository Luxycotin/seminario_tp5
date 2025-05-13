alumnos = [
    ['Juan', [['Matematicas', 8], ['Lengua', 9], ['Sociales', 7], ['Naturales', 7]]],
    ['Ana', [['Lengua', 9], ['Matematicas', 10], ['Sociales', 8], ['Naturales', 6]]],
    ['Luis', [['Lengua', 6], ['Sociales', 8], ['Matematicas', 7], ['Naturales', 6]]],
    ['María', [['Lengua', 9], ['Sociales', 10], ['Naturales', 10], ['Matematicas', 9]]]
]

def agregar_o_actualizar_nota(nombre, materia, nota):
    for alumno in alumnos:
        if alumno[0] == nombre:
            print(f"El alumno {nombre} ya existe.")
            materias = alumno[1]
            for m in materias:
                if m[0] == materia:
                    print(f"Actualizando nota de {materia} a {nota}")
                    m[1] = nota
                    return
            print(f"Agregando nueva materia {materia} con nota {nota}")
            materias.append([materia, nota])
            return

    print(f"Agregando nuevo alumno {nombre} con la materia {materia}")
    alumnos.append([nombre, [[materia, nota]]])

agregar_o_actualizar_nota("Juan", "Matematicas", 10)  # Actualiza
agregar_o_actualizar_nota("Ana", "Fisica", 8)         # Agrega nueva materia
agregar_o_actualizar_nota("Pedro", "Historia", 7)     # Agrega nuevo alumno
print(alumnos)
