import database from "../src/models";
import { getPagination, getPagingData } from "../helpers";

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
        },
        include: [{ model: database.Families, attributes: ['name'] }, { model: database.GuardCategories, attributes: ['abbreviation']}]
      });

      return theSpecies;
    } catch (error) {
      throw error;
    }
  }

  static async getLimitedSpecies(page, size) {
    try {
      const { limit, offset } = getPagination(page, size);
      const limitedSpecies = await database.Species.findAndCountAll({
        attributes: [
          "id",
          "name",
          "name_link",
          "guard_category_id",
          "year",
          "gathering_place",
          "year_gathering_place_link"
        ],
        include: [
          {
            model: database.Families,
            attributes: ['name']
          },
          {
            model: database.GuardCategories,
            attributes: ['abbreviation']
          },
        ],
        limit,
        offset
      });
      const pagingData = getPagingData(limitedSpecies, page, limit);

      return pagingData;
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
      return await database.Families.create(newFamily);
    } catch (error) {
      throw error;
    }
  }

  static async getAllFamilies() {
    try {
      return await database.Families.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async getAllGuardCategories() {
    try {
      return await database.GuardCategories.findAll();
    } catch (error) {
      throw error;
    }
  }
}

export default SpeciesServices;
