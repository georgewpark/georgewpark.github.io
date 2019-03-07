document.addEventListener('DOMContentLoaded', () => {

    const portfolioFilter = document.querySelector('.portfolio-filter'),
        portfolioItems = document.querySelectorAll('.portfolio-item');

    let prevFilter = 'featured';

    portfolioFilter.addEventListener('click', e => {

        const target = e.target;

        //Check if filter button was pressed
        if (Array.from(target.classList).includes('portfolio-filter__btn')) {

            const filter = target.textContent.toLowerCase().replace(' ', '-');

            //Remove styling for previously selected filter button
            document.querySelector('.current').classList.remove('current');

            //Add styling for currently selected filter button
            target.classList.add('current');

            //Check new filter is not the current filter
            if (filter !== prevFilter) {

                portfolioItems.forEach(item => {

                    const itemClasses = Array.from(item.classList);

                    if (itemClasses.includes(filter)) {
                        //Show item
                        if (itemClasses.includes('hide-item')) {
                            item.classList.remove('hide-item');
                        }
                    } else {
                        //Hide item
                        item.classList.add('hide-item');
                    }
                });

                //Update filter
                prevFilter = filter;
            }
        }
    });
});
