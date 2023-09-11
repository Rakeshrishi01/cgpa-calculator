document.addEventListener('DOMContentLoaded', function () { 
  let gpaBtn = document.querySelector('#gpBtn');
  let cgpBtn = document.querySelector('#cgBtn');
  let gpa    = document.querySelector('.gpa-container');
  let cgpa   = document.querySelector('.cgpa-container');
  let see    = document.querySelector('#see-here');

  see.addEventListener('click',()=>{
     const scrollSection = document.getElementById('scrollSection');

     if (scrollSection) {
      const offset = scrollSection.getBoundingClientRect().top + window.scrollY;
     
      window.scrollTo ({
        top: offset,
        behavior: 'smooth'
      });
    }
  });

  gpaBtn.addEventListener('click',()=>{
     if(gpa.style.display === "none" && cgpa.style.display === "none"){
        gpa.style.display = "block";
     } else if (gpa.style.display === "none" && cgpa.style.display === "block") {
        cgpa.style.display = "none";
        gpa.style.display = "block"; 
     } else {
        gpa.style.display = "none";
     }
  });

  cgpBtn.addEventListener('click',()=>{
    if(cgpa.style.display === "none" && gpa.style.display === "none"){
      cgpa.style.display = "block";
    } else if (cgpa.style.display === "none" && gpa.style.display === "block") {
      gpa.style.display = "none"; 
      cgpa.style.display = "block";
    } else {
      cgpa.style.display = "none";
    }
  });

});

document.addEventListener('DOMContentLoaded', function () {
  let btnAdd = document.querySelector('#addBtn');
  let table = document.querySelector('table');

  let gradeInput = document.getElementById('grade');
  let creditInput = document.getElementById('credit');

  let credArr = [];
  let totArr = [];
  let total1 = 0;
  let total2 = 0;

  btnAdd.addEventListener('click', () => {
    let grade = parseFloat(gradeInput.value); 
    let credit = parseFloat(creditInput.value); 

    credArr.push(credit);

    mark = grade * credit; 

    totArr.push(mark);

    let template = `
                  <tr>
                    <td>${grade}</td>
                    <td>${credit}</td>
                    <td>${mark}</td>
                  </tr>
                  `;
    table.innerHTML += template;

    gradeInput.value = '';
    creditInput.value = '';
  });

  // Total cgpa.

  let btnCgp = document.querySelector('#calculateBtn');

  btnCgp.addEventListener('click', () => {
    for (let i = 0; i < credArr.length; i++) {
      total1 += credArr[i];
    }
    for (let i = 0; i < totArr.length; i++) {
      total2 += totArr[i];
    }

    let cgpa = total2 / total1; 

    let temp1 = `
              <tr>
                <td colspan="2">CGPA</td>
                <td>${ cgpa.toFixed(2) }</td>
              </tr>
              `;
    table.innerHTML += temp1;
  });

  let firstSem = document.querySelector('#sem1');
  let secondSem = document.querySelector('#sem2');
  let calBtn = document.querySelector('#calculateCgpa');
  let divtag = document.querySelector('#cgpa-display');

  calBtn.addEventListener('click',()=>{
    sem1 = parseFloat(firstSem.value);
    sem2 = parseFloat(secondSem.value);

    Cgpa = (sem1 + sem2 )/2;

    let temp2 = `<p>CGPA: ${ Cgpa.toFixed(2) } </p>`;
    
    divtag.innerHTML += temp2;

  });   

});

