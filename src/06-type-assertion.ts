{
  type ServerConfig = {
    filename: string;
    path: string;
  };
  const serverConf = {
    filename: 'app.ts',
    path: './dist',
  };
  const stringConfig: string = JSON.stringify(serverConf);
  function getServerConfig(stringConfig: string): string {
    return (JSON.parse(stringConfig) as ServerConfig).filename;
  }
  console.log(getServerConfig(stringConfig));
}
