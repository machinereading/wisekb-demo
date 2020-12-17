$(document).ready(function () {
    window.addEventListener('message', receive_pData, false);

    var searchKeyword = document.getElementById("cInput");
    var autocomplete = document.getElementById("autocomplete");
    var keyword = "";
    searchKeyword.onkeydown = function (e) {
        searchKeyword.onkeyup(e);
    };
    searchKeyword.onkeyup = function (e) {

        keyword = searchKeyword.value;
        if (keyword == "") {
            autocomplete.style.display = "none";
        }
        else {
            autocomplete.style.display = "block";
            fillSearchResult(autocomplete);
        }
    };
});

function send_cData() {
    var mes = document.getElementById("cInput").value;
    var data = {ModifyProperty: mes};
    window.opener.postMessage(data, '*');
    document.getElementById("cInput").value = "";
    document.getElementById("cOutput").value = "";

}

function receive_pData(e) {
    console.log('parent message');
    console.log(e.data);
    // document.getElementById("cOutput").value = e.data.parentData;
    document.getElementById("cInput").value = e.data.prop;
    document.getElementById("cOutput").value = e.data.question;
}

function fillSearchResult(autocomplete) {
    autocomplete.innerHTML = "";
    var searchKeyword = document.getElementById("cInput");
    var keyword = searchKeyword.value;
    var searchResults = new Array;
    var wordList = relation_list;
    for (var i = 0; i < wordList.length; i++) {
        if (wordList[i].toLowerCase().indexOf(keyword.toLowerCase()) != -1){
            searchResults.push(wordList[i])
        }
    }
    for (var i = 0; i < searchResults.length; i++) {
        autocomplete.innerHTML += "<div class='auto_wordlist' onclick='selectData(this);'>" + searchResults[i] + "</div>";
    }
}

function selectData(that) {
    var searchKeyword = document.getElementById("cInput");
    searchKeyword.value = that.innerText;
    var autocomplete = document.getElementById("autocomplete");
    autocomplete.style.display = "none";
}
