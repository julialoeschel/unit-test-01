function greet(name) {
  if (name === 'Lene') {
    return 'Hello Coach!';
  }

  if (!name) {
    return 'Hello you!';
  }

  return `Hello ${name}`;
}
