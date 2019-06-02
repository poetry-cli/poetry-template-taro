// eslint-disable-next-line
const ENV = APP_ENV;
export function getEnv() {
  let env = 'production';
  // eslint-disable-next-line
  switch (ENV) {
    case 'production': {
      env = 'production';
      break
    }
    case 'development': {
      env = 'development';
      break
    }
    case 'QA': {
      env = 'QA';
      break
    }
    case 'stage': {
      env = 'stage';
      break
    }
    default: {
      env = 'production';
    }
  }
  return env;
}

export function getOrigin(url = '') {
  // eslint-disable-next-line
  const urlP = /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
  let origin = '';
  if (urlP.test(url)) {
    return ''
  }
  switch (getEnv()) {
    case 'production': {
      origin = '';
      break
    }
    case 'development': {
      origin = '';
      break
    }
    default: {
      origin = '';
    }
  }
  return origin+url;
}

export function getVersion() {
  // eslint-disable-next-line
  return `v${VERSION || '0.0.0'}`
}

console.log(
  // eslint-disable-next-line
  APP_ENV,
  `ENV: ${getEnv()} | `,
  `Origin: ${getOrigin()} |`,
  `Version: ${getVersion()} |`,
)
