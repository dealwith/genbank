import SpeciesServices from "../services/SpeciesServices";
import Util from "../utils/Utils";

const util = new Util();

class SpeciesController {
  static async getAllSpecies(req, res) {
    try {
      const allSpecies = await SpeciesServices.getAllSpecies();

      if (allSpecies.length > 0) {
        util.setSuccess(200, "Species retrieved", allSpecies);
      } else {
        util.setSuccess(200, "No species found");
      }

      return util.send(res);
    } catch (error) {
      util.setError(400, eroor);
      return util.send(res);
    }
  }

  static async getMinSpecies(req, res) {
    try {
      const minSpicies = await SpeciesServices.getMinSpecies();

      if (minSpicies.length > 0) {
        util.setSuccess(200, "Minimal visual species retrieved", minSpicies);
      } else {
        util.setSuccess(200, "No species found");
      }

      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      util.send(res);
    }
  }

  static async getTheSpecies(req, res) {
    const { speciesId: id } = req.params;

    if (!Number(id)) {
      util.setError(400, "Please input a valid numeric value");
      return util.send(res);
    }

    try {
      const theSpecies = await SpeciesServices.getSpecies(id);

      if (!theSpecies) {
        util.setSuccess(404, `Cannot find the species with the id ${id}`);
      } else {
        util.setSuccess(200, "Found species", theSpecies);
      }

      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      util.send(res);
    }
  }

  static async addSpecies(req, res) {
    const newSpecies = req.body;

    try {
      const createdSpecies = await SpeciesServices.addSpecies(newSpecies);
      util.setSuccess(201, "Species added!", createdSpecies);

      return util.send(res);
    } catch (error) {
      util.setError(500, error.message);
      return util.send(res);
    }
  }

  static async addFamiliy(req, res) {
    const newFamily = req.body;

    try {
      const createdFamily = await SpeciesServices.addFamily(newFamily);
      util.setSuccess(201, "Family added!", createdFamily);

      return util.send(res);
    } catch (error) {
      util.setError(500, error.message);
      return util.send(res);
    }
  }

  static async getAllFamilies(req, res) {
    try {
      const allFamilies = await SpeciesServices.getAllFamilies();

      if (allFamilies.length > 0) {
        util.setSuccess(200, "Families retrieved", allFamilies);
      } else {
        util.setSuccess(204 , "No species found");
      }

      return util.send(res);
    } catch (error) {
      util.setError(400, eroor);
      return util.send(res);
    }
  }

  static async getAllGuardCategories(req, res) {
    try {
      const allGuardCategories = await SpeciesServices.getAllGuardCategories();

      if (allGuardCategories.length > 0) {
        util.setSuccess(200, "Guard categories retrieved", allGuardCategories);
      } else {
        util.setSuccess(204 , "No categories found");
      }

      return util.send(res);
    } catch (error) {
      util.setError(500, error.message);
      return util.send(res);
    }
  }
}

export default SpeciesController;
