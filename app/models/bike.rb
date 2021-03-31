class Bike < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true, length: { maximum: 255 }
  validates :price, presence: true, numericality: { more_than: 0 }
  validates :wheel_size, presence: true
  validates :rim_color, presence: true
  validates :saddle_color, presence: true
  validates :created_by, presence: true

  validate :check_small_bike_color, if: -> { wheel_size.to_s == WheelSizes::SMALL }
  validate :check_medium_bike_color, if: -> { wheel_size.to_s == WheelSizes::MEDIUM }
  validate :check_large_bike_color, if: -> { wheel_size.to_s == WheelSizes::LARGE }
  validate :check_bike_size

  module WheelSizes
    SMALL = '17'.freeze
    MEDIUM = '19'.freeze
    LARGE = '21'.freeze
  end

  module RimColors
    BLACK = 'black'.freeze
    BLUE = 'blue'.freeze
    GREEN = 'green'.freeze
  end

  BikeSizes = [
    WheelSizes::SMALL,
    WheelSizes::MEDIUM,
    WheelSizes::LARGE
  ].freeze

  BikeRimColors = [
    RimColors::BLACK,
    RimColors::BLUE,
    RimColors::GREEN
  ].freeze

  def valid_wheel_size?
    BikeSizes.include?(wheel_size.to_s)
  end

  def valid_rim_color?
    BikeRimColors.include?(rim_color.to_s)
  end

  def valid_small_bike_color?
    rim_color == RimColors::GREEN
  end

  def valid_medium_bike_color?
    rim_color == RimColors::GREEN || rim_color == RimColors::BLUE
  end

  def check_bike_size
    errors.add(:wheel_size, 'is invalid') unless valid_wheel_size?
  end

  def check_large_bike_color
    errors.add(:rim_color, 'is invalid') unless valid_rim_color?
  end

  def check_small_bike_color
    errors.add(:rim_color, 'is invalid for 17 inches bike') unless valid_small_bike_color?
  end

  def check_medium_bike_color
    errors.add(:rim_color, 'is invalid for 19 inches bike') unless valid_medium_bike_color?
  end
end
