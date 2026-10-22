const h1 = "hello jsx bhai"
const h2 = <h2 className="heading" id="first"> Hello JSX {h1}</h2>
const root = ReactDOM.createRoot(document.querySelector("#root"))


root.render(h2)
