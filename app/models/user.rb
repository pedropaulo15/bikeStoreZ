class User < ApplicationRecord
  module UserRole
    ADMIN = '1'.freeze
    CUSTOMER = '2'.freeze
  end

  has_many :purchases

  validate :check_user_role

  private

  def valid_user_role?
    user_is_admin? || user_is_customer?
  end

  def check_user_role
    errors.add(:user_role, 'is invalid, please use a valid value') unless valid_user_role?
  end

  def user_is_admin?
    user_role == UserRole::ADMIN.to_i
  end

  def user_is_customer?
    user_role == UserRole::CUSTOMER.to_i
  end
end
