interface Storage {
  valueKey: string;
}

interface SetStorage extends Storage {
  value: object;
}

export function setStorage(params: SetStorage) {
  return new Promise((resolve) => {
    localStorage.setItem(params.valueKey, JSON.stringify(params.value));
    resolve();
  });
}

export function getStorage(params: Storage) {
  return new Promise((resolve, reject) => {
    const value = localStorage.getItem(params.valueKey);
    try {
      const result = value && JSON.parse(value);
      resolve(result);
    } catch (e) {
      reject(e);
    }
  });
}

export default {
  setStorage,
  getStorage,
}
