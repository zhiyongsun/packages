let hidden, state, visibilityChange;
if (typeof document.hidden !== "undefined") {
  hidden = "hidden";
  visibilityChange = "visibilitychange";
  state = "visibilityState";
} else if (typeof (document as any).mozHidden !== "undefined") {
  hidden = "mozHidden";
  visibilityChange = "mozvisibilitychange";
  state = "mozVisibilityState";
} else if (typeof (document as any).msHidden !== "undefined") {
  hidden = "msHidden";
  visibilityChange = "msvisibilitychange";
  state = "msVisibilityState";
} else if (typeof (document as any).webkitHidden !== "undefined") {
  hidden = "webkitHidden";
  visibilityChange = "webkitvisibilitychange";
  state = "webkitVisibilityState";
}

export const pageVisible = {
  hidden,
  visibilityChange
};


export default {
  pageVisible,
}
