//$(function() {
//	console.log('budget.js loaded...');
//	getBudgets();
//});

//let budgets = [];

class Budget {
	constructor(name, amount, id, current_amount) {
		this.name = name;
		this.amount = amount;
		this.id = id;
		this.current_amount = current_amount;
	};
}

function getBudgets(budgetsCallback) {
//budgetsCallback is a formal argument name. Stands for what is put in () when the function was called.
	$.ajax({
		url: '/api/budgets',
		method: 'get',
		dataType: 'json'
	}).done(function(response){
		console.log('response: ', response);
	
		let budgets = response.map(element => {
			return new Budget(element.name, element.amount, element.id, element.current_amount);
			// creating new model object for existing Budget
		});
	
		console.log("here are the budgets:", budgets);
		budgetsCallback(budgets);
		// budgetsCallback(budgets) is a closure
	});
}

function getBudget(budgetId, budgetCallback) {
	$.ajax({
		url: '/api/budget/' + budgetId,
		method: 'get', 
		dataType: 'json'
	}).done(function(response){
	console.log('response: ', response);
	
	budget = new Budget(response.name, response.amount, response.id, response.current_amount);
	
	console.log("here is your budget:", budget);
	budgetCallback(budget);
	});
}

Budget.prototype.patchBudget = function() {
	$.ajax({
		url: '/api/budget/' + this.id,
		method: 'patch', 
		dataType: 'json', 
		contentType: 'application/json;charset=utf-8', 
		//data: JSON.stringify(this)
		data: '{"name": "Zachary", "amount": "250"}'
	}).done(function(response){
});
}



Budget.prototype.showBudgetDetails= function() {
return(`
// html blue print of details
`)
};

