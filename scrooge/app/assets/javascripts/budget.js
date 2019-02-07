//$(function() {
//	console.log('budget.js loaded...');
//	getBudgets();
//});

//let budgets = [];

function getBudgets(budgetsCallback) {
	$.ajax({
		url: '/api/budgets',
		method: 'get',
		dataType: 'json'
	}).done(function(response){
	console.log('response: ', response);
	
	budgets = response.map(element => {
		return new Budget(element.name, element.amount, element.id);
	});
	
	console.log("here are the budgets:", budgets);
	});
}

class Budget {
	constructor(name, amount, user_id) {
		this.name = name;
		this.amount = amount;
		this.user_id = user_id;
	};
}

Budget.prototype.showBudgetDetails= function() {
return(`
// html blue print of details
`)
};

