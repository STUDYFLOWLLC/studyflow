import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("FlashcardStackReviewCreateManyInput", {
  isAbstract: true
})
export class FlashcardStackReviewCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FlashcardStackReviewID?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  EndTime?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FK_FlashcardStackID?: string | undefined;
}
