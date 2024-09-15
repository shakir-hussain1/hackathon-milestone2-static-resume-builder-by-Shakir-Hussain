#! /usr/bin/env
const toggleButton=document.getElementById('toggle-button') as HTMLButtonElement;
const skillsDiv=document.getElementById('skills') as HTMLDivElement;

if(toggleButton && skillsDiv){
  toggleButton.addEventListener('click', () => {
    if (skillsDiv.style.display === 'none'){
      skillsDiv.style.display = 'block';
      toggleButton.value="Hide Skills";
    }else{
      skillsDiv.style.display='none';
      toggleButton.value="Show Skills";
    }
  });
}
else{
  console.log("Required element not found in the DOM");
}