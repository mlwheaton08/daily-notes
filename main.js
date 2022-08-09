const notes = [
    {
        id: 1,
        text: "Introductions and an overview of class objectives",
        author: "Mason Wheaton",
        date: "07/05/2022",
        topics: ["introductions", "rules", "overview"]
    },
    {
        id: 2,
        text: "Watched another cohort's capstone projects, started some basic HTML, and got assigned groups",
        author: "Mason Wheaton",
        date: "07/09/2022",
        topics: ["presentations", "HTML", "group"]
    },
    {
        id: 3,
        text: "Worked on basic HTML and CSS exercises",
        author: "Mason Wheaton",
        date: "07/12/2022",
        topics: ["HTML", "CSS", "Flexbox"]
    },
];

notes.push({
    id: 4,
        text: "Review all my old code before asking for help or looking at hints.",
        author: "Mason Wheaton",
        date: "07/13/2022",
        topics: ["strategy", "professional", "help"]
},
{
    id: 5,
        text: "I have found that slowing down and thinking about the problem, and writing out the comments makes it vastly easier to write code.",
        author: "Mason Wheaton",
        date: "07/17/2022",
        topics: ["thinking"]
},
{
    id: 6,
        text: "Need to have all my code backed up to Github by the end of the week.",
        author: "Mason Wheaton",
        date: "07/20/2022",
        topics: ["reminder", "github"]
})

// for (const note of notes) {
//     console.log(note.text);
// };

// console.log("*** All Note Topics ***");
// for (const note of notes) {
//     for (const topic of note.topics) {
//         console.log(topic);
//     }
// };

// console.log("*** Average Topics Per Note ***");
// x = 0;
// for (const note of notes) {
//     x += note.topics.length;
// }
// console.log(x/notes.length);

// const filteredNotes = [];
// const criteria = "HTML";
// for (const note of notes) {
//     if (note.topics.includes(criteria)) {
//         filteredNotes.push(note);
//     }
// }
// console.log(filteredNotes);

// console.log("***  Note Articles  ***");
// for (const note of notes) {
//     console.log(`<article>${note.text}</article>`)
// };

let noteSection = '';
console.log("***  Note Articles  ***");
for (const note of notes) {
    noteSection += `<article>\n\t${note.text}`;
    for (const topic of note.topics) {
        noteSection += `\n\t<section>${topic}</section>`
    }
    noteSection += `\n</article>\n`;
};
console.log(noteSection);