import { Module, forwardRef } from '@nestjs/common'
import { ManifestModule } from '../manifest/manifest.module'
import { EntityLoaderService } from './services/entity-loader.service'
import { EntityService } from './services/entity.service'
import { RelationshipService } from './services/relationship.service'
import { AuthModule } from '../auth/auth.module'
import { ColumnService } from './services/column.service'

@Module({
  imports: [forwardRef(() => ManifestModule), forwardRef(() => AuthModule)],
  providers: [
    EntityLoaderService,
    EntityService,
    RelationshipService,
    ColumnService
  ],
  exports: [EntityLoaderService, EntityService, RelationshipService]
})
export class EntityModule {}
