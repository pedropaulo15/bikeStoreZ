class PurchaseSerializer
  include JSONAPI::Serializer
  attributes :id, :paid_by, :total, :bike_id, :user_id, :created_at
end
