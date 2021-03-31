class SupplierSerializer
  include JSONAPI::Serializer
  attributes :supplier_name, :bike_part, :color
end
