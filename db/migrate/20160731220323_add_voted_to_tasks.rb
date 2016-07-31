class AddVotedToTasks < ActiveRecord::Migration[5.0]
  def change
    add_column :tasks, :voted, :string, array: true, default: '{}'
  end
end
