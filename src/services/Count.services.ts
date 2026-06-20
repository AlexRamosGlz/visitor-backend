import {
  ICount,
  ICountCreated,
  ICountError,
  CountServiceError,
} from "@interfaces/count";
import { HTTP_STATUS_CODES } from "@lib/constants/httpStatus";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import { prisma } from "db/prisma";
import { count } from "console";
export class CountServices {

  /**
   * Obtiene el conteo actual de un usuario según su identificador.
   * @param countId Identificador único del conteo.
   * @returns Un objeto con el valor del conteo y el conteo global, o un error de servicio.
   */
  async getCount(countId: string): Promise<ICount | CountServiceError> {
    try {
      const count = await prisma.count
        .findUnique({
          where: { id: countId },
        })
        .catch((error) => {
          throw error;
        });

      if (!count) {
        return {
          count: null,
          globalCount: this.getGlobalCount(),
        };
      }

      return {
        count: count.count,
        globalCount: this.getGlobalCount(),
      };
    } catch (error) {
      return new CountServiceError(
        "Error al obtener cuenta",
        this.getCount.name,
        error,
      );
    }
  }

  /**
   * Incrementa en uno el conteo asociado a un identificador y actualiza el conteo global.
   * @param countId Identificador único del conteo a actualizar.
   * @returns El nuevo valor del conteo y el conteo global, o un error de servicio.
   */
  async updateCount(countId: string): Promise<ICount | CountServiceError> {
    try {

        let globalCount = this.updateGlobalCount();

        if (globalCount instanceof CountServiceError) {
            globalCount = 0;
        }

        const count = await prisma.count
        .findUnique({
          where: { id: countId },
        })
        .catch((error) => {
          throw error;
        });

      if (!count || !count.count) {
        return {
          count: null,
          globalCount: globalCount,
        };
      }

      const newCount = await prisma.count.update({
        where: {id: count.id},
        data: {count: (count.count + 1)}
      }).catch((reason) => {
        throw reason;
      })

      return {
        count: newCount.count,
        globalCount: globalCount
      }

    }catch(error) {
      return new CountServiceError(
        "Error al actualizar cuenta",
        this.updateCount.name,
        error,
      );
    }
  }

  /**
   * Crea un nuevo registro de conteo en la base de datos con valor inicial 1.
   * @returns El identificador del conteo creado, o un error de servicio.
   */
  async createCount(): Promise<{countId: string}| CountServiceError> {
    try {
      const newCount = await prisma.count
        .create({
          data: { id: uuidv4(), count: 1 },
        })
        .catch((reason) => {
          throw reason;
        })
        .finally(() => {
          prisma.$disconnect();
        });

      return {countId: newCount.id};
    } catch (error) {
      return new CountServiceError(
        "Error al crear una Count nueva",
        this.createCount.name,
        error,
      );
    }
  }

  /**
   * Lee el valor actual del conteo global desde el archivo local.
   * @returns El conteo global actual como número.
   */
  private getGlobalCount(): number {
    return Number(fs.readFileSync("count.txt"));
  }

  /**
   * Incrementa el conteo global y guarda el nuevo valor en el archivo local.
   * @returns El nuevo valor del conteo global, o un error de servicio si falla la escritura.
   */
  private updateGlobalCount(): CountServiceError | number {
    try {
        const newCount = this.getGlobalCount() + 1
      fs.writeFileSync("count.txt", newCount.toString());

      return newCount;
    } catch (error) {
      return new CountServiceError(
        "Error al actualizar la cuenta",
        this.updateGlobalCount.name,
        error,
      );
    }
  }
}

export const countService = new CountServices();
