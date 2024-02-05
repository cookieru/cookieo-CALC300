const load = function()
{
    const initPerson = personGenerator.getPerson();
    
    console.log(initPerson);

    document.querySelector('#firstNameOutput').textContent = initPerson.firstName;
    document.querySelector('#surnameOutput').textContent = initPerson.surName;
    document.querySelector('#fatherNameOutput').textContent = initPerson.fathername;
    document.querySelector('#genderOutput').textContent = initPerson.gender;
    document.querySelector('#birthYearOutput').textContent = initPerson.birthday;
    document.querySelector('#jobOutput').textContent = initPerson.job;
};

const clear = function()
{
    document.querySelector('#firstNameOutput').textContent = "-";
    document.querySelector('#surnameOutput').textContent = "-"; 
    document.querySelector('#fatherNameOutput').textContent = "-";
    document.querySelector('#genderOutput').textContent = "-";
    document.querySelector('#birthYearOutput').textContent = "-";
    document.querySelector('#jobOutput').textContent = "-";  

    
};

addEventListener("load", load);

document.querySelector("#reloadBtn").addEventListener("click", load);

document.querySelector("#clearBtn").addEventListener("click", clear);
