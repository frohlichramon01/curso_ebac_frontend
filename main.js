$(document).ready(function() {
    

    $("form").on("submit", function(e) {
        e.preventDefault();
        const inputvalue = $("#taskinput");
        const tasklist = $("#tasklist");
        tasklist.append("<li class='task'>" + inputvalue.val() + "</li>");
        inputvalue.val("");


        $(document).on("click", ".task", function(){  
            $(this).addClass("done");
            })
        })
    
    
    

})

