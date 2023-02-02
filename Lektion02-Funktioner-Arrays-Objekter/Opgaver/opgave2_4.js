let eksempel = "Der var engang en mand som hed Steen og han havde et ekstra ben";


function antalForskellige(text) {
    let words = text.split(" ");
    let wordCount = {};
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (wordCount.hasOwnProperty(word)) {
            wordCount[word]++;
        } else {
            wordCount[word] = 1;
        }
    }
    return wordCount;
}
console.log(antalForskellige(eksempel));