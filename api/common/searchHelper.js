const searchQueries = (array, query) => {
  const searchQueries = array.map(field => ({
    [field]: { $regex: query, $options: 'i' },
  }));

  const finalQuery = { $or: searchQueries };
  return finalQuery;
};

module.exports = searchQueries;
