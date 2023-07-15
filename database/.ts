// import { Module } from '@nestjs/common';
// import { ConfigModule } from '@nestjs/config';
// import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
// import * as mongoose from 'mongoose';

// const connectToDatabase = async (): Promise<MongooseModuleOptions> => {
//   await mongoose.connect(process.env.DATABASE_URL);

//   const connection = mongoose.connection;

//   connection.on('error', (error) => {
//     console.error('Erro na conexão com o banco de dados:', error);
//   });

//   connection.once('connected', () => {
//     console.log('Database connection successful!!');
//   });

//   return {
//     uri: process.env.DATABASE_URL
//   };
// };

// @Module({
//   imports: [
//     ConfigModule.forRoot(),
//     MongooseModule.forRoot(connectToDatabase),
//   ],
//   exports: [MongooseModule]
// })
// export class DataBaseModule { }
