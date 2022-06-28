<script>

/*
Utilizando lo aprendido escribir el código necesario para que dada una distancia determine 
el medio de transporte apropiado de acuerdo a las siguientes reglas:

0 a 1000 metros = pie
1000 a 10000 metros = bicicleta
10000 a 30000 metros = colectivo
30000 a 100000 metros = auto
+100000 = avión
*/
var num;

num=prompt('Ingrese la distancia a recorrer:','');

num=parseInt(num); // parseInt > para que el operador + sume los contenidos de los valores numéricos ingresados por teclado


if (num >= 0 && num <= 1000){
    document.write('El medio de transporte apropiado a recorre los '+ num +' metros, es a pie');
} else if (num > 1000 && num <= 10000){
        document.write('El medio de transporte apropiado a recorre los '+ num +' metros, es en bicicleta');
        }else if (num > 10000 && num <= 30000){
            document.write('El medio de transporte apropiado a recorre los '+ num +' metros, es en colectivo');
            }else if (num > 10000 && num <= 100000){
                document.write('El medio de transporte apropiado a recorre los '+ num +' metros, es en auto');
                }else if (num > 100000){
                    document.write('El medio de transporte apropiado a recorre los '+ num +' metros, es en avión');   
                }else{
                    document.write('Los metros ingresados no es valido!!! ');
    }
</script>
