import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { CourseOnUserListRelationFilter } from "../inputs/CourseOnUserListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { ProfessorListRelationFilter } from "../inputs/ProfessorListRelationFilter";
import { SchoolRelationFilter } from "../inputs/SchoolRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("CourseWhereInput", {
  isAbstract: true
})
export class CourseWhereInput {
  @TypeGraphQL.Field(_type => [CourseWhereInput], {
    nullable: true
  })
  AND?: CourseWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseWhereInput], {
    nullable: true
  })
  OR?: CourseWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseWhereInput], {
    nullable: true
  })
  NOT?: CourseWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  CourseID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  CreatedTime?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => SchoolRelationFilter, {
    nullable: true
  })
  FK_School?: SchoolRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  FK_SchoolID?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => ProfessorListRelationFilter, {
    nullable: true
  })
  FK_Professors?: ProfessorListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CourseOnUserListRelationFilter, {
    nullable: true
  })
  FK_Users?: CourseOnUserListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  IsOfficial?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  Code?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  Title?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  Term?: StringNullableFilter | undefined;
}
