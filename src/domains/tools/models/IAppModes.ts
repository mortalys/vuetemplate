enum envModes
{
  DEV,
  PROD
}

interface IAppModes
{
  ONPREM: envModes;
  SAS: envModes;
}

export { envModes,
         IAppModes
        }
