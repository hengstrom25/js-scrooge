class BudgetSerializer < ActiveModel::Serializer
  attributes :id, :name, :amount, :user_id, :current_amount
  #belongs_to :user
  has_many :transactions
end
