let coleccion_de_objetos_definido = []

//la idea es mandar una coleccion y convertir esa coleccion especificamente en un vector con sus valores
const convertir_coleccion_en_vector_de_valores = (coleccion_a_convertir)=>{
    let vector_final = [];

    if(typeof(coleccion_a_convertir)!='object'){
        vector_final.push(coleccion_a_convertir);
    }else{
        coleccion_a_convertir = Object.values(coleccion_a_convertir);
        for(let i=0; i<coleccion_a_convertir.length; i++){
            if(typeof(coleccion_a_convertir[i]) == "object"){
                vector_final = [...vector_final, ...convertir_coleccion_en_vector_de_valores(coleccion_a_convertir[i])];
            }else{
                let texto_a_añadir = ""+coleccion_a_convertir[i]
                vector_final.push(texto_a_añadir.toLowerCase());
            }
        }
    }
    
    return vector_final;
}

//retorna un true si encontro una coincidencia
const comparar_texto_con_vector_de_textos = (vector_de_textos, texto_a_comparar)=>{
    let encontro_coincidencia = false;
    for(let i=0; i<vector_de_textos.length; i++){
        if(vector_de_textos[i].includes(texto_a_comparar)){
            encontro_coincidencia = true;
        }
    }
    return encontro_coincidencia;
}

const definir_vector_de_objetos = (colecciones_del_usuario)=>{
    coleccion_de_objetos_definido = colecciones_del_usuario;
}

const obtener_vector_de_objetos_a_partir_de_coincidencias = (texto_a_buscar)=>{
    let vector_de_colecciones_final = []
    for(let i=0; i<coleccion_de_objetos_definido.length; i++){
        let vector_de_valores_de_la_coleccion_i = convertir_coleccion_en_vector_de_valores(coleccion_de_objetos_definido[i]);
        if(comparar_texto_con_vector_de_textos(vector_de_valores_de_la_coleccion_i, texto_a_buscar)){
            vector_de_colecciones_final.push(coleccion_de_objetos_definido[i])
        }
    }
    return vector_de_colecciones_final;
}

//hasta aqui llega la libreria; el resto son pruebas

vector_de_colecciones_de_prueba = [
    {
        _id: "12345678",
        nombre: "Gustavo Olmedo",
        edad: 21,
        preferencias: {
            musica: "jpop",
            cancion_favorita: {
                nombre: "like a movie",
                artista: "vickeblanka"
            },
            gustos: ['leer', 'programar', 'estudiar']
        }
    },
    {
        _id: "87348290",
        nombre: "Andres Roman",
        edad: 21,
        preferencias: {
            musica: "rock",
            cancion_favorita: {
                nombre: "toxicity",
                artista: "System of a down"
            },
            gustos: ['videojuegos', 'ver tv', 'nadar']
        }
    },
]

//primero definimos el vector de objetos
definir_vector_de_objetos(vector_de_colecciones_de_prueba)

//luegos usamos el metodo de busqueda
console.log(obtener_vector_de_objetos_a_partir_de_coincidencias('21'))