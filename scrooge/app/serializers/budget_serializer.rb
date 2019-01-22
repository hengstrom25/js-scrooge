class BudgetSerializer < ActiveModel::Serializer
  attributes :id, :name, :amount, :user_id
end
