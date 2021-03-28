class CreateBikes < ActiveRecord::Migration[6.1]
  def change
    create_table :bikes do |t|
      t.string :name
      t.text :description
      t.float :price
      t.integer :wheel_size
      t.string :rim_color
      t.string :saddle_color
      t.string :image_url
      t.belongs_to :purchase, foreign_key: true

      t.timestamps
    end
  end
end
