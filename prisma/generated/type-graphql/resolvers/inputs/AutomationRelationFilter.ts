import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AutomationWhereInput } from "../inputs/AutomationWhereInput";

@TypeGraphQL.InputType("AutomationRelationFilter", {
  isAbstract: true
})
export class AutomationRelationFilter {
  @TypeGraphQL.Field(_type => AutomationWhereInput, {
    nullable: true
  })
  is?: AutomationWhereInput | undefined;

  @TypeGraphQL.Field(_type => AutomationWhereInput, {
    nullable: true
  })
  isNot?: AutomationWhereInput | undefined;
}
