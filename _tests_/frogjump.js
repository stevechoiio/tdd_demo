function frogjump(start, end, distance) {
  if (end < start || distance < 0) {
    return undefined;
  }
  return Math.ceil((end - start) / distance);
}
module.exports = frogjump;
