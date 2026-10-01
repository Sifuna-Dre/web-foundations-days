let notes = [
  { id: 1, text: "Buy milk and bread", category: "personal" },
  { id: 2, text: "Finish the Day 3 assignment", category: "study" },
  { id: 3, text: "Email the project report to Grace", category: "work" },
  { id: 4, text: "Revise JavaScript arrays", category: "study" },
  { id: 5, text: "Call mum", category: "personal" },
];

// 1. searchNotes
function searchNotes(word) {
    return notes.filter(note =>
        note.text.toLowerCase().includes(word.toLowerCase())
    );
}

// 2. longestNote
function longestNote() {
    if (notes.length === 0) {
        return null;
    }

    let longest = notes[0];

    for (let note of notes) {
        if (note.text.length > longest.text.length) {
            longest = note;
        }
    }

    return longest;
}

// 3. countByCategory
function countByCategory() {
    let counts = {};

    for (let note of notes) {
        if (counts[note.category]) {
            counts[note.category]++;
        } else {
            counts[note.category] = 1;
        }
    }

    return counts;
}

// 4. getSummary
function getSummary() {
    let counts = countByCategory();
    let noteWord = notes.length === 1 ? "note" : "notes";

    return `${notes.length} ${noteWord}: ${counts.personal || 0} personal, ${counts.work || 0} work, ${counts.study || 0} study.`;
}

// 5. isDuplicate
function isDuplicate(text) {
    let cleanText = text.trim().toLowerCase();

    return notes.some(
        note => note.text.trim().toLowerCase() === cleanText
    );
}

// 6. addNote
function addNote(text, category) {
    const validCategories = ["personal", "work", "study"];

    if (text.length < 1 || text.length > 200) {
        console.log("Invalid note length");
        return false;
    }

    if (isDuplicate(text)) {
        console.log("Duplicate note");
        return false;
    }

    if (!validCategories.includes(category)) {
        console.log("Invalid category");
        return false;
    }

    notes.push({
        id: notes.length + 1,
        text,
        category
    });

    return true;
}

/* TESTS */

// searchNotes
console.log(searchNotes("milk")); // Expected: array with Buy milk and bread
console.log(searchNotes("python")); // Expected: []

// longestNote
console.log(longestNote()); // Expected: longest note object
notes.push({ id: 99, text: "This is the longest note in the collection for testing purposes", category: "study" });
console.log(longestNote()); // Expected: new longest note object

// countByCategory
console.log(countByCategory()); // Expected: { personal: 2, study: 3, work: 1 }
notes.push({ id: 100, text: "Meeting at 2pm", category: "work" });
console.log(countByCategory()); // Expected: work count increases

// getSummary
console.log(getSummary()); // Expected: summary sentence
notes.push({ id: 101, text: "Extra study note", category: "study" });
console.log(getSummary()); // Expected: updated summary sentence

// isDuplicate
console.log(isDuplicate("Call mum")); // Expected: true
console.log(isDuplicate("Go shopping")); // Expected: false

// addNote
console.log(addNote("Prepare presentation", "work")); // Expected: true
console.log(addNote("Call mum", "personal")); // Expected: false (duplicate)
console.log(addNote("", "study")); // Expected: false (invalid length)
console.log(addNote("Test note", "health")); // Expected: false (invalid category)