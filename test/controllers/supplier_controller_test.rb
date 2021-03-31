require "test_helper"

class SupplierControllerTest < ActionDispatch::IntegrationTest
  test 'GET #index' do
    get '/api/v1/suppliers'

    assert_response :success
  end

  test 'POST #create successful' do
    supplier_params = {
      supplier_name: 'Camallon Bike Store',
      bike_part: 'chain',
      color: 'red'
    }

    post '/api/v1/suppliers/', params: { supplier: supplier_params }

    assert_response :success
  end

  test 'POST #create unprocessable_entity if missing any parameter' do
    supplier_params = {
      supplier_name: '',
      bike_part: '',
      color: ''
    }

    post '/api/v1/suppliers/', params: { supplier: supplier_params }

    assert_response :unprocessable_entity
  end
end
