import { toJSON } from "./toJSON";

function run() {
    let css = `@media (max-width: 800px) {
  #main #comments {
    margin: 0px;
    width: auto;
    background: red;
  }
  #main #buttons {
    padding: 5px 10px;
    color: blue;
  }
}
.test {
    padding: 5px;
}
#main #content {
  margin: 0 7.6%;
  width: auto;
}
#nav-below {
  border-bottom: 1px solid #ddd;
  margin-bottom: 1.625em;
  background-image: url(http://www.example.com/images/im.jpg);
}
@media (max-width: 800px) {
    body {
        padding: 20px;
    }
}
.test {
    border: 1px solid black;
}
`
    return toJSON(css);
}
debugger;
// run()
console.log(JSON.stringify(run(), null, "\t"));
