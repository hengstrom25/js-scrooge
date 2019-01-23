$function() {
	console.log('budget.js loaded...');
	getBudgets()
}

function getBudgets() {
	$.ajax({
		url: 'localhost:3000/users/1/budgets',
		method: 'get',
		dataType: 'json'
	}).done(function(response){
	console.log('response: ', response);
	
	response.array.forEach(element => {
	
	});
	
	let budget = new Budget(response[0])
	})
}

class Budget (
constructor(obj){
this.name = obj.name
}
)

Budget.prototype.showBudgetDetails= function() {
return(`
// html blue print of details
)
}
`