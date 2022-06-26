import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TermWhereInput } from "../inputs/TermWhereInput";

@TypeGraphQL.InputType("TermRelationFilter", {
  isAbstract: true
})
export class TermRelationFilter {
  @TypeGraphQL.Field(_type => TermWhereInput, {
    nullable: true
  })
  is?: TermWhereInput | undefined;

  @TypeGraphQL.Field(_type => TermWhereInput, {
    nullable: true
  })
  isNot?: TermWhereInput | undefined;
}
