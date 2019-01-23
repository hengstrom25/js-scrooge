class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name
  	has_many :transaction_items 
	has_many :transactions, through: :transaction_items
end
