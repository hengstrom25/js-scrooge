class TransactionSerializer < ActiveModel::Serializer
  	attributes :id, :date, :amount, :description, :budget_id
	belongs_to :budget
	has_many :transaction_items
	has_many :items, through: :transaction_items
end
