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
  if (req.url === "/info") {
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

  if (req.url === "/mc.png") {
    const img = await readFile("./mc.png");
    res.writeHead(200, { "content-type": "image/png" });
    res.end(img);
  }
  if (req.url === "/file.js") {
    const jsFile = await readFile("./file.js", "utf-8");
    res.writeHead(200, { "content-type": "text/javascript" });
    res.end(jsFile);
  }
});
server.listen(3000, "0.0.0.0", () => {
  console.log("3000");
});
