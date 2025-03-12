#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import * as https from 'https';

const server = new McpServer({
  name: "kanye-quotes",
  version: "1.0.0",
});

// fecthKanyeQuote function
async function fetchKanyeQuote() {
  return new Promise((resolve) => {
    https.get('https://api.kanye.rest', (res) => {
      let data = '';

      // A chunk of data has been received
      res.on('data', (chunk) => {
        data += chunk;
      });

      // The whole response has been received
      res.on('end', () => {
        try {
          const parsedData = JSON.parse(data);
          resolve(parsedData.quote);
        } catch (e) {
          console.error("Error parsing response:", e);
          resolve("Failed to parse Kanye quote response");
        }
      });
    }).on('error', (err) => {
      console.error("Error fetching quote:", err);
      resolve("Failed to fetch a Kanye quote :(");
    });
  });
}


server.tool(
  "get-random-quote",
  "Get a random Kanye West Quote",
  {},
  async (_args) => {
    const quote = await fetchKanyeQuote();
    return {
      content: [
        {
          type: "text",
          text: String(quote),
        },
      ],
    };
  }
);

// Main function to start the server
async function main() {
  try {
    // Create and connect the transport
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("Kanye Quotes MCP Server running on stdio");
  } catch(error) {
    console.error("Error starting server:", error);
    process.exit(1)
  }
}

main();
