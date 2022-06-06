import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermListRelationFilter } from "../inputs/CourseOnTermListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumTermTypeFilter } from "../inputs/EnumTermTypeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { SchoolRelationFilter } from "../inputs/SchoolRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("TermWhereInput", {
  isAbstract: true
})
export class TermWhereInput {
  @TypeGraphQL.Field(_type => [TermWhereInput], {
    nullable: true
  })
  AND?: TermWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TermWhereInput], {
    nullable: true
  })
  OR?: TermWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TermWhereInput], {
    nullable: true
  })
  NOT?: TermWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  TermID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  CreatedTime?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => EnumTermTypeFilter, {
    nullable: true
  })
  TermType?: EnumTermTypeFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  TermName?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  TermStartDate?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  TermEndDate?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  FK_User?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  FK_UserID?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => SchoolRelationFilter, {
    nullable: true
  })
  FK_School?: SchoolRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  FK_SchoolID?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermListRelationFilter, {
    nullable: true
  })
  FK_CourseOnTerm?: CourseOnTermListRelationFilter | undefined;
}
