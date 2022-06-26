import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashCardStackWhereInput } from "../inputs/FlashCardStackWhereInput";

@TypeGraphQL.InputType("FlashCardStackListRelationFilter", {
  isAbstract: true
})
export class FlashCardStackListRelationFilter {
  @TypeGraphQL.Field(_type => FlashCardStackWhereInput, {
    nullable: true
  })
  every?: FlashCardStackWhereInput | undefined;

  @TypeGraphQL.Field(_type => FlashCardStackWhereInput, {
    nullable: true
  })
  some?: FlashCardStackWhereInput | undefined;

  @TypeGraphQL.Field(_type => FlashCardStackWhereInput, {
    nullable: true
  })
  none?: FlashCardStackWhereInput | undefined;
}
