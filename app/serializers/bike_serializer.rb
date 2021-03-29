class BikeSerializer
  include JSONAPI::Serializer
  attributes :name, :description, :price, :wheel_size, :rim_color, :saddle_color, :created_by, :image_url
end
