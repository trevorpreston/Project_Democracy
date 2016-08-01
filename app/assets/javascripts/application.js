// // This is a manifest file that'll be compiled into application.js, which will include all the files
// // listed below.
// //
// // Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// // or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
// //
// // It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// // compiled file. JavaScript code in this file should be added after the last require_* statement.
// //
// // Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// // about supported directives.
// //
// //= require jquery
// //= require jquery_ujs
// //= require turbolinks
// //= require_tree .
// console.log('connected!!')

// function getCurrent() {
//   $.getJSON('/project').done(function( currentTasks ) {
//     currentTasks.forEach(function( currentTask ) {
//       renderCurrentTask( currentTask );
//     })
//   })
// }

// function renderCurrentTask(currentTask ) {
//   var $container = $('#in-progress');
//   var $currentTask = $('<li class="currentTask">');
//   $currentTask.text(currentTask.title)

//   $container.append( $currentTask );
// }

// function getSuggested() {
//   $.getJSON('/suggestions').done(function( suggestedTasks ) {
//     suggestedTasks.forEach(function( suggestedTask ) {
//       renderSuggestedTask( suggestedTask );
//     })
//   })
// }



// function renderSuggestedTask(suggestedTask ) {
//   var $container = $('#suggestions');
//   var $suggestedTask = $('<li class="suggestedTask">');
//   var $deleteBtn = $('<button class="delete-btn"> delete </button>')
//   var $currentVotes= $('<span class="currentUps"></span>  <span class="currentDowns"></span>')
//   var $voteBtns = $('<button class="upvote-btn" data-url="/suggestions/{suggestedTask.id}"> ^ up </button> <button class="downvote-btn" data-url="/suggestions/{suggestedTask.id}"> v down </button>')

//   var $userId = parseInt($('#user-id').text())
//   console.log(suggestedTask.id)
//   console.log($userId)
//   console.log("UPVOTES ARE:  "+suggestedTask.upvotes)



//   $container.append( $suggestedTask )
//   $suggestedTask.text(suggestedTask.issue_name+":  "+suggestedTask.task_body + " submitted by: " + suggestedTask.create_by + "    ")
//   $suggestedTask.attr("task_name", suggestedTask.issue_name)
//   $suggestedTask.attr("task_body", suggestedTask.task_body)
//   $suggestedTask.attr("id", suggestedTask.id)
//   $suggestedTask.append( $currentVotes, $voteBtns)
//   $('.currentUps').text(suggestedTask.upvotes)
//   $('.currentDowns').text(suggestedTask.downvotes)
//   $suggestedTask.attr("ups", $('.currentUps').text())
//   $suggestedTask.attr("downs", $('.currentDowns').text())
//   if ($userId == suggestedTask.create_by){
//     $suggestedTask.append( $deleteBtn )
//   }

// }





// function deleteSuggested(e){
//   let id = $(e.target).parent().attr("id")
//   let url = '/suggestions/'+id
//   $.ajax({
//     url: url,
//     method: 'delete'
//   }).done(()=>{
//     console.log("deleted")
//     $(e.target).parent().remove()
//   })
// }

// // function editSuggested(e){

// // }

// function upvoteSuggested(e) {
//   console.log('UPVOTE CLICKED')
//   let id = $(e.target).parent().attr("id")
//   let title = $(e.target).parent().attr("task_name")
//   let body = $(e.target).parent().attr("task_body")
//   let up = parseInt($(e.target).parent().attr("ups"))
//   let down = parseInt($(e.target).parent().attr("downs"))
//   console.log(up)
//   let url = '/suggestions/'+id
//   let data ={
//     issue_name: title,
//     task_body: body,
//     upvotes: up+1,
//     downvotes: down
//   }
//   $.ajax({
//     url: url,
//     method: 'put',
//     data: data
//   }).done(()=>{
//     console.log("upvoted")
//   })
// }


// function waitForRender() {
//   window.setTimeout(applyListeners, 2000)
// }

// function applyListeners(){
//   $('.delete-btn').on('click', deleteSuggested)
//   $('.upvote-btn').on('click', upvoteSuggested)
// }



// $(function() {
//   getCurrent()
//   getSuggested()
//   waitForRender()
//   console.log($.getJSON('/project'))



//   function createTask(e){

//     const newTitle = $('#new-title')
//     const newBody = $('#new-body')


//     let data = {
//       title: newTitle.val(),
//       body: newBody.val(),
//       ups: 0,
//       downs: 0
//     }

//     $.post('/suggestions',data).done( (response) => {
//       console.log(response);
//     })


//   }

//   $('form').submit(createTask);






// })



