# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

admin = User.create(
  [
    {
      email: 'admin@bikestore.com',
      password_digest: '123456',
      user_role: User::UserRole::ADMIN.to_i
    },
    {
      email: 'admin@camaloon.com',
      password_digest: '123456',
      user_role: User::UserRole::ADMIN.to_i
    }
  ]
)

puts "#{admin.first.user_role} new ADMIN user has been created."

customer = User.create(
  [
    {
      email: 'customer@bikestore.com',
      password_digest: '123456',
      user_role: User::UserRole::CUSTOMER.to_i
    },
    {
      email: 'customer@camaloon.com',
      password_digest: '123456',
      user_role: User::UserRole::CUSTOMER.to_i
    }
  ]
)

puts "#{customer.first.user_role} CUSTOMER user has been created."

bikes = Bike.create(
  [
    {
      name: 'Trek 2021 Speed bike',
      description: 'This is the perfect bike to go fast and arrive in your
                    destinations very quickly, you will never be late.',
      price: 123.00,
      wheel_size: 17,
      rim_color: 'green',
      saddle_color: 'brown',
      image_url: 'https://d2j6dbq0eux0bg.cloudfront.net/images/28287025/1406138531.jpg',
      purchase_id: nil,
      created_by: 1
    },
    {
      name: 'Carrera 2021 Speed bike',
      description: 'This is the description of the SECOND 17 inches bike.',
      price: 321.00,
      wheel_size: 17,
      rim_color: 'green',
      saddle_color: 'brown',
      image_url: 'https://d2j6dbq0eux0bg.cloudfront.net/images/28287025/1406138531.jpg',
      purchase_id: nil,
      created_by: 1
    },
    {
      name: 'Caloi Vintage 1980',
      description: 'This is the description of the THIRD 17 inches bike.',
      price: 549.00,
      wheel_size: 17,
      rim_color: 'green',
      saddle_color: 'black',
      image_url: 'https://d2j6dbq0eux0bg.cloudfront.net/images/28287025/1406138531.jpg',
      purchase_id: nil,
      created_by: 1
    },
    {
      name: 'Blue Carrera Hybrid - Medium',
      description: 'This is the description of the FIRST 19 inches bike.',
      price: 880.00,
      wheel_size: 19,
      rim_color: 'blue',
      saddle_color: 'black',
      image_url: 'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/2/2019/10/carrera-virtuoso.jpg',
      purchase_id: nil,
      created_by: 1
    },
    {
      name: 'Green Carrera Hybrid - Medium',
      description: 'This is the description of the SECOND 19 inches bike.',
      price: 880.00,
      wheel_size: 19,
      rim_color: 'green',
      saddle_color: 'blue',
      image_url: 'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/2/2019/10/carrera-virtuoso.jpg',
      purchase_id: nil,
      created_by: 1
    },
    {
      name: 'Apollo Phaze Mens Montain Black',
      description: 'This is the description of the FIRST 21 inches bike.',
      price: 1299.00,
      wheel_size: 21,
      rim_color: 'black',
      saddle_color: 'black',
      image_url: 'https://i1.adis.ws/i/washford/566205?w=1480&h=1110&qlt=75&fmt=webp&v=1',
      purchase_id: nil,
      created_by: 1
    },
    {
      name: 'Apollo Phaze Mens Montain Green',
      description: 'This is the description of the SECOND 21 inches bike.',
      price: 1349.00,
      wheel_size: 21,
      rim_color: 'green',
      saddle_color: 'blue',
      image_url: 'https://i1.adis.ws/i/washford/566205?w=1480&h=1110&qlt=75&fmt=webp&v=1',
      purchase_id: nil,
      created_by: 1
    },
    {
      name: 'Apollo Phaze Mens Montain Blue',
      description: 'This is the description of the THIRD 21 inches bike.',
      price: 2100.00,
      wheel_size: 21,
      rim_color: 'blue',
      saddle_color: 'brown',
      image_url: 'https://i1.adis.ws/i/washford/566205?w=1480&h=1110&qlt=75&fmt=webp&v=1',
      purchase_id: nil,
      created_by: 1
    },
  ]
)

puts "#{bikes.count} new bikes has been created."

purchases = Purchase.create(
  [
    {
      paid_by: 'debit card', total: 1599.99, bike_id: bikes.first.id, user_id: customer.first.id
    },
    {
      paid_by: 'credit card', total: 699.99, bike_id: bikes.last.id, user_id: customer.first.id
    }
  ]
)

puts "#{purchases.count} new purchase records has been created."

suppliers = Supplier.create(
  [
    {
      supplier_name: 'Camaloon', bike_part: 'chain', color: 'red'
    },
    {
      supplier_name: 'Barcelona Bike (BB)', bike_part: 'gears', color: 'orange'
    }
  ]
)

puts "#{suppliers.count} new suppliers records has been created."
