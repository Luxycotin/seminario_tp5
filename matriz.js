let alumnos = [
    ['Juan', [['Matematicas', 8], ['Lengua', 9], ['Sociales', 7], ['Naturales', 7]]],
    ['Ana', [['Lengua', 9], ['Matematicas', 10], ['Sociales', 8], ['Naturales', 6]]],
    ['Luis', [['Lengua', 6], ['Sociales', 8], ['Matematicas', 7], ['Naturales', 6]]],
    ['María', [['Lengua', 9], ['Sociales', 10], ['Naturales', 10], ['Matematicas', 9]]]
];

function agregarOActualizarNota(nombre, materia, nota) {
    let alumno = alumnos.find(a => a[0] === nombre);
    
    if (alumno) {
        console.log(`El alumno ${nombre} ya existe.`);
        let materias = alumno[1];
        let materiaExistente = materias.find(m => m[0] === materia);

        if (materiaExistente) {
            console.log(`Actualizando nota de ${materia} a ${nota}`);
            materiaExistente[1] = nota;
        } else {
            console.log(`Agregando nueva materia ${materia} con nota ${nota}`);
            materias.push([materia, nota]);
        }
    } else {
        console.log(`Agregando nuevo alumno ${nombre} con la materia ${materia}`);
        alumnos.push([nombre, [[materia, nota]]]);
    }
}

agregarOActualizarNota("Juan", "Matematicas", 10); // Actualiza
agregarOActualizarNota("Ana", "Fisica", 8);        // Agrega nueva materia
agregarOActualizarNota("Pedro", "Historia", 7);    // Agrega nuevo alumno
console.log(alumnos);
