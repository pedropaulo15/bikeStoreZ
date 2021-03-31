require "test_helper"

class BikesControllerTest < ActionDispatch::IntegrationTest
  test 'GET #index' do
    get '/api/v1/bikes'

    assert_response :success
  end

  test 'GET #show' do
    bike = create_valid_bike_record

    get "/api/v1/bikes#{bike.id}"

    assert_response :success
  end

  test 'POST #create successful when wheel_size is 17 and rim_color green' do
    bike_params = {
      name: "17 inches bike",
      description: "17 inches bike long description",
      price: 800,
      wheel_size: 17,
      rim_color: "green",
      saddle_color: "black",
      image_url: "https://d2j6dbq0eux0bg.cloudfront.net/images/28287025/1406138531.jpg",
      created_by: create_admin_user.id
    }

    post '/api/v1/bikes/', params: { bike: bike_params }

    assert_response :success
  end

  test 'POST #create successful when wheel_size is 19 and rim_color green' do
    bike_params = {
      name: "19 inches bike",
      description: "19 inches bike long description",
      price: 800,
      wheel_size: 19,
      rim_color: "green",
      saddle_color: "black",
      image_url: "https://d2j6dbq0eux0bg.cloudfront.net/images/28287025/1406138531.jpg",
      created_by: create_admin_user.id
    }

    post '/api/v1/bikes/', params: { bike: bike_params }

    assert_response :success
  end

  test 'POST #create successful when wheel_size is 19 and rim_color blue' do
    bike_params = {
      name: "19 inches bike",
      description: "19 inches bike long description",
      price: 800,
      wheel_size: 19,
      rim_color: "blue",
      saddle_color: "black",
      image_url: "https://d2j6dbq0eux0bg.cloudfront.net/images/28287025/1406138531.jpg",
      created_by: create_admin_user.id
    }

    post '/api/v1/bikes/', params: { bike: bike_params }

    assert_response :success
  end

  test 'POST #create successful when wheel_size is 21 and rim_color green' do
    bike_params = {
      name: "21 inches bike",
      description: "21 inches bike long description",
      price: 1800,
      wheel_size: 21,
      rim_color: "green",
      saddle_color: "black",
      image_url: "https://d2j6dbq0eux0bg.cloudfront.net/images/28287025/1406138531.jpg",
      created_by: create_admin_user.id
    }

    post '/api/v1/bikes/', params: { bike: bike_params }

    assert_response :success
  end

  test 'POST #create successful when wheel_size is 21 and rim_color blue' do
    bike_params = {
      name: "21 inches bike",
      description: "21 inches bike long description",
      price: 1800,
      wheel_size: 21,
      rim_color: "blue",
      saddle_color: "black",
      image_url: "https://d2j6dbq0eux0bg.cloudfront.net/images/28287025/1406138531.jpg",
      created_by: create_admin_user.id
    }

    post '/api/v1/bikes/', params: { bike: bike_params }

    assert_response :success
  end

  test 'POST #create successful when wheel_size is 21 and rim_color black' do
    bike_params = {
      name: "21 inches bike",
      description: "21 inches bike long description",
      price: 1800,
      wheel_size: 21,
      rim_color: "black",
      saddle_color: "black",
      image_url: "https://d2j6dbq0eux0bg.cloudfront.net/images/28287025/1406138531.jpg",
      created_by: create_admin_user.id
    }

    post '/api/v1/bikes/', params: { bike: bike_params }

    assert_response :success
  end

  test 'POST #create 422 when user is invalid' do
    bike_params = {
      name: "19 inches bike",
      description: "19 inches bike long description",
      price: 1800,
      wheel_size: 19,
      rim_color: "blue",
      saddle_color: "black",
      image_url: "https://d2j6dbq0eux0bg.cloudfront.net/images/28287025/1406138531.jpg",
      created_by: 0
    }

    post '/api/v1/bikes/', params: { bike: bike_params }

    assert_response :unprocessable_entity
  end

  test 'POST #create 422 when wheel_size is 17 and rim_color blue' do
    bike_params = {
      name: "17 inches bike",
      description: "19 inches bike long description",
      price: 1900,
      wheel_size: 17,
      rim_color: "blue",
      saddle_color: "black",
      image_url: "https://d2j6dbq0eux0bg.cloudfront.net/images/28287025/1406138531.jpg",
      created_by: create_admin_user.id
    }

    post '/api/v1/bikes/', params: { bike: bike_params }

    assert_response :unprocessable_entity
  end

  test 'POST #create 422 when wheel_size is 17 and rim_color black' do
    bike_params = {
      name: "17 inches bike",
      description: "17 inches bike long description",
      price: 1900,
      wheel_size: 17,
      rim_color: "black",
      saddle_color: "black",
      image_url: "https://d2j6dbq0eux0bg.cloudfront.net/images/28287025/1406138531.jpg",
      created_by: create_admin_user.id
    }

    post '/api/v1/bikes/', params: { bike: bike_params }

    assert_response :unprocessable_entity
  end

  test 'POST #create 422 when wheel_size is 19 and rim_color black' do
    bike_params = {
      name: "19 inches bike",
      description: "19 inches bike long description",
      price: 1900,
      wheel_size: 19,
      rim_color: "black",
      saddle_color: "black",
      image_url: "https://d2j6dbq0eux0bg.cloudfront.net/images/28287025/1406138531.jpg",
      created_by: create_admin_user.id
    }

    post '/api/v1/bikes/', params: { bike: bike_params }

    assert_response :unprocessable_entity
  end

  test 'PUT #update successful' do
    bike = create_valid_bike_record

    params = {
      name: 'Updated name',
      price: 2000
    }

    put "/api/v1/bikes/#{bike.id}", params: { bike: params }

    assert_response :success
  end

  test 'PUT #update unprocessable_entity whe trying to update invalid values' do
    bike = create_valid_bike_record

    # A 17 inches bike can only be green, that's why those are invalid values
    params = {
      wheel_size: 17,
      rim_color: 'black'
    }

    put "/api/v1/bikes/#{bike.id}", params: { bike: params }

    assert_response :unprocessable_entity
  end

  test 'DEL #destroy success' do
    bike = create_valid_bike_record

    delete "/api/v1/bikes/#{bike.id}"

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
      created_by: create_admin_user.id
    }

    Bike.create!(bike_params)
  end

  def create_admin_user
    user_params = {
      email: "email@test.com",
      password_digest: "123456",
      user_role: 1
    }

    User.create!(user_params)
  end
end
