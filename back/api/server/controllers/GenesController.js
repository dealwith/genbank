import GenesServices from '../services/GenesServices';
import Util from '../utils/Utils';

const util = new Util();

class GenesController {
  static async getAllGenes(req, res) {
    try {
      const allGenes = await GenesServices.getAllGenes();
      if (allGenes.length > 0) {
        util.setSuccess(200, 'Genes retrieved', allGenes);
      } else {
        util.setSuccess(200, 'No genes found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addGenes(req, res) {
    if (!req.body.title || !req.body.genes || !req.body.description) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }

    const newGenes = req.body;

    try {
      const createdGenes = await GenesServices.addGenes(newGenes);
      util.setSuccess(201, 'Genes added!', createdGenes);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updateGenes(req, res) {
    const alteredGenes = req.body;
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res)
    }

    try {
      const updateGenes = await GenesServices.updateGenes(id, alteredGenes);

      if (!updateGenes) {
        util.setError(404, `Connot find book with the id ${id}`);
      } else {
        util.setSuccess(200, 'Book updated', updateGenes);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAGen(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theGen = await GenesServices.getGenes(id);

      if (!theGen) {
        util.setError(404, `Cannot find genes with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found Genes', theGen);
      }

      return util.send(res);

    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteGenes(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const genesToDelete = await GenesServices.deleteGenes(id);

      if (genesToDelete) {
        util.setSuccess(200, 'Genes deleted');
      } else {
        util.setError(404, `Genes with the id ${id} cannot be found`);
      }

      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res)
    }
  }
}

export default GenesController;
