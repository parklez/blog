const userModel = require('../../models/user');

const get = async (req, res) => {
  try {
    const game = req.query.game;
    const rank = req.query.rank;

    const query = {game: game}
    // Only adds to query if rank is not undefined, empty string or `Any Rank`
    if (rank && rank.trim() !== '' && rank !== 'Any Rank') {
      query.rank = rank;
    }

    const players = await userModel.find(query);
    return res.status(200).json(players);
  } catch (error) {
    return res.status(500).json({
      error,
    });
  }
};

module.exports = get;