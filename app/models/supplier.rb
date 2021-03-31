class Supplier < ApplicationRecord
  validates :supplier_name, presence: true
  validates :bike_part, presence: true
  validates :color, presence: true
end
