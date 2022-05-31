import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FlowTagOnFlowListRelationFilter } from "../inputs/FlowTagOnFlowListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("FlowTagWhereInput", {
  isAbstract: true
})
export class FlowTagWhereInput {
  @TypeGraphQL.Field(_type => [FlowTagWhereInput], {
    nullable: true
  })
  AND?: FlowTagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowTagWhereInput], {
    nullable: true
  })
  OR?: FlowTagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowTagWhereInput], {
    nullable: true
  })
  NOT?: FlowTagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  FlowTagID?: IntFilter | undefined;

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
  FK_Flows?: FlowTagOnFlowListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  Public?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  Name?: StringFilter | undefined;
}
