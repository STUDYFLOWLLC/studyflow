import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateNestedOneWithoutFK_ProfessorsInput } from "../inputs/CourseCreateNestedOneWithoutFK_ProfessorsInput";
import { ProfessorCreateNestedOneWithoutFK_CoursesInput } from "../inputs/ProfessorCreateNestedOneWithoutFK_CoursesInput";

@TypeGraphQL.InputType("ProfessorsOnCoursesCreateInput", {
  isAbstract: true
})
export class ProfessorsOnCoursesCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => CourseCreateNestedOneWithoutFK_ProfessorsInput, {
    nullable: false
  })
  FK_Course!: CourseCreateNestedOneWithoutFK_ProfessorsInput;

  @TypeGraphQL.Field(_type => ProfessorCreateNestedOneWithoutFK_CoursesInput, {
    nullable: false
  })
  FK_Professor!: ProfessorCreateNestedOneWithoutFK_CoursesInput;
}
