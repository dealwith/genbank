import database from "../src/models";

class SpeciesServices {
  static async getAllSpecies() {
    try {
      return await database.Species.findAll();
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

  static async getMinSpecies() {
    try {
      return await database.Species.findAll({
        attributes: [
          "id",
          "name",
          "name_link",
          "family_id",
          "guard_category_id",
          "year",
          "gathering_place",
          "year_gathering_place_link"
        ],
        include: [
          database.Family
        ]
      });
      // return await database.Family.findAll({
      //   include: [
      //       {
      //       model: database.Species,
      //       attributes: [
      //         "id",
      //         "name",
      //         "name_link",
      //         "family_id",
      //         "guard_category_id",
      //         "year",
      //         "gathering_place",
      //         "year_gathering_place_link"
      //       ],
      //       required: true
      //     }
      //   ]
      // });
    } catch (error) {
      throw error;
    }
  }

  static async addSpecies(newSpecies) {
    try {
      return await database.Species.create(newSpecies);
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
        return deletedGen;
      }

      return null;
    } catch (error) {
      throw error;
    }
  }

  static async addFamily(newFamily) {
    try {
      return await database.Family.create(newFamily);
    } catch (error) {
      throw error;
    }
  }

  static async getAllFamilies() {
    try {
      return await database.Family.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async getAllGuardCategories() {
    try {
      return await database.GuardCategory.findAll();
    } catch (error) {
      throw error;
    }
  }
}

export default SpeciesServices;
