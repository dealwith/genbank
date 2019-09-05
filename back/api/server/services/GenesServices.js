import database from '../src/models';

class GenesService {
  static async getAllGenes() {
    try {
      return await database.Genes.findAll();
    } catch (error) {
      throw error
    }
  }

  static async addGenes(newGenes) {
    try {
      return await database.Genes.create(newGenes);
    } catch (error) {
      throw error;
    } 
  }

  static async updateGenes(id, updateGenes) {
    try {
      const genesToUpdate = await database.Genes.findOne({
        where: {
          id: Number(id)
        }
      });

      if (genesToUpdate) {
        await database.Genes.update(updateGenes, {
          where: {
            id: Number(id)
          }
        });

        return updateGenes;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getGenes(id) {
    try {
      const theGen = await database.Genes.findOne({
        where: {
          id: Number(id)
        }
      });

      return theGen;
    } catch (error) {
      throw error;
    }
  }

  static async deleteGenes(id) {
    try {
      const genToDelete = await database.Genes.findOne({
        where: {
          id: Number(id)
        }
      });

      if (genToDelete) {
        const deletedGen = await database.Genes.destroy({
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

export default GenesService;