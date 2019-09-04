import GenesServices from '../services/GenesServices';
import Util from '../utils/Utils';

const util = new Util();

class GenesController {
  static async getAllGenes(req, res) {
    try {
      const allGenes = await GenesServices.getAllGenes();
      if (allGenes.length > 0) {
        util.setSuccess(200, 'Genes retrieved', allBooks);
      } else {
        util.setSuccess(200, 'Not genes found');
      }

      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addGenes(req, res) {

  }
}
