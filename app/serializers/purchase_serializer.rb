class PurchaseSerializer
  include JSONAPI::Serializer

  attributes :paid_by, :total, :bike_id, :user_id, :created_at
end
