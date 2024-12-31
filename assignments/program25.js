var library = [
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];

for (let book of library) {
    if (book.readingStatus) {
        console.log(`Already read '${book.title}' by ${book.author}.`);
    } else {
        console.log(`You still need to read '${book.title}' by ${book.author}.`);
    }
}


 try {
    let my_string = "1234";  // Can replace with other values
    let reversed = my_string.split().reverse().join('');
    console.log(`Reversed string is: ${reversed}`);
  } catch (err) {
    console.log(`Error: ${err.message}`);
  } finally {
    console.log(`Type of my_string is: ${typeof my_string}`);
  }
  

 