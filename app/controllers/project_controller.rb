class ProjectController < ApplicationController
  def index
    url = "https://api.github.com/repos/trevp3/Project_Democracy_DEMO_DATA/issues?state=all"
    response = HTTParty.get(url)
    parsed_body = JSON.parse(response.body)
    render json: parsed_body
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

end
    # t.string   "repo_name"
    # t.string   "issue_name"
    # t.integer  "upvotes"
    # t.integer  "downvotes"
    #    t.text     "task_body"
