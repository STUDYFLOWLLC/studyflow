import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RepetitionWhereInput } from "../inputs/RepetitionWhereInput";

@TypeGraphQL.InputType("RepetitionRelationFilter", {
  isAbstract: true
})
export class RepetitionRelationFilter {
  @TypeGraphQL.Field(_type => RepetitionWhereInput, {
    nullable: true
  })
  is?: RepetitionWhereInput | undefined;

  @TypeGraphQL.Field(_type => RepetitionWhereInput, {
    nullable: true
  })
  isNot?: RepetitionWhereInput | undefined;
}
