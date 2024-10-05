// function to allow for async functions
function getReadme() {
    return new Promise((resolve, reject) => {
        //put your local README.md here
        fetch('README.md')
            //converts the README into a text string
            .then(response => response.text())
            .then(markdownText => {
                //returns the README string for display
                resolve(markdownText);
            })
            //returns an error if it cannot complete
            .catch(error => reject(error));
        });
    }

// this is just a test function, I use a modified version in my Webpage
// to scrape all of my READMEs in github in order to dynamically create
// my project pages
async function test() {
    console.log('calling');
    try {
        // only important bit, makes sure to get the string for use
        const result = await getReadme();
        console.log(result);
    } catch (error) {
        console.error("Error:", error)
    }
};

test();



// this code is used to output the scraped data onto a webpage


    // nesting asyncs are required
async function main() {
    try {
        //waits to make sure the builder finishes
        await buildPage(id);
    } catch (error) {
        console.error("Error: ".error);
    }
}

//function written to use the scraped data
async function buildPage(id) {
    try {
        // scraps the md file
        const result = await getReadme();
        // sets the parent container
        var line = document.getElementById(id);
        // creates a new div for the content to be inserted into
        var div = document.createElement("DIV");
        // adds the scraped md into the div
        div.innerHTML = result;
        // appends the new div into the parent container
        line.appendChild(div);
    } catch (error) {
        console.error("Error:", error)
    }
};
// runs main
// main();

  
