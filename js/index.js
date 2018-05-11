//------------------------------------------------------------------------------
// Once the Webpage contents have completed loading
$(window).load(function() {

    // PAGE IS FULLY LOADED - FADE OUT YOUR OVERLAYING DIV
    setTimeout(function() {
       $('#page-loading-div').fadeOut(1000, function() {
           $(".page_quote").fadeTo(2500, 0.5);
           
        });
        
        //$('#page-loading-div').html('<h5 id="page-loading-text">Apologies...!!! Page is under construction. Please come back soon <br> - Hari</h5>');
    }, 1000);

});


$(document).ready(function() {
    
     $(function() {
            $(".typed_search")
                .typed({
                    strings: [
                                    '<a href="https://twitter.com/hashtag/scalability" target="_blank" style="color: cadetblue">#Scalability</a>',
                                    '<a href="https://twitter.com/hashtag/Elasticsearch" target="_blank" style="color: cadetblue">#Elasticsearch</a>',
                                    '<a href="https://twitter.com/hashtag/Cloudfoundry" target="_blank" style="color: cadetblue">#Cloud Foundry</a>',
                                    '<a href="https://twitter.com/hashtag/bosh.io" target="_blank" style="color: cadetblue">#BOSH.io</a>',
                                    '<a href="https://twitter.com/hashtag/Golang" target="_blank" style="color: cadetblue">#Golang</a>'
                                    ],

                    typeSpeed: 90,
                    backDelay: 500,
                    loop: true,
                    contentType: 'html', // or text
                    // defaults to false for infinite loop
                    loopCount: false,
                    callback: function() {
                        
                    },
                    resetCallback: function() {}
                });
        });
//these days I google 🌎 for... 
    /*
    $('#htmlMistakeText').popover({
        'placement': 'top',
        'animation': true,
        'html': true,
        'content': 'Seems like a mistake <button id="report-btn" type="button" data-toggle="modal" data-target="#myModal" onclick="$(&quot;#htmlMistakeText&quot;).popover(&quot;hide&quot;);" class="btn btn-danger">Report!</button>',

        'container': 'body'
    }); */

    $('#reported-btn').click(function() {
        console.log("Reported");
        $('#htmlMistakeText').html("About");
        //        $('#htmlMistakeText').popover('disable');
        //        $('#htmlMistakeText').popover('destroy').popover({content: "fixed thank you..!!"});
        //        $('#htmlMistakeText').popover("show");

        var myPopover = $('#htmlMistakeText').data('popover');
        myPopover.options.content = 'foo';
        $('#htmlMistakeText').popover();
    });

    $("#closeCode").bind('input', function() {
        var enteredCode = $('#closeCode').val();
        var correctCode = "p>";

        if (enteredCode === correctCode) {
            console.log('Correct Code: ');

            window.close();

        }

    });

    $("#show-more-localsiri-btn").click(function() {
        $("#show-more-localsiri").slideToggle("slow", function() {
            var title = $("#show-more-localsiri-btn").html();

            if (title === "view more") {
                $("#show-more-localsiri-btn").html("show less");
            } else {
                $("#show-more-localsiri-btn").html("view more");
            }
        });
    });

    $("#show-more-wifriends-btn").click(function() {
        $("#show-more-wifriends").slideToggle("slow", function() {
            var title = $("#show-more-wifriends-btn").html();

            if (title === "view more") {
                $("#show-more-wifriends-btn").html("show less");
            } else {
                $("#show-more-wifriends-btn").html("view more");
            }
        });
    });

});
