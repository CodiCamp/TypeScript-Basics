{
  // Object types

  let config: {
    fileName: string;
    path: string;
    version: number;
    getVersion: () => number;
  };

  //Async call and later we assign config

  config = { fileName: 'app.ts', path: '', version: 1, getVersion: () => 1 };
}
