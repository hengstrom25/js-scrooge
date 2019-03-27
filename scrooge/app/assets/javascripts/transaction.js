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
	
Transaction.prototype.render = function() {
		return `<tr>
	 		<td>${this.date}</td>
	 		<td>${this.amount}</td>
	 		<td>${this.description}</td>
	 		<td><a href='/transactions/${this.id}'>Details</a></td>
	 	</tr>`;	
}


function getTransactions(budget_id, transactionsCallback) {
//transactionsCallback is a formal argument name. Stands for what is put in () when the function was called.
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

function getLargeTransactions(budget_id) {
//transactionsCallback is a formal argument name. Stands for what is put in () when the function was called.
		return getTransactions(budget_id, transactionsCallback).filter(transaction => transaction.amount > 25);
	}



