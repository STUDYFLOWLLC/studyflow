import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("FlowTagOnFlowScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class FlowTagOnFlowScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [FlowTagOnFlowScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: FlowTagOnFlowScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowTagOnFlowScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: FlowTagOnFlowScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowTagOnFlowScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: FlowTagOnFlowScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  FlowTagOnFlowID?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  HOLDER?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  FK_FlowID?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  FK_FlowTagID?: IntNullableWithAggregatesFilter | undefined;
}
