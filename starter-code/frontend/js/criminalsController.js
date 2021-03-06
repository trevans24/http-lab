angular.module('CriminalsApp', [])
	.controller('CriminalsController', CriminalsController);

CriminalsController.$inject = ['$http'];

function CriminalsController($http){
	var context = this;
	this.all = [];
	context.editForm = false;

	//GET
	function getCriminals(){
		console.log("Getting Criminals");
		$http.get('http://localhost:3000/criminals')
		.then((res) => {
			console.log(res.data);
			context.all = res.data;
		});
	}

	getCriminals();

	this.addCriminal = addCriminal;
	this.newCriminal = {};

	// POST Route
	function addCriminal(){
		this.all.push(this.newCriminal);
		$http.post("http://localhost:3000/criminals", this.newCriminal)
		.then((res) => {
			console.log(res);
		});

		context.newCriminal = {};
	}

	// SHOW Route
	// function showCriminal(req,res){
	// 	let id = req.params.id;
	// 	// $http.get("http://localhost:3000/criminals/:id")
	// 	// .then((res) => {
	// 	// 	console.log(res.data._id);
	// 	// 	// context.all = res.data;
	// 	// });
	// }

	this.deleteCriminal = deleteCriminal;

	// DELETE Route
	function deleteCriminal(criminal){
		console.log("Clicked delete");
		$http.delete("http://localhost:3000/criminals/" + criminal._id)
		.then((res) => {
			let index = context.all.indexOf(criminal);
			context.all.splice(index, 1);
		});
	}

	this.editCriminal = editCriminal;
	// PUT Route
	function editCriminal(criminal){
		context.editForm = !context.editForm;
		// console.log(criminal._id);
		// console.log('Clicked Edit');
		let editName = document.querySelector('#edit-criminal-name').value;
		console.log(editName);
		// let criminalData = {
		// 	name: editName,
  // 			location: 
		// 	status:
		// }
		// $http.PUT("http://localhost:3000/criminals/" + criminal._id)
		// .then((res) => {
		// 	let index = context.all.indexOf(criminal);
		// 	console.log(res);
		// 	console.log(data);
		// 	// console.log(criminal._id);
		// 	// console.log(criminal.name);
		// 	// console.log(criminal.location);
		// 	// console.log(criminal.status);
		// 	// let updateCriminal = new Criminal ({
		// 	// 	name: name,
		// 	// 	location: location,
		// 	// 	status: status
		// 	// });
			

		// });
	}

}