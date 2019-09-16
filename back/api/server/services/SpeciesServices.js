import database from '../src/models';

class SpeciesServices {
  static async getAllSpecies() {
    try {
      return await database.Species.findAll();
    } catch (error) {
      throw error
    }
  }

  static async addSpecies(newSpecies) {
    try {
      return await database.Species.create(newSpecies);
    } catch (error) {
      throw error;
    } 
  }

  static async getSpecies(id) {
    try {
      const theSpecies = await database.Species.findOne({
        where: {
          id: Number(id)
        }
      });

      return theSpecies;
    } catch (error) {
      throw error;
    }
  }

  static async deleteSpecies(id) {
    try {
      const speciesToDelete = await database.Species.findOne({
        where: {
          id: Number(id)
        }
      });

      if (speciesToDelete) {
        const deletedGen = await database.Species.destroy({
          where: { id: Number(id) }
        });
        return deletedGen
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default SpeciesServices;