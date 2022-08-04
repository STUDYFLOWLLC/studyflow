import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AutomationLogWhereInput } from "../inputs/AutomationLogWhereInput";

@TypeGraphQL.InputType("AutomationLogListRelationFilter", {
  isAbstract: true
})
export class AutomationLogListRelationFilter {
  @TypeGraphQL.Field(_type => AutomationLogWhereInput, {
    nullable: true
  })
  every?: AutomationLogWhereInput | undefined;

  @TypeGraphQL.Field(_type => AutomationLogWhereInput, {
    nullable: true
  })
  some?: AutomationLogWhereInput | undefined;

  @TypeGraphQL.Field(_type => AutomationLogWhereInput, {
    nullable: true
  })
  none?: AutomationLogWhereInput | undefined;
}
