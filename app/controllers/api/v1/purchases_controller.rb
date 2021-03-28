module Api
  module V1
    class PurchasesController < ApplicationController
      def index
        purchases = Purchase.all

        render json: PurchaseSerializer.new(purchases), status: :ok
      end
    end
  end
end
