import express, { Application } from 'express';
import dotenv from 'dotenv';
import connectDB from './config/database';
import userRoutes from './routes/userRoutes';

dotenv.config();

class Server {
  private app: Application;
  private port: number;
  private hostname: string;

  constructor() {
    this.app = express();
    this.port = Number(process.env.PORT) || 8801;
    this.hostname = process.env.HOST || '0.0.0.0';

    this.initializeMiddlewares();
    this.initializeRoutes();
    this.connectDB();
  }

  private initializeMiddlewares(): void {
    this.app.use(express.json());
  }

  private initializeRoutes(): void {
    this.app.use('/api/users', userRoutes);
  }

  private connectDB(): void {
    connectDB();
  }

  public listen(): void {
    this.app.listen(this.port, this.hostname, () => {
      console.log(`Server running on http://${this.hostname}:${this.port}`);
    });
  }
}

export default Server;
