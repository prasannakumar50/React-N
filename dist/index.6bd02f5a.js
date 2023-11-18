/*]
        const heading= React.createElement("h1",{id:"XYZ"},"Hello world from RJs!");


        console.log(heading);
       

        const root=ReactDOM.createRoot(document.getElementById("root"));

        root.render(heading);
*/ const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {}, "Iam h1 tag"),
    React.createElement("h2", {}, "Iam h2 tag")
]));
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
