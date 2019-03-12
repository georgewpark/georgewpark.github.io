document.addEventListener('DOMContentLoaded', () => {

    const portfolioFilter = document.querySelector('.portfolio-filter'),
        portfolioItems = document.querySelectorAll('.portfolio-item');

    let prevFilter = 'featured';

    portfolioFilter.addEventListener('click', e => {

        const target = e.target;

        //Check if filter button was pressed
        if (Array.from(target.classList).includes('portfolio-filter__btn')) {

            const filter = target.textContent.toLowerCase().replace(' ', '-');

            //Check new filter is not the current filter
            if (filter !== prevFilter) {

                //Remove styling for previously selected filter button
                document.querySelector('.current').classList.remove('current');

                //Add styling for currently selected filter button
                target.classList.add('current');

                //Show/hide portfolio items
                portfolioItems.forEach(item => {

                    const itemClasses = Array.from(item.classList);

                    //Hide previous portfolio items
                    if (itemClasses.includes('show-item')) {
                        item.classList.remove('show-item');
                    }

                    //Show new portfolio items
                    if (itemClasses.includes(filter)) {
                        setTimeout(() => item.classList.add('show-item'), 10);
                    }
                });

                //Update filter
                prevFilter = filter;
            }
        }
    });
});
