class ProjectController < ApplicationController
  def index
    url = "https://api.github.com/repos/trevp3/Project_Democracy_DEMO_DATA/issues?state=all"
    response = HTTParty.get(url)
    parsed_body = JSON.parse(response.body)
    render json: parsed_body
  end


end

