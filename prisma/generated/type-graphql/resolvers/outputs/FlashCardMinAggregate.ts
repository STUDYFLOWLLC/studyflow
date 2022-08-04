import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("FlashcardMinAggregate", {
  isAbstract: true
})
export class FlashcardMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FlashcardID!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  DeletedTime!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FK_FlashcardStackID!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  Position!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Front!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FrontImageUrl!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Back!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  BackImageUrl!: string | null;
}
