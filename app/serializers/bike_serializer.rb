class BikeSerializer
  include JSONAPI::Serializer
  attributes :id, :name, :description, :price, :wheel_size, :rim_color, :saddle_color, :image_url
end
