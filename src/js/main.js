document.addEventListener('DOMContentLoaded', () => {
  const portfolioFilter = document.querySelector('.portfolio-filter');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  let currentFilter = 'featured';

  portfolioFilter.addEventListener('click', e => {

    const target = e.target;

    //Check if filter button was pressed
    if (target.classList.contains('portfolio-filter__btn')) {

      const selectedFilter = target.id;
      const currentFilterBtn = document.querySelector('.current');

      //Check selected filter is not the current filter
      if (selectedFilter !== currentFilter) {

        //Remove styling for previously selected filter button
        currentFilterBtn.classList.remove('current');

        //Add styling for currently selected filter button
        target.classList.add('current');

        //Show/hide portfolio items
        portfolioItems.forEach(item => {
          if (item.classList.contains(selectedFilter)) {
            item.classList.add('show-item')
          } else {
            item.classList.remove('show-item');
          }
        });

        //Update filter
        currentFilter = selectedFilter;
      }
    }
  });
});
