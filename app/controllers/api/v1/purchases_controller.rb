module Api
  module V1
    class PurchasesController < ApplicationController
      def index
        purchases = Purchase.all

        render json: PurchaseSerializer.new(purchases), status: :ok
      end

      def create
        user = User.find_by(id: params[:purchase][:user_id])

        check_if_user_exists(user)
        check_user_is_not_admin(user)

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

      def check_if_user_exists(user)
        if user.blank?
          render json: { message: 'User used to create this Purchase does not exist' }, status: :not_found
        end
      end

      def check_user_is_not_admin(user)
        if user.user_role != 2
          render json: { message: 'Admin users are not able to execute a purchase' }, status: :bad_request
          raise 'Admin users are not able to execute a purchase'
        end
      end
    end
  end
end
