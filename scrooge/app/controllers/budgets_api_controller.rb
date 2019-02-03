class BudgetsApiController < ApplicationController

	def index
		budgets = Budget.where(user_id: current_user.id)
		render json: budgets
	end
	
	def show
		budget = Budget.find_by(id: params[:id])
		render json: budget.to_json(:methods => [:current_amount])
	end
	

end