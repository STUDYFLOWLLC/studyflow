import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermCreateNestedManyWithoutFK_CourseInput } from "../inputs/CourseOnTermCreateNestedManyWithoutFK_CourseInput";
import { ProfessorCreateNestedOneWithoutFK_CoursesInput } from "../inputs/ProfessorCreateNestedOneWithoutFK_CoursesInput";
import { SchoolCreateNestedOneWithoutFK_CourseInput } from "../inputs/SchoolCreateNestedOneWithoutFK_CourseInput";

@TypeGraphQL.InputType("CourseCreateInput", {
  isAbstract: true
})
export class CourseCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  IsOfficial?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Term?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Code?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Title?: string | undefined;

  @TypeGraphQL.Field(_type => SchoolCreateNestedOneWithoutFK_CourseInput, {
    nullable: true
  })
  FK_School?: SchoolCreateNestedOneWithoutFK_CourseInput | undefined;

  @TypeGraphQL.Field(_type => ProfessorCreateNestedOneWithoutFK_CoursesInput, {
    nullable: true
  })
  FK_Professor?: ProfessorCreateNestedOneWithoutFK_CoursesInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermCreateNestedManyWithoutFK_CourseInput, {
    nullable: true
  })
  CourseOnTerm?: CourseOnTermCreateNestedManyWithoutFK_CourseInput | undefined;
}
