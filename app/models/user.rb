class User < ApplicationRecord
  module UserRole
    ADMIN = '1'.freeze
    CUSTOMER = '2'.freeze
  end

  before_create :validate_user_role

  def validate_user_role
    user_role == UserRole::ADMIN || user_role == UserRole::CUSTOMER
  end
end
