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

  static async updateBook(id, updateBook) {
    try {
      const bookToUpdate = await database.Book.findOne({
        where: {
          id: Number(id)
        }
      });

      if (bookToUpdate) {
        await database.Genes.update(updateBook, {
          where: {
            id: Number(id)
          }
        });

        return updateBook;
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

      return theGen
    } catch (error) {
      throw error
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
        })
      }

    } catch (error) {
      throw error;
    }
  }
}

export default GenesService;