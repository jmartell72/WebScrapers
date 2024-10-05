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

  
