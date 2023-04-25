/* buscar digimon por nombre */
    var btn = document.querySelector('#btnBuscarDigimon');
        btn.addEventListener('click', function(){
        //console.log('funcionando evento')
        var nombreDigimon = document.querySelector('#txtNombreDigimon');
        validar(nombreDigimon)
    });

            function validar(digimon){ 
            //console.log(digimon);
            if(digimon.value != ''){
                //console.log('hay dato');

                $.ajax({
                    type: 'get', 
                    url: "https://digimon-api.vercel.app/api/digimon/name"  + digimon.name,
                    dataType: "json",
                    success: function(response) {
                    console.log('response')

                      
                    var contenedorImagen = document.querySelector('#contenedorImagen');
                    //var nombreEtiqueta = document.querySelector('name');
                    var imagenEtiqueta = document.querySelector('img');
                    //var nivelEtiqueta = document.querySelector('level');
                    //console.log('imagenEtiqueta')
                    imagenEtiqueta.setAttribute('src', img )
                    imagenEtiqueta.setAttribute('alt', 'funciona')
                    //nombreEtiqueta.setAttribute( )
                    //nivelEtiqueta.setAttribute()
                    contenedorImagen.append(imagenEtiqueta)
                    console.log('imagenEtiqueta');    
                    btn(response); 
                }
            });
            }else{
                alert('debes ingresar un nombre')
                digimon.name= '';    //para dejar en blanco caja
                console.log('no hay dato')
            }
        
        }
        
        
        
/* listar digimones */

    $.ajax ({
        type: "get",
        url: "https://digimon-api.vercel.app/api/digimon",
        datatype: "json",
        success: function(response) {
        //console.log(response);
        tabla(response);
        }
    });

 function tabla(datos){
            var datosTabla = document.querySelector("#datosTabla");
            for(var i = 0; i < datos.length; i = i + 1){
            //console.log(datosTabla);
            var fila = document.createElement("tr")
            //console.log(fila);
            var columnaUno = document.createElement("td");
            var columnaDos = document.createElement("img");
            var columnaTres = document.createElement("td");
            //console.log(columnaDos)

            var img = datos[i].img  
            columnaDos.setAttribute('src', img);
                
            //columnaDos.setAttribute('src', response)

            columnaUno.innerHTML = datos[i].name;
            columnaDos.innerHTML = datos[i].img;
            columnaTres.innerHTML = datos[i].level;
            //console.log(columnaUno)

           fila.append(columnaUno,  columnaDos, columnaTres);
           //columnaDos.append()
           //console.log(fila) 
           datosTabla.append(fila);
           
            }
     }




     /* 
    var nombreDigimon = document.querySelector('#nombreDigimon');
    validar(nombreDigimon);
    });
    console.log('nombreDigimon')
    function validar(digimon){ 
        if(digimon.value != '' ){
            $.ajax({
                type: 'get', 
                url: "https://digimon-api.vercel.app/api/digimon/" + digimon.value,
                datatype: "json",
                success: function(response) {
                var contenedorImg = document.querySelector('#imgDigimon');
                var imgEtiqueta = document.querySelector('img');
                imgEtiqueta = setAttribute('src', img)
                contenedorImg.append(imgEtiqueta)
                console.log(response);
                //boton(response);
            }
        })
        
        console.log('hay dato')
        }else{
       alert('debes ingresar un nombre')
       digimon.value= '';
       console.log('no hay dato')
    }
}
 */
    
 
