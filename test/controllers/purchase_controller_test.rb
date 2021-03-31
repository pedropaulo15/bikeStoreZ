require "test_helper"

class PurchaseControllerTest < ActionDispatch::IntegrationTest
  test 'GET #index' do
    get '/api/v1/purchases'

    assert_response :success
  end

  test 'POST #create successful' do
    purchase_params = {
      paid_by: 'Martercard',
      total: 123.45,
      bike_id: create_valid_bike_record.id,
      user_id: customer_user.id
    }

    post '/api/v1/purchases/', params: { purchase: purchase_params }

    assert_response :success
  end

  test 'POST #create unprocessable_entity if missing any parameter' do
    purchase_params = {
      paid_by: '',
      total: nil,
      bike_id: nil,
      users: nil
    }

    post '/api/v1/purchases/', params: { purchase: purchase_params }

    assert_response :unprocessable_entity
  end

  private

  def create_valid_bike_record
    bike_params = {
      name: "17 inches bike",
      description: "17 inches bike long description",
      price: 1300,
      wheel_size: 17,
      rim_color: "green",
      saddle_color: "black",
      image_url: "https://d2j6dbq0eux0bg.cloudfront.net/images/28287025/1406138531.jpg",
      created_by: admin_user.id
    }

    Bike.create!(bike_params)
  end

  def admin_user
    user_params = {
      email: "admin@test.com",
      password_digest: "123456",
      user_role: 1
    }

    User.create!(user_params)
  end

  def customer_user
    user_params = {
      email: "customer@test.com",
      password_digest: "123456",
      user_role: 2
    }

    User.create!(user_params)
  end
end
