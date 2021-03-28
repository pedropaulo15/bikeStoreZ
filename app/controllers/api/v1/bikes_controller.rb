module Api
  module V1
    class BikesController < ApplicationController
      def index
        bikes = Bike.all

        render json: BikeSerializer.new(bikes).serializable_hash, status: :ok
      end

      def show
        bikes = Bike.find_by(id: params[:id])

        render json: BikeSerializer.new(bikes).serializable_hash, status: :ok
      end

      def create
        bike = Bike.new(bike_params)

        if bike.save
          render json: BikeSerializer.new(bike).serializable_hash, status: :created
        else
          render json: { error: user.errors }, status: :unprocessable_entity
        end
      end

      def update
        bike = Bike.find_by(id: params[:id])

        if bike.update(bike_params)
          render json: BikeSerializer.new(bike).serializable_hash, status: :ok
        else
          render json: { error: user.errors }, status: :unprocessable_entity
        end
      end

      def destroy
        bike = Bike.find_by(id: params[:id])

        if bike.destroy
          render json: { message: 'Bike has been deleted successfully deleted' }, status: :no_content
        else
          render json: { error: user.errors }, status: :unprocessable_entity
        end
      end

      private

      def bike_params
        params.require(:bike).permit(
          :name,
          :description,
          :price,
          :wheel_size,
          :rim_color,
          :saddle_color,
          :image_url
        )
      end
    end
  end
end
