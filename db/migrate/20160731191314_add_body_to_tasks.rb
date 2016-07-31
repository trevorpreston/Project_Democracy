class AddBodyToTasks < ActiveRecord::Migration[5.0]
  def change
    add_column :tasks, :task_body, :text
  end
end
