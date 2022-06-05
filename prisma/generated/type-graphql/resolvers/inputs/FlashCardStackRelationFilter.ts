import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashCardStackWhereInput } from "../inputs/FlashCardStackWhereInput";

@TypeGraphQL.InputType("FlashCardStackRelationFilter", {
  isAbstract: true
})
export class FlashCardStackRelationFilter {
  @TypeGraphQL.Field(_type => FlashCardStackWhereInput, {
    nullable: true
  })
  is?: FlashCardStackWhereInput | undefined;

  @TypeGraphQL.Field(_type => FlashCardStackWhereInput, {
    nullable: true
  })
  isNot?: FlashCardStackWhereInput | undefined;
}
