import { AppDataSource } from "../data-source"
import { Count } from "@entities/Count"

export const countRepository = AppDataSource.getRepository(Count);

export class CountRepository {

    async getCount(): Promise<Count> {
        return countRepository.findOne({ where: { id: 1 } })
    }
}