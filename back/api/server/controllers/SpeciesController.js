import SpeciesServices from '../services/SpeciesServices';
import Util from '../utils/Utils';

const util = new Util();

class SpeciesController {
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
      console.log(newSpecies);
      const createdSpecies = await SpeciesServices.addSpecies(newSpecies);
      util.setSuccess(201, 'Species added!', createdSpecies);
      return util.send(res);
    } catch (error) {
      console.log(error)
      util.setError(400, error.message);
      return util.send(res);
    }
  }
}


export default SpeciesController;