require "test_helper"

class SupplierTest < ActiveSupport::TestCase
  test 'creates a new Supplier' do
    supplier_params = {
      supplier_name: 'Camaloon Bike Shop',
      bike_part: 'Front Lights',
      color: 'white'
    }

    assert_difference -> { Supplier.count } do
      new_supplier = Supplier.new(supplier_params)
      assert new_supplier.valid?
      assert new_supplier.save
    end
  end

  test 'Supplier is NOT valid if missing any parameter' do
    supplier_params = {
      supplier_name: '',
      bike_part: '',
      color: ''
    }

    new_supplier = Supplier.new(supplier_params)
    refute new_supplier.valid?
    refute new_supplier.save
  end
end
