import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowViewWhereInput } from "../inputs/FlowViewWhereInput";

@TypeGraphQL.InputType("FlowViewListRelationFilter", {
  isAbstract: true
})
export class FlowViewListRelationFilter {
  @TypeGraphQL.Field(_type => FlowViewWhereInput, {
    nullable: true
  })
  every?: FlowViewWhereInput | undefined;

  @TypeGraphQL.Field(_type => FlowViewWhereInput, {
    nullable: true
  })
  some?: FlowViewWhereInput | undefined;

  @TypeGraphQL.Field(_type => FlowViewWhereInput, {
    nullable: true
  })
  none?: FlowViewWhereInput | undefined;
}
