class SuggestionsController < ApplicationController
  def index
    render :json => Task.all
  end

  def create
    puts params
    task = {
      issue_name: params[:title],
      task_body: params[:body],
      upvotes: 0,
      downvotes: 0}
    Task.create task
    render :json => Task.last
  end

  def edit
    render :json => Task.find(params[:id])
  end

  def update
    task = {
      issue_name: params[:title],
      task_body: params[:body]
    }
    Task.find(params[:id]).update task
    render :json => task
  end

  def destroy
    task =Task.find(params[:id])
    task.destroy
    render :json => true
  end

end
