//$(function() {
//	console.log('budget.js loaded...');
//	getBudgets();
//});

//let budgets = [];

function getBudgets(budgetsCallback) {
//budgetsCallback is a formal argument name. Stands for what is put in () when the function was called.
	$.ajax({
		url: '/api/budgets',
		method: 'get',
		dataType: 'json'
	}).done(function(response){
		console.log('response: ', response);
	
		let budgets = response.map(element => {
			return new Budget(element.name, element.amount, element.id);
		});
	
		console.log("here are the budgets:", budgets);
		budgetsCallback(budgets);
		// budgetsCallback(budgets) is a closure
	});
}

function getBudget(budgetId, budgetCallback) {
	$.ajax({
		url: '/api/budget' + budgetId,
		method: 'get', 
		dataType: 'json'
	}).done(function(response){
	console.log('response: ', response);
	
	budget = response
	
	console.log("here is your budget:", budget);
	budgetCallback(budget);
	});
}

class Budget {
	constructor(name, amount, id) {
		this.name = name;
		this.amount = amount;
		this.id = id;
	};
}

Budget.prototype.showBudgetDetails= function() {
return(`
// html blue print of details
`)
};

