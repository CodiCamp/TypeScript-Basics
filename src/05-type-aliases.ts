{
  type ConfigType = 'production' | 'development' | 'staging';

  let config: ConfigType;

  const loadConfig = (configType: ConfigType): void => {
    config = configType;
  };

  loadConfig('development');
}
