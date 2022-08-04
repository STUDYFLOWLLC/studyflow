import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserOnStudyGroupListRelationFilter } from "../inputs/UserOnStudyGroupListRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("StudyGroupWhereInput", {
  isAbstract: true
})
export class StudyGroupWhereInput {
  @TypeGraphQL.Field(_type => [StudyGroupWhereInput], {
    nullable: true
  })
  AND?: StudyGroupWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudyGroupWhereInput], {
    nullable: true
  })
  OR?: StudyGroupWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudyGroupWhereInput], {
    nullable: true
  })
  NOT?: StudyGroupWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  StudyGroupID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  Name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  FK_User?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  FK_UserID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => UserOnStudyGroupListRelationFilter, {
    nullable: true
  })
  FK_UserOnStudyGroup?: UserOnStudyGroupListRelationFilter | undefined;
}
