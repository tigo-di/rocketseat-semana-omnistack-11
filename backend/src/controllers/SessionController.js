const connection = require('../database/connection');

module.exports = {

  async create(request, response) {
    const { id } = request.body;

    const [ong] = await connection('ongs')
      .where({ id })
      .select('name');

    if (!ong) {
      return response.status(400).json({ error: 'No ONG found with this ID' });
    }

    return response.status(200).json(ong);
  }

};
