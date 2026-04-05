const jobs = document.querySelectorAll(".job");
const reviews = document.querySelectorAll(".review");

jobs.forEach(job => {

    job.addEventListener("click", () => {

        const id = job.dataset.id;

        jobs.forEach(j => j.classList.remove("active"));
        reviews.forEach(r => r.classList.remove("active"));

        job.classList.add("active");

        document
            .querySelector(`.review[data-id="${id}"]`)
            .classList.add("active");

    });

});