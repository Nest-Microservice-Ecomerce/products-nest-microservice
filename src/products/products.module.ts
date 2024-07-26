import { Module } from '@nestjs/common';
import { ProductsController } from './01-presentation/products.controller';
import { ProductsService } from './03-core/application/products.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
