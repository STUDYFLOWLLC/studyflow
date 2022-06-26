import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TermWhereInput } from "../inputs/TermWhereInput";

@TypeGraphQL.InputType("TermListRelationFilter", {
  isAbstract: true
})
export class TermListRelationFilter {
  @TypeGraphQL.Field(_type => TermWhereInput, {
    nullable: true
  })
  every?: TermWhereInput | undefined;

  @TypeGraphQL.Field(_type => TermWhereInput, {
    nullable: true
  })
  some?: TermWhereInput | undefined;

  @TypeGraphQL.Field(_type => TermWhereInput, {
    nullable: true
  })
  none?: TermWhereInput | undefined;
}
