function setExperience() {
  const ageDifMs = Date.now() - new Date('08/08/2012').getTime();
  const ageDate = new Date(ageDifMs); // miliseconds from epoch  
  document.getElementById('no-of-years').innerHTML =
    ageDate.getUTCFullYear() - 1970;
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

setExperience();
