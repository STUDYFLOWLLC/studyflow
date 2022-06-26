import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowWhereInput } from "../inputs/FlowWhereInput";

@TypeGraphQL.InputType("FlowListRelationFilter", {
  isAbstract: true
})
export class FlowListRelationFilter {
  @TypeGraphQL.Field(_type => FlowWhereInput, {
    nullable: true
  })
  every?: FlowWhereInput | undefined;

  @TypeGraphQL.Field(_type => FlowWhereInput, {
    nullable: true
  })
  some?: FlowWhereInput | undefined;

  @TypeGraphQL.Field(_type => FlowWhereInput, {
    nullable: true
  })
  none?: FlowWhereInput | undefined;
}
