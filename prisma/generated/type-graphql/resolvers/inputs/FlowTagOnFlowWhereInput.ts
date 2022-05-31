import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowRelationFilter } from "../inputs/FlowRelationFilter";
import { FlowTagRelationFilter } from "../inputs/FlowTagRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("FlowTagOnFlowWhereInput", {
  isAbstract: true
})
export class FlowTagOnFlowWhereInput {
  @TypeGraphQL.Field(_type => [FlowTagOnFlowWhereInput], {
    nullable: true
  })
  AND?: FlowTagOnFlowWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowTagOnFlowWhereInput], {
    nullable: true
  })
  OR?: FlowTagOnFlowWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowTagOnFlowWhereInput], {
    nullable: true
  })
  NOT?: FlowTagOnFlowWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  FlowTagOnFlowID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  HOLDER?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => FlowRelationFilter, {
    nullable: true
  })
  FK_Flow?: FlowRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  FK_FlowID?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => FlowTagRelationFilter, {
    nullable: true
  })
  FK_FlowTag?: FlowTagRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  FK_FlowTagID?: IntNullableFilter | undefined;
}
