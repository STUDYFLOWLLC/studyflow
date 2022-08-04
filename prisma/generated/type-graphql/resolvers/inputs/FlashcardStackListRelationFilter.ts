import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardStackWhereInput } from "../inputs/FlashcardStackWhereInput";

@TypeGraphQL.InputType("FlashcardStackListRelationFilter", {
  isAbstract: true
})
export class FlashcardStackListRelationFilter {
  @TypeGraphQL.Field(_type => FlashcardStackWhereInput, {
    nullable: true
  })
  every?: FlashcardStackWhereInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackWhereInput, {
    nullable: true
  })
  some?: FlashcardStackWhereInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackWhereInput, {
    nullable: true
  })
  none?: FlashcardStackWhereInput | undefined;
}
