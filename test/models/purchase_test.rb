require "test_helper"

class PurchaseTest < ActiveSupport::TestCase
  test 'creates a new Purchase' do
    # Only valid users with a `user_role: 2` are able to create a purchase
    purchase_params = {
      paid_by: 'Martercard',
      total: 123.45,
      bike_id: bike.id,
      user_id: create_customer_user.id
    }

    assert_difference -> { Purchase.count } do
      new_purchase = Purchase.new(purchase_params)
      assert new_purchase.valid?
      assert new_purchase.save
    end
  end

  test 'Purchase is NOT valid when user_id belongs to an admin user' do
    # Only users with a `user_role: 2` are able to create a purchase
    purchase_params = {
      paid_by: 'Martercard',
      total: 123.45,
      bike_id: bike.id,
      user_id: create_admin_user.id
    }

    new_purchase = Purchase.new(purchase_params)

    refute new_purchase.valid?
    refute new_purchase.save
  end

  test 'Purchase is NOT valid when missing any parameter' do
    purchase_params = {
      paid_by: '',
      total: nil,
      bike_id: nil,
      user_id: nil
    }

    new_purchase = Purchase.new(purchase_params)

    refute new_purchase.valid?
    refute new_purchase.save
  end

  private

  def create_admin_user
    user_params = {
      email: 'email@test.com',
      password_digest: '123456',
      user_role: User::UserRole::ADMIN
    }

    User.create!(user_params)
  end

  def create_customer_user
    user_params = {
      email: 'email@test.com',
      password_digest: '123456',
      user_role: User::UserRole::CUSTOMER
    }

    User.create!(user_params)
  end

  def bike
    bike_params = {
      name: '19 inches bike',
      description: '19 inches bike long description',
      price: 1300,
      wheel_size: 17,
      rim_color: 'green',
      saddle_color: 'black',
      image_url: 'https://d2j6dbq0eux0bg.cloudfront.net/images/28287025/1406138531.jpg',
      created_by: create_admin_user.id
    }

    Bike.create!(bike_params)
  end
end
