import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';
import { Comment } from './comment.entity';
import { UserModule } from '../user/user.module';
import { PostModule } from '../post/post.module';

@Module({
  imports: [TypeOrmModule.forFeature([Comment]), UserModule, PostModule],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}
