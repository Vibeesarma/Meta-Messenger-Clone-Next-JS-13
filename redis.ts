import { Redis } from "ioredis";

// if you put ! end of env values it's help to your type check error in enviroment variables
const redis = new Redis(process.env.REDIS_URL!);
export default redis;
