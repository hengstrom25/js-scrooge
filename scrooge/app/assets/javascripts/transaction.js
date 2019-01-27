class Transaction {
	constructor(date, amount, description, budget_id, is_deposit) {
		this.date = date;
		this.amount = amount;
		this.description = description; 
		this.budget_id = budget_id;
		this.is_deposit = is_deposit
	};
}

