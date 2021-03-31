require "test_helper"

class UsersControllerTest < ActionDispatch::IntegrationTest
  test 'GET #index' do
    get '/api/v1/users'

    assert_response :success
  end

  test 'GET #show' do
    user = customer_user

    get "/api/v1/users#{user.id}"

    assert_response :success
  end

  test 'POST #create successful new admin user' do
    admin_user_params = {
      email: 'admin@test.com',
      password_digest: 'password_hash',
      user_role: 1
    }

    post '/api/v1/users/', params: { user: admin_user_params }

    assert_response :success
  end

  test 'POST #create successful new customer user' do
    customer_user_params = {
      email: 'customer@test.com',
      password_digest: 'password_hash',
      user_role: 2
    }

    post '/api/v1/users/', params: { user: customer_user_params }

    assert_response :success
  end

  test 'POST #create unprocessable_entity new customer user if missing any parameter' do
    customer_user_params = {
      email: '',
      password_digest: '',
      user_role: nil
    }

    post '/api/v1/users/', params: { user: customer_user_params }

    assert_response :unprocessable_entity
  end

  test 'POST #create unprocessable_entity new customer user if user_role is invalid' do
    customer_user_params = {
      email: 'invalid@user.com',
      password_digest: 'password',
      user_role: 3
    }

    post '/api/v1/users/', params: { user: customer_user_params }

    assert_response :unprocessable_entity
  end

  test 'PUT #update successful' do
    user = customer_user

    params = {
      email: 'updatedemail@test.com',
      user_role: 1
    }

    put "/api/v1/users/#{user.id}", params: { user: params }

    assert_response :success
  end

  test 'DELETE #destroy successful' do
    user = customer_user

    delete "/api/v1/users/#{user.id}"

    assert_response :success
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
