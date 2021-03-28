module Api
  module V1
    class UsersController < ApplicationController
      def index
        users = User.all

        render json: UserSerializer.new(users).serializable_hash, status: :ok
      end

      def show
        user = User.find_by(id: params[:id])

        render json: UserSerializer.new(user).serializable_hash
      end

      def create
        user = User.new(user_params)

        if user.save
          render json: UserSerializer.new(user).serializable_hash, status: :created
        else
          render json: { error: user.errors }, status: :unprocessable_entity
        end
      end

      def update
        user = User.find_by(id: params[:id])

        if user.update(user_params)
          render json: UserSerializer.new(user).serializable_hash, status: :ok
        else
          render json: { error: user.errors }, status: :unprocessable_entity
        end
      end

      def destroy
        user = User.find_by(id: params[:id])

        if user.destroy
          render json: { message: 'User has been deleted successfully deleted' }, status: :no_content
        else
          render json: { error: user.errors }, status: :unprocessable_entity
        end
      end

      private

      def user_params
        params.require(:user).permit(:email, :password_digest, :user_role)
      end
    end
  end
end
