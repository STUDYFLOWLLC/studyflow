import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfessorCreateNestedOneWithoutFK_CoursesInput } from "../inputs/ProfessorCreateNestedOneWithoutFK_CoursesInput";
import { SchoolCreateNestedOneWithoutFK_CourseInput } from "../inputs/SchoolCreateNestedOneWithoutFK_CourseInput";

@TypeGraphQL.InputType("CourseCreateWithoutFK_TermsOnCourseInput", {
  isAbstract: true
})
export class CourseCreateWithoutFK_TermsOnCourseInput {
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
}
