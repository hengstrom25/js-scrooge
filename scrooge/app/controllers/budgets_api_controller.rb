class BudgetsApiController < ApplicationController

	def index
		budgets = Budget.where(user_id: current_user.id)
		render json: budgets
	end
	
	def show
		budget = Budget.find_by(id: params[:id])
		render json: budget.to_json(:methods => [:current_amount])
	end
	
	def new
		
	end
	
	def create
	
	end
	
	def edit 
		budget = Budget.find_by(id: params[:id])
		result = JSON.parse(response.body)["response"]
		budget[:name] = result[:name]
		budget[:amount] = result[:amount]		
	end
	
	

end