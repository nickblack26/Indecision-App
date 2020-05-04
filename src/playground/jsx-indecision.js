{
    /*This is an obect that stores data so we can easily access the elements later */
}
const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: [],
};

{
    /* This function is called when user submits the form. The overview of this function is to put the information provided into an "options" array. */
    /* The function finds the element within the form and checks to see if there was anything written inside of the input. */
    /* If there was nothing written inside of the input when the form was submitted then nothing will happpen. */
    /* If something was submitted then it push that option to the array for it be accessed later.  */
}
const onFormSubmit = (e) => {
    {
        /* This prevents the page from reloading when the user submits the form. */
    }
    e.preventDefault();

    {
        /*"e.target" is the actual form element */
        /* "elements" accesses the elements within the form */
        /* "option" is telling JSX to find the element with then name "option" so it can access it's data */
        /* "value" is the actual element input that was written when the user pressed the "add option" button */
    }

    const option = e.target.elements.option.value;

    {
        /* this is checking to see that there was something written inside of the "option" input */
        /* If nothing was written inside of the element then this fuction will do nothing. */
    }
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
    }
    render();
};

{
    /* This wipes the options array */
}
const removeAll = () => {
    {
        /* this is looking at the object "app" and resetting it's values to a blank array. */
    }
    app.options = [];
    render();
};

/* this functions purpose is to choose a number between 0 and however many "option" are submitted. */
/* If there were 4 options subbmited then it will choose a number between 0 and 3. 0 and 3 are included. */
const onMakeDecision = () => {
    {
        /*Math.floor() rounds down numbers. Math.random() is choosing a random number between 0 and 1.  */
        /* "* app.options.length" is telling Math.random() to choose a number between 0 and however many items are in the array. */
    }
    const randomNum = Math.floor(Math.random() * app.options.length);
    {
        /* this is looking at the array and grabbing the specific element that the random number generator chose. */
    }
    const option = app.options[randomNum];
    {
        /* This is printing that item within the array */
    }
    alert(option);
};

{
    /* This is looking into the file index.html and lookking for the ID "app" so we can send data to that index file to be rendered to the screen.*/
}
const appRoot = document.getElementById("app");

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>
                {app.options.length > 0
                    ? "Here are your options"
                    : "No options"}
            </p>
            <button
                disabled={app.options.length === 0}
                onClick={onMakeDecision}
            >
                What should I do?
            </button>

            <button onClick={removeAll}>Remove All</button>

            <ol>
                {app.options.map((option) => (
                    <li key={option}>{option}</li>
                ))}
            </ol>

            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

render();
