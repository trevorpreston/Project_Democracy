class AddCreatedByToTasks < ActiveRecord::Migration[5.0]
  def change
    add_column :tasks, :create_by, :integer
  end
end
