import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardWhereInput } from "../inputs/FlashcardWhereInput";

@TypeGraphQL.InputType("FlashcardListRelationFilter", {
  isAbstract: true
})
export class FlashcardListRelationFilter {
  @TypeGraphQL.Field(_type => FlashcardWhereInput, {
    nullable: true
  })
  every?: FlashcardWhereInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardWhereInput, {
    nullable: true
  })
  some?: FlashcardWhereInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardWhereInput, {
    nullable: true
  })
  none?: FlashcardWhereInput | undefined;
}
