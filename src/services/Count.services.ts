import { ICount, ICountError } from "@interfaces/count";
import { HTTP_STATUS_CODES } from "@lib/constants/httpStatus"
import fs from 'fs'
import { UUID } from 'crypto';
import { prisma } from "db/prisma";
export class CountServices {
    
    async getCount(ipAddress: string): Promise<ICount | ICountError> {

        prisma.count.findUnique({
            where 
        })
        

                return {
            id: 1,
            count: 1
        }
    }

    async updateCount(ipAddress: string): Promise<ICount | ICountError> {
        fs.writeFileSync('count.txt', this.getGlobalCount.toString())

        return {
            id: 1,
            count: 1
        }
    }

    private getGlobalCount(): number {
        return Number(fs.readFileSync('count.txt'));
    }
}

export default new CountServices()