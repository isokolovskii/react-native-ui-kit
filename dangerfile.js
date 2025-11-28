// eslint-disable-next-line import-x/no-nodejs-modules
import path from 'path'

import { dangerReassure } from 'reassure'

dangerReassure({ inputFilePath: path.join(__dirname, './.reassure/output.md') })
