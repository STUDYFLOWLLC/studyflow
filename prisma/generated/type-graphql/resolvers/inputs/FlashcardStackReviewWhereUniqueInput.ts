import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("FlashcardStackReviewWhereUniqueInput", {
  isAbstract: true
})
export class FlashcardStackReviewWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FlashcardStackReviewID?: string | undefined;
}
