import { ICount } from "@interfaces/count";
import { AppDataSource } from "../data-source"
import { Count } from "@entities/Count"

export class CountServices {

    private respository = AppDataSource.getRepository(Count)
    async getCount(): Promise<ICount> {
        const countEntity = await this.respository.findOneBy({ id: 1 })

        if(!countEntity) {
            throw new Error("Count not found")
        }

        return {
            id: countEntity.id,
            count: countEntity.count
        }
    }

    async updateCount(id: number = 1,count: number): Promise<ICount> {
        const countEntity = await this.respository.findOneBy({ id: id })

        if(!countEntity) {
            throw new Error("Count not found")
        }

        countEntity.count = count
        await this.respository.save(countEntity)
        return {
            id: countEntity.id,
            count: countEntity.count
        }
    }
}

export default new CountServices()