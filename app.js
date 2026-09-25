const cards = document.getElementById("cards");
const loader = document.getElementById("loader");

async function fetchData() {

    try {

        loader.style.display = "flex";

        const response = await axios.get("Data.json");

        console.log(response.data);

        ShowData(response.data);

    } catch (error) {

        console.error("Failed to fetch projects:", error);

        cards.innerHTML = `
            <p class="error-message">
                Unable to load projects.
            </p>
        `;

    } finally {

        loader.style.display = "none";

    }
}


function ShowData(apidata) {

    cards.innerHTML = "";

    apidata.forEach((data, index) => {

        cards.innerHTML += `
            <article class="card"
                     style="animation-delay: ${index * 80}ms">

                <h2>${data.title}</h2>

                <p>
                    ${data.description}
                </p>

                <a href="${data.url}"
                   target="_blank"
                   rel="noopener noreferrer">
                    View Project →
                </a>

            </article>
        `;

    });

}


fetchData();