import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("FlowViewScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class FlowViewScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [FlowViewScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: FlowViewScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowViewScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: FlowViewScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowViewScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: FlowViewScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  FlowViewID?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  CreatedTime?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  FK_FlowID?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  FK_UserID?: IntNullableWithAggregatesFilter | undefined;
}
