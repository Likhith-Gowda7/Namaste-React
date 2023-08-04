const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "children" }, [
    React.createElement("h1", {}, "I am a H1 tag"),
    React.createElement("h2", {}, "I am a H2 tag"),
  ]),
  React.createElement("div", { id: "children1" }, [
    React.createElement("h1", {}, "I am a H1 tag"),
    React.createElement("h2", {}, "I am a H2 tag"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
