class SuggestionsController < ApplicationController
  def index
    render :json => Task.all
  end

  def show
    @suggestion = Task.find(params[:id])
    render :json => @suggestion
  end

  def create
    puts params
    task = {
      issue_name: params[:title],
      task_body: params[:body],
      create_by: current_user.id,
      upvotes: params[:ups],
      downvotes: params[:downs],
      voted: {}
    }
    Task.create task
    render :json => Task.last
  end

  def edit
    render :json => Task.find(params[:id])
  end

  def update
    # task = {
    #   upvotes: params[:upvotes],
    #   downvotes: params[:downvotes]
    # }
    Task.find(params[:id]).update permitted_params
    # render :json => task
  end

  def destroy
    task =Task.find(params[:id])
    task.destroy
    render :json => true
  end

  def permitted_params
    params.permit(:upvotes, :downvotes)
  end

end
