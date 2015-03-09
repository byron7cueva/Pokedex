Angula JS
Es un framework que, originalmente fue creado como un framework MVC, por el equipo de desarrollo de Google, busca que el desarrollo de aplicaciones frontend sean modulares, interactivas, esto evita la utilizacion de algunas librerias que no tengan coecion alguna.
Permite estructurar la aplicacion de una manera modular

Angular tiene una funcionalidad de binding para poder asociar lo que esta en el controlador con la vista.

Servidor Live Reaload.
Permite obtener un flujo mas dinamico.

Grunt
Es un gestor de tareas, que permite correr el servidor de live reload.

Instalar el comand line de Grunt
npm install -g grunt-cli

Ejecutar grunt, este utiliza el archivo Grunt.file.
Corre un servidor live reload

Live Reload:
Cada vez que se modifique el codigo, algun archivo, el automaticamente va refrescar el navegador

git checkout 01 -> permite regresar o obtener la version que se hizo en el commit 01

git diff 01..02 -> ver la diferencia entre los dos commits

git log -> puedo ver todos los pasos que se han echo

git reset --hard -> borra todos los cambios que se hizo

Conceptos Basico de Angular JS
- Directives: Son porciones de HTML, atributos o comentarios, que permiten dar dinamismo al DOM, estas nos permiten conectar nuestro codigo HTML con AngulasJS
- Templates / Expressions: Agregar expresiones para agregar funcionalidad a las plantillas.
- Controllers: Es la logica JavaScript, que se conecta a la vista.
- Filters: permite hacer un procesado de los datos que estoy traendo a partir del controlador
- Forms
- Modules / Dependency Injection: Esto nos permite arquitecturar nuestra aplicacion y organizarla de una manera mucho mas agil y poder definir cada uno de los aspectos de la aplicacion en su lugar.
- Service: Es donde la logica especifica de nuestra aplicacion va existir, como conectarnos a un backend http, como podemos crear clases o funciones que manejen la logica de nuestra aplicacion.

CDN: Content Delivery Network

Framework de plantillas:
Mustash
Handelbars

Modulo:
Crear una aplicacion:
var app = angular.module('pokedex', []);

Changin Methos: Metodos encadenados, es cuando ejecuto una funcion y el resultado de esa funcion me entrega otros metodos para ejecutar.

Expresiones:
Angular utiliza {{}} doble llaves, para definir sus expresiones
Soportan codigo javascript, pero no puedo declarar condicionales, funciones, evaluar codigo javascript como tal

Directivas:
Son atributos, elementos html, comentarios en clase css, que permiten asociar el codigo html a codigo de angular.
Se recomienda que todas las directivas las excriba en minisculas y separada cada palabra por un guion(-).
Las directivas que estan creadas por angular enpiezan por ng, seguidas por el nombre de la directiva.

Directivas:
ng-app:
ng-controller: Nos permite definir el controlador que vamos ha utilizar.
ng-repeat: Permite iterar sobre un arreglo, se lo debe aplicar dentro del elemento que lo queremos repetir

Helpers:
$last: Ess un helper que esta asociado al ng-repeat y va ha ser verdadero cuando este en el ultimo elemento.
$index: Permite acceder a un indice especifico.
Ejemplo:
Repite el span por cada uno de los tipos
<span ng-repeat="type in pkmCtrl.pokemon.type" class="label label-primary">
	{{type}}
</span>

ng-hide: Permite esconder elementos.
Ejemplo:
Esconde el ultimo elemento dentro de una etiqueta que tenga la directiva ng-repeat
<span ng-hide="$last" class="glyphicon glyphicon-arrow-down"></span>

ng-show: Permite mostrar un elemento, dependiendo del valor si es verdadero, de la expresion pasada.
Ejemplo:
<div ng-show="tab === 3"></div>
Se va ha mostrar el div cuando la variable tab sea exactamente igual a 3

ng-init: Permite definir o inicializar una variable.
Ejemplo:
<div ng-init="tab = 1" class="tab-content"></div>

ng-click: Va permitir ejecutar una expresion cundo se de click a un elemento.
Ejemplo:
<a ng-click="tab = 2">Status</a>

ng-class: Permite agregar una clase a un elemento si se cumple una condicion.
Ejemplo:
<li ng-class="{active : tab === 1}"><a ng-click="tab = 1">Pokedex</a></li>


ng-model: Permite enlazar el campo del formulario con el controlador.
ng-disabled: Permite marcar como desabilitado un campo de un formulario cuando una condicion se hace verdadera.

ng-if: Si la condicion no se cumple ese elemento no va estar en el DOM de nuestra aplicacion. 

ng-change: Permite escuchar el evento del cambio de un elemento.

ng-submit: Se la debe aplicar a un formulario, y debe estar asociado a un metodo del controlador.

Agrergar condicion de hacer submit si el formulario es valido:
<form name="commentsForm" ng-submit="commentsForm.$valid && cmtsCtrl.addComment()" novalidate></form>

ng-required: Permite manejar si un campo del formulario es requerido de manera condicional. Se convirte en requerido si se cumple una condicion.

ng-sanitais: Sanitais del input del formulario.

ng-view: Cargar el contenido de las vistas en la aplicacion.

Crear Directivas
Las directivas pueden ser tanto como atributo, elemento html, comentario css.

Partials: Son pequeñas porciones de HTML, que se pueden utilizar muchas veces.

Directiva de tipo elemento
Es una buena practica separar el nombre del archivo html con guion medio y en minusculas y el nombre de la directiva con camelcase.

Esperan que retorne un objeto literal de JavaScript.
Ejemplo:
La plantilla:
pokemon-data.html
La directiva tipo elemento:
app.directive('pokemonData', function() {
	return {
		restrict: 'E', //Indicando que es de tipo elemento html
		templateUrl: 'partials/pokemon-data.html'

	};
});
Llamando a la directiva:
<pokemon-data></pokemon-data>
Direciva atributo:
app.directive('pokemonName', function() {
	return {
		restrict: 'A',
		templateUrl: 'partials/pokemon-name.html'
	};
});
Llamando
<div pokemon-name></div>

Controlador:
Es una funcion javascript, constructor javascript, donde vamos a definir nuestra logica de la aplicacion o de la pantalla.
Tiene el codigo que me va asociar los datos asia la vista

Como buena practica se debe encapsular nuestro codigo dentro de una funcion que se llama asi misma: IIEF, Closure

Para definir una parte del codigo de html dentro del scope del controlador se lo debo envolver dentro de un div o cualquier etiqueta html.

Me permite asociar la parte html, con el controlador de angularJS.
Un elemento html solo puede estar enlazado a un unico controlador.

Crear un controlador:
app.controller('CommnetsController', function() {

});

Binding:
Enlazar los datos de la logica de un controlador al html.

Two way Binding:
Es una funcionalidad de angularJS, que me permite de manera sencilla, sin tener que hacer control de eventos, sin tener listener cuando cambio el valor cambio, para actualizar el valor de la vista en el controlador. AngularJS automaticamente me hace este enlace.

Filtros:
Permiten cambiar, convertir o transformar informacion que estoy trayendo del controlador para presentarlo en pantalla.
Es una funcion que resive una entrada que puede ser una cadena de texto, numero o arreglo, cualquier objeto JavaScript y este me va ha devolver una salida.
Son funciones o elementos que nos van a permitir, formtear o cambiar la presentacion de expresiones o objetos que tengo en la aplicacion.
La forma de utilizar filtros es utilizando la barra | y luego el nombre del filtro y con dos puntos paso los argumentos.

lowercase: Convertir a minusculas
{{pkmCtrl.pokemon.name | lowercase}}

date: Permite dar formato a una fecha.

Crear filtros propios:
app.filter('imageify', function(){
	return function(input, ext) {
		var url = "img/pokemons/" + input.toLowerCase() + "." + ext || "jpg";
		return url;
	};
});

Valicaciones de Formularios
Angular trabaja con validaciones HTML5.

Primero se le debe indicar a HTML que no valide el formulario.
<form novalidate>

Se debe asignar un nombre al formulario, para poder utilizar el helper de validaciones.

Angular agrega clases a los componentes como ng-invalid, lo cual nos permite ayudarnos para definir como un campo se va ha mostrar si es valido o no.

Scopes:
@ : Valor en texto
= : Valor two way Binding, el valor como tal
& : Ese valor va ha ser una funcion.

Servicios
Tipos de Servicios:
Factory: Retornan un objeto JavaScript.
Service: Retorna una instancia de una clase JavaScript Constructora.
Provider: Se utiliza con una clase constructora, pero requiere ciertos pasos de configuracion, antes de devolver el objeto.

--
La logica de negocio como buena practica debe estar en un service.

Depended Injection


jqlite : Para poder hacer cosas como jquery
pre-render.io: Renderizar toda la aplicacion con angularJS

Rutas:

Vistas: Paginas completas, o funcionalidades de una pagina completa.

Solicitudes http

Promesa: Es un mecanimsmo que permite trabajar con codigo JavaScript de manera asincrona.

Bootstrap:
getbootstrap.com - Aqui se encuentra la libreria
bootswatch.com - Aqui hay estilos


julianduquej@gmail.com

Ember
Backbone
Nokaut
Reack
Polymer

Vim
Distribucion: spf13
Vim: Steep Francia

ceo --> prerender.io

# se utiliza para single page aplication

Se podria organizar la apliacion por feature.

ataques csrf, seguridades. ngSanitize
lazy load, con proveedores
cache: con cache factory

ui-router: igual que ng-route, pero soporta vistas concatenadas.
vauel: librerias javascript
shadon-do: estandar, para web components

Minificado
poglify
ng-annotate -> Utilizar con grunt, gulp
broserify