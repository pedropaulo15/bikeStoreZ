class Purchase < ApplicationRecord
  belongs_to :user
  has_many :bikes, foreign_key: 'id'
end
