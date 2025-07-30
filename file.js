import { readFile } from "fs/promises";
import { createServer } from "http";

const server = createServer(async (req, res) => {
  //   HTML Example
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    const htmlFile = await readFile("./hello.html", "utf-8");
    res.end(htmlFile);
  }

  //   JSON Example
  if (req.url === "/json") {
    res.writeHead(200, { "content-type": "application/json" });
    const jsonFile = await readFile("./data.json", "utf-8");
    res.end(jsonFile);
  }

  //   Text Example
  if (req.url === "/text") {
    res.writeHead(200, { "content-type": "text/plain" });
    const textFile = await readFile("./hello.txt", "utf-8");
    res.end(textFile);
  }
});
server.listen(3000, "47.94.211.51", () => {
  console.log("Listen on 47.94.211.51:3000");
});
