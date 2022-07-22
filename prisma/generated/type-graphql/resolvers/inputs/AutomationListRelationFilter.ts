import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AutomationWhereInput } from "../inputs/AutomationWhereInput";

@TypeGraphQL.InputType("AutomationListRelationFilter", {
  isAbstract: true
})
export class AutomationListRelationFilter {
  @TypeGraphQL.Field(_type => AutomationWhereInput, {
    nullable: true
  })
  every?: AutomationWhereInput | undefined;

  @TypeGraphQL.Field(_type => AutomationWhereInput, {
    nullable: true
  })
  some?: AutomationWhereInput | undefined;

  @TypeGraphQL.Field(_type => AutomationWhereInput, {
    nullable: true
  })
  none?: AutomationWhereInput | undefined;
}
