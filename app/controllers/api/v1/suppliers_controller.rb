module Api
  module V1
    class SuppliersController < ApplicationController
      def index
        suppliers = Supplier.all

        render json: SupplierSerializer.new(suppliers), status: :ok
      end

      def create
        supplier = Supplier.new(suppliers_params)

        if supplier.save
          render json: SupplierSerializer.new(supplier).serializable_hash, status: :created
        else
          render json: { error: supplier.errors }, status: :unprocessable_entity
        end
      end

      private

      def suppliers_params
        params.require(:supplier).permit(
          :supplier_name,
          :bike_part,
          :color,
        )
      end
    end
  end
end
