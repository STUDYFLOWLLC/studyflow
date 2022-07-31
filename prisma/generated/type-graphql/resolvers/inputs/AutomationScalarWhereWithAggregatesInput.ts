import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("AutomationScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class AutomationScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [AutomationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: AutomationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AutomationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: AutomationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AutomationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: AutomationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  AutomationID?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  RefreshToken?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  FK_UserID?: IntWithAggregatesFilter | undefined;
}
