export const setLocalStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

export const getLocalStorage = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.log(error);
  }
};

export const removeLocalStorage = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};

export const debounce = function (func, ms) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), ms);
  };
};

export const createIntersectionObserve = (
  htmlElement,
  animationClass
) => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  };
  const callback = function (entries) {
    for (const entry of entries) {
      const element = entry.target;
      if (!entry.isIntersecting) return;
      else
        !element.classList.contains(animationClass) &&
          element.classList.add(animationClass);
    }
  };

  const observer = new IntersectionObserver(callback, options);
  const element = document.getElementById(htmlElement);
  observer.observe(element);
  return observer;
};
export const addAnimation = (listId, listAnimation) => {
  const listObserse = [];
  for (let i = 0; i < listId.length; i++) {
    const temp = createIntersectionObserve(listId.at(i), listAnimation.at(i));
    listObserse.push(temp);
  }
  return listObserse;
};

export const truncatedWalletAddress = (address) => {
  try {
    const last4Chars = address.slice(-4);
    return `0x...${last4Chars}`;
  } catch (error) {
    console.log(error);
    return`0x...`
  }
}

export const scrollToTop = () => {
  document.documentElement.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
});
}