require "test_helper"

class BikeTest < ActiveSupport::TestCase
  test 'creates a new Bike' do
    bike_params = {
      name: '17 inches bike',
      description: '17 inches bike long description',
      price: 1300,
      wheel_size: 17,
      rim_color: 'green',
      saddle_color: 'black',
      image_url: 'https://d2j6dbq0eux0bg.cloudfront.net/images/28287025/1406138531.jpg',
      created_by: create_admin_user.id
    }

    assert_difference -> { Bike.count } do
      new_bike = Bike.create!(bike_params)
      assert new_bike.valid?
    end
  end

  test 'Bike is valid when wheel_size is 17 and rim_color green' do
    bike_params = {
      name: '17 inches bike',
      description: '17 inches bike long description',
      price: 1300,
      wheel_size: 17,
      rim_color: 'green',
      saddle_color: 'black',
      image_url: '',
      created_by: create_admin_user.id
    }

    new_bike = Bike.new(bike_params)
    assert new_bike.valid?

    assert_difference -> { Bike.count } do
      new_bike.save
    end
  end

  test 'Bike is NOT valid when wheel_size is 17 and rim_color black' do
    bike_params = {
      name: '17 inches bike',
      description: '17 inches bike long description',
      price: 1300,
      wheel_size: 17,
      rim_color: 'black',
      saddle_color: 'black',
      image_url: '',
      created_by: create_admin_user.id
    }

    new_bike = Bike.new(bike_params)
    refute new_bike.valid?
  end

  test 'Bike is NOT valid when wheel_size is 17 and rim_color blue' do
    bike_params = {
      name: '17 inches bike',
      description: '17 inches bike long description',
      price: 1300,
      wheel_size: 17,
      rim_color: 'blue',
      saddle_color: 'black',
      image_url: '',
      created_by: create_admin_user.id
    }

    new_bike = Bike.new(bike_params)
    refute new_bike.valid?
  end

  test 'Bike is valid when wheel_size is 19 and rim_color green' do
    bike_params = {
      name: '19 inches bike',
      description: '19 inches bike long description',
      price: 1300,
      wheel_size: 19,
      rim_color: 'green',
      saddle_color: 'black',
      image_url: '',
      created_by: create_admin_user.id
    }

    new_bike = Bike.new(bike_params)
    assert new_bike.valid?

    assert_difference -> { Bike.count } do
      new_bike.save
    end
  end

  test 'Bike is valid when wheel_size is 19 and rim_color blue' do
    bike_params = {
      name: '19 inches bike',
      description: '19 inches bike long description',
      price: 1300,
      wheel_size: 19,
      rim_color: 'blue',
      saddle_color: 'blue',
      image_url: '',
      created_by: create_admin_user.id
    }

    new_bike = Bike.new(bike_params)
    assert new_bike.valid?

    assert_difference -> { Bike.count } do
      new_bike.save
    end
  end

  test 'Bike is NOT valid when wheel_size is 19 and rim_color black' do
    bike_params = {
      name: '19 inches bike',
      description: '19 inches bike long description',
      price: 1299,
      wheel_size: 17,
      rim_color: 'black',
      saddle_color: 'black',
      image_url: '',
      created_by: create_admin_user.id
    }

    new_bike = Bike.new(bike_params)
    refute new_bike.valid?
  end

  test 'Bike is valid when wheel_size is 21 and rim_color green' do
    bike_params = {
      name: '21 inches bike',
      description: '21 inches bike long description',
      price: 1800,
      wheel_size: 21,
      rim_color: 'green',
      saddle_color: 'brown',
      image_url: '',
      created_by: create_admin_user.id
    }

    new_bike = Bike.new(bike_params)
    assert new_bike.valid?

    assert_difference -> { Bike.count } do
      new_bike.save
    end
  end

  test 'Bike is valid when wheel_size is 21 and rim_color blue' do
    bike_params = {
      name: '21 inches bike',
      description: '21 inches bike long description',
      price: 1800,
      wheel_size: 21,
      rim_color: 'blue',
      saddle_color: 'brown',
      image_url: '',
      created_by: create_admin_user.id
    }

    new_bike = Bike.new(bike_params)
    assert new_bike.valid?

    assert_difference -> { Bike.count } do
      new_bike.save
    end
  end

  test 'Bike is valid when wheel_size is 21 and rim_color black' do
    bike_params = {
      name: '21 inches bike',
      description: '21 inches bike long description',
      price: 1800,
      wheel_size: 21,
      rim_color: 'black',
      saddle_color: 'black',
      image_url: '',
      created_by: create_admin_user.id
    }

    new_bike = Bike.new(bike_params)
    assert new_bike.valid?

    assert_difference -> { Bike.count } do
      new_bike.save
    end
  end

  test 'Bike is NOT valid when using an invalid wheel_size' do

    # As we per Bike model, the only allowable wheel sizes are 17, 19 and 21
    bike_params = {
      name: 'Invalid wheel_size',
      description: 'Invalid wheel_size',
      price: 123,
      wheel_size: 15,
      rim_color: 'green',
      saddle_color: 'black',
      image_url: '',
      created_by: create_admin_user.id
    }

    new_bike = Bike.new(bike_params)
    refute new_bike.valid?
  end

  test 'Bike is NOT valid when using an a customer user id for created_by' do

    # As we per Bike model, the only Admin users can create new bikes
    bike_params = {
      name: 'Invalid wheel_size',
      description: 'Invalid wheel_size',
      price: 123,
      wheel_size: 15,
      rim_color: 'green',
      saddle_color: 'black',
      image_url: '',
      created_by: create_customer_user.id
    }

    new_bike = Bike.new(bike_params)
    refute new_bike.valid?
  end

  test 'Bike is NOT valid when using an invalid user_id for created_by' do

    # As we per Bike model, the user creating the bike should exist
    bike_params = {
      name: 'Invalid wheel_size',
      description: 'Invalid wheel_size',
      price: 123,
      wheel_size: 15,
      rim_color: 'green',
      saddle_color: 'black',
      image_url: '',
      created_by: 9999
    }

    new_bike = Bike.new(bike_params)
    refute new_bike.valid?
  end

  test 'Bike is NOT valid when description is too big (> 255 characters)' do

    # As we per Bike model, the user creating the bike should exist
    bike_params = {
      name: 'Invalid description',
      description: 'a' * 256,
      price: 123,
      wheel_size: 15,
      rim_color: 'green',
      saddle_color: 'black',
      image_url: '',
      created_by: 9999
    }

    new_bike = Bike.new(bike_params)
    refute new_bike.valid?
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
end
