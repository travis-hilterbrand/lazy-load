const generateKey = (name) => {
  return `retry-${name}-refreshed`;
};

export const lazyRetry = function (componentImport, name) {
  return new Promise((resolve, reject) => {
    const hasRefreshed = JSON.parse(
      window.sessionStorage.getItem(generateKey(name)) || "false"
    );
    componentImport()
      .then((component) => {
        window.sessionStorage.setItem(generateKey(name), "false");
        resolve(component);
      })
      .catch((error) => {
        if (!hasRefreshed) {
          window.sessionStorage.setItem(generateKey(name), "true");
          return window.location.reload();
        }
        reject(error);
      });
  });
};
