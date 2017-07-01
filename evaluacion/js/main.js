console.log('welcome back')

evaluation = [
	{
		category: "Trabajo en Equipo ",
		question: [
		"¿Los objetivos del equipo están claros y aceptados por todos?",
		"¿Los miembros del equipo tienen claros sus responsabilidades?",
		"¿Las decisiones se toman por consenso?",
		"¿Comprende y Respeta las diferencias de sus compañeros?",
		"¿Comparte conocimiento e informacion con tal de optimizar las tareas?"
		]
	},
	{
		category: "Liderazgo",
		question: [
		"¿Las decisiones que ha tomado ha sido el mejor?",
		"¿Ayuda a los demás a superar los retos?",
		"¿Motiva a sus colaboradores en el trabajo?",
		"¿Demuestra iniciativa para asumir control ante tareas que surjan?",
		"¿Demuestra valores, moral, integridad y se le considera un ejemplo a seguir?"
		]
	},
	{
		category: "Comunicación",
		question: [
		"¿Mediante la comunicación, se amplia el conocimiento de uno mismo?",
		"¿Se intercambia información relacionada con el ejercicio de las funciones laborales?",
		"¿Solicita y ofrece información a sus compañeros y jefes con tal que se impulse la retroalimentación?",
		"¿Es capaz de desarrollar relaciones con jefes, compañeros, clientes y/o proovedores?",
		"¿Puede hacerse entender al explicar alguna tarea? "
		]
	},
	{
		category: "Compromiso",
		question: [
		"¿Se compromete dar lo mejor posible cada dia?",
		"¿Posee los materiales y equipo necesario para realizar el trabajo de manera correcta?",
		"¿Habla bien de la empresa?",
		"¿Trabajo con ánimo?",
		"¿Realiza esfuerzos extras en su labor?"
		]
	},
	{
		category: "Responsabilidad",
		question: [
		"¿Se cumple con los plazos de entrega estipulados?",
		"¿Posee la capacidad de asumir la responsabilidad de sus actos?",
		"¿Posee la actitud de trabajar bajo presión? ",
		"¿Se encarga de la actividad sin oposición? ",
		"¿Soluciona los problemas que surgen en la tarea designada?"
		]
	}
]

	

evaluation.forEach( function (eval, index){
	console.log(eval.category)

	eval.question.forEach ( function(q, index){
		console.log(q)
	})
})

console.log($("evaluacion"))