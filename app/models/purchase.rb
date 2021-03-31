class Purchase < ApplicationRecord
  validates :paid_by, presence: true
  validates :total, presence: true
  validates :bike_id, presence: true
  validates :user_id, presence: true

  validate :check_user_exists, :check_user_role

  belongs_to :user
  has_many :bikes

  private

  def user
    User.find_by(id: user_id)
  end

  def user_exists?
    !user.blank?
  end

  def user_is_a_customer?
    user&.customer?
  end

  def check_user_exists
    errors.add(:user_id, 'user does not exist') unless user_exists?
  end

  def check_user_role
    errors.add(:user_id, 'user is not a customer') unless user_is_a_customer?
  end
end
