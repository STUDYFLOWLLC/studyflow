import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermAutomationListRelationFilter } from "../inputs/CourseOnTermAutomationListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("AutomationWhereInput", {
  isAbstract: true
})
export class AutomationWhereInput {
  @TypeGraphQL.Field(_type => [AutomationWhereInput], {
    nullable: true
  })
  AND?: AutomationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AutomationWhereInput], {
    nullable: true
  })
  OR?: AutomationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AutomationWhereInput], {
    nullable: true
  })
  NOT?: AutomationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  AutomationID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  RefreshToken?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationListRelationFilter, {
    nullable: true
  })
  CourseOnTermAutomations?: CourseOnTermAutomationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  FK_User?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  FK_UserID?: IntFilter | undefined;
}
