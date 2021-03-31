require "test_helper"

class UserTest < ActiveSupport::TestCase
  test 'creates a new admin User' do
    admin_user_params = {
      email: 'admin@test.com',
      password_digest: 'Front Lights',
      user_role: User::UserRole::ADMIN
    }

    assert_difference -> { User.count } do
      new_user = User.new(admin_user_params)
      assert new_user.valid?
      assert new_user.save
    end
  end

  test 'creates a new customer User' do
    customer_user_params = {
      email: 'admin@test.com',
      password_digest: 'Front Lights',
      user_role: User::UserRole::CUSTOMER
    }

    assert_difference -> { User.count } do
      new_user = User.new(customer_user_params)
      assert new_user.valid?
      assert new_user.save
    end
  end

  test 'User is NOT valid when using an invalid user_role' do
    customer_user_params = {
      email: 'admin@test.com',
      password_digest: 'Front Lights',
      user_role: 0
    }

    new_user = User.new(customer_user_params)
    refute new_user.valid?
    refute new_user.save
  end
end
