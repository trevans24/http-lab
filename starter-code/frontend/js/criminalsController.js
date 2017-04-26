angular.module('CriminalsApp', [])
	.controller('CriminalsController', CriminalsController);

CriminalsController.$inject = ['$http'];

function CriminalsController($http){
	var context = this;
	this.all = [];

	//GET
	function getCriminals(){
		console.log("Getting Criminals");
		$http.get('http://localhost:3000/criminals')
		.then((res) => {
			console.log(res.data);
			context.all = res.data;
		});
	}

	getCriminals(context);





}