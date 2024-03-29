import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("FlashcardWhereUniqueInput", {
  isAbstract: true
})
export class FlashcardWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FlashcardID?: string | undefined;
}
