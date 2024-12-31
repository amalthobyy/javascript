const prompt=require('prompt-sync')();

function calculateGrade() {
    let writtenTest = parseFloat(prompt("Enter the marks for written test:"));
    let labExams = parseFloat(prompt("Enter the marks for lab exams:"));
    let assignments = parseFloat(prompt("Enter the marks for assignments:"));
  
    let grade = (writtenTest * 0.7) + (labExams * 0.2) + (assignments * 0.1);
    console.log(`Grade of the student is: ${grade}`);
  }
  
  calculateGrade()