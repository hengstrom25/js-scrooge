//$(function() {
//	console.log('budget.js loaded...');
//	getBudgets();
//});

//let budgets = [];

class Budget {
	constructor(budgetObject) {
		this.name = budgetObject.name;
		this.amount = budgetObject.amount;
		this.id = budgetObject.id;
		this.current_amount = budgetObject.current_amount;
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
	
		const budgets = response.map(element => {
			return new Budget(element);
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
	
	const budget = new Budget(response);
	
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

Budget.prototype.showBudgetSummary= function() {
	return '<h3><a href= "/budgets/'+this.id+'">'+this.name+'</a></h3>';
	//html summary line for budget index page
	//e.g. "Zachary", "Home" on view page
}

// ES6
//Budget.prototype.showBudgetSummary = () =>
//	'<h3><a href= "/budgets/'+this.id+'">'+this.name+'</a></h3>';

