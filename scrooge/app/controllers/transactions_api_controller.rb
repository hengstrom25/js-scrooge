class TransactionsApiController < ApplicationController

	def index
		transactions = Transaction.where(budget_id: params[:budget_id])
		budget = Budget.find_by(id: params[:budget_id])
		render json: transactions
	end
	


end