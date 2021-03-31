class CreateSuppliers < ActiveRecord::Migration[6.1]
  def change
    create_table :suppliers do |t|
      t.string :supplier_name
      t.string :bike_part
      t.string :color

      t.timestamps
    end
  end
end
