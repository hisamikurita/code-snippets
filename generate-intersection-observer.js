export default ({
    targetElement,
    callback,
    rootAttributeName = "data-intersection-root",
    rootMarginAttributeName = "data-intersection-root-margin",
    thresholdAttributeName = "data-intersection-threshold",
    onceAttributeName = "data-intersection-once"
  }) => {
  const data = {
    root: targetElement.getAttribute(rootAttributeName),
    rootMargin: targetElement.getAttribute(rootMarginAttributeName),
    threshold: targetElement.getAttribute(thresholdAttributeName),
    once: targetElement.hasAttribute(onceAttributeName)
  };

  const thresholdParsed =
    data.threshold && data.threshold.startsWith("[")
      ? JSON.parse(data.threshold)
      : +data.threshold;

  const _callback = ([entry], observer) => {
    callback(entry, observer);
    if (data.once && entry.isIntersecting) observer.disconnect();
  };

  const options = {
    root: data.root ? document.querySelector(data.root) : null,
    rootMargin: data.rootMargin || "0px",
    threshold:
      (Array.isArray(thresholdParsed) && thresholdParsed.length) || (thresholdParsed >= 0 && thresholdParsed <= 1)
        ? thresholdParsed
        : 0
  };

  return new IntersectionObserver(_callback, options);
};
