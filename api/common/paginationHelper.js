function PaginationHelper(array, page, limit) {
  if (!page || !limit) return array;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  return array.slice(startIndex, endIndex);
}

module.exports = PaginationHelper;
