class UserSerializer
  include JSONAPI::Serializer

  has_many :purchases
  attributes :email, :user_role, :purchases
end
