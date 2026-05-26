import { AppDataSource } from "../data-source"
import { Count } from "@entities/Count"

export const countRepository = AppDataSource.getRepository(Count);

export class CountRepository {

    async getCount(): Promise<Count> {
        const countEntity = await countRepository.findOne({ where: { id: 1 } })
        if(!countEntity) {
            throw new Error("Count entity with id 1 not found")
        }
        return countEntity
    }
}