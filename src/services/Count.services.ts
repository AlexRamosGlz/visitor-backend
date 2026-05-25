import { ICount } from "@interfaces/count";
import { AppDataSource } from "../data-source"
import { Count } from "@entities/Count"

export class CountServices {

    private respository = AppDataSource.getRepository(Count)
    async getCount(): Promise<ICount> {
        return this.respository.find({ where: { id: 1 } })
    }
}