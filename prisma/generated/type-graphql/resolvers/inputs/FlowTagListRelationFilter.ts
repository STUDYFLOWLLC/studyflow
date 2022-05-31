import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowTagWhereInput } from "../inputs/FlowTagWhereInput";

@TypeGraphQL.InputType("FlowTagListRelationFilter", {
  isAbstract: true
})
export class FlowTagListRelationFilter {
  @TypeGraphQL.Field(_type => FlowTagWhereInput, {
    nullable: true
  })
  every?: FlowTagWhereInput | undefined;

  @TypeGraphQL.Field(_type => FlowTagWhereInput, {
    nullable: true
  })
  some?: FlowTagWhereInput | undefined;

  @TypeGraphQL.Field(_type => FlowTagWhereInput, {
    nullable: true
  })
  none?: FlowTagWhereInput | undefined;
}
