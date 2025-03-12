# Fun MCPs

A collection of fun and useful Model Context Protocol (MCP) servers for AI assistants like Claude.

## What are MCPs?

The Model Context Protocol (MCP) is an open standard that allows AI assistants to interact with external tools and data sources. These servers act as bridges between AI models and the outside world, enabling them to access real-time information and perform useful actions.

## Servers in this Collection

### Kanye West Quotes

Access random Kanye West quotes in your AI conversations.

```json
{
  "kanye": {
    "command": "npx",
    "args": ["-y", "kanye-mcp"]
  }
}
```

_More coming soon..._

## Installation

To use these MCP servers with Claude for Desktop:

1. Open your Claude for Desktop configuration file:
   - **Mac**: `~/Library/Application Support/Claude/claude_desktop_config.json`
   - **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

2. Add the following to your configuration file:
   ```json
   {
     "mcpServers": {
       "kanye": {
         "command": "npx",
         "args": ["-y", "kanye-mcp"]
       }
     }
   }
   ```

3. Restart Claude for Desktop

4. You'll see a hammer icon at the bottom of the input field when tools are available

## Usage

Once installed, you can ask Claude to use these tools:

* "Can you share a Kanye West quote?"
* "What's something interesting Kanye said?"

Claude will call the appropriate tool and display the result.

## Local Development

If you want to contribute or run these servers locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/fun-mcps.git
   cd fun-mcps
   ```

2. Set up the Kanye MCP:
   ```bash
   cd kanye-mcp
   npm install
   ```

3. Build and run:
   ```bash
   npm run build
   node dist/index.js
   ```

4. Test with the MCP inspector:
   ```bash
   npx @modelcontextprotocol/inspector node dist/index.js
   ```

## Contributing

Contributions are welcome! If you have ideas for fun MCP servers, please:

1. Fork the repository
2. Create a new directory for your server
3. Implement your MCP server in TypeScript
4. Add documentation in the README
5. Submit a pull request

## License

MIT

_This project is not affiliated with Claude or Anthropic. MCP servers are independent tools that work with any MCP-compatible client._
