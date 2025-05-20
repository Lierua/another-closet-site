document.addEventListener("DOMContentLoaded", async () => {
  const area = new URLSearchParams(window.location.search).get("area");

  let url = "https://hrxhpqduitxprhjkzzfc.supabase.co/rest/v1/clothing";
  if (area) {
    url += `?area=eq.${area}`;
  }

  const key =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhyeGhwcWR1aXR4cHJoamt6emZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyMDk1NTAsImV4cCI6MjA2Mjc4NTU1MH0.xI1Li8DVzlUoZilPzFkc8fNfs8tw252yEGNHv-xM7nc";

  try {
    const response = await fetch(url, {
      headers: {
        apikey: key,
      },
    });

    const data = await response.json();
    console.log("Fetched clothing:", data);

    const container = document.getElementById("clothing-list");
  
    container.innerHTML = data
      .map((item) => {
        return `<div class="frame">
          <div class="overflow">
            ${
              item.avaliable
                ? ""
                : `<div class="black">
                    <p class="udlant">Udlånt</p>
                   </div>`
            }
            <a href="/products/${item.slug}">
              <img class="img" src="${item.images[0]}" alt="tøj fra Another Closet" />
            </a>
          </div>
          <a href="/products/${item.slug}">
            <div class="info">
              <h2 class="name">${item.name}</h2>
              <p>Størrelse: ${item.size}</p>
              <p>Brand: ${item.brand}</p>
            </div>
          </a>
          <p class="area">
            Lokation: <a class="color" href="/areas/${item.areaslug}">${item.area}</a>
          </p>
        </div>`;
      })
      .join("");
  } catch (err) {
    console.error("Fejl ved hentning af data:", err);
  }
});

let isCooldown = false;

function toggleBox() {
  if (isCooldown) return;

  const box = document.getElementById("myBox");
  box.classList.toggle("open");

  isCooldown = true;
  setTimeout(() => {
    isCooldown = false;
  }, 500); // 1000ms = 1 second
}