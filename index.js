/* 1) Save this array in a variable called genres: ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"]
 */
const genres = ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"]



//2) Create an unordered list using JavaScript and save it in a variable


//3) Cycle the array and create a list-item via JavaScript for every element

let displayAsAList = function(arr) {
    let element;
    for (i = 0; i < genres.length; i++) {
        //displayArrayAsHtmlList(genres[i], element)
        const listItems = createElement("li")
        listItems.innerHTML = arr[i]
    }
    return element
}
console.log(displayAsAList(genres))
    //4) Insert the genere as text in the list-item
    //5) Append the list items in the unordered list
    //6) Append the unordered list in the document. The list should appear in the page. */