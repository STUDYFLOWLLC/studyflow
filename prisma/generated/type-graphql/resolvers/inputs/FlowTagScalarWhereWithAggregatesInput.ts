import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("FlowTagScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class FlowTagScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [FlowTagScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: FlowTagScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowTagScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: FlowTagScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowTagScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: FlowTagScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  FlowTagID?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  CreatedTime?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  FK_UserID?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  Public?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  Name?: StringWithAggregatesFilter | undefined;
}
