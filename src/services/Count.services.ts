import { ICount, ICountError } from "@interfaces/count";
import { AppDataSource } from "../data-source"
import { HTTP_STATUS_CODES } from "@lib/constants/httpStatus"
import { Count } from "@entities/Count"
import fs from 'fs'
import crypto from 'crypto';
export class CountServices {

    private respository = AppDataSource.getRepository(Count)
    async getCount(ipAddress: string): Promise<ICount | ICountError> {
        const countEntity = await this.respository.findOneBy({ ipAddress: ipAddress })

        if(!countEntity) {
            return {
                message: "Count not found",
                code: HTTP_STATUS_CODES.NOT_FOUND
            }
        }

        return {
            id: countEntity.id,
            count: countEntity.count
        }
    }

    async updateCount(ipAddress: string): Promise<ICount | ICountError> {
        const countEntity = await this.respository.findOneBy({ ipAddress: ipAddress})
        fs.writeFileSync('count.txt', this.getGlobalCount.toString())

        if(!countEntity) {
            return {
                message: "Count not found",
                code: HTTP_STATUS_CODES.NOT_FOUND
            }
        }

        countEntity.count = countEntity.count + 1;
        await this.respository.save(countEntity)
        return {
            id: countEntity.id,
            count: countEntity.count
        }
    }

    private getGlobalCount(): number {
        return Number(fs.readFileSync('count.txt'));
    }
}

export default new CountServices()