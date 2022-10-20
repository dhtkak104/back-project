import fs from 'fs';
import appRoot from 'app-root-path';

const accessLogStream = fs.createWriteStream(
    `${appRoot}/log/access.log`,
    { flags: 'a' }
  );

export default accessLogStream;