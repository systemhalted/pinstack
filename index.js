// api url
const rss_url =
	"http://127.0.0.1:8080/test/nasa_test.rss";

// Defining async function
async function getapi(url) {
	
	// Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  var data = await response.text();
  var data_xml = new window.DOMParser().parseFromString(data, "text/xml")
  show(data_xml)
	
}
// Calling that async function
getapi(rss_url);

// Function to hide the loader

// Function to define innerHTML for HTML table
function show(data) { 	
  const items = data.querySelectorAll("item");
  console.log(items)

  let rss_feed = "";

  items.forEach(el => {

   rss_feed += `
        <article>
          <img src="${el.querySelector("link").innerHTML}/image/large.png" alt="">
          <h2>
            <a href="${el.querySelector("link").innerHTML}" target="_blank" rel="noopener">
              ${el.querySelector("title").innerHTML}
            </a>
          </h2>
        </article>
      `;

    
  });
  document.body.insertAdjacentHTML("beforeend", rss_feed);
 }
