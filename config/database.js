'use strict'

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')
/** @type {import('@adonisjs/ignitor/src/Helpers')} */
const Helpers = use('Helpers')


module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Default Connection
  |--------------------------------------------------------------------------
  |
  | Connection defines the default connection settings to be used while
  | interacting with SQL databases.
  |
  */
  connection: Env.get('DB_CONNECTION', 'sqlite'),

  /*
  |--------------------------------------------------------------------------
  | Sqlite
  |--------------------------------------------------------------------------
  |
  | Sqlite is a flat file database and can be a good choice for a development
  | environment.
  |
  | npm i --save sqlite3
  |
  */
  sqlite: {
    client: 'sqlite3',
    connection: {
      filename: Helpers.databasePath(`${Env.get('DB_DATABASE', 'development')}.sqlite`)
    },
    useNullAsDefault: true,
    debug: Env.get('DB_DEBUG', false)
  },

  /*
  |--------------------------------------------------------------------------
  | MySQL
  |--------------------------------------------------------------------------
  |
  | Here we define connection settings for MySQL database.
  |
  | npm i --save mysql
  |
  */
  mysql: {
    client: 'mysql',
    connection: {
      host: Env.get('DB_HOST', 'localhost'),
      port: Env.get('DB_PORT', ''),
      user: Env.get('DB_USER', 'root'),
      password: Env.get('DB_PASSWORD', ''),
      database: Env.get('DB_DATABASE', 'adonis')
    },
    debug: Env.get('DB_DEBUG', false)
  },
  return_merchandise: {
    client: 'mysql',
    connection: {
      host: Env.get('DB_HOST', 'localhost'),
      port: Env.get('DB_PORT', ''),
      user: Env.get('DB_USER', 'root'),
      password: Env.get('DB_PASSWORD', ''), 
      database: Env.get('DB_DATABASE_RS', 'returned_merchandise')
    },
    debug: Env.get('DB_DEBUG', false)
  },
  receiving_new: {
    client: 'mysql',
    connection: {
      host: Env.get('DB_HOST', 'localhost'),
      port: Env.get('DB_PORT', ''),
      user: Env.get('DB_USER', 'root'),
      password: Env.get('DB_PASSWORD', ''),
      database: Env.get('DB_DATABASE_RECEIVING', 'receiving_new_deparo')
    },
    debug: Env.get('DB_DEBUG', false)
  },
  inventory_fix_cp: {
    client: 'mysql',
    connection: {
      host: (Env.get('BRANCH_CODE', 'srsnova') === 'srsn') ? '192.168.0.179' : 'localhost',
      port: Env.get('DB_PORT', ''),
      user: Env.get('DB_USER', 'root'),
      password: Env.get('DB_PASSWORD', ''),
      database: 'inventory_fix_cp'
    },
    debug: Env.get('DB_DEBUG', false)
  },
  transfers_palengke: {
    client: 'mysql',
    connection: {
      host: Env.get('DB_HOST', 'localhost'),
      port: Env.get('DB_PORT', ''),
      user: Env.get('DB_USER', 'root'),
      password: Env.get('DB_PASSWORD', ''),
      database: 'transfers'
    },
    debug: Env.get('DB_DEBUG', false)
  },
  transfers: {
    client: 'mysql',
    connection: {
      host: Env.get('DB_HOST_TRANSFERS', 'localhost'),
      port: Env.get('DB_PORT_TRANSFERS', ''),
      user: Env.get('DB_USER_TRANSFERS', 'root'),
      password: Env.get('DB_PASSWORD_TRANSFERS', ''),
      database: Env.get('DB_DATABASE_TRANSFERS', 'transfers_deparo')
    },
    debug: Env.get('DB_DEBUG', false)
  },
  srs: {
    client: 'mysql',
    connection: {
      host: Env.get('DB_HOST', 'localhost'),
      port: Env.get('DB_PORT', ''),
      user: Env.get('DB_USER', 'root'),
      password: Env.get('DB_PASSWORD', ''),
      database: Env.get('DB_DATABASE_SRS', 'srs')
    },
    debug: Env.get('DB_DEBUG', false)
  },
  srs_56: {
    client: 'mysql',
    connection: {
      host: Env.get('DB_HOST_56', '192.168.0.56'),
      port: Env.get('DB_PORT_56', ''),
      user: Env.get('DB_USER_56', 'root'),
      password: Env.get('DB_PASSWORD_56', ''),
      database: Env.get('DB_DATABASE_56', 'srs')
    },
    debug: Env.get('DB_DEBUG', false)
  },
  srspos: {
    client: 'mssql',
    connection: {
      host: Env.get('DB_HOST_MS', ''),
      port: Env.get('DB_PORT_MS', ''),
      user: Env.get('DB_USER_MS', 'markuser'),
      password: Env.get('DB_PASSWORD_MS', 'tseug'),
      database: Env.get('DB_DATABASE_SRSPOS', 'COMDEPARO_FC')
    },
    debug: Env.get('DB_DEBUG', false),
    requestTimeout: 300000,
    pool: {
        idleTimeoutMillis: 300000,
        max: 100
    }
  },
  srspos_palengke: {
    client: 'mssql',
    connection: {
      host: Env.get('DB_HOST_MS', ''),
      port: Env.get('DB_PORT_MS', ''),
      user: Env.get('DB_USER_MS', 'markuser'),
      password: Env.get('DB_PASSWORD_MS', 'tseug'),
      database: Env.get('DB_DATABASE_SRSPOS_PALENGKE', 'NOVA_JADE2')
    },
    debug: Env.get('DB_DEBUG', false),
    requestTimeout: 300000,
    pool: {
        idleTimeoutMillis: 300000,
        max: 100
    }
  },
  data_center: {
    client: 'mssql',
    connection: {
      host: Env.get('DB_HOST_MS_CENTER', '192.168.0.133'),
      port: Env.get('DB_PORT_MS_CENTER', ''),
      user: Env.get('DB_USER_MS_CENTER', 'markuser'),
      password: Env.get('DB_PASSWORD_MS_CENTER', 'tseug'),
      database: Env.get('DB_DATABASE_SRSPOS_CENTER', 'SRSMNOVA')
    },
    debug: Env.get('DB_DEBUG', false)
  },
  mainnova: {
    client: 'mysql',
    connection: {
      host: '192.168.0.179',
      port: '',
      user: 'root',
      password: 'srsnova',
      database: 'srspos'
    },
    debug: Env.get('DB_DEBUG', true)
  },
  //gulay
  srsnmy: {
    client: 'mysql',
    connection: {
      host: '192.168.0.91',
      port: '',
      user: 'root',
      password: 'srsnova',
      database: 'receiving_new'
    },
    debug: Env.get('DB_DEBUG', false)
  },
  srsnms: {
    client: 'mssql',
    connection: {
      host: '192.168.0.179',
      port: '',
      user: 'markuser',
      password: 'tseug',
      database: 'srspos'
    },
    debug: Env.get('DB_DEBUG', false)
  },

  srstmy: {
    client: 'mysql',
    connection: {
      host: '192.168.103.100',
      port: '',
      user: 'root',
      password: 'srsnova',
      database: 'receiving_new'
    }
  },
  srstms: {
    client: 'mssql',
    connection: {
      host: '192.168.103.100',
      port: '',
      user: 'markuser',
      password: 'tseug',
      database: 'srpos'
    }
  },
  srsmonmy: {
    client: 'mysql',
    connection: {
      host: '192.168.123.100',
      port: '',
      user: 'root',
      password: 'srsnova',
      database: 'receiving_new'
    }
  },
  srsmonms: {
    client: 'mssql',
    connection: {
      host: '192.168.123.100',
      port: '',
      user: 'markuser',
      password: 'tseug',
      database: 'srsmontb'
    }
  },
  srsbgbmy: {
    client: 'mysql',
    connection: {
      host: '192.168.121.100',
      port: '',
      user: 'root',
      password: 'srsnova',
      database: 'receiving_new'
    }
  },
  srsbgbms: {
    client: 'mssql',
    connection: {
      host: '192.168.121.100',
      port: '', 
      user: 'markuser',
      password: 'tseug',
      database: 'srsbag'
    }
  },
  srsalmy: {
    client: 'mysql',
    connection: {
      host: '192.168.20.100',
      port: '',
      user: 'root',
      password: 'srsnova',
      database: 'receiving_new'
    }
  },
  srsalms: {
    client: 'mssql',
    connection: {
      host: '192.168.20.100',
      port: '', 
      user: 'markuser',
      password: 'tseug',
      database: 'SRSALAM'
    }
  },
  srsant1my: {
    client: 'mysql',
    connection: {
      host: '192.168.110.100',
      port: '',
      user: 'root',
      password: 'srsnova',
      database: 'receiving_new'
    }
  },
  srsant1myms: {
    client: 'mssql',
    connection: {
      host: '192.168.110.100',
      port: '', 
      user: 'markuser',
      password: 'tseug',
      database: 'SRSANT1GF'
    }
  },
  srsant2my: {
    client: 'mysql',
    connection: {
      host: '192.168.11.100',
      port: '',
      user: 'root',
      password: 'srsnova',
      database: 'receiving_new'
    }
  },
  srsant2ms: {
    client: 'mssql',
    connection: {
      host: '192.168.11.100',
      port: '', 
      user: 'markuser',
      password: 'tseug',
      database: 'SRSMANT2EM'
    }
  },
  srsbslmy: {
    client: 'mysql',
    connection: {
      host: '192.168.113.100',
      port: '',
      user: 'root',
      password: 'srsnova',
      database: 'receiving_new'
    }
  },
  srsbslms: {
    client: 'mssql',
    connection: {
      host: '192.168.113.100',
      port: '', 
      user: 'markuser',
      password: 'tseug',
      database: 'SRSBSL'
    }
  },
  srscainmy: {
    client: 'mysql',
    connection: {
      host: '192.168.112.100',
      port: '',
      user: 'root',
      password: 'srsnova',
      database: 'receiving_new'
    }
  },
  srscainms: {
    client: 'mssql',
    connection: {
      host: '192.168.112.100',
      port: '', 
      user: 'markuser',
      password: 'tseug',
      database: 'SRSMCAINTA'
    }
  },
  srscain2my: {
    client: 'mysql',
    connection: {
      host: '192.168.0.148',
      port: '',
      user: 'root',
      password: '',
      database: 'srs_new_receiving_cainta2'
    }
  },
  srscain2my2: {
    client: 'mysql',
    connection: {
      host: '192.168.0.148',
      port: '',
      user: 'root',
      password: '',
      database: 'srs_new_receiving_cainta2'
    }
  },
  srscain2ms: {
    client: 'mssql',
    connection: {
      host: '192.168.18.100',
      port: '', 
      user: 'markuser',
      password: 'tseug',
      database: 'srscainta2'
    }
  },
  srscmy: {
    client: 'mysql',
    connection: {
      host: '192.168.106.100',
      port: '',
      user: 'root',
      password: 'srsnova',
      database: 'receiving_new'
    }
  },
  srscms: {
    client: 'mssql',
    connection: {
      host: '192.168.106.100',
      port: '', 
      user: 'markuser',
      password: 'tseug',
      database: 'SRCAMA'
    }
  },
  srscommy: {
    client: 'mysql',
    connection: {
      host: '192.168.117.100',
      port: '',
      user: 'root',
      password: 'srsnova',
      database: 'receiving_new'
    }
  },
  srscomms: {
    client: 'mssql',
    connection: {
      host: '192.168.117.100',
      port: '', 
      user: 'markuser',
      password: 'tseug',
      database: 'skum'
    }
  },
  srsgmy: {
    client: 'mysql',
    connection: {
      host: '192.168.104.100',
      port: '',
      user: 'root',
      password: 'srsnova',
      database: 'receiving_new'
    }
  },
  srsgms: {
    client: 'mssql',
    connection: {
      host: '192.168.104.100',
      port: '', 
      user: 'markuser',
      password: 'tseug',
      database: 'srgala'
    }
  },
  srsgvmy: {
    client: 'mysql',
    connection: {
      host: '192.168.102.100',
      port: '',
      user: 'root',
      password: 'srsnova',
      database: 'receiving_new'
    }
  },
  srsgvms: {
    client: 'mssql',
    connection: {
      host: '192.168.102.100',
      port: '', 
      user: 'markuser',
      password: 'tseug',
      database: 'SRSMUZ'
    }
  },
  srimy: {
    client: 'mysql',
    connection: {
      host: '192.168.108.100',
      port: '',
      user: 'root',
      password: 'srsnova',
      database: 'receiving_new'
    }
  },
  srims: {
    client: 'mssql',
    connection: {
      host: '192.168.108.100',
      port: '', 
      user: 'markuser',
      password: 'tseug',
      database: 'srimu'
    }
  },
  srsmrmy: {
    client: 'mysql',
    connection: {
      host: '192.168.101.100',
      port: '',
      user: 'root',
      password: 'srsnova',
      database: 'receiving_new'
    }
  },
  srsmrms: {
    client: 'mssql',
    connection: {
      host: '192.168.101.100',
      port: '', 
      user: 'markuser',
      password: 'tseug',
      database: 'srpos'
    }
  },
  srsmolmy: {
    client: 'mysql',
    connection: {
      host: '192.168.122.100',
      port: '',
      user: 'root',
      password: 'srsnova',
      database: 'receiving_new'
    }
  },
  srsmolms: {
    client: 'mssql',
    connection: {
      host: '192.168.122.100',
      port: '', 
      user: 'markuser',
      password: 'tseug',
      database: 'SRSMOL'
    }
  },
  srsnavmy: {
    client: 'mysql',
    connection: {
      host: '192.168.107.100',
      port: '',
      user: 'root',
      password: 'srsnova',
      database: 'receiving_new'
    }
  },
  srsnavms: {
    client: 'mssql',
    connection: {
      host: '192.168.107.100',
      port: '', 
      user: 'markuser',
      password: 'tseug',
      database: 'srnav'
    }
  },
  srspatmy: {
    client: 'mysql',
    connection: {
      host: '192.168.116.100',
      port: '',
      user: 'root',
      password: 'srsnova',
      database: 'receiving_new'
    }
  },
  srspatms: {
    client: 'mssql',
    connection: {
      host: '192.168.116.100',
      port: '', 
      user: 'markuser',
      password: 'tseug',
      database: 'SRSPAT'
    }
  },
  srspunmy: {
    client: 'mysql',
    connection: {
      host: '192.168.115.100',
      port: '',
      user: 'root',
      password: 'srsnova',
      database: 'receiving_new'
    }
  },
  srspunms: {
    client: 'mssql',
    connection: {
      host: '192.168.115.100',
      port: '', 
      user: 'markuser',
      password: 'tseug',
      database: 'SRSPUN'
    }
  },
  srsmmy: {
    client: 'mysql',
    connection: {
      host: '192.168.101.100',
      port: '',
      user: 'root',
      password: 'srsnova',
      database: 'receiving_new'
    }
  },
  srsmms: {
    client: 'mssql',
    connection: {
      host: '192.168.101.100',
      port: '', 
      user: 'markuser',
      password: 'tseug',
      database: 'srpos'
    }
  },
  srsmrmy: {
    client: 'mysql',
    connection: {
      host: '192.168.101.100',
      port: '',
      user: 'root',
      password: 'srsnova',
      database: 'receiving_new'
    }
  },
  srsmrms: {
    client: 'mssql',
    connection: {
      host: '192.168.101.100',
      port: '', 
      user: 'markuser',
      password: 'tseug',
      database: 'RestoBMALA'
    }
  },
  srssanpmy: {
    client: 'mysql',
    connection: {
      host: '192.168.119.100',
      port: '',
      user: 'root',
      password: 'srsnova',
      database: 'receiving_new'
    }
  },
  srssanpms: {
    client: 'mssql',
    connection: {
      host: '192.168.119.100',
      port: '', 
      user: 'markuser',
      password: 'tseug',
      database: 'srspedro'
    }
  },
  srstumy: {
    client: 'mysql',
    connection: {
      host: '192.168.32.100',
      port: '',
      user: 'root',
      password: 'srsnova',
      database: 'receiving_new'
    }
  },
  srstums: {
    client: 'mssql',
    connection: {
      host: '192.168.32.100',
      port: '', 
      user: 'markuser',
      password: 'tseug',
      database: 'SRSPINAS'
    }
  },
  srsvalmy: {
    client: 'mysql',
    connection: {
      host: '192.168.114.100',
      port: '',
      user: 'root',
      password: 'srsnova',
      database: 'receiving_new'
    }
  },
  srsvalms: {
    client: 'mssql',
    connection: {
      host: '192.168.114.100',
      port: '', 
      user: 'markuser',
      password: 'tseug',
      database: 'srsval'
    }
  },
  srsmanmy: {
    client: 'mysql',
    connection: {
      host: '192.168.124.100',
      port: '',
      user: 'root',
      password: 'srsnova',
      database: 'receiving_new'
    }
  },
  srsmanms: {
    client: 'mssql',
    connection: {
      host: '192.168.124.100',
      port: '', 
      user: 'markuser',
      password: 'tseug',
      database: 'srsbmanga'
    }
  },
  srspalaymy: {
    client: 'mysql',
    connection: {
      host: '192.168.5.4',
      port: '',
      user: 'root',
      password: 'srsnova',
      database: 'receiving_new'
    }
  },
  srspalayms: {
    client: 'mssql',
    connection: {
      host: '192.168.5.4',
      port: '', 
      user: 'markuser',
      password: 'tseug',
      database: 'SBPALAY'
    }
  },
  srsisidromy: {
    client: 'mysql',
    connection: {
      host: '192.168.5.5',
      port: '',
      user: 'root',
      password: 'srsnova',
      database: 'receiving_new'
    }
  },
  srsisidroms: {
    client: 'mssql',
    connection: {
      host: '192.168.5.5',
      port: '', 
      user: 'markuser',
      password: 'tseug',
      database: 'SBISIDRO'
    }
  },
  srsant1my: {
    client: 'mysql',
    connection: {
      host: '192.168.110.100',
      port: '',
      user: 'root',
      password: 'srsnova',
      database: 'receiving_new'
    }
  },
  srsant1ms: {
    client: 'mssql',
    connection: {
      host: '192.168.110.100',
      port: '', 
      user: 'markuser',
      password: 'tseug',
      database: 'srsant1gf'
    }
  },
  srsagoramy: {
    client: 'mysql',
    connection: {
      host: '192.168.127.100',
      port: '',
      user: 'root',
      password: 'srsnova',
      database: 'receiving_new'
    }
  },
  srsagorams: {
    client: 'mssql',
    connection: {
      host: '192.168.127.100',
      port: '', 
      user: 'markuser',
      password: 'tseug',
      database: 'sbagora'
    }
  },
  srsstarosamy: {
    client: 'mysql',
    connection: {
      host: '192.168.28.100',
      port: '',
      user: 'root',
      password: 'srsnova',
      database: 'receiving_new'
    }
  },
  srsstarosams: {
    client: 'mssql',
    connection: {
      host: '192.168.28.100',
      port: '', 
      user: 'markuser',
      password: 'tseug',
      database: 'SMARILAO2'
    }
  },
  srsmarmy: {
    client: 'mysql',
    connection: {
      host: '192.168.29.100',
      port: '',
      user: 'root',
      password: 'srsnova',
      database: 'receiving_new'
    }
  },
  srsmarms: {
    client: 'mssql',
    connection: {
      host: '192.168.29.100',
      port: '', 
      user: 'markuser',
      password: 'tseug',
      database: 'SBMARILAO'
    }
  },
  
  /*
  |--------------------------------------------------------------------------
  | PostgreSQL
  |--------------------------------------------------------------------------
  |
  | Here we define connection settings for PostgreSQL database.
  |
  | npm i --save pg
  |
  */
  pg: {
    client: 'pg',
    connection: {
      host: Env.get('DB_HOST', 'localhost'),
      port: Env.get('DB_PORT', ''),
      user: Env.get('DB_USER', 'root'),
      password: Env.get('DB_PASSWORD', ''),
      database: Env.get('DB_DATABASE', 'adonis')
    },
    debug: Env.get('DB_DEBUG', false)
  }
}
