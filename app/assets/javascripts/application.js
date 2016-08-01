// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
console.log('connected!!')

function renderCurrentTask(currentTask ) {
  var $container = $('#in-progress');
  var $currentTask = $('<li class="currentTask">');
  $currentTask.text(currentTask.title)
  // render the image

  $container.append( $currentTask );
}

function renderSuggestedTask(suggestedTask ) {

  var $container = $('#suggestions');
  var $suggestedTask = $('<li class="suggestedTask">');
  var $editBtn = $('<button id="edit-btn"> edit </button>')
  var $deleteBtn = $('<button class="delete-btn"> delete </button>')
  var $userId = parseInt($('#user-id').text())
  console.log(suggestedTask.create_by)
  console.log($userId)
  $suggestedTask.text(suggestedTask.issue_name+":  "+suggestedTask.task_body +  "submitted by: " + suggestedTask.create_by)
  $suggestedTask.attr("id", suggestedTask.id)
  // render the image

  $container.append( $suggestedTask )
  if ($userId == suggestedTask.create_by){
    $suggestedTask.append( $deleteBtn )
  }
  $('.delete-btn').on('click', deleteSuggested)

}

function getCurrent() {
  $.getJSON('/project').done(function( currentTasks ) {
    currentTasks.forEach(function( currentTask ) {
      renderCurrentTask( currentTask );
    })
  })
}

function getSuggested() {
  $.getJSON('/suggestions').done(function( suggestedTasks ) {
    suggestedTasks.forEach(function( suggestedTask ) {
      renderSuggestedTask( suggestedTask );
    })
  })
}

function deleteSuggested(e){
  let id = $(e.target).parent().attr("id")
  let url = '/suggestions/'+id
  $.ajax({
    url: url,
    method: 'delete'
  }).done(()=>{
    console.log("deleted")
    $(e.target).parent().remove()
  })
}

function editSuggested(e){

}





$(function() {
  getCurrent()
  getSuggested()
  console.log($.getJSON('/project'))



  function createTask(e){

    const newTitle = $('#new-title')
    const newBody = $('#new-body')

    let data = {
      title: newTitle.val(),
      body: newBody.val()
    }

    $.post('/suggestions',data).done( (response) => {
      console.log(response);
    })


  }

  $('form').submit(createTask);






})



