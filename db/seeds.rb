# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

admin = User.create(
  [
    {
      email: 'admin@bikestore.com',
      password_digest: '123456',
      user_role: User::UserRole::ADMIN.to_i
    }
  ]
)

Rails.logger.info("New #{admin.first.user_role} user has been created.")

customer = User.create(
  [
    {
      email: 'customer@bikestore.com',
      password_digest: '123456',
      user_role: User::UserRole::CUSTOMER.to_i
    }
  ]
)

Rails.logger.info("New #{customer.first.user_role} user has been created.")

bikes = Bike.create(
  [
    {
      name: 'Trek 2021 Speed bike',
      description: 'Domane ALR 4 Disc the gateway to disc brake-equipped road bikes in our endurance line-up.
                    It has all the trims that make it a fast, efficient and dependable ride – like an IsoSpeed
                    decoupler and a full Shimano Tiagra drivetrain – with the added benefit of hydraulic disc
                    brakes for additional tyre clearance and better stopping power in all weather conditions.',
      price: 123.00,
      wheel_size: 15,
      rim_color: 'Black',
      saddle_color: 'Spotted',
      image_url: 'https://d2j6dbq0eux0bg.cloudfront.net/images/28287025/1406138531.jpg',
      purchase_id: nil
    },
    {
      name: 'White Carrera Hybrid',
      description: 'Whether you’re looking for an easier commute or there’s some unchartered territory crying
                      out to be explored, the Carrera Parva Womens Hybrid Bike - Grey helps take you further.
                      With its new geometry having been designed to offer new improved levels of comfort, the
                      lightweight but durable alloy frame, which comes with a lifetime guarantee, is ideal for
                      leisurely rides or around town. The Shimano 2x drivetrain is simple to use, makes for
                      smoother gear transitions and delivers fantastic performance from the 2x7 gears. Designed
                      with an extra layer, the fast rolling, puncture resistant, 27.5 x 1.95 tyres have double walled
                      rims for extra durability. And, when you want to keep going, the memory foam saddle will keep you
                      well supported.

                      The Carrera Parva is the perfect partner for adventures big or small and to get you started
                      comes with a free bike build. With all the tools, equipment and training needed, we can get
                      your bike built quickly and safely, and we’ll even get rid of the packaging for you. Plus, our
                      free lifetime safety checks and lifetime frame guarantee mean you have the confidence to go
                      further.',
      price: 880.00,
      wheel_size: 17,
      rim_color: 'White',
      saddle_color: 'Black',
      image_url: 'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/2/2019/10/carrera-virtuoso.jpg',
      purchase_id: nil
    },
    {
      name: 'Apollo Phaze Mens Montain Bike Blue',
      description: 'Whether it’s tackling the toughest trails or just enjoying a local leisure ride, the Apollo Phaze
                    ticks plenty of boxes for a wide range of mountain bike riders. Mixing comfort, durability and
                    value, this excellent men’s bike will open up new adventures without breaking the bank.',
      price: 228.00,
      wheel_size: 19,
      rim_color: 'Blue',
      saddle_color: 'Black',
      image_url: 'https://i1.adis.ws/i/washford/566205?w=1480&h=1110&qlt=75&fmt=webp&v=1',
      purchase_id: nil
    }
  ]
)

Rails.logger.info("#{bikes.count} new bikes has been created.")

purchases = Purchase.create(
  [
    {
      paid_by: "debit card", total: 1599.99, bike_id: bikes.first.id, user_id: customer.first.id
    },
    {
      paid_by: "credit card", total: 699.99, bike_id: bikes.last.id, user_id: customer.first.id
    }
  ]
)

Rails.logger.info("#{purchases.count} new purchase records has been created.")
