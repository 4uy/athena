import { WebSocketServer, WebSocketClient } from "https://deno.land/x/websocket/mod.ts";

const wss = new WebSocketServer(1337);

wss.on("connection", (ws: WebSocketClient) => {
  console.log("New connection.");
});
