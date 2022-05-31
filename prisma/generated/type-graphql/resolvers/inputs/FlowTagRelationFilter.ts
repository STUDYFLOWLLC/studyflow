import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowTagWhereInput } from "../inputs/FlowTagWhereInput";

@TypeGraphQL.InputType("FlowTagRelationFilter", {
  isAbstract: true
})
export class FlowTagRelationFilter {
  @TypeGraphQL.Field(_type => FlowTagWhereInput, {
    nullable: true
  })
  is?: FlowTagWhereInput | undefined;

  @TypeGraphQL.Field(_type => FlowTagWhereInput, {
    nullable: true
  })
  isNot?: FlowTagWhereInput | undefined;
}
