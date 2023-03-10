import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import typeOrmConfig from './config/typeOrm.config';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { CommentModule } from './comment/comment.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeOrmConfig],
      expandVariables: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: typeOrmConfig,
    }),
    PostModule,
    UserModule,
    CommentModule,
    AdminModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
