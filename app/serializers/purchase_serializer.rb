class PurchaseSerializer
  include JSONAPI::Serializer

  has_many :bikes
  attributes :paid_by, :total, :bike_id, :user_id, :created_at
end
