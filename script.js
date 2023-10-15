const dropdowns = document.querySelectorAll('.dropdown')
const dropdownLinks = document.querySelectorAll('.dropdown1')

    dropdowns.forEach((dropdown, index) => {
      dropdown.addEventListener('click', (event) => {

        dropdowns.forEach(item => {
          item.classList.remove('active');
        });

        dropdown.classList.toggle('active');

        // Close all dropdowns
        dropdownLinks.forEach(link => {
          link.style.display = 'none';
          link.classList.remove('dropdown1-active');
        });

        // Toggle the clicked dropdown
        dropdownLinks[index].classList.toggle('dropdown1-active');

        if (dropdownLinks[index].classList.contains("dropdown1-active")) {
          dropdownLinks[index].style.display = "block";
        } else {
          dropdownLinks[index].style.display = "none";
        }

        event.stopPropagation();
      })
    })
 
    document.body.addEventListener('click', () => {
      dropdownLinks.forEach(link => {
        link.style.display = 'none';
        link.classList.remove('dropdown1-active');
      });
    });







