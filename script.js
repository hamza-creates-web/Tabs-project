// firstly we have to select the 3 categories..
const aboutSection = document.querySelector('.about');
const sectionBtns  = document.querySelectorAll('.tab-btn')
const contentSection = document.querySelectorAll('.content')

// now we have to add the foreach to the about section..
aboutSection.addEventListener('click',function(e)
{
  // console.log(e.target.dataset.id)
  // At here we got the current dataset names..
  const id = e.target.dataset.id;
  if(id)
  {
    sectionBtns.forEach(function(btn)
  {
    btn.classList.remove('active')
    // At this point the active class has been removed from the buttons itself


    // and now add active class to the aboutsection where the evenet e is passing as ana argument
    e.target.classList.add('active') 
  })
  // now we have to add the section and as we have multiple sections so we can iterate it with using the foreach method..
  contentSection.forEach(function(e)
{
  e.classList.remove('active')
})

// now we have to add the dataset id with the class of active..
  const element = document.getElementById(id)
  element.classList.add('active')
  }
})