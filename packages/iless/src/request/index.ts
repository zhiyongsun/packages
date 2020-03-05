/* eslint-disable */
function formatResponse(xhr: any) {
  if(xhr.response && typeof xhr.response === 'object') {
    return xhr.response;
  } else if(xhr.response && typeof xhr.response === 'string') {
    return JSON.parse(xhr.response);
  } else if(xhr.responseText) {
    return JSON.parse(xhr.responseText);
  }
}

const xhr = {
  load(url: string, callback: Function, errorCallback: Function) {
    let response;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    // set responseType after calling open or IE will break.
    try {
      // This crashes on Android WebView prior to KitKat
      xhr.responseType = "json";
    } catch (err) {}
    xhr.send();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if(xhr.status === 200) {
          response = formatResponse(xhr);
          callback(response);
        } else {
          try {
            response = formatResponse(xhr);
            callback(response);
          } catch(err) {
            if(errorCallback) {
              errorCallback(err);
            }
          }
        }
      }
    };
  },
  loadJSON(url: string) {
    return new Promise((resolve, reject) => {
      this.load(url, resolve, reject);
    });
  }
};

export default xhr;
