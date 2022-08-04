import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("FlashcardStackWhereUniqueInput", {
  isAbstract: true
})
export class FlashcardStackWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FlashcardStackID?: string | undefined;
}
