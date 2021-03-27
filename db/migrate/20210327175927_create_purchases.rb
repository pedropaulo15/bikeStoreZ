class CreatePurchases < ActiveRecord::Migration[6.1]
  def change
    create_table :purchases do |t|
      t.string :paid_by
      t.float :total

      t.timestamps
    end
  end
end
