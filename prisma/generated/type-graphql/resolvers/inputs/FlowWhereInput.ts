import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumVisibilityNullableFilter } from "../inputs/EnumVisibilityNullableFilter";
import { FlashCardStackListRelationFilter } from "../inputs/FlashCardStackListRelationFilter";
import { FlowTagOnFlowListRelationFilter } from "../inputs/FlowTagOnFlowListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("FlowWhereInput", {
  isAbstract: true
})
export class FlowWhereInput {
  @TypeGraphQL.Field(_type => [FlowWhereInput], {
    nullable: true
  })
  AND?: FlowWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowWhereInput], {
    nullable: true
  })
  OR?: FlowWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowWhereInput], {
    nullable: true
  })
  NOT?: FlowWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  FlowID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  CreatedTime?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  FK_User?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  FK_UserID?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => FlowTagOnFlowListRelationFilter, {
    nullable: true
  })
  FK_Tags?: FlowTagOnFlowListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => FlashCardStackListRelationFilter, {
    nullable: true
  })
  FK_FlashCardStacks?: FlashCardStackListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  Title?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  Body?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumVisibilityNullableFilter, {
    nullable: true
  })
  Visibility?: EnumVisibilityNullableFilter | undefined;
}