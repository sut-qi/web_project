import { readFile } from "fs/promises";
import { createServer } from "http";

const server = createServer(async (req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    const htmlFile = await readFile("./hello.html", "utf-8");
    res.end(htmlFile);
  }

  if (req.url === "/mc.png") {
    const img = await readFile("./mc.png");
    res.writeHead(200, { "content-type": "image/png" });
    res.end(img);
  }

  if (req.url === "/hello.js") {
    const jsFile = await readFile("./hello.js", "utf-8");
    res.writeHead(200, { "content-type": "text/javascript" });
    res.end(jsFile);
  }
});
server.listen(3000, "0.0.0.0", () => {
  console.log("3000");
});
