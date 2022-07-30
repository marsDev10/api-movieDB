let options = {
    rootMargin: '0px',
    threshold: 0.01
}

const callback = (entries) => {

    //console.log(entries);
    entries.forEach((entry) => {

        if(entry.isIntersecting){
            let currentElement = entry.target;
            let image = entry.target.dataset.image;
            entry.target.src = image;
            observer.unobserve(currentElement);
        }
    });
}

let observer = new IntersectionObserver(callback, options);

export const addImage = (image) => observer.observe(image);

