// Create an IntersectionObserver
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
      else{
        entry.target.classList.remove('show');
        
      }
    });
  });
  
  // Select and observe elements with the class 'hidden'
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => {
    observer.observe(el);
  });
  