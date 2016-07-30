class CreateTasks < ActiveRecord::Migration[5.0]
  def change
    create_table :tasks do |t|
      t.string :repo_name
      t.string :issue_name
      t.integer :upvotes
      t.integer :downvotes

      t.timestamps
    end
  end
end
