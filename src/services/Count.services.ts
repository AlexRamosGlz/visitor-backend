import { ICount } from "@interfaces/count";
import { AppDataSource } from "../data-source"
import { Count } from "@entities/Count"
import fs from 'fs'
import crypto from 'crypto';
export class CountServices {

    private respository = AppDataSource.getRepository(Count)
    async getCount(id: number = 1): Promise<ICount> {
        const countEntity = await this.respository.findOneBy({ id: 1 })

        if(!countEntity) {
            throw new Error("Count entity with id " + id + " not found")
        }

        return {
            id: countEntity.id,
            count: countEntity.count
        }
    }

    async updateCount(id: number = 1): Promise<ICount> {
        const countEntity = await this.respository.findOneBy({ id: id })
        fs.writeFileSync('count.txt', this.getGlobalCount.toString())

        if(!countEntity) {
            throw new Error("Count entity with id " + id + " not found")
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

    private verifyIpHashOwnership(ip: string, ipHash: string) {
        // Recompute
        const hmac = crypto.createHmac(process.env.algorithm!, process.env.SECRET!);
        hmac.update(ip);
        const computedHash = hmac.digest('hex');

        // Secure comparison
        const isValid = crypto.timingSafeEqual(
        Buffer.from(ipHash, 'hex'),
        Buffer.from(computedHash, 'hex')
        );

        return isValid
    }
}

export default new CountServices()