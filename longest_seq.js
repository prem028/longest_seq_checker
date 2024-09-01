document.getElementById('sentenceForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var sentence = document.getElementById('sentence').value;
    var words = sentence.split(' ');
    var longestWord = words.reduce(function(longest, currentWord) {
        return currentWord.length > longest.length ? currentWord : longest;
    }, "");
    document.getElementById('longestWord').textContent = "Longest word: " + longestWord;
});
