$(document).ready(function () {
    $("a").hover(function () {
        $(this).toggleClass("logoBig");
    });

    let githubRepo = new XMLHttpRequest();
    githubRepo.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let myRepo = JSON.parse(this.responseText);
            var repo = "";
            for (i = 0; i < myRepo.length; i++) {
                repo += "<li>" + myRepo[i].name + "</li>";
            }
            document.getElementById("gitHubRepo").innerHTML = repo;
        }
    }
    githubRepo.open("GET", "https://api.github.com/users/donobrad/repos", true);
    githubRepo.send();
});


