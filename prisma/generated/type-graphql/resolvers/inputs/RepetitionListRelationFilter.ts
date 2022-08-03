import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RepetitionWhereInput } from "../inputs/RepetitionWhereInput";

@TypeGraphQL.InputType("RepetitionListRelationFilter", {
  isAbstract: true
})
export class RepetitionListRelationFilter {
  @TypeGraphQL.Field(_type => RepetitionWhereInput, {
    nullable: true
  })
  every?: RepetitionWhereInput | undefined;

  @TypeGraphQL.Field(_type => RepetitionWhereInput, {
    nullable: true
  })
  some?: RepetitionWhereInput | undefined;

  @TypeGraphQL.Field(_type => RepetitionWhereInput, {
    nullable: true
  })
  none?: RepetitionWhereInput | undefined;
}
