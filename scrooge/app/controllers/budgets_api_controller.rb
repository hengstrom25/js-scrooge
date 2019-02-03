class BudgetsApiController < ApplicationController
before_action :logged_in?

	def index
		budgets = Budget.where(user_id: current_user.id)
		render json: budgets
	end
	
	def show
		budget = Budget.find_by(id: params[:id])
		render json: budget.to_json(:methods => [:current_amount])
	end
	
	def new
	    budget = Budget.new		
	end
	
	def create
	    budget = Budget.new
	    budget.user_id = current_user.id if current_user
	    budget.save
		render json: budget
	end
	
	
	#def edit 
		#budget = Budget.find_by(id: params[:id])
		#budget_params = JSON.parse(response.body)
		#budget[:name] = result[:name]
		#budget[:amount] = result[:amount]		
	#end
	
	def update
		budget = Budget.find_by(id: params[:id])
		budget_params = JSON.parse(response.body)
		budget.update(budget_params)
		render json: budget
	end
	
	private
	
	def budget_params
		params.require(:budget).permit(:name, :amount)
	end
	

end