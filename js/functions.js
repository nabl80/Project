function showFullMessage(id){
    var messages = getMessage();
    messages.sort(function(a,b){
        return a.id - b.id;
    });
    var seqNr = messages[id].id;
    var name = messages[seqNr].messagename;
    var date = messages[seqNr].date;
    var image = messages[seqNr].image;
    var img = "<img src="+image+">"
    var message = messages[id].fulltext;
    $(".main-block").append(
        '<div class = "header-line">'+
        '<h4 class = "center container">' + name + '</h4>' + '</div>'+
        '<div class = "container">' +
        '<div class = "row">' +
        '<div class = "image-fullmessage">' +
        '<img id = "imgpic"' + img + '</div>' +
        '<div class = "message-block-fullmessage">' +
        '<p class = "message-date">' + date + '</br>' +
        '<p class = "message-text">' + message + '</div>' +
        '</div>');
}

function addShortMessage(){
    var messages = getMessage();
    for (var i = 0; i < 3; i++){
        var id = messages[i].id;
        var date = messages[i].date;
        var name = messages[i].messagename;
        var message = messages[i].messagetextshort;
        $(".row").append(
            '<div class="message-block">' +
            '<div class="date-block">' +
            '<p class="message-date">' + date + '</p>' +
            '</div>' +
            '<div class="text-block" >' +
            '<p class="message-name">' + name + '</p>' +
            '<p class="message-text">' + message + '</p>' +
            '<a class="readmore" onclick = "redirectToMessage('+id+')">' + "Skaityti daugiau..." + '</a>' +
            '</div>' +
            '</div>');
    }
    $(".row").append('<a class="message-name" href="../Project/html/archieve.html"><button>Naujienų archyvas</button></a>');
}

function showList(){
    var messages = getMessage();
    for (var i = 0; i < messages.length; i++){
        var id = messages[i].id;
        var name = messages[i].messagename;
        var date = messages[i].date;
        $(".row").append(
            '<div class="short-block-archieve">' +
            '<div class="date-block-archieve">' +
            '<p class="message-date">' + date + '</p>' +
            '</div>' +
            '<div class="name-block-archieve">' +
            '<p class="message-name-archieve">' +
            '<a class="a-message-name-archieve" onclick = "redirectToMessage2('+id+')">' +
            name +
            '</a>'+
            '</p>' +
            '</div>' +
            '</div>');
    }
}

function redirectToDescription(id){

    getUrlParameter(id);
    location.href = "../html/full-description.html?id=" + id;
    return id;
}

function redirectToMessage(id){

    getUrlParameter(id);
    location.href = "../Project/html/full-message.html?id=" + id;
    return id;
}

function redirectToMessage2(id){

    getUrlParameter(id);
    location.href = "../html/full-message.html?id=" + id;
    return id;
}

function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName;

    for (var i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};

function showFullDescription(){
    var id = getUrlParameter("id")
    var programs = getProgram();
    programs.sort(function(a,b){
        return b.id - a.id;
    });
    var seqNr = programs[id].id;
    var nights = programs[seqNr].minnights;
    var programname = programs[seqNr].programname;
    var inside = programs[seqNr].programincludes;
    var treatments = programs[seqNr].treatments;
    var image = programs[seqNr].image;
    var warning = programs[seqNr].warning;
    $(".description-block").append(
        '<h6 class = "center">' + programname + '</h6>' +
        '<div class = "fulltext-fulldescription">' +
        '<p class = "warning">' + nights + '</p>' +
        '<p class = "inside">' + inside + '</p>' +
        '<p class = "inside">' + treatments + '</p>' +
        '<p class = "warning">' + warning + '</p>' +
        '</div>' +
        '</div>');
}

function showProgramList(){
    var programs = getProgram();
    for (var i = 0; i < programs.length; i++){
        programs.sort(function(a,b){
            return b.id - a.id;
        });
        var id = programs[i].id;
        var programname = programs[i].programname;
        var inside = programs[i].programincludes;
        var treatments = programs[i].treatments;
        var image = programs[i].image;
        $(".row").append(
            '<div class="col s12 m4">' +
            '<a class="readmore" onclick = "redirectToDescription('+id+')">' +
            '<div class="card">' +
            '<div class="card-image">' +
            '<img class="image-programs" src="'+image+'">' +
            '<span class="card-title">' + programname + '</span>' +
            '</div>' +
            '</div>' +  '</a/' +
            '</div>'
        );
    }
    $(".col").mouseover(function(){
        $(this).fadeTo(500, 0.5);
    });

    $(".col").mouseout(function(){
        $(this).fadeTo(500, 1);
    });
}
