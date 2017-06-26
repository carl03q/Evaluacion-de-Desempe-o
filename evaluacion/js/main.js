console.log('welcome back')

evaluation = [
	{
		category: "Responsabilidad",
		question: [
		"puntualidad",
		"completado de tareas"
		]
	},
	{
		category: "Justicia",
		question: [
		"puntualidad",
		"completado de tareas"
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