import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseRelationFilter } from "../inputs/CourseRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("CourseOnUserWhereInput", {
  isAbstract: true
})
export class CourseOnUserWhereInput {
  @TypeGraphQL.Field(_type => [CourseOnUserWhereInput], {
    nullable: true
  })
  AND?: CourseOnUserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnUserWhereInput], {
    nullable: true
  })
  OR?: CourseOnUserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnUserWhereInput], {
    nullable: true
  })
  NOT?: CourseOnUserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  CourseOnUserID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  HOLDER?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  FK_User?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  FK_UserID?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => CourseRelationFilter, {
    nullable: true
  })
  FK_Course?: CourseRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  FK_CourseID?: IntNullableFilter | undefined;
}
