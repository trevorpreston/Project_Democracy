class ProjectController < ApplicationController
  def index
    url = "https://api.github.com/repos/trevp3/Project_Democracy_DEMO_DATA/issues?state=all"
    response = HTTParty.get(url)
    parsed_body = JSON.parse(response.body)
    render json: parsed_body
  end


  def create
    puts params
    student = {f_name: params[:f_name],l_name: params[:l_name], age: params[:age].to_i, email: params[:email], slack: params[:slack]}
    Student.create student
    render :json => Student.last
  end

end
