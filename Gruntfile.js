//Esta funcion contiene todo el codigo de grunt
module.exports = function(grunt) {

	//Inicializa un objeto de configuraciones para el proyecto actual
	//Configurando tareas
	grunt.initConfig({
		connect: {
			server: {
				options: {
					port: 9000,
					base: 'public/'
				}
			}
		},
		watch: {
			project: {
				files: ['public/**/*.js','public/**/*.html', 'public/**/*.json', 'public/**/*.css'],
				options: {
					livereload: true
				}
			}
		}
	});

	//Cargando tareas
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');

	//Registrando Tareas
	//Indicando la tarea por defecto
	//Parametros: Nombre tarea, lista de tareas
	grunt.registerTask('default', ['connect', 'watch']);
};