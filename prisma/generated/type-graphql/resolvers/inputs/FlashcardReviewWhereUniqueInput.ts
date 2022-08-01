import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("FlashcardReviewWhereUniqueInput", {
  isAbstract: true
})
export class FlashcardReviewWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FlashcardReviewID?: string | undefined;
}
