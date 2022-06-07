import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { CourseOnTermListRelationFilter } from "../inputs/CourseOnTermListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { ProfessorRelationFilter } from "../inputs/ProfessorRelationFilter";
import { SchoolRelationFilter } from "../inputs/SchoolRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
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

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  IsOfficial?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  Term?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  Code?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  Title?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => SchoolRelationFilter, {
    nullable: true
  })
  FK_School?: SchoolRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  FK_SchoolID?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => ProfessorRelationFilter, {
    nullable: true
  })
  FK_Professor?: ProfessorRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  FK_ProfessorID?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermListRelationFilter, {
    nullable: true
  })
  FK_TermsOnCourse?: CourseOnTermListRelationFilter | undefined;
}
