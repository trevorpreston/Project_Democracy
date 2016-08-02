
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

var projectName = undefined
var repoUrl = undefined

function renderCurrentTask(currentTask ) {
  if (currentTask.state==="open"){
    var $container = $('#in-progress');
    var $currentTask = $('<li class="currentTask">');
    $currentTask.text(currentTask.title + ":  " + currentTask.body)
  // render the image
  }

  $container.append( $currentTask );
  repoUrl = currentTask.repository_url
}

function renderSuggestedTask(suggestedTask ) {
  var $container = $('#suggestions');
  var $suggestedTask = $('<li class="suggestedTask">');
  var $editBtn = $('<button id="edit-btn"> edit </button>')
  var $deleteBtn = $('<button class="delete-btn" onclick="deleteSuggested(this);"> delete </button>')
  var $upvote = $('<button class="upvote-btn" onclick="upvoteSuggested(this);"></button>')
  var $downvote = $('<button class="downvote-btn" onclick="upvoteSuggested(this);"></button>')
  var $userId = parseInt($('#user-id').text())
  console.log(suggestedTask.create_by)


  $container.append( $suggestedTask )
  $suggestedTask.attr("id", suggestedTask.id)
  $suggestedTask.attr("up", suggestedTask.upvotes)
  $suggestedTask.attr("down", suggestedTask.downvotes)
  $suggestedTask.text( "|| current up/down: " + suggestedTask.upvotes +"/" +suggestedTask.downvotes+ "  ||" + suggestedTask.issue_name+":  "+suggestedTask.task_body)

  $suggestedTask.prepend( $upvote, $downvote)
  if ($userId == suggestedTask.create_by){
    $suggestedTask.append( $deleteBtn )
  }

}

function upvoteSuggested(d) {

  console.log('UPVOTE CLICKED')
  console.log(d.parentElement.getAttribute("tname"))
  let id = d.parentElement.getAttribute("id")
  let up = parseInt(d.parentElement.getAttribute("up"))
  let down = parseInt(d.parentElement.getAttribute("down"))
  let url = '/suggestions/'+id
  let data ={
    upvotes: up + 1,
    downvotes: down
  }
  $.ajax({
    url: url,
    method: 'put',
    data: data
  }).done(()=>{
    console.log("upvoted")

  })
}

function upvoteSuggested(d) {

  console.log('DOWNVOTE CLICKED')
  console.log(d.parentElement.getAttribute("tname"))
  let id = d.parentElement.getAttribute("id")
  let up = parseInt(d.parentElement.getAttribute("up"))
  let down = parseInt(d.parentElement.getAttribute("down"))
  let url = '/suggestions/'+id
  let data ={
    upvotes: up,
    downvotes: down + 1
  }
  $.ajax({
    url: url,
    method: 'put',
    data: data
  }).done(()=>{
    this.hide().show(0);
    console.log("upvoted")

  })
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
      renderSuggestedTask( suggestedTask )
    })
  })
}

function getCurrentRepo() {
  $.getJSON('/project').done(function( currentTasks ) {
      renderRepo( currentTasks );
    })
}

function renderRepo(repo){
  let repoArr=[]
  $('#project-url').attr("href", repoUrl)
  console.log(repoUrl)
  // $('#project-title').text(repoUrl)
    $('#project-title').text("Climbr")

}

function deleteSuggested(d){
  console.log(d.parentElement)
  let id = d.parentElement.getAttribute("id")
  let url = '/suggestions/'+id
  $.ajax({
    url: url,
    method: 'delete'
  }).done(()=>{
    console.log("deleted")
    d.parentElement.remove()
  })
}

// function editSuggested(e){

// }



// function applyListeners(){
//   $('.delete-btn').on('click', deleteSuggested)
//   $('.upvote-btn').on('click', upvoteSuggested)
// }


$(function() {
  getCurrent();
  getSuggested();
  getCurrentRepo();
  // applyListeners()
  console.log($.getJSON('/project'))



  function createTask(e){

    const newTitle = $('#new-title')
    const newBody = $('#new-body')


    let data = {
      title: newTitle.val(),
      body: newBody.val(),
      ups: 0,
      downs: 0
    }

    $.post('/suggestions',data).done( (response) => {
      console.log(response);
    })


  }

  $('form').submit(createTask);






})

