class User < ApplicationRecord
  module UserRole
    ADMIN = '1'.freeze
    CUSTOMER = '2'.freeze
  end

  has_many :purchases

  validate :check_user_role

  def admin?
    user_role == UserRole::ADMIN.to_i
  end

  def customer?
    user_role == UserRole::CUSTOMER.to_i
  end

  private

  def valid_user_role?
    admin? || customer?
  end

  def check_user_role
    errors.add(:user_role, 'is invalid, please use a valid value') unless valid_user_role?
  end
end
