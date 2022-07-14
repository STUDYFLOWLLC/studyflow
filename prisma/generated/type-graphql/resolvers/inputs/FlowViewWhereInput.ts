import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FlowRelationFilter } from "../inputs/FlowRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("FlowViewWhereInput", {
  isAbstract: true
})
export class FlowViewWhereInput {
  @TypeGraphQL.Field(_type => [FlowViewWhereInput], {
    nullable: true
  })
  AND?: FlowViewWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowViewWhereInput], {
    nullable: true
  })
  OR?: FlowViewWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowViewWhereInput], {
    nullable: true
  })
  NOT?: FlowViewWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  FlowViewID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  CreatedTime?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => FlowRelationFilter, {
    nullable: true
  })
  FK_Flow?: FlowRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  FK_FlowID?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  FK_User?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  FK_UserID?: IntNullableFilter | undefined;
}
