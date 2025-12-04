export function cx(styles, moduleClasslist, globalClasslist) {
  let mc = moduleClasslist
    .trim()
    .split(/\s+/)
    .map((i) => styles[i])
    .filter(Boolean)
    .join(" ");

  let gc = globalClasslist.trim();

  let classlist = mc + " " + gc;
  classlist = classlist.trim();
  return classlist;
}

// figure out optimisations with white space removal!
