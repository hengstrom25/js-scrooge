class BudgetsApiController < ApplicationController

	def index
		budgets = Budget.where(user_id: current_user.id)
		render json: budgets
	end
	

end