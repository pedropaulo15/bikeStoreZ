module Api
  module V1
    class PurchasesController < ApplicationController
      def index
        purchases = Purchase.all

        render json: PurchaseSerializer.new(purchases), status: :ok
      end

      def create
        purchase = Purchase.new(purchase_params)

        if purchase.save
          render json: PurchaseSerializer.new(purchase).serializable_hash, status: :created
        else
          render json: { error: purchase.errors }, status: :unprocessable_entity
        end
      end

      private

      def purchase_params
        params.require(:purchase).permit(
          :paid_by,
          :total,
          :bike_id,
          :user_id
        )
      end
    end
  end
end
