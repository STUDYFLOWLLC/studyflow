import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowWhereInput } from "../inputs/FlowWhereInput";

@TypeGraphQL.InputType("FlowRelationFilter", {
  isAbstract: true
})
export class FlowRelationFilter {
  @TypeGraphQL.Field(_type => FlowWhereInput, {
    nullable: true
  })
  is?: FlowWhereInput | undefined;

  @TypeGraphQL.Field(_type => FlowWhereInput, {
    nullable: true
  })
  isNot?: FlowWhereInput | undefined;
}
