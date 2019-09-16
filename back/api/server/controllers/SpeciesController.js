import SpeciesServices from '../services/SpeciesServices';
import Util from '../utils/Utils';

const util = Util();

export default class SpeciesController {
  static async getAllSpecies(req, res) {
    try {
      const allSpecies = await SpeciesServices.getAllSpecies();
      if (allSpecies.length > 0) {
        util.setSuccess(200, 'Species retrieved', allSpecies);
      } else {
        util.setSuccess(200, 'No species found');
      }
      return util.send(res)
    } catch (error) {
      util.setError(400, eroor);
      return util.send(res);
    }
  }

  static async addSpecies(req, res) {

    const newSpecies = req.body;

    try {
      const createdSpecies = await SpeciesServices.addSpecies(newSpecies);
      util.
    } catch (error) {
      
    }
  }
}