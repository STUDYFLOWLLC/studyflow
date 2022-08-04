import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("FlashcardCreateManyFK_FlashcardStackInput", {
  isAbstract: true
})
export class FlashcardCreateManyFK_FlashcardStackInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FlashcardID?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  DeletedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  Position!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Front?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FrontImageUrl?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Back?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  BackImageUrl?: string | undefined;
}
