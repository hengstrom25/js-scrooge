class Transaction {
	constructor(id, date, amount, description, budget_id, is_deposit) {
		this.id = id;
		this.date = date;
		this.amount = amount;
		this.description = description; 
		this.budget_id = budget_id;
		this.is_deposit = is_deposit
	};
}

function getTransactions(budget_id, transactionsCallback) {
//budgetsCallback is a formal argument name. Stands for what is put in () when the function was called.
	$.ajax({
		url: `/api/budget/${budget_id}/transactions`,
		method: 'get',
		dataType: 'json'
	}).done(function(response){
		console.log('response: ', response);
	
		const transactions = response.map(element => {
			return new Transaction(element.id, element.date, element.amount, element.description, budget_id, element.is_deposit);
			// creating new model object for existing Budget
		});
	
		console.log("here are the transactions:", transactions);
		transactionsCallback(transactions);
		// transactionsCallback(transactions) is a closure
	});
}

